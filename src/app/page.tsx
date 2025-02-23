import Image from 'next/image'

export default function Home() {
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
			<main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={400}
					height={38}
					priority
				/>
				<h1 className="mx-auto text-3xl font-bold">BFM Academy v1</h1>
			</main>
		</div>
	)
}
