import Features from '@/pages/features'
import Footer from '@/pages/footer'
import Navbar from '@/pages/navbar'
import { Metadata } from 'next'
import MasonryGallery from '@/components/magicui/MasonryGallery'

export const metadata: Metadata = {
	title: 'Event Archive',
	description:
		'Explore past events, webinars, and workshops hosted by BFM Academy. Stay updated with our event archive.',
	keywords: 'BFM Academy, event archive, past events, webinars, workshops',
}

export default function Page() {
	const updatedEventsCount = 40
	const eventArchiveCount = 14
	const updatedEventsData = Array.from(
		{ length: updatedEventsCount },
		(_, i) => ({
			id: `updated-${i + 1}`,
			number: i + 1,
			path: '/updated-events/',
			altText: `Updated Event ${i + 1}`,
		}),
	)
	const eventArchiveData = Array.from(
		{ length: eventArchiveCount },
		(_, i) => ({
			id: `archive-${i + 1}`,
			number: i + 1,
			path: '/event-archive/',
			altText: `Archived Event ${i + 1}`,
		}),
	)
	const allImages = [...updatedEventsData, ...eventArchiveData]

	return (
		<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
			<Navbar />
			<h1 className="mb-2 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
				BFM Event Archive
			</h1>
			<p className="mb-12 text-center text-sm xl:text-base">
				Learning at BFM Academy isn&apos;t just about studying - it&apos;s about
				winning!
			</p>

			<section className="mx-auto max-w-screen-xl">
				<MasonryGallery images={allImages} />
			</section>

			<Features />
			<Footer />
		</main>
	)
}
