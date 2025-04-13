import Footer from '@/pages/footer'
import Navbar from '@/pages/navbar'
import React from 'react'

export const metadata = {
	title: 'Privacy Policy',
	description:
		'Explore the Privacy Policy of BFM Academy. Understand how we collect, use, and protect your personal information while you learn with us.',
	keywords:
		'privacy policy, BFM Academy, personal information, data protection, user privacy',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
			<Navbar />
			<h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
				Privacy Policy
			</h1>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					1. Introduction
				</h2>
				<p>
					BFM Academy (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
					&quot;our&quot;) values your privacy. This Privacy Policy explains how
					we collect, use, disclose, and protect your personal information when
					you access our platform, website, mobile applications, and services
					(collectively, &quot;Services&quot;). By using our Services, you
					consent to the practices described in this policy.
				</p>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					2. Information We Collect
				</h2>
				<p className="mb-1 mt-2">
					We collect different types of information to provide and improve our
					Services, including:
				</p>

				<div className="space-y-6">
					<div>
						<h3 className="mb-1 mt-2 font-bold">
							2.1. Information You Provide
						</h3>
						<ul className="ml-6 list-disc space-y-2">
							<li>
								Account Information: When you create an account, we collect your
								name, email address, username, password, and payment details.
							</li>
							<li>
								Profile Data: Information you voluntarily provide, such as your
								bio, profile picture, and preferences.
							</li>
							<li>
								Educational Information: Courses enrolled, progress,
								certifications obtained, and learning activity.
							</li>
							<li>
								Communication Data: Messages, feedback, and customer support
								interactions.
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-1 mt-2 font-bold">
							2.2. Information Collected Automatically
						</h3>
						<ul className="ml-6 list-disc space-y-2">
							<li>
								Usage Data: IP addresses, browser type, device type, operating
								system, referring URLs, and interactions with our platform.
							</li>
							<li>
								Cookies & Tracking Technologies: We use cookies, pixels, and
								analytics tools to track activity and enhance your experience.
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-1 mt-2 font-bold">
							2.3. Third-Party Information
						</h3>
						<ul className="ml-6 list-disc space-y-2">
							<li>
								Social Media Integration: If you log in via social media, we may
								collect your profile data.
							</li>
							<li>
								Payment Processors: Payment details are securely processed by
								third-party payment gateways.
							</li>
							<li>
								Blockchain Data: Transactions involving $BFM tokens are recorded
								on public blockchains, and we may collect relevant wallet
								addresses.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					3. How We Use Your Information
				</h2>
				<p className="mb-1 mt-2">We use your information to:</p>
				<ul className="ml-6 list-disc space-y-2">
					<li>Provide, operate, and improve BFM Academy Services.</li>
					<li>Manage accounts, process transactions, and verify identities.</li>
					<li>Offer personalized learning experiences and recommendations.</li>
					<li>Facilitate payments and manage token transactions.</li>
					<li>
						Enhance security, prevent fraud, and enforce legal compliance.
					</li>
					<li>Communcate updates, promotions and customer support.</li>
					<li>Conduct research and analytics to improve platform features.</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					4. How We Share Your Information
				</h2>
				<p className="mb-1 mt-2">
					We do not sell your personal data. However, we may share information
					with:
				</p>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						Service Providers: Payment processors, analytics providers, hosting
						services, and customer support.
					</li>
					<li>
						Business Partners: Institutions and enterprises collaborating with
						BFM Academy.
					</li>
					<li>
						Legal Authorities: If required by law, regulation, or legal process.
					</li>
					<li>Facilitate payments and manage token transactions.</li>
					<li>
						Community & Public Records: Blockchain transactions, forum posts, or
						educational achievements (NFT-based certificates) may be publicly
						visible.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					5. Data Retention & Security
				</h2>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						We retain your personal data as long as necessary to provide
						Services or comply with legal obligations.
					</li>
					<li>
						We implement encryption, firewalls, and secure authentication to
						protect data.
					</li>
					<li>
						You are responsible for safeguarding your account credentials and
						blockchain keys.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					6. Your Rights & Choices
				</h2>
				<p className="mb-1 mt-2">
					Depending on your jurisdiction, you have the following rights:
				</p>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						Access & Correction: Request access to your personal data or
						corrections.
					</li>
					<li>Data Portability: Obtain a copy of your data.</li>
					<li>
						Erasure: Request deletion of your data, subject to legal
						requirements.
					</li>
					<li>Opt-Out: Unsubscribe from marketing communications.</li>
					<li>
						Do Not Track (DNT): Some browsers allow you to enable DNT signals.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					7. Cross-Border Data Transfers
				</h2>
				<p>
					We may transfer data to different countries where our servers and
					partners are located. We ensure compliance with GDPRand other
					applicable laws.
				</p>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					8. Blockchain Transactions & Decentralized Data
				</h2>
				<p>
					Transactions involving $BFM tokens occur on a public blockchain, which
					means data cannot be modified or erased once recorded. Users
					acknowledge the permanent, decentralized nature of blockchain
					interactions.
				</p>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					9. Children&apos;s Privacy
				</h2>
				<p>
					BFM Academy does not knowingly collect data from individuals under 18
					years old. If we learn that a minor has provided personal data, we
					will take steps to delete it.
				</p>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					10. Updates to This Policy
				</h2>
				<p>
					We may update this Privacy Policy periodically. Changes will be
					communicated via our platform, and continued use of our Services
					indicates acceptance of these changes.
				</p>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					11. Contact Us
				</h2>
				<p>
					For privacy-related inquiries, contact us at: Email:
					support@bfmacademy.in <br />
					Address: BFM Academy Headquarters
				</p>
				<p>
					By using BFM Academy, you acknowledge and agree to this Privacy
					Policy. If you do not agree, please refrain from using our Services.
				</p>
			</section>
			<Footer />
		</main>
	)
}
