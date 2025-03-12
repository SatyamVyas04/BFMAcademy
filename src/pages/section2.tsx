import Image from 'next/image'

export default function Section2() {
	return (
		<section className="mx-auto my-4 flex max-w-md flex-col items-center justify-between space-y-4 py-8 sm:py-10 md:grid md:w-full md:max-w-none md:grid-cols-[60%_40%] md:space-y-8">
			<div>
				<Image
					src="/page/section2.png"
					alt="Image describing the vision of BFM Academy"
					height={2800}
					width={2800}
					className="h-full w-full rounded-lg md:rounded-xl"
				/>
			</div>
			<div className="items-between flex flex-col justify-between space-y-6 py-4 text-center md:text-end">
				<h1 className="text-3xl font-bold uppercase text-brandblue dark:text-foreground md:-mt-8 md:text-5xl lg:text-7xl">
					Forget Outdated Textbooks
				</h1>
				<div className="md:ml-auto">
					<hr className="mx-auto my-2 w-full max-w-80 border-2 border-foreground md:ml-auto md:max-w-sm" />
					<p className="relative z-30 w-full max-w-sm px-8 text-sm md:ml-auto md:px-0 md:text-base">
						<span className="text-lg font-bold">BFM Academy</span> is where
						education meets innovation. Earn crypto, own your knowledge with NFT
						credentials and be part of the next-gen learning revolution.
					</p>
				</div>
			</div>
		</section>
	)
}
