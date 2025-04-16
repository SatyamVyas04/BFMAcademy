/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { ConnectButton } from 'thirdweb/react'
import Navbar from '@/pages/navbar'
import Footer from '@/pages/footer'
import { ArrowLeft, Verified } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { countries } from '@/lib/countries'
import { IconBrandLinkedin, IconDownload, IconShare } from '@tabler/icons-react'
import { toast } from 'sonner'

export function Ticker() {
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

// components/form/SuccessScreen.tsx
interface SuccessScreenProps {
	theme: string | undefined
	client: any
	welcomeScreen: {
		title: string
		subtitle: string
		img: {
			src: string
			width: number
			height: number
		}
	}
}

export function SuccessScreen({
	theme,
	client,
	welcomeScreen,
}: SuccessScreenProps) {
	return (
		<>
			<Ticker />
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 text-center md:p-6 lg:p-9 xl:p-12 xl:pt-4">
				<Navbar />
				<div className="my-12 flex min-h-[70dvh] items-stretch justify-center">
					<div className="relative grid w-full max-w-7xl place-items-center rounded-3xl border-2 border-brandblue bg-brandblue text-white">
						<div className="space-y-6 p-8 lg:p-12 xl:p-16">
							<h1 className="text-4xl font-bold">You are almost there!</h1>
							<p className="text-xl">
								Connect your Crypto Wallet &amp; earn BFM Tokens
							</p>
							<div className="mx-auto flex max-w-sm flex-col items-stretch justify-stretch gap-2">
								<ConnectButton
									client={client}
									connectButton={{
										label: 'Connect Wallet',
										className: 'connect-wallet',
									}}
									connectModal={{
										welcomeScreen: welcomeScreen,
										title: 'Get started with BFMAcademy',
										titleIcon: '/page/logo-blue.png',
										privacyPolicyUrl:
											'https://www.bfmacademy.in/privacy-policy',
										size: 'wide',
									}}
									theme={theme == 'dark' ? 'dark' : 'light'}
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	)
}

// components/form/WaitlistScreen.tsx
interface WaitlistScreenProps {
	setFormStatus: Dispatch<
		SetStateAction<'inProgress' | 'success' | 'waitlist' | 'certificate'>
	>
}

export function WaitlistScreen({ setFormStatus }: WaitlistScreenProps) {
	return (
		<>
			<Ticker />
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 text-center md:p-6 lg:p-9 xl:p-12 xl:pt-4">
				<Navbar />
				<div className="my-12 flex min-h-[70dvh] items-stretch justify-center">
					<div className="relative grid w-full max-w-7xl place-items-center rounded-3xl border-2 border-brandblue bg-brandblue">
						<div className="p-8 lg:p-12 xl:p-16">
							<div className="mb-16 flex flex-row items-center justify-center gap-4">
								<Image
									src="/page/logo-dark.png"
									alt="Logo"
									width={500}
									height={500}
									className="h-16 w-16"
								/>
								<h1 className="text-3xl font-bold text-white">academy</h1>
							</div>
							<h1 className="mb-2 text-4xl font-bold text-white">
								You are in the Waiting List
							</h1>
							<p className="mb-8 text-xl text-white">
								BFM Academy will get back to you shortly.
							</p>
							<Button
								onClick={() => setFormStatus('certificate')}
								variant="outline"
								className="btn-outline"
							>
								<Verified className="mr-2" size={16} /> Get Certificate
							</Button>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	)
}

interface CertificateScreenProps {
	goBackHome: () => void
	userName: string
}

export function CertificateScreen({
	goBackHome,
	userName,
}: CertificateScreenProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [isCanvasReady, setIsCanvasReady] = useState(false)

	// Add refresh warning
	useEffect(() => {
		// Show warning when user attempts to refresh or navigate away
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			const message =
				'Warning: Refreshing will reset your certificate. Do you want to continue?'
			e.preventDefault()
			e.returnValue = message
			return message
		}

		window.addEventListener('beforeunload', handleBeforeUnload)

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload)
		}
	}, [])

	useEffect(() => {
		const certificateImg = new window.Image()
		certificateImg.src = '/participation.png' // Your blue certificate background
		certificateImg.onload = () => {
			const canvas = canvasRef.current
			if (!canvas) return
			const ctx = canvas.getContext('2d')
			if (!ctx) return

			// Set canvas dimensions to match image
			canvas.width = certificateImg.width
			canvas.height = certificateImg.height

			// Draw the certificate background
			ctx.drawImage(certificateImg, 0, 0, canvas.width, canvas.height)

			// Add the name - adjust positioning and styling as needed
			if (userName.length > 20) {
				ctx.font = 'bold 120px "Montserrat"' // Common monospace font
				ctx.fillStyle = 'white'
				ctx.textAlign = 'left'
			} else {
				ctx.font = 'bold 160px "Montserrat"' // Common monospace font
				ctx.fillStyle = 'white'
				ctx.textAlign = 'left'
			}
			ctx.fillText(userName, 150, 1025) // Adjusted to match image position

			setIsCanvasReady(true)
		}
	}, [userName])

	const downloadCertificate = () => {
		if (!isCanvasReady) return

		const canvas = canvasRef.current
		if (!canvas) return
		const imageData = canvas.toDataURL('image/png')

		const link = document.createElement('a')
		link.href = imageData
		link.download = `${userName.replace(/\s+/g, '_')}_Certificate.png`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)

		// Optional: Show success message
		if (typeof toast?.success === 'function') {
			toast.success('Certificate downloaded successfully!')
		}
	}

	const shareCertificate = async () => {
		if (!isCanvasReady || !canvasRef.current) return

		canvasRef.current.toBlob(async (blob) => {
			if (!blob) return

			const file = new File(
				[blob],
				`${userName.replace(/\s+/g, '_')}_Certificate.png`,
				{
					type: 'image/png',
				},
			)

			if (navigator.canShare && navigator.canShare({ files: [file] })) {
				try {
					await navigator.share({
						title: 'My Certificate',
						text: 'Check out my Web3 & Crypto Space certification!',
						files: [file],
					})
					if (typeof toast?.success === 'function') {
						toast.success('Shared successfully!')
					}
				} catch (err) {
					console.error('Sharing failed:', err)
				}
			} else {
				// Fallback to URL sharing if file sharing is not supported
				try {
					await navigator.share({
						title: 'My Web3 & Crypto Space Certificate',
						text: 'Check out my Web3 & Crypto Space certification!',
						url: window.location.href,
					})
				} catch (err) {
					alert(
						`Your browser does not support sharing. Please download the certificate instead. ${err}`,
					)
				}
			}
		}, 'image/png')
	}

	const shareOnLinkedIn = () => {
		const url = encodeURIComponent(window.location.href)
		const title = encodeURIComponent('My Web3 & Crypto Space Certificate')
		window.open(
			`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`,
			'_blank',
		)
	}

	// Enhanced confirmation for navigation
	const handleGoBack = () => {
		if (isCanvasReady) {
			if (
				window.confirm(
					"Going back will reset your certificate. Make sure you've downloaded it first. Continue?",
				)
			) {
				goBackHome()
			}
		} else {
			goBackHome()
		}
	}

	return (
		<>
			<Ticker />
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden bg-background p-3 !pb-0 text-center text-foreground md:p-6 lg:p-9 xl:p-12 xl:pt-4">
				<Navbar />

				{/* Back button for mobile */}
				<div className="-mt-12 mb-6 flex justify-end lg:hidden">
					<Button
						onClick={handleGoBack}
						variant="outline"
						className="flex items-center gap-2 rounded-md border bg-white px-4 py-2 text-sm font-medium text-brandblue transition-all hover:scale-105 hover:bg-white/90 hover:text-brandblue/90"
					>
						<ArrowLeft className="h-4 w-4" />
						Back home
					</Button>
				</div>

				<div className="flex flex-col justify-stretch md:my-12 lg:flex-row lg:gap-6 xl:gap-8">
					{/* Certificate Display (Left Column) */}
					<div className="relative mb-6 flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-brandblue to-brandblue/90 shadow-xl transition-all duration-300 hover:shadow-2xl lg:mb-0">
						<canvas
							ref={canvasRef}
							className="hidden"
							// Canvas dimensions are set in useEffect
						></canvas>

						<div className="flex aspect-[1.414/1] w-full items-center justify-center">
							{isCanvasReady ? (
								<div className="relative h-full w-full">
									<img
										src={canvasRef.current?.toDataURL()}
										alt={`${userName}'s Certificate`}
										className="h-full w-full rounded-xl object-contain"
									/>
									<div className="absolute inset-0 rounded-xl shadow-inner"></div>
								</div>
							) : (
								<div className="flex h-full flex-col items-center justify-center p-10 text-white">
									<div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
									<p className="text-xl font-medium">
										Generating your certificate...
									</p>
								</div>
							)}
						</div>

						{/* Certificate watermark */}
						{isCanvasReady && (
							<div className="absolute bottom-3 right-3 rounded-md bg-white/20 px-2 py-1 text-xs text-white backdrop-blur-sm">
								Verified • BFMAcademy
							</div>
						)}
					</div>

					{/* Right Column (Back Button + Share Options) */}
					<div className="flex flex-col justify-between lg:w-80 xl:w-96">
						{/* Back Home Button (Top Right on lg+) */}
						<div className="hidden lg:block">
							<Button
								onClick={handleGoBack}
								variant="outline"
								className="ml-auto flex w-fit items-center justify-center gap-2 rounded-md"
							>
								<ArrowLeft className="h-4 w-4" />
								Back home
							</Button>
						</div>

						{/* Share Options (Bottom Right) */}
						<div className="mt-4 rounded-2xl border border-brandblue/30 bg-card/50 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-brandblue/50 hover:shadow-xl lg:mt-auto">
							<h3 className="mb-5 text-center text-sm font-medium text-foreground lg:text-base">
								Share your achievement and inspire others to learn about Web3 &
								Crypto Space
							</h3>

							<div className="grid grid-cols-1 gap-4">
								<div className="flex w-full flex-row justify-center gap-3">
									<Button
										variant="outline"
										onClick={shareCertificate}
										className="flex w-fit items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium"
									>
										<IconShare size={20} />
										Share
									</Button>

									<Button
										variant="outline"
										onClick={shareOnLinkedIn}
										className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium"
									>
										<IconBrandLinkedin size={20} />
										Post on LinkedIn
									</Button>
								</div>

								<Button
									variant="outline"
									onClick={downloadCertificate}
									disabled={!isCanvasReady}
									className="flex items-center justify-center gap-2 rounded-lg bg-brandblue px-4 py-3 text-sm font-medium text-white hover:bg-brandblue/90 hover:text-white disabled:opacity-50"
								>
									<IconDownload size={20} />
									Download Certificate
								</Button>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</>
	)
}

