/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useActiveAccount } from 'thirdweb/react'
import { client } from '../../actions/wallet'
import confetti from 'canvas-confetti'
import { ZodError } from 'zod'
import { Progress } from '@/components/ui/progress'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import components
import Navbar from '@/pages/navbar'
import Footer from '@/pages/footer'
import {
	Ticker,
	SuccessScreen,
	WaitlistScreen,
	TextInput,
	PhoneInput,
	OccupationSelect,
	RoleSpecificInputs,
} from '@/components/FormInputs'
import { formSchema, questionsList } from '@/lib/formConfig'

export default function Page() {
	const theme = useTheme().theme
	const router = useRouter()
	const currentAccount = useActiveAccount()
	const walletAddress = currentAccount?.address
	const isWalletConnected = Boolean(walletAddress)

	// State
	const [currentStep, setCurrentStep] = useState(0)
	const [formData, setFormData] = useState<Record<string, any>>({})
	const [errorMessage, setErrorMessage] = useState('')
	const [isValidating, setIsValidating] = useState(false)
	const [formStatus, setFormStatus] = useState<
		'inProgress' | 'success' | 'waitlist'
	>('inProgress')

	const questions = questionsList
	const totalSteps = questions.length
	const progressPercentage = (currentStep / totalSteps) * 100
	const currentQuestion = questions[currentStep]

	// Effect to show confetti on successful wallet connection
	useEffect(() => {
		async function autoSubmitForm() {
			if (
				isWalletConnected &&
				formStatus === 'success' &&
				errorMessage === ''
			) {
				try {
					const submissionData = await submitForm()
					if (!submissionData) {
						throw new Error('Submission failed')
					}
					showConfetti()
					setFormStatus('waitlist')
				} catch (err: any) {
					setErrorMessage(`Auto submission failed: ${err.message}`)
				}
			}
		}
		autoSubmitForm()
	}, [isWalletConnected, formStatus, errorMessage])

	// Form handlers
	const handleChange = (id: string, value: string) => {
		setFormData((prev) => ({ ...prev, [id]: value }))
		if (errorMessage) setErrorMessage('')
	}

	const validateStep = async () => {
		try {
			setIsValidating(true)
			// Field validation logic based on current question type
			switch (currentQuestion.type) {
				case 'email':
					formSchema.pick({ email: true }).parse({ email: formData.email })
					const unique = await fetch('/api/isEmail?email=' + formData.email, {
						method: 'GET',
					})
					if (!unique.ok) {
						setCurrentStep(1)
						throw new Error('Email already exists.')
					}
					break
				case 'tel':
					formSchema
						.pick({ phone_number: true })
						.parse({ phone_number: formData.phone_number })
					const uniquephone = await fetch(
						'/api/isPhoneNumber?phone_number=' + formData.phone_number,
						{
							method: 'GET',
						},
					)
					if (!uniquephone.ok) {
						setCurrentStep(2)
						throw new Error('Phone Number already exists.')
					}
					break
				case 'text':
					if (
						currentQuestion.required &&
						!formData[currentQuestion.id]?.trim()
					) {
						throw new Error('This field is required.')
					}

					formSchema.pick({ socialLinks: true }).parse({
						socialLinks: {
							[currentQuestion.id]: formData[currentQuestion.id],
						},
					})
					break
				case 'selectButtons':
					formSchema.pick({ occupation: true }).parse({
						occupation: formData.occupation,
					})
					break
				case 'roleSpecific':
					validateRoleSpecificFields()
					break
			}
			setErrorMessage('')
			setIsValidating(false)
			return true
		} catch (e: any) {
			handleValidationError(e)
			setIsValidating(false)
			return false
		}
	}

	const validateRoleSpecificFields = () => {
		const occupation = formData.occupation
		try {
			if (occupation === 'student') {
				formSchema.pick({ instituteName: true }).parse({
					instituteName: formData.instituteName,
				})
			} else if (occupation === 'employee') {
				formSchema.pick({ company_name: true }).parse({
					company_name: formData.company_name,
				})
			} else if (occupation === 'startup' || occupation === 'business') {
				formSchema.pick({ company_name: true }).parse({
					company_name: formData.company_name,
				})
				formSchema.pick({ company_url: true }).parse({
					company_url: formData.company_url,
				})
			}
			// Add more conditions for other occupations if needed
		} catch (e) {
			// Let the ZodError propagate up to validateStep
			if (e instanceof ZodError) {
				throw e
			} else {
				// Handle unexpected errors if necessary, or rethrow
				throw new Error('An unexpected validation error occurred.')
			}
		}
	}

	const handleValidationError = (e: any) => {
		if (e instanceof ZodError) {
			const messages = e.errors.map((err) => err.message).join('. ')
			setErrorMessage(messages)
		} else {
			setErrorMessage(e.message || 'Invalid input.')
		}
	}

	// Run validation when input changes to clear errors
	useEffect(() => {
		if (errorMessage) {
			// Only validate if there's an error to potentially clear
			const timer = setTimeout(() => {
				validateStep().catch(console.error)
			}, 500)
			return () => clearTimeout(timer)
		}
	}, [formData])

	// Navigation handlers
	const nextStep = async () => {
		if (isValidating || errorMessage) return

		setIsValidating(true)
		const isValid = await validateStep()
		setIsValidating(false)

		if (!isValid) return

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

	// Form submission
	const submitForm = async () => {
		try {
			setIsValidating(true)
			if (isWalletConnected) {
				const response = await fetch('/api/waitlist', {
					method: 'POST',
					body: JSON.stringify({
						...formData,
						wallet_id: walletAddress,
						phone_country_code: formData.phone_country_code || '91',
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				})

				if (!response.ok) {
					let errorMessage = `${response.status} ${response.statusText}`
					try {
						// Try to get more specific error from response body
						const errorData = await response.json()
						if (errorData && errorData.error) {
							errorMessage += ` - ${errorData.error}`
						}
					} catch (jsonError) {
						// Ignore if response body is not valid JSON or doesn't contain 'error'
						console.warn('Could not parse error response JSON:', jsonError)
					}
					throw new Error(errorMessage)
				}

				const data = await response.json()
				if (data.error) {
					throw new Error(data.error)
				}

				// If submission is successful and wallet is connected, show confetti and waitlist
				showConfetti()
				setFormStatus('waitlist')
				setIsValidating(false)
				return data // Return the successful submission data
			} else {
				// If wallet is not connected, move to success screen to prompt connection
				setFormStatus('success')
				setIsValidating(false)
			}
		} catch (error) {
			setIsValidating(false)
			if (error instanceof Error) {
				setErrorMessage(`Submission failed: ${error.message}`)
			} else {
				setErrorMessage('An unknown error occurred during submission.')
			}
			// Ensure we don't proceed to waitlist on error
			if (formStatus !== 'success') {
				// Keep the form visible if it wasn't already moving to the success/connect screen
			}
		}
	}

	// Visual effects
	const showConfetti = () => {
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

	// Render the form content based on current question type
	const renderCurrentQuestion = () => {
		switch (currentQuestion.type) {
			case 'text':
			case 'email':
				return (
					<TextInput
						type={currentQuestion.type}
						placeholder={currentQuestion.placeholder}
						value={formData[currentQuestion.id] || ''}
						onChange={(value) => handleChange(currentQuestion.id, value)}
					/>
				)
			case 'tel':
				return (
					<PhoneInput
						value={formData[currentQuestion.id] || ''}
						countryCode={formData['phone_country_code'] || 91}
						onValueChange={(value) => handleChange(currentQuestion.id, value)}
						onCountryCodeChange={(value) =>
							handleChange('phone_country_code', value)
						}
					/>
				)
			case 'selectButtons':
				return (
					<OccupationSelect
						label={currentQuestion.label}
						options={currentQuestion.options || []}
						value={formData[currentQuestion.id] || ''}
						onChange={(value) => handleChange(currentQuestion.id, value)}
					/>
				)
			case 'roleSpecific':
				return (
					<RoleSpecificInputs
						occupation={formData.occupation}
						formData={formData}
						onChange={handleChange}
					/>
				)
			default:
				return null
		}
	}

	// Navigation buttons
	const renderNavigationButtons = () => {
		const isNextButtonDisabled = !!errorMessage || isValidating

		if (currentStep > 0) {
			return (
				<div className="flex items-center justify-between gap-4">
					<Button
						onClick={prevStep}
						className="rounded-md bg-white px-6 py-2 text-brandblue hover:bg-white/90"
						disabled={isValidating}
					>
						<ArrowLeft size={20} />
					</Button>
					<div className="flex items-center gap-4">
						{currentQuestion.skippable && (
							<Button
								variant="outline"
								onClick={skipStep}
								className="text-muted-foreground"
								disabled={isValidating}
							>
								Skip
							</Button>
						)}
						<Button
							onClick={nextStep}
							className="rounded-md bg-white px-6 py-2 text-brandblue hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
							disabled={isNextButtonDisabled}
						>
							<ArrowRight size={20} />
						</Button>
					</div>
				</div>
			)
		}

		return (
			<div className="flex flex-col items-center">
				<Button
					onClick={nextStep}
					className="rounded-md bg-white px-6 py-2 text-brandblue hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
					disabled={isNextButtonDisabled}
				>
					<ArrowRight size={20} />
				</Button>
				{currentQuestion.skippable && (
					<Button
						variant="link"
						onClick={skipStep}
						className="mt-2 text-muted-foreground"
						disabled={isValidating}
					>
						Skip
					</Button>
				)}
			</div>
		)
	}

	// Form rendering
	const renderForm = () => (
		<>
			<Ticker />
			<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 text-center md:p-6 lg:p-9 xl:p-12 xl:pt-4">
				<Navbar />
				<div className="my-12 flex min-h-[70dvh] items-stretch justify-center">
					<div className="relative grid w-full max-w-7xl place-items-center rounded-3xl border-2 border-brandblue bg-brandblue !text-white">
						<div className="p-8 lg:p-12 xl:p-16">
							<h1 className="mb-2 text-center text-3xl font-bold md:text-5xl xl:text-6xl">
								Get Your Early Access
							</h1>
							<p className="mb-4 text-center text-sm text-white lg:text-base">
								A platform with world-class tools &amp; features.
							</p>
							{/* Form progress bar */}
							<div className="mb-12">
								<Progress value={progressPercentage} className="h-2" />
							</div>

							{/* Current question */}
							<div className="mb-8">{renderCurrentQuestion()}</div>

							{/* Error message */}
							{errorMessage && (
								<p className="mb-4 text-center font-medium text-red-300">
									{errorMessage}
								</p>
							)}

							{/* Navigation buttons */}
							{renderNavigationButtons()}
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	)

	// Main render switch
	if (formStatus === 'success') {
		return (
			<SuccessScreen
				theme={theme}
				client={client}
				welcomeScreen={getWelcomeScreen(theme)}
			/>
		)
	}

	if (formStatus === 'waitlist') {
		return <WaitlistScreen onBackHome={() => router.push('/')} />
	}

	return renderForm()
}

// Helper function for welcome screen config
function getWelcomeScreen(theme: string | undefined) {
	return {
		title: 'BFM Academy',
		subtitle: 'where web3 wizards are made',
		img: {
			src: `${theme == 'dark' ? '/page/logo-dark.png' : '/page/logo-light.png'}`,
			width: 200,
			height: 200,
		},
	}
}
