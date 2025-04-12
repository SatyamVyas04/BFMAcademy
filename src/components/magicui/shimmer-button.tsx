import React, { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<'button'> {
	shimmerColor?: string
	shimmerSize?: string
	borderRadius?: string
	shimmerDuration?: string
	background?: string
	className?: string
	children?: React.ReactNode
}

export const ShimmerButton = React.forwardRef<
	HTMLButtonElement,
	ShimmerButtonProps
>(
	(
		{
			shimmerColor = '#ffffff',
			shimmerSize = '0.1em',
			shimmerDuration = '4s',
			borderRadius = '0.5rem',
			background = '#212AFF',
			className,
			children,
			...props
		},
		ref,
	) => {
		return (
			<button
				style={
					{
						'--spread': '90deg',
						'--shimmer-color': shimmerColor,
						'--radius': borderRadius,
						'--speed': shimmerDuration,
						'--cut': shimmerSize,
						'--bg': background,
					} as CSSProperties
				}
				className={cn(
					'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-none border-white/10 bg-brandblue px-6 py-2 text-base text-white [border-radius:var(--radius)] dark:text-white',
					'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
					className,
				)}
				ref={ref}
				{...props}
			>
				{/* spark container */}
				<div
					className={cn(
						'-z-30 blur-[1px]',
						'absolute inset-0 overflow-visible [container-type:size]',
					)}
				>
					{/* spark */}
					<div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
						{/* spark before */}
						<div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
					</div>
				</div>
				<div className="p-[1.75] text-sm">{children}</div>

				{/* Highlight */}
				<div
					className={cn(
						'absolute inset-0 size-full',

						'rounded-lg px-4 py-2 shadow-[inset_0_-px_10px_#212AFF]',

						// transition
						'transform-gpu transition-all duration-300 ease-in-out',

						// on hover
						'group-hover:shadow-[inset_0_-px_10px_#ffffff3f]',
					)}
				/>

				{/* backdrop */}
				<div
					className={cn(
						'absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]',
					)}
				/>
			</button>
		)
	},
)

ShimmerButton.displayName = 'ShimmerButton'
