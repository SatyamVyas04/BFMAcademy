import { NextRequest, NextResponse } from 'next/server'
const API_BASE_URL = 'https://bfma-be.onrender.com/user'

async function checkDuplicate(
	endpoint: string,
	paramName: string,
	value: string,
	errorMessage: string,
) {
	const url = new URL(`${API_BASE_URL}${endpoint}`)
	url.searchParams.append(paramName, value)
	const requestUrl = url.toString()

	try {
		const response = await fetch(requestUrl, {
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
			return NextResponse.json(
				{
					error: `Failed to check ${paramName}: ${response.status} ${response.statusText}`,
				},
				{ status: response.status },
			)
		}

		// If response is ok (200), it means no duplicate found
		return null
	} catch (error) {
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
	const email = searchParams.get('email')

	if (!email) {
		return new Response(
			JSON.stringify({ error: 'Email parameter is missing.' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
	}

	const emailCheckResponse = await checkDuplicate(
		'/isEmail',
		'email',
		email,
		'Email already exists.',
	)

	if (emailCheckResponse) {
		return emailCheckResponse
	}

	return new Response(JSON.stringify({ message: 'Email is unique.' }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
