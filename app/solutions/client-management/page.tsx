"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, UserGear, Percent, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ClientManagement() {
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
              <span className="px-3 py-1 bg-white/10 rounded-none text-sm font-medium text-blue-300">Solutions</span>
              <h1 className="text-4xl md:text-5xl font-bold">Client Management</h1>
              <p className="text-xl text-gray-300">
                A complete customer relational system designed for logistics. Manage individual and business accounts, set custom pricing tiers, and monitor credit limits.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-gray-50 rounded-none border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-none flex items-center justify-center text-[#263070] mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Individual & Corporate CRM</h3>
                <p className="text-gray-600">
                  Store sender and receiver directories, keep contact information, shipping address locations, histories, and billing settings.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-gray-50 rounded-none border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-none flex items-center justify-center text-[#263070] mb-6">
                  <UserGear className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Role-Based Access Control</h3>
                <p className="text-gray-600">
                  Utilize granular controls with 200+ permission options. Assign presets to managers, dispatch operators, and branch staff.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-gray-50 rounded-none border border-gray-100 hover:border-[#263070]/30 transition-all">
                <div className="w-12 h-12 bg-[#263070]/10 rounded-none flex items-center justify-center text-[#263070] mb-6">
                  <Percent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Pricing Tiers</h3>
                <p className="text-gray-600">
                  Implement contractual tariffs, apply frequent shipper discounts, set credit limits, and invoice automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Modernize your client relations</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Adopt NTIGI's client management solution for centralized visibility.
            </p>
            <Button size="lg" href="/demo" variant="secondary">Request a Demo</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
