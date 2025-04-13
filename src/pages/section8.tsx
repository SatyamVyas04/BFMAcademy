'use client'
import React from 'react'
import { MouseBadge } from '@/components/ui/mouseBadge'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'

const people = [
	{
		id: 1,
		name: 'John Doe',
		designation: 'Software Engineer',
		image:
			'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
	},
	{
		id: 2,
		name: 'Robert Johnson',
		designation: 'Product Manager',
		image:
			'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 3,
		name: 'Jane Smith',
		designation: 'Data Scientist',
		image:
			'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 4,
		name: 'Emily Davis',
		designation: 'UX Designer',
		image:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 5,
		name: 'Tyler Durden',
		designation: 'Soap Developer',
		image:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
	},
	{
		id: 6,
		name: 'Dora',
		designation: 'The Explorer',
		image:
			'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
	},
]

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
			<div className="relative h-full min-h-80 w-full rounded-lg bg-brandblue/25 md:rounded-xl">
				<div className="flex h-full w-full flex-row items-center justify-center md:scale-110 lg:scale-125 xl:scale-150">
					<AnimatedTooltip items={people} />
				</div>
				<MouseBadge
					text="Satyam"
					color="#37c0f8"
					badgePos="bottom-8 left-8 xl:bottom-16 xl:left-16"
					arrowPos="-top-5 -right-5"
					index={1}
				/>
				<MouseBadge
					text="Mathew"
					color="#fe7689"
					badgePos="right-8 bottom-8 xl:right-16 xl:bottom-16"
					arrowPos="-top-5 -left-5 rotate-[270deg]"
					index={2}
				/>
				<MouseBadge
					text="Velma"
					color="#fdce0f"
					badgePos="top-8 right-8 xl:top-16 xl:right-16"
					arrowPos="-bottom-5 -left-5 rotate-[180deg]"
					index={3}
				/>
				<MouseBadge
					text="Jake"
					color="#e976f3"
					badgePos="left-8 top-8 xl:left-16 xl:top-16"
					arrowPos="-bottom-5 -right-5 rotate-[90deg]"
					index={4}
				/>
			</div>
		</section>
	)
}
