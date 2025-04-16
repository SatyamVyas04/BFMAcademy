/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Image from 'next/image'
import { ConnectButton } from 'thirdweb/react'
import Navbar from '@/pages/navbar'
import Footer from '@/pages/footer'
import { ArrowLeft } from 'lucide-react'
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
	onBackHome: () => void
}

export function WaitlistScreen({ onBackHome }: WaitlistScreenProps) {
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
								onClick={onBackHome}
								variant="outline"
								className="btn-outline"
							>
								<ArrowLeft className="mr-2" size={16} /> Back Home
							</Button>
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
