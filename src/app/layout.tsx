import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const mont = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'BFM Academy',
	description: 'where web3 wizards are made.',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/page/logo-light.png',
				href: '/page/logo-light.png',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/page/logo-dark.png',
				href: '/page/logo-dark.png',
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
			<body className={`${mont.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
