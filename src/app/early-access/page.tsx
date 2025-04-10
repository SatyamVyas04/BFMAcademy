/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { ArrowRight, ArrowLeft, Wallet } from 'lucide-react'
import Navbar from '@/pages/navbar'
import Footer from '@/pages/footer'
import { useRouter } from 'next/navigation'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { ConnectButton } from 'thirdweb/react'
import { client } from '../../../actions/wallet'
import { useTheme } from 'next-themes'
import confetti from 'canvas-confetti'
import { z } from 'zod'
import { countries } from '../../lib/countries'

const formSchema = z.object({
	fullName: z.string(),
	email: z.string().email({ message: 'Invalid email address' }),
	phoneCountryCode: z.string().optional(),
	phoneNumber: z
		.string()
		.regex(/^\d{10,15}$/, { message: 'Invalid phone number' }),
	socialLinks: z
		.object({
			linkedin: z.string().url().optional().or(z.literal('')),
			telegram: z.string().url().optional().or(z.literal('')),
		})
		.refine((data) => !!data.linkedin || !!data.telegram, {
			message: 'Please provide at least one social profile.',
		}),
	userType: z.enum(['STUDENT', 'EMPLOYEE', 'STARTUP', 'BUSINESS']),
})

/* -------------------------------
   TYPE DEFINITIONS
-------------------------------- */
interface MultiInput {
	id: string
	placeholder: string
	required: boolean
}

type QuestionType =
	| 'text'
	| 'email'
	| 'tel'
	| 'multiInput'
	| 'selectButtons'
	| 'roleSpecific'

interface Question {
	id: string
	type: QuestionType
	label?: string
	placeholder?: string
	required: boolean
	skippable: boolean
	countryCode?: boolean
	inputs?: MultiInput[]
	options?: string[]
	// New: Add condition to determine when this question should show
	condition?: {
		field: string
		value: string | string[]
	}
}

