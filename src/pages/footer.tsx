import Image from 'next/image'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTelegram,
	IconBrandTwitter,
	IconBrandYoutube,
	IconMail,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
	return (
		<footer className="mx-auto bg-background px-6 py-10 text-foreground">
			<div className="mx-auto">
				<div className="grid gap-8 md:grid-cols-12">
					{/* Left Column - Logo and Social Icons */}
					<div className="md:col-span-1">
						{/* Logo */}
						<div className="mb-8">
							<Image
								src="/page/logo-blue.png"
								alt="Logo"
								width={50}
								height={50}
								className="mx-auto dark:hidden"
							/>
							<Image
								src="/page/logo-dark.png"
								alt="Logo"
								width={50}
								height={50}
								className="mx-auto hidden dark:block"
							/>
						</div>

						{/* Vertical Line */}
						<div className="mx-auto mb-4 mt-20 h-16 w-fit border-l border-brandblue dark:border-foreground max-md:hidden"></div>

						{/* Social Icons - Vertical Stack */}
						<div className="flex flex-row items-center gap-0 max-md:justify-center md:flex-col md:space-y-1">
							<Button variant="ghost" size="icon" className="group">
								<IconBrandTelegram className="h-[1.2rem] w-[1.2rem] text-foreground" />
							</Button>
							<Button variant="ghost" size="icon" className="group">
								<IconBrandInstagram className="h-[1.2rem] w-[1.2rem] text-foreground" />
							</Button>
							<Button variant="ghost" size="icon" className="group">
								<IconBrandTwitter className="h-[1.2rem] w-[1.2rem] text-foreground" />
							</Button>
							<Button variant="ghost" size="icon" className="group">
								<IconBrandYoutube className="h-[1.2rem] w-[1.2rem] text-foreground" />
							</Button>
							<Button variant="ghost" size="icon" className="group">
								<IconBrandFacebook className="h-[1.2rem] w-[1.2rem] text-foreground" />
							</Button>
							<Button variant="ghost" size="icon" className="group">
								<IconBrandLinkedin className="h-[1.2rem] w-[1.2rem] text-foreground" />
							</Button>
						</div>
					</div>

					{/* Center Column - Let's Learn Together */}
					<div className="place-content-end md:col-span-5">
						<h1 className="text-4xl font-bold uppercase tracking-tighter text-brandblue dark:text-foreground lg:text-6xl lg:leading-[0.8]">
							<span className="text-6xl tracking-tighter lg:text-9xl lg:leading-[0.8]">
								Let&apos;s
							</span>
							<br />
							<span className="text-6xl tracking-tighter lg:text-9xl lg:leading-[0.8]">
								Learn
							</span>
							<br />
							Together
						</h1>
					</div>

					{/* Products Column */}
					<div className="md:col-span-3">
						<h2 className="mb-4 uppercase text-brandblue/50 dark:text-muted-foreground">
							LEGAL
						</h2>
						<ul className="space-y-1.5 text-brandblue dark:text-foreground">
							<li>
								<a
									href="/WhitePaper.pdf"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									White Paper
								</a>
							</li>
							<li>
								<a
									href="/Tokenomics.pdf"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Tokenomics
								</a>
							</li>
							<li>
								<a
									href="/privacy-policy"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="/terms-and-conditions"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Terms and Conditions
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Column */}
					<div className="md:col-span-3">
						<h2 className="mb-4 uppercase text-brandblue/50 dark:text-muted-foreground">
							EMAIL ADDRESS
						</h2>
						<p className="text-brandblue dark:text-foreground">
							support@bfmacademy.in
						</p>
						<div className="mt-2">
							<Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90">
								<IconMail
									className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
									size={24}
								/>
								<a
									href="mailto:support@bfmacademy.in"
									className="translate-x-[-12px] transition-all group-hover:translate-x-0"
									aria-label="Contact BFM Academy"
								>
									Contact us
								</a>
							</Button>
						</div>
					</div>
				</div>

				{/* Copyright Text - Bottom Right */}
				<div className="text-right text-xs text-brandblue/50 dark:text-muted-foreground max-md:mt-12">
					©BFM Academy © 2025.
				</div>
			</div>
		</footer>
	)
}
