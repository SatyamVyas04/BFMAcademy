'use client'

import { useState, useEffect } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getCookie, setCookie } from 'cookies-next'

export default function CookieConsent() {
	// State to track if consent has been given and if banner should show
	const [showConsent, setShowConsent] = useState(false)

	useEffect(() => {
		// Check if consent has already been stored
		const storedConsent = getCookie('cookieConsent')

		if (!storedConsent) {
			// If no consent stored, show the consent dialog after a short delay
			const timer = setTimeout(() => {
				setShowConsent(true)
			}, 1000)

			return () => clearTimeout(timer)
		}
	}, [])

	const handleAccept = () => {
		// Set the cookie with a long expiration (1 year)
		setCookie('cookieConsent', 'accepted', {
			maxAge: 60 * 60 * 24 * 365,
			path: '/',
			sameSite: 'strict',
		})
		setShowConsent(false)
	}

	const handleDecline = () => {
		// Set a cookie to remember that the user declined
		setCookie('cookieConsent', 'declined', {
			maxAge: 60 * 60 * 24 * 30, // 30 days
			path: '/',
			sameSite: 'strict',
		})
		setShowConsent(false)
	}

	// Don't render anything if consent shouldn't be shown
	if (!showConsent) return null

	return (
		<div className="fixed bottom-2 left-2 z-50 max-w-xs">
			<Card className="bg-card/75 shadow-lg backdrop-blur-md">
				<CardHeader className="pb-2">
					<CardTitle className="text-lg text-brandblue">
						Cookie Policy
					</CardTitle>
					<CardDescription className="text-xs">
						We use cookies to enhance your browsing experience
					</CardDescription>
				</CardHeader>
				<CardContent className="text-sm">
					<p>
						By accepting, you agree to our use of cookies for analytics,
						personalization, and ads.
					</p>
					<p className="mt-2">
						<Link
							href="/terms-and-conditions"
							target="_blank"
							className="text-brandblue hover:underline"
						>
							Read our Terms & Conditions
						</Link>
					</p>
					<p className="mt-2">
						<Link
							href="/privacy-policy"
							target="_blank"
							className="text-brandblue hover:underline"
						>
							Read our Privacy Policy
						</Link>
					</p>
				</CardContent>
				<CardFooter className="flex justify-end gap-2">
					<Button
						onClick={handleAccept}
						className="bg-brandblue text-white hover:bg-brandblue/90"
					>
						Accept
					</Button>
					<Button variant="outline" onClick={handleDecline}>
						Decline
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
