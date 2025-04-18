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
		})

		const data = await response.json().catch(() => ({}))

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

		return NextResponse.json(
			{ message: 'No duplicate found.', data },
			{ status: 200 },
		)
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
	const wallet = searchParams.get('wallet')

	if (!wallet) {
		return new Response(
			JSON.stringify({ error: 'Wallet parameter is missing.' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
	}

	const walletCheckResponse = await checkDuplicate(
		'/isWallet',
		'wallet_id',
		wallet,
		'Wallet already exists.',
	)

	if (walletCheckResponse) {
		return walletCheckResponse
	}

	return new Response(JSON.stringify({ message: 'Wallet is unique.' }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
