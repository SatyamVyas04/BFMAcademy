import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
	const theme = useTheme().theme
	return (
		<nav className="flex flex-row items-center justify-between">
			<div className="flex flex-row items-center gap-2 md:gap-4">
				<Image
					src={
						theme === 'light' ? `/page/logo-light.png` : '/page/logo-dark.png'
					}
					alt="Logo"
					width={500}
					height={500}
					className="h-12 w-12"
				/>
				<h1 className="text-lg font-bold md:text-3xl">academy</h1>
			</div>
			<Button className="group rounded-full bg-brandblue text-white transition-all hover:bg-brandblue/75">
				<span className="translate-x-[12px] transition-all group-hover:translate-x-0">
					Enroll Now
				</span>
				<ArrowRight
					className="relative right-12 opacity-0 transition-all group-hover:right-0 group-hover:opacity-100"
					size={24}
				/>
			</Button>
		</nav>
	)
}
