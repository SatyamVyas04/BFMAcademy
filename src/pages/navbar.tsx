import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Navbar() {
	return (
		<nav className="mb-16 flex flex-row items-center justify-between md:mb-4">
			<div className="flex flex-row items-center gap-2 md:gap-4">
				<Image
					src="/page/logo-light.png"
					alt="Logo"
					width={500}
					height={500}
					className="h-8 w-8 dark:hidden md:h-12 md:w-12"
				/>
				<Image
					src="/page/logo-dark.png"
					alt="Logo"
					width={500}
					height={500}
					className="hidden h-8 w-8 dark:block md:h-12 md:w-12"
				/>
				<h1 className="text-lg font-bold md:text-3xl">academy</h1>
			</div>
			<div className="flex flex-row items-center justify-between space-x-1 md:space-x-2">
				<ModeToggle />
				<Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/90">
					<span className="translate-x-[12px] transition-all group-hover:translate-x-0">
						Enroll Now
					</span>
					<ArrowRight
						className="relative right-12 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
						size={24}
					/>
				</Button>
			</div>
		</nav>
	)
}
