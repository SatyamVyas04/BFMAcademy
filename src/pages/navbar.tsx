import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function Navbar() {
	const theme = useTheme().theme
	return (
		<nav className="flex flex-row items-center justify-between">
			<div className="flex flex-row items-center gap-2">
				<Image
					src={
						theme === 'light' ? `/page/logo-light.png` : '/page/logo-dark.png'
					}
					alt="Logo"
					width={500}
					height={500}
					className="h-8 w-8 md:h-12 md:w-12"
				/>
				<h1 className="text-lg font-bold md:text-2xl">academy</h1>
			</div>
			<Button className="rounded-full bg-brandblue hover:bg-brandblue/75">
				Enroll Now
			</Button>
		</nav>
	)
}
