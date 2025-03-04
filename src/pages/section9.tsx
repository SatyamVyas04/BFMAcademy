import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { IconBrandApple, IconBrandGooglePlay } from '@tabler/icons-react'
import Image from 'next/image'

export default function Section9() {
	return (
		<Card className="relative my-12 mb-4 min-h-96 w-full overflow-clip rounded-lg bg-brandblue text-zinc-100 transition-all hover:-translate-y-2 hover:shadow-xl md:rounded-xl">
			<div className="ml-auto max-w-3xl">
				<h1 className="relative z-10 p-4 text-center text-5xl font-bold uppercase md:ml-auto md:text-start md:text-7xl">
					Learn <br /> anytime, <br /> anywhere.
				</h1>
				<div className="relative z-10 p-4 pt-0 text-center font-bold md:max-w-xl md:text-start">
					Interactive courses, quizzes and blockchain-powered credentials – all
					in your pocket
				</div>
				<div className="relative z-10 flex flex-row items-center gap-2 px-4 max-md:flex-wrap md:w-fit md:justify-start md:px-0">
					<Button className="group w-full rounded-full bg-white text-black hover:bg-white/90">
						<IconBrandApple
							className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
							size={24}
						/>
						<span className="translate-x-[-12px] transition-all group-hover:translate-x-0">
							Download from the App Store
						</span>
					</Button>
					<Button className="group w-full rounded-full bg-white text-black hover:bg-white/90">
						<IconBrandGooglePlay
							className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
							size={24}
						/>
						<span className="translate-x-[-12px] transition-all group-hover:translate-x-0">
							Get it from Google Play
						</span>
					</Button>
				</div>
			</div>
			<Image
				src="/page/section9.png"
				height={1200}
				width={1200}
				alt="Image of a lady holding a laptop"
				className="absolute left-0 top-0 z-0 h-full w-fit object-cover max-lg:opacity-25"
			/>
		</Card>
	)
}
