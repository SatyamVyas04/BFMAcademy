import { BlurFade } from '@/components/magicui/blur-fade'
import Footer from '@/pages/footer'
import Navbar from '@/pages/navbar'
import Section9 from '@/pages/section9'
import { Loader } from 'lucide-react'

export default function page() {
	const roadmapItems = [
		{
			date: 'Q1 2025',
			title: 'Metaverse Aggregator Platform',
			description:
				'An educational hub that brings together all existing platforms in the metaverse ecosystem, fostering collaboration and awareness. This platform aims to unite the community and streamline the metaverse experience.',
			image: '/page/carousel-mob.png',
		},
		{
			date: 'Q2 2025',
			title: 'Metaverse Services',
			description:
				'A dynamic team dedicated to building metaverses for clients, driving ecosystem growth. Future offerings include no-code tools to enhance efficiency and reduce costs, accelerating metaverse development.',
			image: '/page/carousel-mob.png',
		},
		{
			date: 'Q3 2025',
			title: 'Metaverse Pitch Competition',
			description:
				'A platform for startups, budding entrepreneurs, and college students to showcase their metaverse ideas through competitions, hackathons, and funding opportunities.',
			image: '/page/carousel-mob.png',
		},
		{
			date: 'Q1 2025',
			title: 'Metaverse Events',
			description:
				'A centralized platform where all metaverse events worldwide can be registered, promoted, and tracked, giving users detailed descriptions and sales options.',
			image: '/page/carousel-mob.png',
		},
		{
			date: 'Q1 2026',
			title: 'Metaverse Aggregator Platform',
			description:
				'An educational hub that brings together all existing platforms in the metaverse ecosystem, fostering collaboration and awareness. This platform aims to unite the community and streamline the metaverse experience.',
			image: '/page/carousel-mob.png',
		},
		{
			date: 'Q2 2026',
			title: 'Metaverse Services',
			description:
				'A dynamic team dedicated to building metaverses for clients, driving ecosystem growth. Future offerings include no-code tools to enhance efficiency and reduce costs, accelerating metaverse development.',
			image: '/page/carousel-mob.png',
		},
		{
			date: 'Q3 2026',
			title: 'Metaverse Pitch Competition',
			description:
				'A platform for startups, budding entrepreneurs, and college students to showcase their metaverse ideas through competitions, hackathons, and funding opportunities.',
			image: '/page/carousel-mob.png',
		},
		{
			date: 'Q4 2026',
			title: 'Metaverse Events',
			description:
				'A centralized platform where all metaverse events worldwide can be registered, promoted, and tracked, giving users detailed descriptions and sales options.',
			image: '/page/carousel-mob.png',
		},
	]

	return (
		<main className="max-w-screen-4xl mx-auto space-y-3 p-3 !pb-0 md:p-6 lg:p-9 xl:space-y-6 xl:p-12 xl:pt-9">
			<Navbar />
			<h1 className="mt-6 text-center text-2xl font-bold uppercase text-brandblue dark:text-white md:mt-12 md:text-3xl lg:mt-16 lg:text-4xl xl:mt-20">
				Roadmap
			</h1>
			<div className="flex w-full justify-center">
				{/* Mobile View */}
				<div className="my-10 flex flex-col gap-10 border-l-2 border-dashed border-[#484848] pl-8 lg:hidden">
					{roadmapItems.map((item, index) => (
						<BlurFade
							duration={0.6}
							inView={true}
							key={index}
							className="relative w-full"
						>
							<div className="mx-auto flex min-h-80 flex-col rounded-xl border-2 shadow-lg dark:border-brandblue dark:bg-gradient-to-br dark:from-card dark:to-brandblue/10">
								<div className="h-[45%] rounded-xl">
									<img
										src={item.image}
										alt="roadmap image"
										className="h-full w-full rounded-t-xl object-cover"
									/>
								</div>
								<div className="h-1 w-full bg-gradient-to-r from-transparent via-brandblue to-transparent" />
								<div className="p-4">
									<div className="mt-4 inline-block rounded-full border-[1px] bg-brandblue px-2 py-1 font-semibold text-white">
										{item.date}
									</div>
									<div className="mt-4 text-xl font-semibold text-brandblue dark:text-foreground xl:text-3xl">
										{item.title}
									</div>
									<div className="mt-4 text-sm text-muted-foreground">
										{item.description}
									</div>
								</div>
							</div>
							<div className="absolute -left-11 -top-1 w-max rounded-full bg-brandblue p-1">
								<Loader className="h-4 w-4 stroke-white" />
							</div>
						</BlurFade>
					))}
				</div>

				{/* Desktop View */}
				<div className="grid grid-cols-2">
					<div className="my-10 flex w-full flex-col gap-32 border-r-2 border-dashed border-brandblue pl-8 max-lg:hidden">
						{roadmapItems
							.slice(0, (roadmapItems.length + 1) / 2)
							.map((item, index) => (
								<BlurFade
									duration={0.6}
									inView={true}
									key={index}
									className="relative w-full"
								>
									<div className="mx-auto mr-8 flex min-h-80 flex-col overflow-hidden rounded-2xl border-2 border-brandblue/20 bg-gradient-to-br from-card to-brandblue/10 shadow-lg transition-all hover:to-brandblue/20 hover:shadow-xl">
										<div className="h-[45%] rounded-xl">
											<img
												src={item.image}
												alt="roadmap image"
												className="h-full w-full rounded-t-xl object-cover"
											/>
										</div>
										<div className="h-1 w-full bg-gradient-to-r from-transparent via-brandblue to-transparent" />
										<div className="p-4">
											<div className="mt-4 inline-block rounded-full border-[1px] bg-brandblue px-2 py-1 font-semibold text-white">
												{item.date}
											</div>
											<div className="mt-4 text-xl font-semibold text-brandblue dark:text-foreground xl:text-3xl">
												{item.title}
											</div>
											<div className="mt-4 text-sm text-muted-foreground">
												{item.description}
											</div>
										</div>
									</div>
									<div className="absolute -right-[14px] -top-1 w-max rounded-full bg-brandblue p-1">
										<Loader className="h-4 w-4 stroke-white" />
									</div>
								</BlurFade>
							))}
					</div>

					<div className="mt-48 flex w-full flex-col gap-32 pl-8 max-lg:hidden">
						{roadmapItems
							.slice((roadmapItems.length + 1) / 2, roadmapItems.length)
							.map((item, index) => (
								<BlurFade
									duration={0.6}
									inView={true}
									key={index}
									className="relative w-full"
								>
									<div className="mx-auto flex min-h-80 flex-col overflow-hidden rounded-2xl border-2 border-brandblue/20 bg-gradient-to-br from-card to-brandblue/10 shadow-lg transition-all hover:to-brandblue/20 hover:shadow-xl">
										<div className="h-[45%] rounded-xl">
											<img
												src={item.image}
												alt="roadmap image"
												className="h-full w-full rounded-t-xl object-cover"
											/>
										</div>
										<div className="h-1 w-full bg-gradient-to-r from-transparent via-brandblue to-transparent" />
										<div className="p-4">
											<div className="mt-4 inline-block rounded-full border-[1px] bg-brandblue px-2 py-1 font-semibold text-white">
												{item.date}
											</div>
											<div className="mt-4 text-xl font-semibold text-brandblue dark:text-foreground xl:text-3xl">
												{item.title}
											</div>
											<div className="mt-4 text-sm text-muted-foreground">
												{item.description}
											</div>
										</div>
									</div>
									<div className="absolute -left-[44px] -top-1 w-max rounded-full bg-brandblue p-1">
										<Loader className="h-4 w-4 stroke-white" />
									</div>
								</BlurFade>
							))}
					</div>
				</div>
			</div>
			<BlurFade duration={0.6} inView={true}>
				<Section9 />
			</BlurFade>
			<Footer />
		</main>
	)
}