/* -------------------------------
   TICKER COMPONENT
-------------------------------- */
const Ticker = () => (
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

/* -------------------------------
   MAIN FORM COMPONENT
-------------------------------- */
export default function Page() {
	// Define all form questions and their properties
	const theme = useTheme().theme
	const router = useRouter()
	const welcomeScreen = {
		title: 'BFM Academy',
		subtitle: 'where web3 wizards are made',
		img: {
			src: `${theme == 'dark' ? '/page/logo-dark.png' : '/page/logo-light.png'}`,
			width: 200,
			height: 200,
		},
	}
	const questions: Question[] = [
		{
			id: 'fullName',
			type: 'text',
			label: 'Enter Full Name',
			placeholder: 'Enter Full Name',
			required: true,
			skippable: false,
		},
		{
			id: 'email',
			type: 'email',
			label: 'Enter Email Address',
			placeholder: 'Enter Email Address',
			required: true,
			skippable: false,
		},
		{
			id: 'phoneNumber',
			type: 'tel',
			label: 'Enter Contact Number',
			placeholder: 'Enter Contact Number',
			countryCode: true,
			required: true,
			skippable: false,
		},
		{
			id: 'socialLinks',
			type: 'multiInput',
			label: 'Provide Social Profiles',
			inputs: [
				{
					id: 'linkedin',
					placeholder: 'Paste LinkedIn URL',
					required: false,
				},
				{
					id: 'telegram',
					placeholder: 'Paste Telegram URL',
					required: false,
				},
			],
			required: false,
			skippable: true,
		},
		{
			id: 'userType',
			type: 'selectButtons',
			label: 'Who are you?',
			options: ['STUDENT', 'EMPLOYEE', 'STARTUP', 'BUSINESS'],
			required: true,
			skippable: false,
		},
		{
			id: 'roleSpecificInfo',
			type: 'roleSpecific',
			label: 'Additional Information',
			required: true,
			skippable: false,
		},
	]

	// ---------- STATE MANAGEMENT ----------
	const [currentStep, setCurrentStep] = useState(0)
	const [formData, setFormData] = useState<Record<string, any>>({})
	const [formStatus, setFormStatus] = useState<
		'inProgress' | 'success' | 'waitlist'
	>('inProgress')
	const [errorMessage, setErrorMessage] = useState('')
	const totalSteps = questions.length

	// ---------- HANDLERS ----------
	const handleChange = (id: string, value: string) => {
		setFormData((prev) => ({ ...prev, [id]: value }))
		if (errorMessage) setErrorMessage('')
	}

	const handleMultiInputChange = (
		parentId: string,
		inputId: string,
		value: string,
	) => {
		setFormData((prev) => ({
			...prev,
			[parentId]: { ...prev[parentId], [inputId]: value },
		}))
		if (errorMessage) setErrorMessage('')
	}

	const validateStep = () => {
		const currentQuestion = questions[currentStep]

		try {
			// Validate only the current field using partial schema
			switch (currentQuestion.type) {
				case 'email':
					formSchema.pick({ email: true }).parse({ email: formData.email })
					break
				case 'tel':
					formSchema
						.pick({ phoneNumber: true })
						.parse({ phoneNumber: formData.phoneNumber })
					break
				case 'text':
					if (currentQuestion.required) {
						if (!formData[currentQuestion.id]?.trim()) {
							throw new Error('This field is required.')
						}
					}
					break
				case 'multiInput':
					formSchema.pick({ socialLinks: true }).parse({
						socialLinks: formData.socialLinks || {},
					})
					break
				case 'selectButtons':
					formSchema.pick({ userType: true }).parse({
						userType: formData.userType,
					})
					break
				case 'roleSpecific':
					if (formData.userType === 'STUDENT') {
						if (!formData.instituteName?.trim()) {
							throw new Error('Institute name is required.')
						}
					} else if (formData.userType === 'EMPLOYEE') {
						if (!formData.companyName?.trim()) {
							throw new Error('Company name is required.')
						}
					} else if (
						formData.userType === 'STARTUP' ||
						formData.userType === 'BUSINESS'
					) {
						if (!formData.companyName?.trim()) {
							throw new Error('Company name is required.')
						}
					}
					break
			}
			setErrorMessage('')
			return true
		} catch (e: any) {
			if (e instanceof z.ZodError) {
				const messages = e.errors.map((err) => err.message).join('. ')
				setErrorMessage(messages)
			} else {
				setErrorMessage(e.message || 'Invalid input.')
			}
			return false
		}
	}

	const nextStep = () => {
		if (!validateStep()) return
		if (currentStep < totalSteps - 1) {
			setCurrentStep((prev) => prev + 1)
		} else {
			submitForm()
		}
	}

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1)
			setErrorMessage('')
		}
	}

	const skipStep = () => {
		if (currentStep < totalSteps - 1) {
			setCurrentStep((prev) => prev + 1)
			setErrorMessage('')
		}
	}

	const submitForm = async () => {
		try {
			// Mock submission - in a real app this would call an API
			console.log('Form data submitted:', formData)
			setFormStatus('success')
		} catch (error) {
			console.error('Error submitting form:', error)
		}
	}

	const connectWallet = () => {
		setFormStatus('waitlist')
		const end = Date.now() + 2 * 1000 // 2 seconds
		const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1', '#212aff']

		const frame = () => {
			if (Date.now() > end) return

			confetti({
				particleCount: 3,
				angle: 60,
				spread: 55,
				startVelocity: 60,
				origin: { x: 0, y: 0.5 },
				colors: colors,
			})
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				startVelocity: 60,
				origin: { x: 1, y: 0.5 },
				colors: colors,
			})

			requestAnimationFrame(frame)
		}

		frame()
	}

	const goHome = () => {
		router.push('/')
	}

	// ---------- PROGRESS CALCULATION ----------
	const progressPercentage = (currentStep / totalSteps) * 100

	// ---------- RENDER SECTIONS BASED ON STATUS ----------
	const renderSuccess = () => (
		<>
			<Ticker />
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 text-center md:p-6 lg:p-9 xl:p-12 xl:pt-4">
				<Navbar />
				<div className="my-12 flex min-h-[70dvh] items-stretch justify-center">
					<div className="relative grid w-full max-w-7xl place-items-center rounded-3xl border-2 border-brandblue">
						<div className="p-8 lg:p-12 xl:p-16">
							<h1 className="mb-2 text-4xl font-bold">Congratulations 🎉</h1>
							<p className="mb-4 text-xl">You are almost there!</p>
							<p className="mb-8">
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
								<Button
									onClick={connectWallet}
									className="bg-brandblue px-5 py-5 text-white hover:bg-brandblue/90"
								>
									<Wallet className="mr-2" size={20} /> Join the waitlist
								</Button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	)

	const renderWaitlist = () => (
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
								onClick={goHome}
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

	// ---------- MAIN MULTI-STEP FORM ----------
	const currentQuestion = questions[currentStep]

	const renderForm = () => (
		<>
			<Ticker />
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 text-center md:p-6 lg:p-9 xl:p-12 xl:pt-4">
				<Navbar />
				<div className="my-12 flex min-h-[70dvh] items-stretch justify-center">
					<div className="relative grid w-full max-w-7xl place-items-center rounded-3xl border-2 border-brandblue">
						<div className="p-8 lg:p-12 xl:p-16">
							<h1 className="mb-2 text-center text-3xl font-bold md:text-5xl xl:text-6xl">
								Get Your Early Access
							</h1>
							<p className="mb-8 text-center text-sm text-muted-foreground lg:text-base">
								A platform with world-class tools &amp; features.
							</p>
							<div className="mb-8">
								<Progress value={progressPercentage} className="h-2" />
							</div>
							{/* Render current question */}
							{['text', 'email', 'tel'].includes(currentQuestion.type) && (
								<div className="mb-8">
									{currentQuestion.countryCode ? (
										<div className="flex">
											<div className="flex items-center pr-2">
												<Select
													value={formData['phoneCountryCode'] || 91}
													onValueChange={(value) =>
														handleChange('phoneCountryCode', value)
													}
												>
													<SelectTrigger className="mr-2">
														<SelectValue placeholder={91} />
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
												type={currentQuestion.type}
												placeholder={currentQuestion.placeholder}
												value={formData[currentQuestion.id] || ''}
												onChange={(e) =>
													handleChange(currentQuestion.id, e.target.value)
												}
												className="w-full focus:outline-transparent focus:ring-0"
											/>
										</div>
									) : (
										<Input
											type={currentQuestion.type}
											placeholder={currentQuestion.placeholder}
											value={formData[currentQuestion.id] || ''}
											onChange={(e) =>
												handleChange(currentQuestion.id, e.target.value)
											}
											className="w-full border-b-[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
										/>
									)}
								</div>
							)}
							{currentQuestion.type === 'multiInput' && (
								<div className="mb-8">
									<div className="space-y-4">
										{currentQuestion.inputs?.map((input) => (
											<Input
												key={input.id}
												type="text"
												placeholder={input.placeholder}
												value={formData[currentQuestion.id]?.[input.id] || ''}
												onChange={(e) =>
													handleMultiInputChange(
														currentQuestion.id,
														input.id,
														e.target.value,
													)
												}
												className="border-b-3 w-ful[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
											/>
										))}
									</div>
								</div>
							)}
							{currentQuestion.type === 'selectButtons' && (
								<div className="mb-8">
									<div className="mb-4 text-center">
										{currentQuestion.label}
									</div>
									<div className="grid grid-cols-2 gap-4">
										{currentQuestion.options?.map((option) => (
											<Button
												key={option}
												variant={
													formData[currentQuestion.id] === option
														? 'default'
														: 'outline'
												}
												className={
													formData[currentQuestion.id] === option
														? 'bg-brandblue text-white hover:bg-brandblue/90'
														: 'btn-outline'
												}
												onClick={() => handleChange(currentQuestion.id, option)}
											>
												{option}
											</Button>
										))}
									</div>
								</div>
							)}
							{currentQuestion.type === 'roleSpecific' && (
								<div className="mb-8">
									{formData.userType === 'STUDENT' && (
										<div>
											<Input
												type="text"
												placeholder="Enter Your Institute Name"
												value={formData.instituteName || ''}
												onChange={(e) =>
													handleChange('instituteName', e.target.value)
												}
												className="w-full border-b-[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
											/>
										</div>
									)}

									{formData.userType === 'EMPLOYEE' && (
										<div>
											<Input
												type="text"
												placeholder="Enter Your Company Name"
												value={formData.companyName || ''}
												onChange={(e) =>
													handleChange('companyName', e.target.value)
												}
												className="w-full border-b-[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
											/>
										</div>
									)}

									{(formData.userType === 'STARTUP' ||
										formData.userType === 'BUSINESS') && (
										<div className="space-y-4">
											<Input
												type="text"
												placeholder="Enter Your Company Name"
												value={formData.companyName || ''}
												onChange={(e) =>
													handleChange('companyName', e.target.value)
												}
												className="border-b-3 w-ful[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
											/>
											<Input
												type="text"
												placeholder="Enter Your Website URL"
												value={formData.websiteUrl || ''}
												onChange={(e) =>
													handleChange('websiteUrl', e.target.value)
												}
												className="border-b-3 w-ful[3px] border-brandblue/50 border-l-transparent border-r-transparent border-t-transparent focus:outline-transparent focus:ring-0"
											/>
										</div>
									)}
								</div>
							)}
							{errorMessage && (
								<p className="mb-4 text-center text-destructive">
									{errorMessage}
								</p>
							)}
							{currentStep > 0 ? (
								<div className="flex items-center justify-between gap-4">
									<div className="flex items-center">
										<Button
											onClick={prevStep}
											className="rounded-md bg-brandblue px-6 py-2 text-white hover:bg-brandblue/90"
										>
											<ArrowLeft size={20} />
										</Button>
									</div>
									<div className="flex items-center gap-4">
										{currentQuestion.skippable && (
											<Button
												variant="outline"
												onClick={skipStep}
												className="text-muted-foreground"
											>
												Skip
											</Button>
										)}
										<Button
											onClick={nextStep}
											className="rounded-md bg-brandblue px-6 py-2 text-white hover:bg-brandblue/90"
										>
											<ArrowRight size={20} />
										</Button>
									</div>
								</div>
							) : (
								<div className="flex flex-col items-center">
									<Button
										onClick={nextStep}
										className="rounded-md bg-brandblue px-6 py-2 text-white hover:bg-brandblue/90"
									>
										<ArrowRight size={20} />
									</Button>
									{currentQuestion.skippable && (
										<Button
											variant="link"
											onClick={skipStep}
											className="mt-2 text-muted-foreground"
										>
											Skip
										</Button>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	)

	// ---------- SWITCH RENDERING BASED ON FORM STATUS ----------
	if (formStatus === 'success') return renderSuccess()
	if (formStatus === 'waitlist') return renderWaitlist()
	return renderForm()
}
