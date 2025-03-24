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
					<Button className="group relative w-full rounded-full bg-white text-black hover:bg-white/90">
						<IconBrandApple size={24} />
						<span className="ml-2 transition-opacity duration-200 group-hover:opacity-0">
							Download from the App Store
						</span>
						<span className="absolute right-8 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
							Coming Soon on App Store
						</span>
					</Button>

					<Button className="group relative w-full rounded-full bg-white text-black hover:bg-white/90">
						<IconBrandGooglePlay size={24} />
						<span className="ml-2 transition-opacity duration-200 group-hover:opacity-0">
							Download from the Play Store
						</span>
						<span className="absolute right-8 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
							Coming Soon on Play Store
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
