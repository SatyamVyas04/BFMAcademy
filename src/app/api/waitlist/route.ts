import { NextResponse } from 'next/server'

const API_BASE_URL = 'https://bfma-be.onrender.com/user'

// Helper function to check for duplicates
async function checkDuplicate(
	endpoint: string,
	paramName: string,
	value: string,
	errorMessage: string,
) {
	const url = new URL(`${API_BASE_URL}${endpoint}`)
	url.searchParams.append(paramName, value)

	const response = await fetch(url.toString(), {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		// Assuming 400 Bad Request indicates a duplicate based on backend code
		if (response.status === 400) {
			const errorData = await response.json().catch(() => ({}))
			return NextResponse.json(
				{ error: errorData.message || errorMessage },
				{ status: 400 },
			)
		}
		// Handle other potential errors during the check
		return NextResponse.json(
			{
				error: `Failed to check ${paramName}: ${response.status} ${response.statusText}`,
			},
			{ status: response.status },
		)
	}

	// If response is ok (200), it means no duplicate found
	return null
}

export async function POST(req: Request) {
	try {
		const formData = await req.json()

		// Format the data correctly
		const submissionData = {
			fullname: formData.fullname,
			email: formData.email,
			phone_number: formData.phone_number,
			linkedin: formData.linkedin || formData.socialLinks?.linkedin,
			telegramid: formData.telegramid, // Renamed from telegram
			occupation: formData.occupation.toLowerCase(),
			company_name: formData.company_name || formData.instituteName,
			company_url: formData.company_url,
			wallet_id: formData.wallet_id,
		}

		// 1. Check for duplicate phone number
		const phoneCheckResponse = await checkDuplicate(
			'/isPhoneNumber',
			'phone_number',
			submissionData.phone_number,
			'Phone number already exists.',
		)
		if (phoneCheckResponse) {
			return phoneCheckResponse
		}

		// 2. Check for duplicate email
		const emailCheckResponse = await checkDuplicate(
			'/isEmail',
			'email',
			submissionData.email,
			'Email already exists.',
		)
		if (emailCheckResponse) {
			return emailCheckResponse
		}

		// 3. Proceed with form submission if checks pass
		// Optional: Remove undefined fields if the backend expects them to be absent
		Object.keys(submissionData).forEach(
			(key) =>
				submissionData[key as keyof typeof submissionData] === undefined &&
				delete submissionData[key as keyof typeof submissionData],
		)

		// Send data to the create user endpoint
		const response = await fetch(`${API_BASE_URL}/`, {
			method: 'POST',
			body: JSON.stringify(submissionData),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const result = await response.json().catch(() => null) // Try parsing JSON regardless of status

		if (!response.ok) {
			return NextResponse.json(
				{
					error: result?.data,
				},
				{ status: response.status },
			)
		}

		return NextResponse.json({
			message: 'Form submitted successfully',
			data: result,
		})
	} catch (error) {
		console.error('API Route Error:', error) // Log the actual error
		return NextResponse.json(
			{
				error:
					error instanceof Error ? error.message : 'An unknown error occurred.',
			},
			{ status: 500 },
		)
	}
}
