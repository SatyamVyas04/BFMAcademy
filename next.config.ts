import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		minimumCacheTTL: 3600,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
}

export default nextConfig
