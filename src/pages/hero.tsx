/* eslint-disable react-hooks/exhaustive-deps */

'use client'
import { useState, useEffect, SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconBrandTelegram } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const images = [
	'/page/carousel/1.jpeg',
	'/page/carousel/2.jpeg',
	'/page/carousel/3.jpeg',
	'/page/carousel/4.jpeg',
	'/page/carousel/5.jpeg',
	'/page/carousel/6.jpeg',
	'/page/carousel/7.jpeg',
	'/page/carousel/8.jpeg',
]

const placeholders = [
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNwldIMNTFNs7RVYpBm2NI3/+2G75lW4YZ8Fgz/X/4/NOeVLIOojYobAP7vDk15qFD7AAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMoWtB44P/rDR9vMcirM+gzMCiHeTOoqDIoqAIAl+IIgPhVKakAAAAASUVORK5CYII=',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGM4fuDk/7//SismhAanMVw7dfzAgVMmFhHCDAwMWb6eMxrq5JnYHWX4AZjgEIiE8qg7AAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMwFxeamWS6vEU6mMGWIVLB5Med0P9/Cv7djWBQZ9BeGVq4s6Cg0d4NABSvDzvh4d5IAAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMIi4j4+eXz/18/LC0tGaytLZa3lSzvKPP39WBgYGBQVlKSlpJiYGAAAFhwDRG9nwC9AAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPQ0DFX0XGUkNNXUdNhCAwKe3PrwPrFM+SU1BmUleT/fzy8dWE7CysbANkfDMtt3R++AAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMwcQu4////nX//jZy9GIRl5H2jk888e5fbMYmBQ0hYVFapsLRl7uxlAF2WEIkWy4cIAAAAAElFTkSuQmCC',
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ACUAANKjSrx3GXwxAAAmAADrr0f/8ob6oU0AMyAAjW1B/dqn/9uSE70QvIuMS6gAAAAASUVORK5CYII=',
]

export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const [autoplayInterval, setAutoplayInterval] =
		useState<NodeJS.Timeout | null>(null)

	const startAutoplay = () => {
		if (autoplayInterval) clearInterval(autoplayInterval)
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 5000)
		setAutoplayInterval(interval)
	}

	useEffect(() => {
		startAutoplay()
		return () => {
			if (autoplayInterval) clearInterval(autoplayInterval)
		}
	}, [])

	const goToSlide = (index: SetStateAction<number>) => {
		setCurrentIndex(index)
		startAutoplay()
	}

	return (
		<section className="mx-auto flex flex-col">
			<div className="space-y-6 pt-12 sm:space-y-8 md:hidden">
				<div className="items-center space-y-3 text-center sm:space-y-5">
					<h1 className="space-y-3 text-xl sm:space-y-5">
						Welcome to <br />
						<span className="text-3xl font-bold sm:text-5xl">BFM ACADEMY</span>
						<hr className="mx-auto w-36 border-2 border-foreground" />
					</h1>
					<p>where web3 wizards are made!</p>
				</div>
				<div className="relative h-[400px] w-full rounded-xl">
					<div className="h-full w-full overflow-hidden rounded-xl">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{
									type: 'spring',
									stiffness: 150,
									damping: 20,
									duration: 0.5,
								}}
								className="h-full w-full"
							>
								<Image
									placeholder="blur"
									blurDataURL={placeholders[currentIndex]}
									src={images[currentIndex]}
									width={1200}
									height={1200}
									alt={`Image ${currentIndex + 1}`}
									className="h-full w-full object-cover"
								/>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Navigation Dots */}
					<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
						{images.map((_, index) => (
							<button
								key={index}
								className={`h-2 w-2 rounded-full transition-all ${
									currentIndex === index
										? 'w-8 bg-white'
										: 'bg-white bg-opacity-50 hover:bg-opacity-70'
								}`}
								onClick={() => goToSlide(index)}
							/>
						))}
					</div>
				</div>
				<div className="mx-auto w-full max-w-md space-y-3 rounded-xl bg-zinc-200/25 px-4 py-12 text-center backdrop-blur-sm sm:space-y-5 sm:px-16">
					<h1 className="text-2xl">
						<span className="font-bold">learn.</span> earn.{' '}
						<span className="font-bold">own.</span> repeat
					</h1>
					<Button className="group w-full rounded-full bg-white text-black hover:bg-white/90">
						<IconBrandTelegram
							className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
							size={24}
						/>
						<span className="translate-x-[-12px] transition-all group-hover:translate-x-0">
							Join Telegram Community
						</span>
					</Button>
				</div>
			</div>
			<div className="relative mt-4 hidden space-y-12 md:block">
				<div className="relative h-[85dvh] max-h-[800px] w-full rounded-3xl">
					<div
						className="h-full w-full rounded-3xl"
						style={{
							maskImage: 'url(/page/heroimageclip.png)',
							WebkitMaskImage: 'url(/page/heroimageclip.png)',
							maskSize: 'cover',
							WebkitMaskSize: 'cover',
							maskRepeat: 'no-repeat',
							WebkitMaskRepeat: 'no-repeat',
							maskPosition: 'bottom',
							WebkitMaskPosition: 'bottom',
						}}
					>
						<AnimatePresence mode="popLayout">
							<motion.div
								key={currentIndex}
								initial={{ x: '100%' }}
								animate={{ x: 0 }}
								exit={{ x: '-100%' }}
								transition={{
									type: 'spring',
									stiffness: 150,
									damping: 20,
									duration: 0.5,
									bounce: 0.25,
								}}
								className="h-full w-full"
							>
								<Image
									placeholder="blur"
									blurDataURL={placeholders[currentIndex]}
									src={images[currentIndex]}
									width={1200}
									height={1200}
									alt={`Image ${currentIndex + 1}`}
									className="h-full w-full object-cover"
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				<div className="absolute bottom-2 flex w-full flex-1 flex-row items-start justify-stretch px-2 lg:bottom-10 lg:px-6 lg:pr-10">
					<div className="w-full space-y-3 self-end sm:space-y-4">
						<div className="left-0 right-0 flex -translate-y-8 justify-start gap-2 px-2 lg:-translate-y-10 xl:-translate-y-14 2xl:-translate-y-16">
							{images.map((_, index) => (
								<button
									key={index}
									className={`h-2 w-2 rounded-full transition-all ${
										currentIndex === index
											? 'w-8 bg-white'
											: 'bg-white bg-opacity-50 hover:bg-opacity-70'
									}`}
									onClick={() => goToSlide(index)}
								/>
							))}
						</div>
						<h1 className="space-y-3 text-xl sm:space-y-5 md:text-2xl xl:text-4xl">
							Welcome to <br />
							<span className="text-3xl font-bold text-brandblue dark:text-foreground md:text-4xl xl:text-6xl">
								BFM ACADEMY
							</span>
							<hr className="w-60 border-2 border-foreground text-xl" />
						</h1>
						<p>where web3 wizards are made!</p>
					</div>
					<div className="mx-auto w-full space-y-3 rounded-xl bg-black/50 p-12 px-16 text-center text-white backdrop-blur-sm sm:space-y-5">
						<h1 className="text-2xl sm:text-3xl">
							<span className="font-bold">learn.</span> earn.{' '}
							<span className="font-bold">own.</span> repeat
						</h1>
						<Button className="group w-full rounded-full bg-white text-black hover:bg-white/90">
							<IconBrandTelegram
								className="relative left-12 opacity-0 transition-all group-hover:left-0 group-hover:opacity-100"
								size={24}
							/>
							<span className="translate-x-[-12px] transition-all group-hover:translate-x-0">
								Join Telegram Community
							</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
