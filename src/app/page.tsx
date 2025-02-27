'use client'
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
		<main className="mx-auto max-w-screen-2xl p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
			<Navbar />
			<Hero />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Section9 />
			<Footer />
		</main>
	)
}
