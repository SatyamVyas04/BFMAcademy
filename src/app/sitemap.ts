export default async function sitemap() {
	const baseUrl = 'https://www.bfmacademy.in/'

	const routes = [
		'/',
		'/early-access',
		'/terms-and-conditions',
		'/privacy-policy',
		'/roadmap',
	]

	const sitemap = routes.map((route) => {
		return {
			url: `${baseUrl}${route}`,
			lastModified: new Date().toISOString(),
		}
	})

	return sitemap
}
