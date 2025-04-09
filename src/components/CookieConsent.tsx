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

const CookieConsent = () => {
	// State to track if consent has been given
	const [showConsent, setShowConsent] = useState(false)
	const [_, setConsentGiven] = useState(false)

	useEffect(() => {
		// Check if consent has already been stored
		const storedConsent = localStorage.getItem('cookieConsent')

		if (storedConsent === null) {
			// If no consent stored, show the consent dialog after a short delay
			const timer = setTimeout(() => {
				setShowConsent(true)
			}, 1000)

			return () => clearTimeout(timer)
		} else {
			setConsentGiven(storedConsent === 'accepted')
		}
	}, [])

	const handleAccept = () => {
		localStorage.setItem('cookieConsent', 'accepted')
		setConsentGiven(true)
		setShowConsent(false)
	}

	const handleDecline = () => {
		setConsentGiven(false)
		setShowConsent(false)
	}

	if (!showConsent) return null

	return (
		<div className="fixed bottom-4 left-4 z-50 max-w-sm">
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

export default CookieConsent
