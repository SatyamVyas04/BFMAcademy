'use client'
import React from 'react'

export default function Ticker() {
	return (
		<>
			<style jsx>{`
				@keyframes ticker {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-100%);
					}
				}

				.animate-ticker {
					animation: ticker 15s linear infinite;
				}
			`}</style>
			<div className="relative mt-2 overflow-hidden whitespace-nowrap bg-brandblue py-1 text-white">
				<div className="animate-ticker flex">
					{Array(20)
						.fill('Live Classes Launching Soon ★')
						.map((text, i) => (
							<span key={i} className="mx-1">
								{text}
							</span>
						))}
				</div>
			</div>
		</>
	)
}
