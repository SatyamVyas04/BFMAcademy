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
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<link rel="preload" href="/page/carousel/1.jpeg" as="image" />
				<link rel="preload" href="/page/carousel/2.jpg" as="image" />
				<link rel="preload" href="/page/carousel/3.jpg" as="image" />
				<link rel="preload" href="/page/carousel/4.jpg" as="image" />
				<link rel="preload" href="/page/carousel/5.jpg" as="image" />
				<link rel="preload" href="/page/carousel/6.jpg" as="image" />
				<link rel="preload" href="/page/carousel/7.jpg" as="image" />
				<link rel="preload" href="/page/carousel/8.jpg" as="image" />
			</Head>
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
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
		</>
	)
}
