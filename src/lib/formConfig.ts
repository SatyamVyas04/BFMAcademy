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
	fullname: z
		.string({ required_error: 'Full name is required' })
		.trim()
		.min(3, { message: 'Full name must be at least 3 characters' })
		.max(100, { message: 'Full name must be at most 100 characters' }),
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.toLowerCase()
		.email({ message: 'Email is invalid' }),
	phone_country_code: z.string().optional(),
	phone_number: z
		.string({ required_error: 'Phone number is required' })
		.regex(/^\+?[0-9]{10}$/, { message: 'Phone number is invalid' }),
	socialLinks: z.object({
		linkedin: z
			.string()
			.trim()
			.regex(/^https:\/\/(www\.)?linkedin\.com\/.*$/, {
				message: 'LinkedIn URL is invalid',
			})
			.optional()
			.or(z.literal('')), // Allow empty string
		telegramid: z
			.string()
			.trim()
			.regex(/^@?[a-zA-Z0-9_]{5,32}$/, { message: 'Telegram ID is invalid' })
			.optional()
			.or(z.literal('')), // Allow empty string
	}),
	occupation: z.enum(['student', 'employee', 'startup', 'business'], {
		required_error: 'Occupation is required',
		invalid_type_error: 'Occupation is invalid',
	}),
	company_name: z
		.string()
		.trim()
		.max(100, { message: 'Company name must be at most 100 characters' })
		.optional()
		.or(z.literal('')), // Allow empty string
	company_url: z
		.string()
		.trim()
		.url({ message: 'Company URL is invalid' })
		.optional()
		.or(z.literal('')), // Allow empty string
	wallet_id: z.string().trim().optional().or(z.literal('')), // Allow empty string
	instituteName: z.string().trim().optional().or(z.literal('')), // Allow empty string
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
		id: 'telegramid',
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
		options: ['student', 'employee', 'startup', 'business'],
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
