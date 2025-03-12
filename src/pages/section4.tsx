import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconBrandDiscord, IconBrandTelegram } from '@tabler/icons-react'
import Image from 'next/image'

export default function Section4() {
	return (
		<section className="my-12 space-y-3 pb-4 md:space-y-6 xl:my-12 xl:space-y-8">
			<p className="text-end text-lg md:text-2xl">
				it is not just a platform - <br />{' '}
				<span className="font-bold">it&apos;s a movement</span>
			</p>
			<div className="flex flex-row flex-wrap items-center justify-center gap-4 xl:gap-12">
				<Card className="relative h-[420px] w-80 overflow-clip rounded-xl border-none bg-zinc-900 text-foreground shadow-brandblue transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-brandblue dark:text-background">
					<CardHeader className="p-3">
						<Image
							src="/page/section4-1.png"
							alt="Card Image"
							width={600}
							height={600}
							className="h-80 rounded-lg object-cover object-center"
						/>
					</CardHeader>
					<CardContent>
						<CardTitle className="mt-2 text-center font-normal uppercase text-zinc-100">
							Network with{' '}
							<span className="font-bold">
								100k+ Learners, Builders & Blockchain Pros
							</span>
						</CardTitle>
					</CardContent>
				</Card>
				<Card className="relative h-[420px] w-80 overflow-clip rounded-xl border-none bg-zinc-900 text-foreground shadow-brandblue transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-brandblue dark:text-background">
					<CardHeader className="text-lg font-bold">
						<CardTitle className="relative z-10 mt-2 text-center font-normal uppercase text-zinc-100">
							<div>
								Join <span className="font-bold">Discord & Telegram</span> for
								Daily <span className="font-bold">Web3 Discussions</span>
							</div>
							<div className="my-2 flex w-full flex-row items-center justify-center gap-2">
								<IconBrandDiscord className="h-6 w-6" />
								<IconBrandTelegram className="h-6 w-6" />
							</div>
						</CardTitle>
					</CardHeader>
					<CardContent className="absolute bottom-0 p-0">
						<Image
							src="/page/section4-2.png"
							alt="Card Image"
							width={600}
							height={600}
							className="h-80 w-full object-cover object-center"
						/>
					</CardContent>
				</Card>
				<Card className="relative h-[420px] w-80 overflow-clip rounded-xl border-none bg-zinc-900 text-foreground shadow-brandblue transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-brandblue dark:text-background">
					<CardHeader className="p-3">
						<Image
							src="/page/section4-3.png"
							alt="Card Image"
							width={600}
							height={600}
							className="h-80 rounded-lg object-cover object-center"
						/>
					</CardHeader>
					<CardContent>
						<CardTitle className="mt-2 text-center font-normal uppercase text-zinc-100">
							Participate in{' '}
							<span className="font-bold">
								Live AMAS, Hackathons & Web3 Meet-ups
							</span>
						</CardTitle>
					</CardContent>
				</Card>
			</div>
			<p className="text-center text-lg md:text-start md:text-2xl">
				be part of the biggest{' '}
				<span className="font-bold">web3 learning hub</span> -{' '}
				<br className="max-md:hidden" /> because{' '}
				<span className="font-bold">knowledge is power</span>
			</p>
		</section>
	)
}
