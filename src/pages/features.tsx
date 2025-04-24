import { BlurFade } from '@/components/magicui/blur-fade'
import Image from 'next/image'
import React from 'react'

export default function Features() {
	return (
		<section className="my-16 pb-6 xl:my-24">
			<h2 className="my-6 text-center text-3xl font-bold uppercase text-brandblue dark:text-foreground md:text-5xl">
				We were in
			</h2>
			<div className="flex flex-row flex-wrap items-center justify-evenly gap-6 p-4">
				<BlurFade delay={0.1} inView={true} direction="right">
					<Image
						src="/event-archive/token2049dubai.svg"
						alt="Token2049 Dubai"
						width={200}
						height={100}
						className="h-12 w-auto scale-95 object-contain grayscale invert transition-all hover:scale-105 dark:invert-0 md:scale-100"
					/>
				</BlurFade>
				<BlurFade delay={0.2} inView={true} direction="right">
					<Image
						src="/event-archive/token2049singapore.png"
						alt="Token2049 Singapore"
						width={200}
						height={100}
						className="h-12 w-auto scale-95 object-contain grayscale transition-all hover:scale-105 dark:invert md:scale-100"
					/>
				</BlurFade>
				<BlurFade delay={0.3} inView={true} direction="right">
					<Image
						src="/event-archive/startupmahakumbh.png"
						alt="Startup Mahakumbh"
						width={200}
						height={100}
						className="h-16 w-auto scale-95 object-contain grayscale transition-all hover:scale-105 dark:invert md:scale-100"
					/>
				</BlurFade>
				<BlurFade delay={0.4} inView={true} direction="right">
					<Image
						src="/event-archive/bitcoinmena.png"
						alt="Bitcoin Mena"
						width={200}
						height={100}
						className="h-16 w-auto scale-95 object-contain grayscale invert transition-all hover:scale-105 dark:invert-0 md:scale-100"
					/>
				</BlurFade>
				<BlurFade delay={0.5} inView={true} direction="right">
					<Image
						src="/event-archive/coinferencex.png"
						alt="Coinference X"
						width={200}
						height={100}
						className="h-10 w-auto scale-95 object-contain grayscale invert transition-all hover:scale-105 dark:invert-0 md:scale-100"
					/>
				</BlurFade>
				<BlurFade delay={0.6} inView={true} direction="right">
					<Image
						src="/event-archive/degensummit.png"
						alt="Degen Summit"
						width={200}
						height={100}
						className="h-14 w-auto scale-95 object-contain grayscale invert transition-all hover:scale-105 dark:invert-0 md:scale-100"
					/>
				</BlurFade>
			</div>
		</section>
	)
}
