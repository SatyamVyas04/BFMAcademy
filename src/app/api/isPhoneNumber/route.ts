import { NextRequest, NextResponse } from 'next/server'
const API_BASE_URL = 'https://bfma-be.onrender.com/user'

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
