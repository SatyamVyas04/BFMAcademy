// lib/formConfig.ts
import { z } from 'zod'

/* -------------------------------
   TYPE DEFINITIONS
-------------------------------- */
export interface MultiInput {
	id: string
	placeholder: string
	required: boolean
}

export type QuestionType =
	| 'text'
	| 'email'
	| 'tel'
	| 'multiInput'
	| 'selectButtons'
	| 'roleSpecific'

export interface Question {
	id: string
	type: QuestionType
	label?: string
	placeholder?: string
	required: boolean
	skippable: boolean
	countryCode?: boolean
	inputs?: MultiInput[]
	options?: string[]
	// Condition to determine when this question should show
	condition?: {
		field: string
		value: string | string[]
	}
}

// Zod schema for form validation
export const formSchema = z.object({
	fullname: z.string(),
	email: z.string().email({ message: 'Invalid email address' }),
	phone_country_code: z.string().optional(),
	phone_number: z
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
	occupation: z.enum(['STUDENT', 'EMPLOYEE', 'STARTUP', 'BUSINESS']),
	wallet_id: z.string(),
	company_name: z.string().optional(),
	company_url: z.string().optional(),
})

// Form questions configuration
export const questionsList: Question[] = [
	{
		id: 'fullname',
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
		id: 'phone_number',
		type: 'tel',
		label: 'Enter Contact Number',
		placeholder: 'Enter Contact Number',
		countryCode: true,
		required: true,
		skippable: false,
	},
	{
		id: 'linkedin',
		type: 'text',
		label: 'Paste Linkedin URL',
		placeholder: 'Paste Linkedin URL',
		required: false,
		skippable: true,
	},
	{
		id: 'telegram',
		type: 'text',
		label: 'Paste Telegram ID',
		placeholder: 'Paste Telegram ID',
		required: false,
		skippable: true,
	},
	{
		id: 'occupation',
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
