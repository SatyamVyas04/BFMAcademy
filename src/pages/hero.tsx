'use client'
import { IconBrandTelegram } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
	return (
		<section className="mx-auto flex flex-col">
			<div className="space-y-6 sm:space-y-8 md:hidden">
				<div className="items-center space-y-3 text-center sm:space-y-5">
					<h1 className="space-y-3 text-xl sm:space-y-5">
						Welcome to <br />
						<span className="text-3xl font-bold sm:text-5xl">BFM ACADEMY</span>
						<hr className="mx-auto w-36 border-2 border-foreground" />
					</h1>
					<p>where web3 wizards are made!</p>
				</div>
				<div className="relative h-[400px] w-full rounded-xl">
					<div className="h-full w-full overflow-hidden rounded-xl">
						<Image
							src="/page/carousel-mob.png"
							width={1200}
							height={1200}
							alt="Carousel Image"
							className="h-full w-full object-cover"
							priority={true}
						/>
					</div>
				</div>
				<div className="mx-auto w-full max-w-md space-y-3 rounded-xl bg-zinc-200/25 px-4 py-12 text-center backdrop-blur-sm sm:space-y-5 sm:px-16">
					<h1 className="text-2xl uppercase">
						<span className="font-bold">learn.</span> earn.{' '}
						<span className="font-bold">own.</span> repeat
					</h1>
					<Button className="group w-full rounded-full bg-brandblue text-white py-5 hover:bg-brandblue/90">
						<IconBrandTelegram
							className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
							size={24}
						/>
						<span className="translate-x-[-12px] transition-all group-hover:translate-x-0">
							Join Telegram Community
						</span>
					</Button>
				</div>
			</div>
			<div className="relative mt-4 hidden space-y-12 md:block">
				<div className="relative w-full rounded-3xl">
					<Image
						src="/page/carousel.png"
						width={1200}
						height={1200}
						alt="Carousel Image"
						className="h-full w-full object-cover object-bottom"
						priority={true}
					/>
				</div>

				<div className="absolute bottom-10 flex w-full flex-1 flex-row items-start justify-stretch px-2 lg:px-6 lg:pr-10">
					<div className="w-full space-y-3 self-end sm:space-y-4">
						<h1 className="space-y-3 text-xl sm:space-y-5 md:text-2xl xl:text-4xl">
							Welcome to <br />
							<span className="text-3xl font-bold text-brandblue dark:text-foreground md:text-4xl xl:text-6xl">
								BFM ACADEMY
							</span>
							<hr className="w-60 border-2 border-foreground text-xl" />
						</h1>
						<p>where web3 wizards are made!</p>
					</div>
					<div className="mx-auto w-full space-y-3 rounded-xl bg-black/50 p-12 px-16 text-center text-white backdrop-blur-sm sm:space-y-5">
						<h1 className="text-2xl uppercase sm:text-3xl">
							<span className="font-bold">learn.</span> earn.{' '}
							<span className="font-bold">own.</span> repeat
						</h1>
						<Button className="group w-full rounded-full bg-brandblue py-6 text-white hover:bg-brandblue/90">
							<IconBrandTelegram
								className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
								size={24}
							/>
							<span className="translate-x-[-12px] transition-all group-hover:translate-x-0">
								Join Telegram Community
							</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
