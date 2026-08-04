"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function TermsOfUsePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="relative bg-white py-8 px-6 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                            Terms of Use
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
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and NTIGI Global, Inc. and its family of brands Ntigi and Kovasure (collectively, &ldquo;NTIGI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to and use of our websites, mobile applications, APIs, and related services (collectively, the &ldquo;Services&rdquo;).
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our Services. If you are using the Services on behalf of a business or other legal entity, you represent that you have the authority to bind that entity to these Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Eligibility and Account Registration</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You must be at least 18 years old and capable of forming a binding contract to use our Services. By registering for an account, you represent and warrant that all information you provide is accurate, current, and complete, and that you will promptly update any changes to such information.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security. NTIGI will not be liable for any loss or damage arising from your failure to comply with these obligations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Description of Services</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    NTIGI provides a global platform for logistics, shipping, cargo insurance, and financial services through our family of brands. Our Services include, but are not limited to:
                                </p>
                                <div className="rounded-lg mb-4">
                                    <ul className="space-y-2 text-gray-700 text-sm p-5">
                                        <li>Freight forwarding, shipment tracking, and logistics management via Ntigi</li>
                                        <li>Cargo insurance, risk assessment, and claims processing via Kovasure</li>
                                        <li>Payment processing, trade finance, and cross-border transaction services via Potta Finance</li>
                                        <li>API integrations, analytics dashboards, and supply-chain visibility tools</li>
                                        <li>Customer support, documentation, and compliance assistance</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">4. User Obligations and Acceptable Use</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You agree to use our Services only for lawful purposes and in accordance with these Terms. You are solely responsible for all shipments, transactions, and content submitted through your account, and for ensuring compliance with all applicable laws, regulations, and industry standards, including customs, export control, and sanctions laws.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You agree not to:
                                </p>
                                <div className="rounded-lg mb-4">
                                    <ul className="space-y-2 text-gray-700 text-sm p-5">
                                        <li>Use the Services for any illegal, fraudulent, or unauthorized purpose</li>
                                        <li>Submit false, misleading, or inaccurate shipment, insurance, or payment information</li>
                                        <li>Attempt to gain unauthorized access to our systems, networks, or other users&rsquo; accounts</li>
                                        <li>Interfere with or disrupt the integrity or performance of the Services</li>
                                        <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
                                        <li>Upload or transmit viruses, malware, or other harmful code</li>
                                        <li>Harvest, scrape, or collect data from the Services without our express written consent</li>
                                        <li>Ship prohibited, hazardous, or illegal goods, including weapons, narcotics, or counterfeit items</li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Violation of these obligations may result in immediate suspension or termination of your account, reporting to relevant authorities, and pursuit of all available legal remedies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Shipments, Insurance, and Payments</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>Shipments.</strong> When you book a shipment through our Services, you authorize NTIGI and our carrier partners to transport your goods in accordance with the selected service level. You are responsible for proper packaging, accurate labeling, and complete customs documentation. Delivery times are estimates and not guaranteed unless expressly agreed in writing.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>Insurance.</strong> Insurance coverage purchased through Kovasure is governed by the specific policy terms, conditions, and exclusions issued at the time of purchase. Coverage is not automatic; you must declare the full value of your goods and pay the applicable premium. Claims must be filed within the timeframes and in the manner specified in your policy documents.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>Payments.</strong> You agree to pay all fees, charges, and taxes associated with your use of the Services. Fees are quoted in the currency displayed at checkout and are subject to change upon notice. Late payments may incur interest and collection costs. Refunds and credits are issued at our sole discretion and in accordance with our refund policies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Intellectual Property Rights</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    All content, software, trademarks, logos, designs, and materials available through the Services are the property of NTIGI or our licensors and are protected by copyright, trademark, patent, and other intellectual property laws. Nothing in these Terms grants you any right, title, or interest in or to our intellectual property.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for their intended purpose. You may not copy, modify, distribute, sell, or lease any part of the Services without our prior written consent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Confidentiality and Data Protection</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You may receive access to confidential or proprietary information of NTIGI or other users through the Services. You agree to hold such information in strict confidence and not disclose it to any third party except as required by law or with our express written permission.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Our collection and use of personal data is governed by our <Link href="/privacy" className="text-blue-600 font-medium hover:underline">Privacy Policy</Link>. By using the Services, you consent to our data practices as described therein.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">8. Disclaimers</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, NTIGI DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We do not warrant that the Services will be uninterrupted, error-free, secure, or free of viruses or other harmful components. We do not guarantee the accuracy, completeness, or timeliness of information provided by carriers, insurers, or other third parties. You acknowledge that shipping, insurance, and international trade involve inherent risks, and you assume full responsibility for your decisions and actions.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">9. Limitation of Liability</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NTIGI, OUR DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE SERVICES.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Our total aggregate liability for any claims arising under these Terms shall not exceed the greater of (a) the amount you paid to NTIGI for the specific transaction giving rise to the claim during the twelve (12) months preceding the claim, or (b) one hundred U.S. dollars (USD $100). The limitations of liability set forth herein apply regardless of the form of action, whether in contract, tort (including negligence), strict liability, or otherwise, and even if we have been advised of the possibility of such damages.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you. In such cases, our liability shall be limited to the maximum extent permitted by law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">10. Indemnification</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    You agree to defend, indemnify, and hold harmless NTIGI and our officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees) arising out of or in any way connected with:
                                </p>
                                <div className="rounded-lg mb-4">
                                    <ul className="space-y-2 text-gray-700 text-sm p-5">
                                        <li>Your access to or use of the Services</li>
                                        <li>Your violation of these Terms or any applicable law or regulation</li>
                                        <li>Your infringement of any intellectual property or other rights of any third party</li>
                                        <li>Any shipment, transaction, or content you submit through the Services</li>
                                        <li>Any negligence, misconduct, or fraud committed by you or your representatives</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">11. Third-Party Services and Links</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    The Services may contain links to third-party websites, services, or resources that are not owned or controlled by NTIGI. We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party services. You acknowledge and agree that NTIGI shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any such content, goods, or services available on or through any such third-party services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">12. Termination</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may suspend or terminate your access to the Services at any time, with or without cause, and with or without notice, including if we believe you have violated these Terms or engaged in fraudulent, abusive, or illegal activity. Upon termination, your right to use the Services will immediately cease, and you remain liable for all amounts due up to and including the date of termination.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">13. Governing Law and Dispute Resolution</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms or the Services shall first be attempted to be resolved through good-faith negotiation.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If negotiation fails, you and NTIGI agree to resolve any dispute through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Wilmington, Delaware, and shall be conducted in English. The arbitrator&rsquo;s decision shall be final and binding, and judgment on the award may be entered in any court of competent jurisdiction.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm pending the completion of arbitration. You agree that any claims must be brought in your individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">14. International Use</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    NTIGI operates globally, but our Services are controlled and operated from facilities in the United States. We make no representations that the Services are appropriate or available for use in all locations. If you access the Services from a jurisdiction where the content or practices are illegal or prohibited, you do so at your own risk and are responsible for compliance with local laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">15. Changes to These Terms</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may revise these Terms from time to time at our sole discretion. We will post the updated Terms on this page and update the &ldquo;Last Updated&rdquo; date. Material changes will be notified to you through the Services or by email at least thirty (30) days before they take effect. Your continued use of the Services after any changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">16. Severability and Waiver</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if modification is not possible, severed from these Terms, and the remaining provisions shall continue in full force and effect.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">17. Entire Agreement</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    These Terms, together with our Privacy Policy and any other legal notices or agreements published by us on the Services, constitute the entire agreement between you and NTIGI concerning the Services and supersede all prior or contemporaneous agreements, proposals, or representations, whether oral or written.
                                </p>
                            </section>

                            <section className="rounded-lg p-6 bg-gray-50">
                                <h2 className="text-2xl font-bold mb-3 text-primary">Contact Us</h2>
                                <p className="text-gray-700 text-sm mb-4">
                                    If you have any questions, concerns, or disputes regarding these Terms, please contact the legal team for the brand you use:
                                </p>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-white">
                                        <span className="font-semibold text-gray-700">Ntigi</span>
                                        <Link href="mailto:legal@ntigi.com" className="font-bold text-blue-600 hover:text-blue-700">
                                            legal@ntigi.com
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-white">
                                        <span className="font-semibold text-gray-700">Kovasure</span>
                                        <Link href="mailto:legal@kovasure.com" className="font-bold text-blue-600 hover:text-blue-700">
                                            legal@kovasure.com
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-4">
                                    For general inquiries, you may also write to us at: NTIGI Global, Douala, Cameroon.
                                </p>
                            </section>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
