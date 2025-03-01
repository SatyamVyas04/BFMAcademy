import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Section5() {
	return (
		<section className="my-12 text-center md:text-start">
			<h1 className="my-2 text-4xl font-bold uppercase md:-mt-8 md:text-5xl lg:text-7xl">
				Gamify Your Learnings
			</h1>
			<p className="text-sm uppercase md:text-xl">
				Learning at BFM Academy isn&apos;t just about studying - it&apos;s about
				winning!
			</p>
			<div className="grid h-auto grid-cols-1 gap-4 py-4 md:grid-cols-9 md:gap-6">
				{/* Card 1 – with luminosity filter */}
				<Card className="group relative flex h-72 w-full flex-col overflow-hidden rounded-lg bg-[#d7124e] p-4 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl md:col-span-4 md:min-h-[500px] md:rounded-xl">
					<h1 className="text-xl font-bold uppercase">XP and Leaderboards</h1>
					<p className="text-sm md:text-base">
						Earn experience points and flex on the charts.
					</p>
					<div className="relative flex h-full w-full items-end justify-center bg-[#d7124e] mix-blend-luminosity">
						<Image
							src="/page/section5-1.png"
							alt="Card Image"
							height={1200}
							width={1200}
							className="h-[100%] w-auto translate-y-12 transition-all group-hover:translate-y-6 group-hover:scale-105"
						/>
					</div>
				</Card>
				{/* Card 2 */}
				<Card className="group relative flex h-72 w-full flex-col overflow-hidden rounded-lg bg-zinc-100 p-4 text-[#7b79da] shadow-md transition-all hover:-translate-y-1 hover:shadow-xl md:col-span-5 md:min-h-[500px] md:rounded-xl">
					<h1 className="text-xl font-bold uppercase">Quests and Challenges</h1>
					<p className="text-sm md:text-base">
						Complete real-world Web3 tasks to level up.
					</p>
					<div className="relative flex h-full w-full items-end justify-center">
						<Image
							src="/page/section5-2.png"
							alt="Card Image"
							height={1200}
							width={1200}
							className="h-[100%] w-auto translate-y-12 transition-all group-hover:translate-y-6 group-hover:scale-105"
						/>
					</div>
				</Card>
				{/* Card 3 */}
				<Card className="group relative flex h-72 w-full flex-col overflow-hidden rounded-lg bg-[#002651] p-4 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl md:col-span-5 md:min-h-[500px] md:rounded-xl">
					<h1 className="text-xl font-bold uppercase">Mystery Box Rewards</h1>
					<p className="text-sm md:text-base">
						Unlock NFT badges, tokens & exclusive perks.
					</p>
					<div className="relative flex h-full w-full items-end justify-center">
						<Image
							src="/page/section5-3.png"
							alt="Card Image"
							height={3000}
							width={3000}
							className="h-[100%] w-auto translate-y-12 transition-all group-hover:translate-y-6 group-hover:scale-105"
						/>
					</div>
				</Card>
				{/* Card 4 */}
				<Card className="group relative flex h-72 w-full flex-col overflow-hidden rounded-lg bg-[#2cc4f6] p-4 text-foreground shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:text-background md:col-span-4 md:min-h-[500px] md:rounded-xl">
					<h1 className="relative z-10 text-xl font-bold uppercase">
						DAO Involvement
					</h1>
					<p className="relative z-10 text-sm md:text-base">
						Vote on platform updates & shape BFM&apos;s future.
					</p>
					<div className="relative flex h-full w-full items-end justify-center">
						<Image
							src="/page/section5-4.svg"
							alt="Card Image"
							height={3000}
							width={3000}
							className="h-[130%] w-auto translate-y-12 transition-all group-hover:translate-y-6 group-hover:scale-105"
						/>
					</div>
				</Card>
			</div>
			<h1 className="my-2 -mt-4 text-center text-4xl uppercase tracking-tighter md:text-5xl lg:text-6xl">
				Turn your education into{' '}
				<span className="font-bold">an adventure!</span>
			</h1>
		</section>
	)
}
