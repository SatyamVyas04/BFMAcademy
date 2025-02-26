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
			<Navbar />
			<main className="max-w-screen-2xl">
				<Hero />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
			</main>
			<Footer />
		</>
	)
}
