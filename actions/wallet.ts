import { createThirdwebClient } from 'thirdweb'

if (!process.env.NEXT_PUBLIC_WALLET_ID) {
	throw new Error('Missing NEXT_PUBLIC_WALLET_ID environment variables')
}

export const client = createThirdwebClient({
	clientId: process.env.NEXT_PUBLIC_WALLET_ID as string,
})
