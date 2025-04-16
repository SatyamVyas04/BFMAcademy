import { checkDuplicate } from '../waitlist/route'
import { NextRequest } from 'next/server'

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
