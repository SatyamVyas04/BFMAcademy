'use client'
import Image from 'next/image'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { ConnectButton } from 'thirdweb/react'
import { client } from '../../actions/wallet'
import { useTheme } from 'next-themes'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandReddit,
	IconBrandTelegram,
	IconBrandTwitter,
} from '@tabler/icons-react'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

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
		<nav className="md:p-auto mb-16 flex flex-row items-center justify-between p-3 md:mb-4">
			<Link href="/" className="flex flex-row items-center gap-2 md:gap-4">
				<Image
					src="/page/logo-blue.png"
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
				<h1 className="text-lg font-bold text-brandblue dark:text-foreground md:text-3xl">
					academy
				</h1>
			</Link>

			{/* Desktop Navigation */}
			<div className="hidden flex-row items-center justify-between space-x-2 md:flex">
				<ModeToggle />
				<Link href="/early-access">
					<ShimmerButton
						className="bg-brandblue text-white hover:bg-brandblue/90"
						shimmerColor={`${theme == 'dark' ? '#ffffff' : '#222222'}`}
						shimmerSize="2px"
					>
						Get Early Access
					</ShimmerButton>
				</Link>
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
							label: 'Connect Wallet',
							className: 'connect-wallet',
						}}
						connectModal={{
							welcomeScreen: welcomeScreen,
							title: 'Get started with BFMAcademy',
							titleIcon: '/page/logo-blue.png',
							privacyPolicyUrl: 'https://www.bfmacademy.in/privacy-policy',
							size: 'wide',
						}}
						theme={theme == 'dark' ? 'dark' : 'light'}
					/>
				</Suspense>
				<Link href="/roadmap">
					<Button
						className="group rounded-lg bg-neutral-700 p-5 text-white transition-all hover:bg-neutral-700/90 dark:bg-secondary dark:hover:bg-secondary/90"
						variant="secondary"
					>
						Roadmap
					</Button>
				</Link>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden">
				<Sheet>
					<div className="flex flex-row items-center gap-2">
						<ModeToggle />
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="bg-brandblue text-white hover:bg-brandblue/90 hover:text-white"
							>
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
					</div>
					<SheetContent
						side="bottom"
						className="h-dvh w-screen bg-brandblue text-white"
					>
						<SheetHeader>
							<SheetTitle className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<Image
										src="/page/logo-dark.png"
										alt="Logo"
										width={40}
										height={40}
									/>
									<span className="text-white">academy</span>
								</div>
							</SheetTitle>
						</SheetHeader>

						<div className="mt-8 flex flex-col space-y-4">
							<SheetTrigger asChild>
								<Link href="/early-access" className="w-full">
									<Button className="group w-full rounded-lg bg-brandblue py-6 text-base text-white shadow-none transition-all hover:bg-brandblue/90">
										Early Access
									</Button>
								</Link>
							</SheetTrigger>
							<SheetTrigger asChild>
								<Link href="/roadmap" className="w-full">
									<Button className="group w-full rounded-lg bg-brandblue py-6 text-base text-white shadow-none transition-all hover:bg-brandblue/90">
										Roadmap
									</Button>
								</Link>
							</SheetTrigger>
							<SheetTrigger asChild>
								<Link href="/privacy-policy" className="w-full">
									<Button className="group w-full rounded-lg bg-brandblue py-6 text-base text-white shadow-none transition-all hover:bg-brandblue/90">
										Privacy Policy
									</Button>
								</Link>
							</SheetTrigger>
							<SheetTrigger asChild>
								<Link href="/terms-and-conditions" className="w-full">
									<Button className="group w-full rounded-lg bg-brandblue py-6 text-base text-white shadow-none transition-all hover:bg-brandblue/90">
										Terms and Conditions
									</Button>
								</Link>
							</SheetTrigger>

							<Suspense
								fallback={
									<Button className="w-full bg-foreground text-background">
										Enroll Now
									</Button>
								}
							>
								<SheetTrigger asChild>
									<ConnectButton
										client={client}
										connectButton={{
											label: 'Connect Wallet',
											className: 'w-full',
										}}
										connectModal={{
											welcomeScreen: welcomeScreen,
											title: 'Get started with BFMAcademy',
											titleIcon: '/page/logo-blue.png',
											privacyPolicyUrl:
												'https://www.bfmacademy.in/privacy-policy',
											size: 'compact',
										}}
										theme={theme == 'dark' ? 'dark' : 'light'}
									/>
								</SheetTrigger>
							</Suspense>

							{/* Social Icons - Vertical Stack */}
							<div className="flex flex-row items-center gap-0 max-md:justify-center md:flex-col md:space-y-1">
								<Link href="https://t.me/bfmacademyy" target="_blank">
									<Button
										variant="ghost"
										className="group h-16 w-16 rounded-full p-0"
									>
										<IconBrandTelegram />
									</Button>
								</Link>
								<Link
									href="https://www.instagram.com/bfmacademia"
									target="_blank"
								>
									<Button
										variant="ghost"
										className="group h-16 w-16 rounded-full p-0"
									>
										<IconBrandInstagram />
									</Button>
								</Link>
								<Link href="https://x.com/BFMAcademy" target="_blank">
									<Button
										variant="ghost"
										className="group h-16 w-16 rounded-full p-0"
									>
										<IconBrandTwitter />
									</Button>
								</Link>
								<Link
									href="https://www.reddit.com/u/BFMAcademy"
									target="_blank"
								>
									<Button
										variant="ghost"
										className="group h-16 w-16 rounded-full p-0"
									>
										<IconBrandReddit />
									</Button>
								</Link>
								<Link
									href="https://www.linkedin.com/company/bfm-academy/"
									target="_blank"
								>
									<Button
										variant="ghost"
										className="group h-16 w-16 rounded-full p-0"
									>
										<IconBrandLinkedin />
									</Button>
								</Link>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
}
