import { NextResponse } from 'next/server'

const API_BASE_URL = 'https://bfma-be.onrender.com/user'

// Helper function to check for duplicates
async function checkDuplicate(
	endpoint: string,
	paramName: string,
	value: string,
	errorMessage: string,
) {
	console.log(
		`[checkDuplicate] Checking endpoint: ${endpoint}, param: ${paramName}, value: ${value}`,
	)
	const url = new URL(`${API_BASE_URL}${endpoint}`)
	url.searchParams.append(paramName, value)
	const requestUrl = url.toString()
	console.log(`[checkDuplicate] Fetching URL: ${requestUrl}`)

	try {
		const response = await fetch(requestUrl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		console.log(
			`[checkDuplicate] Response status for ${paramName}: ${response.status} ${response.statusText}`,
		)

		if (!response.ok) {
			console.log(`[checkDuplicate] Response not OK for ${paramName}.`)
			// Assuming 400 Bad Request indicates a duplicate based on backend code
			if (response.status === 400) {
				const errorData = await response.json().catch(() => ({}))
				console.log(
					`[checkDuplicate] Duplicate found for ${paramName}. Error data:`,
					errorData,
				)
				return NextResponse.json(
					{ error: errorData.message || errorMessage },
					{ status: 400 },
				)
			}
			// Handle other potential errors during the check
			console.log(
				`[checkDuplicate] Other error during check for ${paramName}. Status: ${response.status}`,
			)
			return NextResponse.json(
				{
					error: `Failed to check ${paramName}: ${response.status} ${response.statusText}`,
				},
				{ status: response.status },
			)
		}

		// If response is ok (200), it means no duplicate found
		console.log(`[checkDuplicate] No duplicate found for ${paramName}.`)
		return null
	} catch (error) {
		console.error(
			`[checkDuplicate] Error during fetch for ${paramName}:`,
			error,
		)
		return NextResponse.json(
			{
				error: `Error checking ${paramName}: ${
					error instanceof Error ? error.message : 'Unknown fetch error'
				}`,
			},
			{ status: 500 },
		)
	}
}

export async function POST(req: Request) {
	console.log('[POST] Received request')
	try {
		const formData = await req.json()
		console.log('[POST] Parsed formData:', formData)

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
		console.log('[POST] Formatted submissionData:', submissionData)

		// 1. Check for duplicate phone number
		console.log('[POST] Checking for duplicate phone number...')
		const phoneCheckResponse = await checkDuplicate(
			'/isPhoneNumber',
			'phone_number',
			submissionData.phone_number,
			'Phone number already exists.',
		)
		console.log('[POST] Phone check response:', phoneCheckResponse)
		if (phoneCheckResponse) {
			console.log('[POST] Phone number duplicate detected, returning response.')
			return phoneCheckResponse
		}
		console.log('[POST] Phone number check passed.')

		// 2. Check for duplicate email
		console.log('[POST] Checking for duplicate email...')
		const emailCheckResponse = await checkDuplicate(
			'/isEmail',
			'email',
			submissionData.email,
			'Email already exists.',
		)
		console.log('[POST] Email check response:', emailCheckResponse)
		if (emailCheckResponse) {
			console.log('[POST] Email duplicate detected, returning response.')
			return emailCheckResponse
		}
		console.log('[POST] Email check passed.')

		// 3. Proceed with form submission if checks pass
		console.log('[POST] Proceeding with form submission.')
		// Optional: Remove undefined fields if the backend expects them to be absent
		Object.keys(submissionData).forEach((key) => {
			if (submissionData[key as keyof typeof submissionData] === undefined) {
				console.log(`[POST] Deleting undefined key: ${key}`)
				delete submissionData[key as keyof typeof submissionData]
			}
		})
		console.log('[POST] Final submissionData after cleanup:', submissionData)

		// Send data to the create user endpoint
		const submitUrl = `${API_BASE_URL}/`
		console.log(`[POST] Sending POST request to: ${submitUrl}`)
		const response = await fetch(submitUrl, {
			method: 'POST',
			body: JSON.stringify(submissionData),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		console.log(
			`[POST] Submission response status: ${response.status} ${response.statusText}`,
		)

		const result = await response.json().catch((e) => {
			console.error('[POST] Error parsing submission response JSON:', e)
			return null // Try parsing JSON regardless of status
		})
		console.log('[POST] Submission response result:', result)

		if (!response.ok) {
			console.log('[POST] Submission response not OK.')
			return NextResponse.json(
				{
					error: result?.data || 'Submission failed', // Use result data if available
				},
				{ status: response.status },
			)
		}

		console.log('[POST] Form submitted successfully.')
		return NextResponse.json({
			message: 'Form submitted successfully',
			data: result,
		})
	} catch (error) {
		console.error('[POST] API Route Error:', error) // Log the actual error
		return NextResponse.json(
			{
				error:
					error instanceof Error ? error.message : 'An unknown error occurred.',
			},
			{ status: 500 },
		)
	}
}
