import Image from 'next/image'

export default function Section6() {
	return (
		<section className="mx-auto my-4 flex max-w-md flex-col items-center justify-evenly space-y-4 py-8 sm:py-10 md:w-full md:max-w-none md:flex-row md:items-stretch md:space-y-8">
			<div>
				<Image
					src="/page/section6.png"
					alt="Image describing the vision of BFM Academy"
					height={2400}
					width={2400}
					className="relative -z-10 h-full w-full rounded-lg object-cover max-md:-mt-16 max-md:aspect-square md:rounded-xl"
				/>
			</div>
			<div className="items-between flex flex-col justify-between space-y-6 py-4 text-center max-md:-translate-y-16 md:text-start">
				<h1 className="text-5xl font-bold uppercase md:-mt-8 lg:text-8xl">
					What <br />
					can you <br /> learn?
				</h1>
				<div className="space-y-3 md:mr-auto">
					<div className="relative z-30 w-full px-8 text-sm md:mr-auto md:px-0 md:text-base">
						<strong className="my-6 text-2xl tracking-wide">
							Web3 &amp; Blockchain Mastery
						</strong>
						<div className="mt-2">
							NFTs, DAOs, DeFi and everything decentralization
						</div>
						<hr className="mx-auto my-2 w-full max-w-80 border-2 border-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-2xl tracking-wide">
							Smart Contracts &amp; Solidity
						</strong>
						<div className="mt-2">Code the backbone of Web3 apps</div>
						<hr className="max-w-80mx-auto w-fullmd:mx-0 my-2 border-2 border-foreground md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-2xl tracking-wide">
							Metaverse &amp; AI Integration
						</strong>
						<div className="mt-2">Be part of the digital revolution</div>
						<hr className="mx-auto my-2 w-full max-w-80 border-2 border-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-2xl tracking-wide">
							Crypto Investing &amp; Tokenomics
						</strong>
						<div className="mt-2">Learn the strategies behind Web3 wealth</div>
						<hr className="mx-auto my-2 w-full max-w-80 border-2 border-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-2xl tracking-wide">
							Cybersecurity &amp; Ethical Hacking
						</strong>
						<div className="mt-2">
							Protect your assets &amp; blockchain networks
						</div>
						<hr className="max-w-80mx-auto w-fullmd:mx-0 my-2 border-2 border-foreground md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-2xl tracking-wide">
							NFT &amp; Digital Artistry
						</strong>
						<div className="mt-2">
							Create &amp; market your own NFT collection
						</div>
						<hr className="mx-auto my-2 w-full max-w-80 border-2 border-foreground md:mx-0 md:mr-auto md:max-w-sm md:-translate-x-12" />
						<strong className="my-6 text-2xl tracking-wide">
							Web3 Marketing &amp; Growth Hacking
						</strong>
						<div className="mt-2">Dominate Web3 startup success</div>
					</div>
				</div>
			</div>
		</section>
	)
}
