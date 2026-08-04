"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Anchor, Article, ClipboardText, Funnel, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ManifestVoyage() {
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
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-300">Solutions</span>
              <h1 className="text-4xl md:text-5xl font-bold">Manifest & Voyage Management</h1>
              <p className="text-xl text-gray-300">
                Consolidate cargo shipments, manage voyages, containers, pallets, and generate manifest reports for efficient logistics.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <Anchor className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Voyage Planning</h3>
                <p className="text-gray-600">
                  Plan long-haul and marine voyages with multi-leg routes, tracking schedules, estimated departures/arrivals, and custom voyages.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <Funnel className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cargo Consolidation</h3>
                <p className="text-gray-600">
                  Consolidate individual shipments into containers and pallets to maximize shipping volume efficiency and minimize space waste.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <Article className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Manifest Generation</h3>
                <p className="text-gray-600">
                  Generate structured cargo manifests, customize details, assign shipments to voyages, and print or export to Excel/PDF.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <ClipboardText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customs Documents</h3>
                <p className="text-gray-600">
                  Handle international customs declarations, HS code management, and commercial invoices. Prepare regulatory compliance logs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Ready to optimize cargo consolidation?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Implement NTIGI's online platform to manage voyages and manifests.
            </p>
            <Button size="lg" href="/demo" variant="secondary">Request a Demo</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
