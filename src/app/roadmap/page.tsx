import { BlurFade } from '@/components/magicui/blur-fade'
import Footer from '@/pages/footer'
import Navbar from '@/pages/navbar'
import Section9 from '@/pages/section9'
import { LoaderPinwheel } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
	title: 'Roadmap',
	description:
		"Discover the roadmap of BFM, a Web3 learning platform. Explore our phases, from the Telegram Mini App to the BFM Innovation Centre, and see how we're revolutionizing education with AI, blockchain, and robotics.",
	keywords:
		'roadmap, BFM, Web3 learning platform, Telegram Mini App, AI-powered education, blockchain, robotics, immersive learning, innovation centre',
}

export default function page() {
	const roadmapItems = [
		{
			date: 'Phase 1',
			title: 'The BFM Telegram Mini App - Learning at Your Fingertips',
			description:
				'The BFM Telegram Mini App is your instant gateway to Web3 education. Access courses, earn coins, real-time discussions, quizzes, games and AI-powered news/insights—all within Telegram. Earn on-chain certificates and join a vibrant learning community.',
			image: '/roadmap/TGMini.png',
		},
		{
			date: 'Phase 2',
			title: 'Web3 Nexus - The Ultimate Blockchain & Crypto Course',
			description:
				'Master crypto, NFTs, DeFi, DAOs, and smart contracts with Web3 Nexus. Get hands-on experience, build a Web3 portfolio, and earn NFT-based certifications. Stay ahead in the fast-growing blockchain industry.',
			image: '/roadmap/CryptoCourse.png',
		},
		{
			date: 'Phase 3',
			title: 'AI Voice Assistant - Your Personal Learning Companion',
			description:
				'Meet your AI-powered study assistant. Ask questions, get instant answers, and receive personalized learning recommendations. Make studying smarter, faster, and more interactive than ever.',
			image: '/roadmap/VoiceAssistant.png',
		},
		{
			date: 'Phase 4',
			title: 'Online Classrooms - Live, Interactive & Immersive',
			description:
				'Join live instructor-led sessions with AI-driven mentorship. Experience a next-gen digital classroom that adapts to your learning style. Say goodbye to boring lectures and hello to engaging, interactive learning.',
			image: '/roadmap/OnlineClasses.png',
		},
		{
			date: 'Phase 5',
			title: 'The BFM Networking App - Connect, Collaborate, Succeed',
			description:
				'Our AI-powered networking app connects students, mentors, and Web3 companies. Find internships, jobs, and startup funding while building industry connections that open doors to your future.',
			image: '/roadmap/BFMN.png',
		},
		{
			date: 'Phase 6',
			title: 'AI Agents - The Future of Smart Learning',
			description:
				'Imagine having an AI tutor that adapts to you. Our AI agents help with coding, finance, and blockchain analytics. Get real-time feedback and accelerate your learning and current updates with intelligent automation.',
			image: '/roadmap/AIAgents.png',
		},
		{
			date: 'Phase 7',
			title: 'VR-Based Courses - Step Into the Metaverse',
			description:
				'Step into VR-powered classrooms where learning feels real. Explore finance simulations, blockchain ecosystems, and immersive labs. Experience education like never before.',
			image: '/roadmap/VRCourses.png',
		},
		{
			date: 'Phase 8',
			title: 'AI Robot - The Future of Interactive Learning',
			description:
				'We’re building an AI-powered learning robot. Get real-time assistance, instant problem-solving solutions, innovative tools, statistics and interactive study sessions. Your personal learning partner is here.',
			image: '/roadmap/AIRobots.png',
		},
		{
			date: 'Phase 9',
			title: 'The BFM Innovation Centre - A Playground for Disruptive Ideas',
			description:
				'The BFM Innovation Centre is where AI, blockchain, and robotics come together. Get tools, incubation, funding, mentorship, and industry collaborations. Build your own Web3 startup and shape the future.',
			image: '/roadmap/InnoCentre.png',
		},
	]

	return (
		<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
			<Navbar />
			<h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
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
							<div className="mx-auto flex min-h-60 flex-col rounded-xl border-2 shadow-lg dark:border-brandblue dark:bg-gradient-to-br dark:from-card dark:to-brandblue/10">
								<div className="h-[45%] rounded-xl">
									<Image
										height={1000}
										width={1000}
										priority
										src={item.image}
										alt="roadmap image"
										className="h-full w-full rounded-t-xl object-cover"
									/>
								</div>
								<div className="h-1 w-full bg-gradient-to-r from-transparent via-brandblue to-transparent" />
								<div className="p-4">
									<div className="mt-1 inline-block rounded-full border-[1px] bg-brandblue px-2 py-1 font-semibold text-white">
										{item.date}
									</div>
									<div className="mt-4 text-xl font-semibold text-brandblue dark:text-foreground xl:text-2xl">
										{item.title}
									</div>
									<div className="my-2 text-sm text-muted-foreground">
										{item.description}
									</div>
								</div>
							</div>
							<div className="absolute -left-11 -top-1 w-max rounded-full bg-brandblue p-1">
								<LoaderPinwheel className="h-4 w-4 stroke-white" />
							</div>
						</BlurFade>
					))}
				</div>

				{/* Desktop View */}
				<div className="grid grid-cols-2">
					<div className="my-10 flex w-full flex-col gap-32 border-r-2 border-dashed border-brandblue pl-8 max-lg:hidden">
						{roadmapItems
							.filter((_, index) => index % 2 === 0)
							.map((item, index) => (
								<BlurFade
									duration={0.6}
									inView={true}
									key={index}
									className="relative max-w-[600px] self-end"
								>
									<div className="mx-auto mr-8 flex min-h-60 flex-col overflow-hidden rounded-2xl border-2 border-brandblue/20 bg-gradient-to-br from-card to-brandblue/10 shadow-lg transition-all hover:to-brandblue/20 hover:shadow-xl">
										<div className="h-[45%] rounded-xl">
											<Image
												height={1000}
												width={1000}
												priority
												src={item.image}
												alt="roadmap image"
												className="h-full w-full rounded-t-xl object-cover"
											/>
										</div>
										<div className="h-1 w-full bg-gradient-to-r from-transparent via-brandblue to-transparent" />
										<div className="p-4">
											<div className="mt-1 inline-block rounded-full border-[1px] bg-brandblue px-2 py-1 font-semibold text-white">
												{item.date}
											</div>
											<div className="mt-4 text-xl font-semibold text-brandblue dark:text-foreground xl:text-2xl">
												{item.title}
											</div>
											<div className="my-2 text-sm text-muted-foreground">
												{item.description}
											</div>
										</div>
									</div>
									<div className="absolute -right-[14px] -top-1 w-max rounded-full bg-brandblue p-1">
										<LoaderPinwheel className="h-4 w-4 stroke-white" />
									</div>
								</BlurFade>
							))}
					</div>

					<div className="mt-48 flex w-full flex-col gap-32 pl-8 max-lg:hidden">
						{roadmapItems
							.filter((_, index) => index % 2 !== 0)
							.map((item, index) => (
								<BlurFade
									duration={0.6}
									inView={true}
									key={index}
									className="relative max-w-xl self-start"
								>
									<div className="mx-auto flex min-h-60 flex-col overflow-hidden rounded-2xl border-2 border-brandblue/20 bg-gradient-to-br from-card to-brandblue/10 shadow-lg transition-all hover:to-brandblue/20 hover:shadow-xl">
										<div className="h-[45%] rounded-xl">
											<Image
												height={1000}
												width={1000}
												priority
												src={item.image}
												alt="roadmap image"
												className="h-full w-full rounded-t-xl object-cover"
											/>
										</div>
										<div className="h-1 w-full bg-gradient-to-r from-transparent via-brandblue to-transparent" />
										<div className="p-4">
											<div className="mt-1 inline-block rounded-full border-[1px] bg-brandblue px-2 py-1 font-semibold text-white">
												{item.date}
											</div>
											<div className="mt-4 text-xl font-semibold text-brandblue dark:text-foreground xl:text-2xl">
												{item.title}
											</div>
											<div className="my-2 text-sm text-muted-foreground">
												{item.description}
											</div>
										</div>
									</div>
									<div className="absolute -left-[44px] -top-1 w-max rounded-full bg-brandblue p-1">
										<LoaderPinwheel className="h-4 w-4 stroke-white" />
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
