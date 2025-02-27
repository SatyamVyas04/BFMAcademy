import Image from 'next/image'

export default function Section2() {
	return (
		<section className="mx-auto flex max-w-md flex-col items-center justify-between space-y-4 py-8 sm:py-10 md:w-full md:max-w-none md:flex-row md:items-stretch md:space-y-8">
			<div>
				<Image
					src="/page/section2.jpeg"
					alt="Image describing the vision of BFM Academy"
					height={2400}
					width={2400}
					className="h-full w-full rounded-lg md:rounded-xl"
				/>
			</div>
			<div className="items-between flex flex-col justify-between space-y-6 py-4 text-center md:text-end">
				<h1 className="text-3xl font-bold uppercase md:text-5xl lg:text-7xl">
					Forget Outdated Textbooks
				</h1>
				<div className="md:ml-auto">
					<hr className="my-2 w-full max-w-sm border-2 border-foreground md:ml-auto" />
					<p className="w-full max-w-sm text-sm md:ml-auto md:text-base">
						<span className="text-lg font-bold">BFM Academy</span> is where
						education meets innovation. Earn crypto, own your knowledge with NFT
						credentials and be part of the next-gen learning revolution.
					</p>
				</div>
			</div>
		</section>
	)
}
