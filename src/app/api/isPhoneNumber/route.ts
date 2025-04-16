import { checkDuplicate } from '../waitlist/route'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const phoneNumber = searchParams.get('phone_number')

	if (!phoneNumber) {
		return new Response(
			JSON.stringify({ error: 'Phone number parameter is missing.' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
	}

	// Assuming checkDuplicate can handle different field types and endpoints
	const phoneCheckResponse = await checkDuplicate(
		'/isPhoneNumber', // Or the relevant endpoint checkDuplicate uses internally
		'phone_number',
		phoneNumber,
		'Phone number already exists.',
	)

	if (phoneCheckResponse) {
		return phoneCheckResponse
	}

	return new Response(JSON.stringify({ message: 'Phone number is unique.' }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
