import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PhoneCall } from 'lucide-react'
import Image from 'next/image'

export default function Section7() {
	return (
		<Card className="relative mt-6 min-h-96 w-full overflow-clip rounded-lg bg-zinc-100 pl-3 pt-1 text-brandblue transition-all hover:-translate-y-2 hover:shadow-xl md:rounded-xl">
			<div className="absolute inset-0 z-10 from-background/20 to-background dark:from-foreground/20 dark:to-foreground max-md:bg-gradient-to-b"></div>
			<h1 className="relative z-10 max-w-3xl p-4 text-center text-3xl font-bold uppercase md:text-start md:text-5xl lg:text-7xl">
				INCUBATION & PROJECT LAUNCH SUPPORT
			</h1>
			<Image
				src="/page/section7.png"
				height={1200}
				width={1200}
				alt="Avatars"
				className="absolute right-0 top-0 z-0 h-full w-fit object-cover max-xl:opacity-20"
				style={{
					maskImage: 'linear-gradient(to right, transparent, black 30%)',
				}}
			/>
			<p className="relative z-10 px-4 py-2 text-lg md:text-start">
				We don&apos;t just teach Web3 - we help you build in Web3!
			</p>
			<ul className="relative z-10 mx-4 my-2 mt-0 space-y-1 pb-6 md:mx-8">
				<li className="flex max-w-xl items-start justify-start gap-2">
					<span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
					<span className="text-base md:text-lg">
						Have a Web3 startup idea? We got you.
					</span>
				</li>
				<li className="flex max-w-xl items-start justify-start gap-2">
					<span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
					<span className="text-base md:text-lg">
						Funding, mentorship and community backing for emerging founders.
					</span>
				</li>
				<li className="flex max-w-xl items-start justify-start gap-2">
					<span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
					<span className="text-base md:text-lg">
						Launch your project with our network of investors, DAOs and
						blockchain accelerators.
					</span>
				</li>
				<li className="flex max-w-xl items-start justify-start gap-2">
					<Button className="group mt-4 rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
						<PhoneCall
							className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
							size={24}
						/>
						<a
							href="https://calendly.com/bfmacademy/"
							className="translate-x-[-12px] transition-all group-hover:translate-x-0"
							aria-label="Contact BFM Academy"
							target="_blank"
						>
							Book a Call
						</a>
					</Button>
				</li>
			</ul>
		</Card>
	)
}
