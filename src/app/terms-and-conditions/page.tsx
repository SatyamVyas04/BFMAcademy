import Footer from '@/pages/footer'
import Navbar from '@/pages/navbar'
import React from 'react'

export default function Page() {
	return (
		<main className="mx-auto max-w-screen-2xl overflow-x-hidden p-3 !pb-0 md:p-6 lg:p-9 xl:p-12 xl:pt-9">
			<Navbar />
			<h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
				Terms & Conditions of BFM Academy
			</h1>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					1. Introduction
				</h2>
				<p>
					Welcome to BFM Academy (&quot;Company,&quot; &quot;we,&quot;
					&quot;us,&quot; or &quot;our&quot;). These Terms of Service
					(&quot;Terms&quot;) govern your access to and use of our website,
					platform, mobile applications, and services (collectively,
					&quot;Services&quot;). By accessing or using our Services, you agree
					to comply with these Terms. If you do not agree, please refrain from
					using our Services. The governing jurisdiction for any legal matters
					related to these Terms shall be Delhi, India.
				</p>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					2. Eligibility
				</h2>
				<ul className="ml-6 list-disc space-y-2">
					<li>You must be at least 18 years old to use our Services.</li>
					<li>
						By using our Services, you confirm that you have the legal capacity
						to enter into this agreement.
					</li>
					<li>
						If you are using our Services on behalf of an entity, you represent
						that you have the authority to bind that entity.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					3. Account Registration
				</h2>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						You are required to create an account to access certain features of
						BFM Academy.
					</li>
					<li>
						You must provide accurate, complete, and up-to-date information.
					</li>
					<li>
						You are responsible for maintaining the confidentiality of your
						account credentials and any activities that occur under your
						account.
					</li>
					<li>
						We reserve the right to suspend or terminate accounts that violate
						these Terms.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					4. Use of Services
				</h2>

				<div className="space-y-6">
					<div>
						<h3 className="mb-1 mt-2 font-bold">4.1. Permitted Use</h3>
						<p className="mb-1 mt-2">
							You agree to use BFM Academy Services only for lawful purposes,
							including but not limited to:
						</p>
						<ul className="ml-6 list-disc space-y-2">
							<li>
								Enrolling in courses and participating in educational
								activities.
							</li>
							<li>
								Engaging with community discussions and networking features.
							</li>
							<li>
								Conducting transactions involving $BFM tokens as per platform
								guidelines.
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-1 mt-2 font-bold">4.2. Prohibited Activities</h3>
						<p className="mb-1 mt-2">You agree not to:</p>
						<ul className="ml-6 list-disc space-y-2">
							<li>Violate any applicable laws, regulations, or these Terms.</li>
							<li>
								Distribute, copy, or modify content from BFM Academy without
								permission.
							</li>
							<li>Upload or share unlawful, harmful, or offensive content.</li>
							<li>
								Engage in fraudulent, deceptive, or manipulative activities.
							</li>
							<li>
								Use automated bots or scripts to interact with our Services
								without authorization.
							</li>
							<li>
								Interfere with the security, integrity, or functionality of BFM
								Academy.
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					5. Intellectual Property Rights
				</h2>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						BFM Academy retains all rights, titles, and interests in and to the
						platform, including content, branding, trademarks, and software.
					</li>
					<li>
						Users may not copy, distribute, modify, or create derivative works
						from our content without written permission.
					</li>
					<li>
						Any content you submit to our platform (e.g., reviews, feedback, or
						forum posts) grants BFM Academy a non-exclusive, worldwide,
						royalty-free license to use, reproduce, and distribute such content
						for operational and marketing purposes.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					6. Payment & Transactions
				</h2>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						Certain features may require payment, including premium courses,
						certifications, or token-based transactions.
					</li>
					<li>
						Payments are processed through third-party gateways, and BFM Academy
						does not store payment details.
					</li>
					<li>
						Transactions involving $BFM tokens occur on a public blockchain,
						meaning they cannot be reversed, modified, or erased once recorded.
					</li>
					<li>
						Users acknowledge the decentralized nature of blockchain-based
						transactions and accept full responsibility for their digital
						assets.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					7. Disclaimers & Limitation of Liability
				</h2>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						Educational Disclaimer: The content on BFM Academy is for
						educational purposes only. We do not provide financial, legal, or
						investment advice.
					</li>
					<li>
						No Guarantees: We do not guarantee specific learning outcomes, job
						placements, or investment returns.
					</li>
					<li>
						Service Availability: While we strive to provide uninterrupted
						access, we do not guarantee continuous availability of our Services.
					</li>
					<li>
						Limitation of Liability: To the fullest extent permitted by law, BFM
						Academy shall not be liable for any direct, indirect, incidental,
						special, or consequential damages arising from your use of our
						Services.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					8. Termination
				</h2>
				<p className="mb-1 mt-2">
					We reserve the right to suspend or terminate access to our Services at
					our discretion if:
				</p>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						A user violates these Terms or engages in prohibited activities.
					</li>
					<li>There is suspected fraudulent, abusive, or illegal activity.</li>
					<li>BFM Academy decides to discontinue or modify its Services.</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					9. Dispute Resolution
				</h2>
				<ul className="ml-6 list-disc space-y-2">
					<li>
						Any disputes arising out of or related to these Terms shall be
						resolved in accordance with the laws of Delhi, India.
					</li>
					<li>
						Parties shall first attempt to resolve disputes through negotiation.
						If unresolved, disputes shall be referred to arbitration in Delhi,
						India, under the Arbitration and Conciliation Act, 1996.
					</li>
				</ul>
			</section>
			<section className="mx-auto mt-8 max-w-4xl px-4">
				<h2 className="mb-1 mt-2 text-lg font-bold md:text-xl lg:text-2xl">
					10. Updates to These Terms
				</h2>
				<p>
					BFM Academy may update these Terms periodically. Continued use of our
					Services after changes are made indicates acceptance of the revised
					Terms.
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
