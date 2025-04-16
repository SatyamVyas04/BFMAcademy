import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { ThirdwebProvider } from 'thirdweb/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from 'sonner'

const mont = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://bfmacademy.in'),
	title: {
		default: 'BFM Academy',
		template: '%s | BFM Academy',
	},
	description:
		'BFM Academy is where education meets innovation. Earn crypto, own your knowledge with NFT credentials and be part of the next-gen learning revolution.',
	keywords: [
		'blockchain',
		'education',
		'NFT credentials',
		'crypto courses',
		'web3 courses',
		'learn blockchain',
		'learn web3',
		'web3 education',
		'blockchain courses',
		'crypto education',
		'crypto learning',
		'web3',
		'decentralized applications',
		'dApps',
		'smart contracts',
		'Solidity',
		'Ethereum',
		'Polygon',
		'metaverse',
		'DAO',
		'DeFi',
		'tokenomics',
		'cryptocurrency',
		'web3 development',
		'blockchain development',
		'NFT marketplace',
		'web3 community',
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
				<ThirdwebProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						disableTransitionOnChange
					>
						{children}
						<Toaster />
					</ThemeProvider>
				</ThirdwebProvider>
			</body>
		</html>
	)
}
