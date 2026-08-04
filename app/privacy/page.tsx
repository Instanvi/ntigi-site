"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <Header/>
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative bg-white py-8 px-6 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-base text-gray-600 font-semibold">
              Last Updated: August 4, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This Privacy Policy explains how NTIGI Global, Inc. and its family of brands Ntigi and Kovasure (together, &ldquo;NTIGI,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collect, use, share, and protect information when you use our websites, apps, and services (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wherever you are shipping from, insuring a shipment, or managing payments through one of our brands, this Policy applies to you. Where local law requires additional disclosures, those are set out in the regional sections further down this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information in three general ways:
                </p>

                <div className="rounded-lg mb-4">
                  <h3 className="font-bold text-primary mb-3">Personal Information We Collect</h3>
                  <ul className="space-y-2 text-gray-700 text-sm p-5">
                    <li><strong>You give it to us</strong> — account details, billing information, shipment and policy information, and anything you share with support.</li>
                    <li><strong>We collect it automatically</strong> — device identifiers, IP address, pages viewed, and approximate location, gathered through cookies and similar technologies while you use our Services.</li>
                    <li><strong>We receive it from others</strong> — carriers, payment processors, and address-verification partners who help us keep your records accurate and your shipments moving.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>

                <div className="rounded-lg mb-4">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Set up and administer your account across Ntigi and Kovasure</li>
                    <li>Process shipments, quotes, claims, and payments</li>
                    <li>Provide customer support and respond to your requests</li>
                    <li>Detect and prevent fraud and keep our Services secure</li>
                    <li>Improve existing features and build new ones, including with the help of automated tools and AI models trained for this purpose</li>
                    <li>Send you service updates and, where you&rsquo;ve agreed to receive them, marketing communications</li>
                    <li>Meet our legal and regulatory obligations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. How We Share Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We don&rsquo;t sell your personal information for cash. We do share it, in limited ways, with:
                </p>

                <div className="rounded-lg mb-4">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Carriers and delivery partners needed to fulfill a shipment</li>
                    <li>Payment processors and insurers who support Potta Finance and Kovasure transactions</li>
                    <li>Service providers who host our infrastructure, run analytics, or support our customer care team</li>
                    <li>Other NTIGI brands, so your account works consistently across our Services</li>
                    <li>Regulators or law enforcement, when required by law</li>
                    <li>A buyer or successor, if NTIGI is ever involved in a merger, sale, or similar transaction</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies & Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to keep you signed in, remember your preferences, understand how our Services are used, and, where you&rsquo;ve consented, show you relevant offers.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can manage cookies through your browser settings or our cookie preference tool, and we honor Global Privacy Control signals where required by law. Turning cookies off may affect how well parts of our Services work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  NTIGI operates globally, so your information may be processed in a country other than the one you live in, including the United States. Where required, we use recognized safeguards — such as standard contractual clauses — to protect information transferred across borders.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We keep information for as long as your account is active or as needed to provide our Services, and afterward only as long as required for legal, tax, or dispute-resolution purposes. When information is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Children&rsquo;s Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Services are built for businesses and adults, not children. We don&rsquo;t knowingly collect personal information from anyone under 16. If you believe a child has provided us information, contact us and we&rsquo;ll delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Your Regional Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on where you live, you may have additional rights over your personal information.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-primary mb-2">California, Colorado, Connecticut & other U.S. states</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      If you live in a state with a comprehensive privacy law (including CA, CO, CT, VA, UT, and others), you can ask us to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Tell you what categories of information we hold about you and why</li>
                      <li>Correct inaccurate information</li>
                      <li>Delete information you&rsquo;ve provided to us</li>
                      <li>Give you a portable copy of your data</li>
                      <li>Opt out of targeted advertising or profiling</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-primary mb-2">United Kingdom & European Economic Area</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      If GDPR or UK GDPR applies to you, you additionally have the right to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Access, rectify, or erase your personal data</li>
                      <li>Restrict or object to certain processing</li>
                      <li>Receive your data in a portable format</li>
                      <li>Withdraw consent at any time, without affecting past processing</li>
                      <li>Lodge a complaint with your local supervisory authority</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-primary mb-2">Canada</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Under PIPEDA and applicable provincial law, you can:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Ask what personal information we hold and how it&rsquo;s used</li>
                      <li>Challenge the accuracy of that information</li>
                      <li>Withdraw consent for collection, use, or transfer, subject to legal or contractual limits</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-primary mb-2">Australia & New Zealand</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Under the Australian Privacy Act and NZ Privacy Act, you can:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                      <li>Request access to the personal information we hold about you</li>
                      <li>Ask us to correct information that&rsquo;s inaccurate or out of date</li>
                      <li>Raise a complaint about how we&rsquo;ve handled your information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We&rsquo;ll post updates to this page and, for material changes, notify you through the Services or by email before they take effect. The date at the top of this page always reflects the latest version.
                </p>
              </section>

              <section className="rounded-lg p-6 bg-gray-50">
                <h2 className="text-2xl font-bold mb-3 text-primary">Contact Us About Privacy</h2>
                <p className="text-gray-700 text-sm mb-4">
                  To exercise your rights or ask a question about this Policy, reach the privacy team for the brand you use:
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white">
                    <span className="font-semibold text-gray-700">Ntigi</span>
                    <Link href="mailto:privacy@ntigi.com" className="font-bold text-blue-600 hover:text-blue-700">
                      privacy@ntigi.com
                    </Link>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white">
                    <span className="font-semibold text-gray-700">Kovasure</span>
                    <Link href="mailto:privacy@kovasure.com" className="font-bold text-blue-600 hover:text-blue-700">
                      privacy@kovasure.com
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
