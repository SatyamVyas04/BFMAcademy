import { IconLocationBolt } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const getRandomAmplitude = (index: number) => {
	return 10 + ((index * 5) % 25)
}

const getRandomDuration = (index: number) => {
	return 2 + ((index * 4) % 10)
}

interface MouseBadgeProps {
	text: string
	color: string
	arrowPos: string
	badgePos: string
	index: number
}

export const MouseBadge = ({
	text,
	color,
	arrowPos,
	badgePos,
	index,
}: MouseBadgeProps) => {
	const amplitude = getRandomAmplitude(index)
	const duration = getRandomDuration(index)

	return (
		<motion.div
			className={`absolute ${badgePos}`}
			initial={{ x: 0, y: 0 }}
			animate={{
				x: [0, amplitude, 0, -amplitude, 0],
				y: [0, 0, amplitude, 0, -amplitude, 0],
			}}
			transition={{
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: duration,
					ease: 'easeInOut',
				},
				y: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: duration,
					ease: 'easeInOut',
				},
			}}
		>
			<div
				className="relative rounded-full px-4 py-1 text-xs font-semibold capitalize text-black xl:text-lg"
				style={{ backgroundColor: color }}
			>
				{text}
				<IconLocationBolt
					className={`absolute text-2xl ${arrowPos}`}
					style={{ color: color }}
				/>
			</div>
		</motion.div>
	)
}
