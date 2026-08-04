"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, QrCode, ClipboardText, Shield, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ShipmentManagement() {
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
              <h1 className="text-4xl md:text-5xl font-bold">Shipment Management</h1>
              <p className="text-xl text-gray-300">
                End-to-end shipment control and cargo tracking from order booking to final delivery. Optimize logistics operations and ensure package handling safety.
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
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-Package Cargo Tracking</h3>
                <p className="text-gray-600">
                  Track multiple items under a single shipment reference. Automatically compute overall weight, volume, and volumetric weight pricing dynamically.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <QrCode className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Barcode & QR Identification</h3>
                <p className="text-gray-600">
                  Instantly generate and print receipts containing custom barcodes/QR codes for fast scanning and real-time transit handovers.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <ClipboardText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">22+ Cargo Handling Methods</h3>
                <p className="text-gray-600">
                  Identify cargo needs with specific tags (e.g., Fragile, Perishable, Hazardous). Direct drivers and handlers through explicit UI flags.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transit Insurance Details</h3>
                <p className="text-gray-600">
                  Secure shipments using structured cargo insurance policies mapped inside the system to minimize liabilities.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070] mb-6">
                  <svg className="h-6 w-6 text-[#263070]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Photo & Status Verification</h3>
                <p className="text-gray-600">
                  Upload package photos at drop-off or pickup points to document cargo conditions and reduce transit disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Ready to transform your cargo management?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Implement NTIGI's online and mobile shipment platform today.
            </p>
            <Button size="lg" href="/demo" variant="secondary">Request a Demo</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
