import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Section7() {
	return (
		<Card className="relative min-h-96 w-full overflow-clip rounded-lg bg-zinc-100 text-brandblue transition-all hover:-translate-y-2 hover:shadow-xl max-md:-mt-12 md:rounded-xl">
			<h1 className="relative z-10 max-w-3xl p-4 text-center text-5xl font-bold uppercase md:text-start md:text-7xl">
				INCUBATION & PROJECT LAUNCH SUPPORT
			</h1>
			<Image
				src="/page/section7.png"
				height={1200}
				width={1200}
				alt="Avatars"
				className="absolute right-0 top-0 z-0 h-full w-fit object-cover max-md:opacity-25"
			/>
			<p className="relative z-10 px-4 py-2 text-center text-lg md:text-start">
				We don&apos;t just teach Web3 – we help you build in Web3!
			</p>
			<ul className="relative z-10 mx-4 my-2 mt-0 space-y-1 pb-6 md:mx-8">
				<li className="flex items-center justify-start gap-2">
					<span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
					<span className="text-base md:text-lg">
						Have a Web3 startup idea? We got you.
					</span>
				</li>
				<li className="flex items-center justify-start gap-2">
					<span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
					<span className="text-base md:text-lg">
						Funding, mentorship and community backing for emerging founders.
					</span>
				</li>
				<li className="flex items-center justify-start gap-2">
					<span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
					<span className="text-base md:text-lg">
						Launch your project with our network of investors, DAOs and
						blockchain accelerators.
					</span>
				</li>
			</ul>
		</Card>
	)
}
