"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Warehouse, Article, ClipboardText, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function WarehouseOperations() {
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
              <h1 className="text-4xl md:text-5xl font-bold">Warehouse Operations</h1>
              <p className="text-xl text-gray-300">
                Centralize stock levels, receive and dispatch packages, layout shelf locations, and track warehouse capacities.
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
                  <Warehouse className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Capacity Management</h3>
                <p className="text-gray-600">
                  Monitor stock layouts and weight limits across multiple warehouse facilities, branches, and regional hubs.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <ClipboardText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shelf & Bin Allocation</h3>
                <p className="text-gray-600">
                  Organize packages into exact shelf numbers and inventory bins. Scan barcodes upon arrival to keep locations updated.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <svg className="h-6 w-6 text-[#263070]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Receiving & Dispatch Logs</h3>
                <p className="text-gray-600">
                  Track every inbound and outbound parcel, register piece types, record handling guidelines, and sign off custody handovers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Modernize your warehouses</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Implement NTIGI's warehouse management system to secure inventory tracking.
            </p>
            <Button size="lg" href="/demo" variant="secondary">Request a Demo</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
