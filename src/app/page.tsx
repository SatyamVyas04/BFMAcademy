'use client'
import { BlurFade } from '@/components/magicui/blur-fade'
import Navbar from '@/pages/navbar'
import Hero from '@/pages/hero'
import Section2 from '@/pages/section2'
import Section3 from '@/pages/section3'
import Section4 from '@/pages/section4'
import Section5 from '@/pages/section5'
import Section6 from '@/pages/section6'
import Section7 from '@/pages/section7'
import Section8 from '@/pages/section8'
import Section9 from '@/pages/section9'
import Footer from '@/pages/footer'
import CookieConsent from '@/components/CookieConsent'

import { IconBrandTelegram } from '@tabler/icons-react'
import Link from 'next/link'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Home() {
	return (
		<>
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
				<TooltipProvider>
					<div className="fixed bottom-4 right-4 z-50">
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="https://web.telegram.org/k/#@Piyanka_bot"
									target="_blank"
									rel="noopener noreferrer"
									className="flex rounded-full bg-brandblue p-3 shadow-lg transition-colors hover:bg-brandblue/90"
								>
									<IconBrandTelegram className="text-white" />
								</Link>
							</TooltipTrigger>
							<TooltipContent side="left">
								<p>Chat with us</p>
							</TooltipContent>
						</Tooltip>
					</div>
				</TooltipProvider>
				<Navbar />
				<BlurFade inView={true} duration={0.6}>
					<Hero />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section2 />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section3 />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section4 />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section5 />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section6 />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section7 />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section8 />
				</BlurFade>
				<BlurFade inView={true} duration={0.6}>
					<Section9 />
				</BlurFade>
				<Footer />
				<CookieConsent />
			</main>
		</>
	)
}
