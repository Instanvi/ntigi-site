"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Book, Question, Info, EnvelopeSimple, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-24">
        {/* Solution Hero */}
        <section className="bg-gradient-to-br from-[#263070] to-[#151b42] text-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl space-y-6">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-300">Resources</span>
              <h1 className="text-4xl md:text-5xl font-bold">Logistics Knowledge Hub</h1>
              <p className="text-xl text-gray-300">
                Access product documentation, review user guides, compliance checks, and explore APIs.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <Book className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Product Guides</h3>
                <p className="text-gray-600">
                  Comprehensive user instructions detailing shipment bookings, container consolidations, routes setup, and branch permissions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <Info className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">HS Code Directory</h3>
                <p className="text-gray-600">
                  Search through international Harmonized System (HS) codes, duty regulations, and shipping compliance standards built into the platform.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <Question className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">FAQs & Support</h3>
                <p className="text-gray-600">
                  Find fast answers on IndexedDB browser storage limitations, background synchronizations, and mobile scanner configurations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="bg-gradient-to-br from-[#263070] to-[#1e2659] text-white rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-3xl font-bold">Need technical assistance?</h2>
                <p className="text-gray-300">
                  Our integration specialists and client success managers are available to assist with custom API hooks and warehouse transitions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button variant="secondary" size="lg" href="/demo">
                  Request a Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="mailto:support@ntigi.com"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                >
                  <EnvelopeSimple className="mr-2 h-5 w-5" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
