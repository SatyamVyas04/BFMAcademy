import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	try {
		const formData = await req.json()

		// Format the data correctly
		const submissionData = {
			fullname: formData.fullname,
			email: formData.email,
			phone_number: formData.phone_number,
			linkedin: formData.linkedin || formData.socialLinks?.linkedin,
			telegramid: formData.telegram || formData.socialLinks?.telegram, // Renamed from telegram
			occupation: formData.occupation.toLowerCase(),
			company_name: formData.company_name || formData.instituteName,
			company_url: formData.company_url,
			wallet_id: formData.wallet_id,
		}

		// Optional: Remove undefined fields if the backend expects them to be absent
		Object.keys(submissionData).forEach(
			(key) =>
				submissionData[key as keyof typeof submissionData] === undefined &&
				delete submissionData[key as keyof typeof submissionData],
		)

		// Simulate sending data to an external API
		const response = await fetch('http://localhost:4000/user/', {
			method: 'POST',
			body: JSON.stringify(submissionData),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			await response.json().catch(() => null)
			return NextResponse.json(
				{
					error: `Failed to submit form: ${response.status} ${response.statusText}`,
				},
				{ status: response.status },
			)
		}

		const result = await response.json()

		return NextResponse.json({
			message: 'Form submitted successfully',
			data: result,
		})
	} catch (error) {
		return NextResponse.json(
			{
				error:
					error instanceof Error ? error.message : 'An unknown error occurred.',
			},
			{ status: 500 },
		)
	}
}
