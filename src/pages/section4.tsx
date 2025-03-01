import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Section4() {
	return (
		<section className="space-y-3 py-8 md:space-y-6 xl:space-y-12">
			<p className="text-end text-lg md:text-2xl">
				it is not just a platform - <br />{' '}
				<span className="font-bold">it&apos;s a movement</span>
			</p>
			<div className="flex flex-row flex-wrap items-center justify-center gap-4 xl:gap-12">
				<Card className="relative h-[440px] w-80 overflow-clip rounded-xl bg-zinc-100 text-foreground transition-all hover:-translate-y-2 hover:shadow-xl dark:text-background">
					<CardHeader className="text-lg font-bold">
						<CardTitle className="mt-2 font-normal uppercase">
							Network with{' '}
							<span className="font-bold">
								100k+ Learners, Builders & Blockchain Pros
							</span>
						</CardTitle>
					</CardHeader>
					<CardContent className="absolute bottom-0 p-0">
						<Image
							src="/page/section4-1.jpeg"
							alt="Card Image"
							width={600}
							height={600}
							className="h-80 w-full object-cover object-center"
						/>
					</CardContent>
				</Card>
				<Card className="relative h-[440px] w-80 overflow-clip rounded-xl bg-zinc-100 text-foreground transition-all hover:-translate-y-2 hover:shadow-xl dark:text-background">
					<CardHeader className="text-lg font-bold">
						<CardTitle className="mt-2 font-normal uppercase">
							Join <span className="font-bold">Discord & Telegram</span> for
							Daily <span className="font-bold">Web3 Discussions</span>
						</CardTitle>
					</CardHeader>
					<CardContent className="absolute bottom-0 p-0">
						<Image
							src="/page/section4-2.jpeg"
							alt="Card Image"
							width={600}
							height={600}
							className="h-80 w-full object-cover object-center"
						/>
					</CardContent>
				</Card>
				<Card className="relative h-[440px] w-80 overflow-clip rounded-xl bg-zinc-100 text-foreground transition-all hover:-translate-y-2 hover:shadow-xl dark:text-background">
					<CardHeader className="text-lg font-bold">
						<CardTitle className="mt-2 font-normal uppercase">
							Participate in{' '}
							<span className="font-bold">
								Live AMAS, Hackathons & Web3 Meet-ups
							</span>
						</CardTitle>
					</CardHeader>
					<CardContent className="absolute bottom-0 p-0">
						<Image
							src="/page/section4-3.png"
							alt="Card Image"
							width={600}
							height={600}
							className="h-80 w-full object-cover object-center"
						/>
					</CardContent>
				</Card>
			</div>
			<p className="text-centertext-start text-lg md:text-2xl">
				be part of the biggest{' '}
				<span className="font-bold">web3 learning hub</span> - <br /> because{' '}
				<span className="font-bold">knowledge is power</span>
			</p>
		</section>
	)
}
