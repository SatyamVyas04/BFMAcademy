import EarlyAccessForm from '@/components/EarlyAccessForm'
import QueryClientContextProvider from '@/components/QueryClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Early Access',
	description:
		'Join the BFM Academy early access program and be the first to experience our innovative learning platform. Sign up now to stay updated on our launch and exclusive offers.',
	keywords:
		'early access, BFM Academy, learning platform, exclusive offers, sign up, web3, blockchain, crypto, finance',
}

export default function page() {
	return (
		<QueryClientContextProvider>
			<EarlyAccessForm />
		</QueryClientContextProvider>
	)
}
