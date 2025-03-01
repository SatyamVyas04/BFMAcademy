export default function Section8() {
	return (
		<section className="my-12 grid grid-cols-1 md:grid-cols-2">
			<div>
				<h1 className="relative z-10 max-w-3xl p-4 text-center text-5xl font-bold uppercase md:text-start md:text-7xl">
					Meet Our Qualified Experts
				</h1>
				<p className="relative z-10 px-4 py-2 text-lg md:text-start">
					We don&apos;t just teach Web3 – we help you build in Web3!
				</p>
				<ul className="relative z-10 mx-4 my-2 mt-0 space-y-1 md:mx-8">
					<li className="flex max-w-xl items-start justify-start gap-2">
						<span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
						<span className="text-base font-semibold md:text-lg">
							Learn from industry leaders who’ve built DAOs, scaled DeFi
							projects and shaped NFT ecosystems.
						</span>
					</li>
					<li className="flex max-w-xl items-start justify-start gap-2">
						<span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brandblue"></span>
						<span className="text-base font-semibold md:text-lg">
							Live masterclasses, AMAs and mentorship sessions with the best
							minds in the space!
						</span>
					</li>
				</ul>
				<p className="relative z-10 px-4 py-2 text-lg font-bold uppercase md:text-start">
					Be mentored by the pros. Become the next disruptor.
				</p>
			</div>
			<div className="h-full min-h-40 w-full rounded-lg bg-brandblue/25 md:rounded-xl"></div>
		</section>
	)
}