// components/form/TextInput.tsx
interface TextInputProps {
	type: string
	placeholder?: string
	value: string
	onChange: (value: string) => void
}

export function TextInput({
	type,
	placeholder,
	value,
	onChange,
}: TextInputProps) {
	return (
		<Input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="w-full border-b-[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
		/>
	)
}

// components/form/PhoneInput.tsx
interface PhoneInputProps {
	value: string
	countryCode: string
	onValueChange: (value: string) => void
	onCountryCodeChange: (value: string) => void
}

export function PhoneInput({
	value,
	countryCode,
	onValueChange,
	onCountryCodeChange,
}: PhoneInputProps) {
	return (
		<div className="flex">
			<div className="flex items-center pr-2">
				<Select value={countryCode} onValueChange={onCountryCodeChange}>
					<SelectTrigger className="mr-2">
						<SelectValue placeholder="91" />
					</SelectTrigger>
					<SelectContent>
						{countries.map((country) => (
							<SelectItem
								key={country.code}
								value={country.phone as unknown as string}
							>
								{country.name} ({country.phone})
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<Input
				type="tel"
				placeholder="Enter Contact Number"
				value={value}
				onChange={(e) => onValueChange(e.target.value)}
				className="w-full focus:outline-transparent focus:ring-0"
			/>
		</div>
	)
}

// components/form/OccupationSelect.tsx
interface OccupationSelectProps {
	label?: string
	options: string[]
	value: string
	onChange: (value: string) => void
}

export function OccupationSelect({
	label,
	options,
	value,
	onChange,
}: OccupationSelectProps) {
	return (
		<div>
			{label && <div className="mb-4 text-center">{label}</div>}
			<div className="grid grid-cols-2 gap-4">
				{options.map((option) => (
					<Button
						key={option}
						variant={value === option ? 'default' : 'outline'}
						className={
							value === option
								? 'bg-white uppercase text-brandblue hover:bg-white/90'
								: 'border-white bg-brandblue uppercase text-white hover:bg-brandblue/90 hover:text-white/50'
						}
						onClick={() => onChange(option)}
					>
						{option}
					</Button>
				))}
			</div>
		</div>
	)
}

// components/form/RoleSpecificInputs.tsx
interface RoleSpecificInputsProps {
	occupation: string
	formData: Record<string, any>
	onChange: (id: string, value: string) => void
}

export function RoleSpecificInputs({
	occupation,
	formData,
	onChange,
}: RoleSpecificInputsProps) {
	switch (occupation) {
		case 'student':
			return (
				<Input
					type="text"
					placeholder="Enter Your Institute Name"
					value={formData.instituteName || ''}
					onChange={(e) => onChange('instituteName', e.target.value)}
					className="w-full border-b-[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
				/>
			)

		case 'employee':
			return (
				<Input
					type="text"
					placeholder="Enter Your Company Name"
					value={formData.company_name || ''}
					onChange={(e) => onChange('company_name', e.target.value)}
					className="w-full border-b-[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
				/>
			)

		case 'startup':
		case 'business':
			return (
				<div className="space-y-4">
					<Input
						type="text"
						placeholder="Enter Your Company Name"
						value={formData.company_name || ''}
						onChange={(e) => onChange('company_name', e.target.value)}
						className="border-b-3 w-ful[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
					/>
					<Input
						type="text"
						placeholder="Enter Your Website URL"
						value={formData.company_url || ''}
						onChange={(e) => onChange('company_url', e.target.value)}
						className="border-b-3 w-ful[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
					/>
				</div>
			)

		default:
			return null
	}
}
