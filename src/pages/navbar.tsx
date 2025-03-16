'use client'
import Image from 'next/image'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { ConnectButton } from 'thirdweb/react'
import { client } from '../../actions/wallet'
import { useTheme } from 'next-themes'
import { Suspense, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	})

	useEffect(() => {
		if (typeof window === 'undefined') return

		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

export default function Navbar() {
	const theme = useTheme().theme

	const welcomeScreen = {
		title: 'BFM Academy',
		subtitle: 'where web3 wizards are made',
		img: {
			src: `${theme == 'dark' ? '/page/logo-dark.png' : '/page/logo-light.png'}`,
			width: 200,
			height: 200,
		},
	}

	return (
		<nav className="mb-16 flex flex-row items-center justify-between md:mb-4">
			<Link href="/" className="flex flex-row items-center gap-2 md:gap-4">
				<Image
					src="/page/logo-light.png"
					alt="Logo"
					width={500}
					height={500}
					className="h-8 w-8 dark:hidden md:h-12 md:w-12"
				/>
				<Image
					src="/page/logo-dark.png"
					alt="Logo"
					width={500}
					height={500}
					className="hidden h-8 w-8 dark:block md:h-12 md:w-12"
				/>
				<h1 className="text-lg font-bold md:text-3xl">academy</h1>
			</Link>
			<div className="flex flex-row items-center justify-between space-x-1 md:space-x-2">
				<div className="hidden h-fit w-fit flex-row items-center sm:flex">
					<ModeToggle />
				</div>
				<Suspense
					fallback={
						<Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
							<span className="translate-x-[12px] transition-all group-hover:translate-x-0">
								Enroll Now
							</span>
							<ArrowRight
								className="relative right-12 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
								size={24}
							/>
						</Button>
					}
				>
					<ConnectButton
						client={client}
						connectButton={{
							label: 'Enroll Now',
							className: 'connect-wallet',
						}}
						connectModal={{
							welcomeScreen: welcomeScreen,
							title: 'Get started with BFMAcademy',
							titleIcon: '/page/logo-blue.png',
							privacyPolicyUrl: 'https://www.bfmacademy.in/privacy-policy',
							size: `${useWindowSize().width < 640 ? 'compact' : 'wide'}`,
						}}
						theme={theme == 'dark' ? 'dark' : 'light'}
					/>
				</Suspense>
			</div>
		</nav>
	)
}
