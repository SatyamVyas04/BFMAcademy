import Image from 'next/image'

export default function Section3() {
	return (
		<section className="relative z-0 my-4 md:-mt-48">
			<Image
				src="/page/section3-bg.png"
				width={2400}
				height={2400}
				alt="Vector png"
				className="relative z-10 ml-auto hidden max-w-4xl rounded-2xl md:translate-y-44 dark:md:block"
			/>
			<Image
				src="/page/section3-bg-light.png"
				width={2400}
				height={2400}
				alt="Vector png"
				className="relative z-10 ml-auto hidden max-w-4xl rounded-2xl md:block md:translate-y-44 dark:md:hidden"
			/>
			<div className="relative my-4 flex h-96 w-full flex-col rounded-lg bg-foreground p-2 px-6 dark:bg-brandblue md:items-start md:justify-end md:rounded-xl">
				<h1 className="text-5xl font-bold uppercase text-background dark:text-foreground md:text-7xl lg:text-9xl">
					JOIN THE
				</h1>
				<Image
					src="/page/section3.png"
					width={2400}
					height={2400}
					alt="A person wearing vr glasses"
					className="absolute bottom-0 right-0 z-20 h-[300px] w-fit rounded-br-xl md:h-[600px]"
				/>
			</div>
			<h1 className="px-3 text-end text-5xl font-bold uppercase tracking-wide text-brandblue dark:text-foreground md:-translate-y-4 md:text-start md:text-7xl lg:text-9xl">
				BFM Community
			</h1>
		</section>
	)
}
