'use client'

import { BlurFade } from '@/components/magicui/blur-fade'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Type definitions for better TypeScript support
type ImageInfo = {
	id: string
	number: number
	path: string
	altText: string
}

type MasonryGalleryProps = {
	images: ImageInfo[]
}

export default function MasonryGallery({ images }: MasonryGalleryProps) {
	const [columns, setColumns] = useState(4) // Default to 4 columns

	// Update columns based on screen width
	useEffect(() => {
		const updateColumns = () => {
			if (window.innerWidth < 640) {
				setColumns(1) // Mobile: 1 column
			} else if (window.innerWidth < 768) {
				setColumns(2) // Small screens: 2 columns
			} else if (window.innerWidth < 1024) {
				setColumns(3) // Medium screens: 3 columns
			} else {
				setColumns(4) // Large screens: 4 columns
			}
		}

		// Set initial columns
		updateColumns()

		// Add resize listener
		window.addEventListener('resize', updateColumns)

		// Clean up
		return () => window.removeEventListener('resize', updateColumns)
	}, [])

	// Create column arrays for even distribution by height
	// This is a better masonry layout algorithm that keeps the original order
	// but distributes images more evenly across columns
	const distributeImagesEvenly = (
		imageArray: ImageInfo[],
		columnCount: number,
	) => {
		// Initialize arrays for each column
		const cols = Array.from({ length: columnCount }, () => [] as ImageInfo[])

		// Process images in order (updated-events first, then event-archive)
		// Use a "greedy" approach - always add to the shortest column
		imageArray.forEach((image) => {
			// Find the column with the fewest items
			const shortestColIndex = cols
				.map((col, index) => ({ index, length: col.length }))
				.sort((a, b) => a.length - b.length)[0].index

			// Add the image to the shortest column
			cols[shortestColIndex].push(image)
		})

		return cols
	}

	// Distribute images across columns evenly
	const columnArrays = distributeImagesEvenly(images, columns)

	return (
		<div className="flex w-full gap-4">
			{columnArrays.map((column, columnIndex) => (
				<div
					key={`column-${columnIndex}`}
					className="flex flex-1 flex-col gap-4"
				>
					{column.map((imageInfo, imageIndex) => {
						// Calculate delay based on position for staggered animation
						const overallIndex = columnIndex + imageIndex * columns
						return (
							<BlurFade
								key={imageInfo.id}
								delay={columnIndex * 0.025}
								direction="up"
								inView={true}
								className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
							>
								<Image
									height={800}
									width={800}
									src={`${imageInfo.path}${imageInfo.number}.jpg`}
									alt={imageInfo.altText}
									className="h-auto w-full bg-brandblue/10 object-cover"
									priority={overallIndex < 12}
								/>
							</BlurFade>
						)
					})}
				</div>
			))}
		</div>
	)
}
