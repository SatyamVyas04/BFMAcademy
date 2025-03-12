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

export default function Home() {
	return (
		<>
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
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
			</main>
		</>
	)
}
