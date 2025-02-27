import Image from 'next/image'
import { ModeToggle } from '@/components/ui/mode-toggle'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTelegram,
	IconBrandTwitter,
	IconBrandYoutube,
} from '@tabler/icons-react'

export default function Footer() {
	return (
		<footer className="relative overflow-hidden py-6 pb-0">
			<div className="mx-auto my-8 mb-10 flex items-center justify-center gap-2 md:gap-4">
				{/* Light mode logo */}
				<Image
					src="/page/logo-light.png"
					alt="Logo"
					width={500}
					height={500}
					className="h-10 w-10 dark:hidden md:h-12 md:w-12"
				/>
				{/* Dark mode logo */}
				<Image
					src="/page/logo-dark.png"
					alt="Logo"
					width={500}
					height={500}
					className="hidden h-10 w-10 dark:block md:h-12 md:w-12"
				/>
				<h1 className="text-lg font-bold md:text-2xl">academy</h1>
			</div>

			{/* Main footer content */}
			<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
				<p className="text-sm">@Unchain Academy©2025.</p>
				<div className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
					<nav className="flex flex-wrap items-center justify-center gap-8 text-sm">
						<a href="#" className="transition-all hover:text-brandblue">
							Pricing
						</a>
						<a href="#" className="transition-all hover:text-brandblue">
							Tutor
						</a>
						<a href="#" className="transition-all hover:text-brandblue">
							Contact
						</a>
						<a href="#" className="transition-all hover:text-brandblue">
							Terms &amp; Conditions
						</a>
						<a href="#" className="transition-all hover:text-brandblue">
							Privacy Policy
						</a>
					</nav>
				</div>

				{/* Right: Social Icons (placeholders) & Mode Toggle */}
				<div className="flex items-center gap-4">
					{/* Replace these placeholder divs with actual icons */}
					<div className="mx-auto h-6 w-6 rounded-full bg-muted p-[16px]">
						<IconBrandTelegram className="-translate-x-1/2 -translate-y-1/2" />
					</div>
					<div className="mx-auto h-6 w-6 rounded-full bg-muted p-[16px]">
						<IconBrandInstagram className="-translate-x-1/2 -translate-y-1/2" />
					</div>
					<div className="mx-auto h-6 w-6 rounded-full bg-muted p-[16px]">
						<IconBrandTwitter className="-translate-x-1/2 -translate-y-1/2" />
					</div>
					<div className="mx-auto h-6 w-6 rounded-full bg-muted p-[16px]">
						<IconBrandYoutube className="-translate-x-1/2 -translate-y-1/2" />
					</div>
					<div className="mx-auto h-6 w-6 rounded-full bg-muted p-[16px]">
						<IconBrandFacebook className="-translate-x-1/2 -translate-y-1/2" />
					</div>
					<div className="mx-auto h-6 w-6 rounded-full bg-muted p-[16px]">
						<IconBrandLinkedin className="-translate-x-1/2 -translate-y-1/2" />
					</div>
					<ModeToggle />
				</div>
			</div>
			<h1 className="relative -z-10 -mb-8 mt-4 px-3 text-center text-5xl font-bold uppercase tracking-wide text-brandblue dark:text-foreground md:text-7xl lg:text-8xl">
				let’s learn together
			</h1>
		</footer>
	)
}
