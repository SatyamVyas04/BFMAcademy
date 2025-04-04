import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { ThirdwebProvider } from 'thirdweb/react'
import { GoogleAnalytics } from '@next/third-parties/google'

const mont = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://bfmacademy.in'),
	title: 'BFM Academy',
	description:
		'BFM Academy is where education meets innovation. Earn crypto, own your knowledge with NFT credentials and be part of the next-gen learning revolution.',
	keywords: [
		'blockchain',
		'education',
		'NFT credentials',
		'crypto learning',
		'web3 academy',
	],
	authors: [{ name: 'BFM Academy Team' }],
	openGraph: {
		title: 'BFM Academy',
		description: 'Earn crypto while learning with NFT credentials',
		url: 'https://bfmacademy.in',
		siteName: 'BFM Academy',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'BFM Academy - Web3 Learning Platform',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'BFM Academy',
		description: 'Learn blockchain and Web3 technologies with BFM Academy',
		images: ['/twitter-image.png'],
	},
	icons: {
		icon: [
			{
				url: '/icon-blue.png',
				href: '/icon-blue.png',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<GoogleAnalytics gaId="G-GTBZG5VLFB" />
			<body className={mont.className}>
				<script
					id="bp-tg-script"
					src="https://cdn.botpenguin.com/telegram-widget.js"
				>
					cc2b3922-237c-44a6-8327-67da09aca36c
				</script>
				<ThirdwebProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</ThirdwebProvider>
			</body>
		</html>
	)
}
