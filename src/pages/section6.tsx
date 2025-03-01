import Image from 'next/image'

export default function Section6() {
	return (
		<section className="mx-auto flex max-w-lg flex-col items-center justify-evenly space-y-4 py-4 md:w-full md:max-w-none md:flex-row md:items-center md:gap-32 md:space-y-8">
			<div className="h-60 w-60 overflow-hidden rounded-lg bg-brandblue md:h-96 md:w-96 md:rounded-xl xl:h-[500px] xl:w-[500px]">
				<Image
					src="/page/section6.png"
					alt="Image describing the vision of BFM Academy"
					height={2400}
					width={2400}
					className="h-full w-full object-cover"
				/>
			</div>

			<div className="items-between flex flex-col justify-between space-y-6 text-center md:text-start">
				<h1 className="text-5xl font-bold uppercase lg:text-8xl">
					What <br />
					can you <br /> learn?
				</h1>
				<div className="w-full md:mr-auto">
					<div className="relative z-30 w-full px-4 text-sm md:mr-auto md:px-0 md:text-base">
						<strong className="my-6 text-xl tracking-wide">
							Web3 &amp; Blockchain Mastery
						</strong>
						<div className="mt-2 text-sm">
							NFTs, DAOs, DeFi and everything decentralization
						</div>
						<hr className="border-1 mx-auto my-2 w-full max-w-80 border-muted-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-xl tracking-wide">
							Smart Contracts &amp; Solidity
						</strong>
						<div className="mt-2 text-sm">Code the backbone of Web3 apps</div>
						<hr className="border-1 mx-auto my-2 w-full max-w-80 border-muted-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-xl tracking-wide">
							Metaverse &amp; AI Integration
						</strong>
						<div className="mt-2 text-sm">
							Be part of the digital revolution
						</div>
						<hr className="border-1 mx-auto my-2 w-full max-w-80 border-muted-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-xl tracking-wide">
							Crypto Investing &amp; Tokenomics
						</strong>
						<div className="mt-2 text-sm">
							Learn the strategies behind Web3 wealth
						</div>
						<hr className="border-1 mx-auto my-2 w-full max-w-80 border-muted-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-xl tracking-wide">
							Cybersecurity &amp; Ethical Hacking
						</strong>
						<div className="mt-2 text-sm">
							Protect your assets &amp; blockchain networks
						</div>
						<hr className="border-1 mx-auto my-2 w-full max-w-80 border-muted-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-xl tracking-wide">
							NFT &amp; Digital Artistry
						</strong>
						<div className="mt-2 text-sm">
							Create &amp; market your own NFT collection
						</div>
						<hr className="border-1 mx-auto my-2 w-full max-w-80 border-muted-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-xl tracking-wide">
							Web3 Marketing &amp; Growth Hacking
						</strong>
						<div className="mt-2 text-sm">Dominate Web3 startup success</div>
					</div>
				</div>
			</div>
		</section>
	)
}
