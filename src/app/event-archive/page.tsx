import { BlurFade } from '@/components/magicui/blur-fade'
import Footer from '@/pages/footer'
import Navbar from '@/pages/navbar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Event Archive',
	description:
		'Explore past events, webinars, and workshops hosted by BFM Academy. Stay updated with our event archive.',
	keywords: 'BFM Academy, event archive, past events, webinars, workshops',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
			<Navbar />
			<h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
				BFM Event Archive
			</h1>
			<p className="mb-12 text-center text-sm xl:text-base">
				Learning at BFM Academy isn&apos;t just about studying - it&apos;s about
				winning!
			</p>
			<section className="mx-auto grid min-h-screen max-w-screen-lg grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
				<BlurFade
					inView={true}
					duration={0.5}
					className="row-span-3 overflow-hidden rounded-sm lg:col-span-2 lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					delay={0.1}
					className="row-span-2 overflow-hidden rounded-sm lg:col-span-2 lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					delay={0.2}
					className="row-span-2 overflow-hidden rounded-sm lg:col-span-2 lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					delay={0.3}
					className="row-span-2 overflow-hidden rounded-sm lg:col-span-2 lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					delay={0.4}
					className="overflow-hidden rounded-sm lg:col-span-2 lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					delay={0.5}
					className="col-span-2 overflow-hidden rounded-sm lg:col-span-4 lg:rounded-lg"
				>
					<div className="aspect-[7/2] h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					delay={0.6}
					className="col-span-2 overflow-hidden rounded-sm lg:col-span-4 lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					className="col-span-2 overflow-hidden rounded-sm lg:col-span-3 lg:rounded-lg"
				>
					<div className="aspect-[7/3] h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					className="col-span-2 overflow-hidden rounded-sm lg:col-span-1 lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					className="col-span-2 row-span-2 overflow-hidden rounded-sm lg:rounded-lg"
				>
					<div className="aspect-square h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					className="col-span-2 row-span-3 overflow-hidden rounded-sm lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					className="col-span-2 overflow-hidden rounded-sm lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					className="col-span-2 overflow-hidden rounded-sm lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
				<BlurFade
					inView={true}
					duration={0.5}
					className="col-span-2 overflow-hidden rounded-sm lg:rounded-lg"
				>
					<div className="aspect-video h-full w-full bg-zinc-200 object-cover"></div>
				</BlurFade>
			</section>

			<Footer />
		</main>
	)
}
