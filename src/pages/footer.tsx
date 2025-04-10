import Image from 'next/image'
import {
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTelegram,
	IconBrandTwitter,
	IconBrandReddit,
	IconMail,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="mx-auto bg-background px-6 py-10 text-start text-foreground">
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
							<Link href="https://t.me/bfmacademyy" target="_blank">
								<Button
									variant="ghost"
									size="icon"
									className="group rounded-full"
								>
									<IconBrandTelegram className="h-[1.2rem] w-[1.2rem] text-foreground" />
								</Button>
							</Link>
							<Link
								href="https://www.instagram.com/bfmacademia"
								target="_blank"
							>
								<Button
									variant="ghost"
									size="icon"
									className="group rounded-full"
								>
									<IconBrandInstagram className="h-[1.2rem] w-[1.2rem] text-foreground" />
								</Button>
							</Link>
							<Link href="https://x.com/BFMAcademy" target="_blank">
								<Button
									variant="ghost"
									size="icon"
									className="group rounded-full"
								>
									<IconBrandTwitter className="h-[1.2rem] w-[1.2rem] text-foreground" />
								</Button>
							</Link>
							<Link href="https://www.reddit.com/u/BFMAcademy" target="_blank">
								<Button
									variant="ghost"
									size="icon"
									className="group rounded-full"
								>
									<IconBrandReddit className="h-[1.2rem] w-[1.2rem] text-foreground" />
								</Button>
							</Link>
							<Link
								href="https://www.linkedin.com/company/bfm-academy/"
								target="_blank"
							>
								<Button
									variant="ghost"
									size="icon"
									className="group rounded-full"
								>
									<IconBrandLinkedin className="h-[1.2rem] w-[1.2rem] text-foreground" />
								</Button>
							</Link>
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
						<h2 className="mb-4 text-lg uppercase text-brandblue/50 dark:text-muted-foreground">
							LEGAL
						</h2>
						<ul className="space-y-1.5 text-brandblue dark:text-foreground">
							<li>
								<a
									href="https://docsend.com/v/4gtmx/bfmacademy"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Pitch Deck
								</a>
							</li>
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
						<h2 className="mb-4 mt-6 text-lg uppercase text-brandblue/50 dark:text-muted-foreground">
							EDUCATION
						</h2>
						<ul className="space-y-1.5 text-brandblue dark:text-foreground">
							<li>
								<a
									href="https://forms.gle/zdBbyf5uX1jYUs5M6"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Get Early Access!
								</a>
							</li>
							<li>
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSePTUNg74BZiCv-_tb1KoDKlJZkuzwQ8PQnuNgAeam0zFi9bQ/viewform?usp=sharing"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Join Training Program
								</a>
							</li>
							<li>
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSeBQ22mRqlle_6pSIPhUba8kHJpGNH5aPENYl7qi9YM-Va0qA/viewform"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Startup Mentorship
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Column */}
					<div className="md:col-span-3">
						<h2 className="mb-4 text-lg uppercase text-brandblue/50 dark:text-muted-foreground">
							CAREERS
						</h2>
						<ul className="space-y-1.5 text-brandblue dark:text-foreground">
							<li>
								<a
									href="https://forms.gle/7FonKf2PQgEYnWk17"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Internships and Jobs
								</a>
							</li>
							<li>
								<a
									href="https://forms.gle/bU4PRhuYotGu86rL6"
									target="_blank"
									className="transition-all hover:text-foreground dark:hover:text-brandblue"
								>
									Campus Ambassador
								</a>
							</li>
						</ul>
						<h2 className="mb-1 mt-6 text-lg uppercase text-brandblue/50 dark:text-muted-foreground">
							Contact Us
						</h2>
						<p className="text-brandblue dark:text-foreground">
							support@bfmacademy.in
						</p>
						<div className="mt-2 flex flex-row items-center gap-2">
							<Button className="group rounded-full bg-brandblue px-8 text-white transition-all hover:bg-brandblue/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90">
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
							<ModeToggle />
						</div>
					</div>
				</div>

				{/* Copyright Text - Bottom Right */}
				<div className="text-right text-xs text-brandblue/50 dark:text-muted-foreground max-md:mt-12">
					BFM Academy © 2025
				</div>
			</div>
		</footer>
	)
}
