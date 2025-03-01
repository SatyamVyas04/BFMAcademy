import { Button } from '@/components/ui/button'
import { IconBrandTelegram } from '@tabler/icons-react'
import Image from 'next/image'

export default function Hero() {
	return (
		<section className="mx-auto flex flex-col">
			<div className="space-y-6 pt-12 sm:space-y-8 md:hidden">
				<div className="items-center space-y-3 text-center sm:space-y-5">
					<h1 className="space-y-3 text-xl sm:space-y-5">
						Welcome to <br />
						<span className="text-3xl font-bold sm:text-5xl">BFM ACADEMY</span>
						<hr className="mx-auto w-36 border-2 border-foreground" />
					</h1>
					<p>where web3 wizards are made!</p>
				</div>
				<Image
					src="/page/section1.jpeg"
					width={1200}
					height={1200}
					alt="A web3 student on his computer"
					className="mx-auto w-full max-w-md rounded-lg"
				/>
				<div className="mx-auto w-full max-w-md space-y-3 rounded-xl bg-zinc-200/25 px-4 py-12 text-center backdrop-blur-sm sm:space-y-5 sm:px-16">
					<h1 className="text-2xl">
						<span className="font-bold">learn.</span> earn.{' '}
						<span className="font-bold">own.</span> repeat
					</h1>
					<Button className="group w-full rounded-full bg-white text-black hover:bg-white/90">
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
				<Image
					src="/page/section1-clip.png"
					width={2400}
					height={2400}
					alt="A web3 student on his computer"
					className="relative -z-10 h-fit max-h-[85dvh] w-full rounded-xl object-cover object-bottom"
				/>
				<div className="absolute bottom-2 flex w-full flex-1 flex-row items-start justify-stretch px-2 lg:bottom-10 lg:px-10">
					<div className="w-full space-y-3 self-end sm:space-y-4">
						<h1 className="space-y-3 text-xl sm:space-y-5 lg:text-4xl">
							Welcome to <br />
							<span className="text-3xl font-bold text-brandblue dark:text-foreground sm:text-6xl">
								BFM ACADEMY
							</span>
							<hr className="w-60 border-2 border-foreground text-xl" />
						</h1>
						<p>where web3 wizards are made!</p>
					</div>
					<div className="mx-auto w-full space-y-3 rounded-xl bg-black/50 p-12 px-16 text-center text-white backdrop-blur-sm sm:space-y-5">
						<h1 className="text-2xl sm:text-3xl">
							<span className="font-bold">learn.</span> earn.{' '}
							<span className="font-bold">own.</span> repeat
						</h1>
						<Button className="group w-full rounded-full bg-white text-black hover:bg-white/90">
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
