"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Laptop, DeviceMobile, WifiHigh, ShieldCheck, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Platform() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#263070] to-[#151b42] text-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl space-y-6">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-300">The NTIGI Platform</span>
              <h1 className="text-4xl md:text-5xl font-bold">Cloud-Native Logistics Ecosystem</h1>
              <p className="text-xl text-gray-300">
                A single unified database serving web and mobile Progressive Web Applications (PWA) with intelligent offline-first synchronization.
              </p>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-24">
            {/* Web Application */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Laptop className="h-4 w-4" />
                  Web Dashboard
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Comprehensive Web Console</h2>
                <p className="text-gray-600 leading-relaxed">
                  The primary control center for managers, dispatch coordinators, and administrators. Accessible securely from any modern web browser without installations.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#263070]" />
                    Real-time operational dashboards & reports
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#263070]" />
                    Centralized routes, stops, and branch configurations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#263070]" />
                    Financial auditing and corporate invoice management
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 font-medium">Interactive Web Portal Preview</span>
              </div>
            </div>

            {/* Mobile PWA */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center border border-gray-200 order-2 md:order-1">
                <span className="text-gray-400 font-medium">Mobile PWA Application Preview</span>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  <DeviceMobile className="h-4 w-4" />
                  Progressive Web App
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mobile and Driver Operations</h2>
                <p className="text-gray-600 leading-relaxed">
                  A high-performance Progressive Web Application (PWA) optimized for tablets and mobile devices. Equips field agents and delivery drivers with scanning and navigation tools.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#263070]" />
                    Fast camera-based barcode scanning
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#263070]" />
                    Real-time GPS status coordinates upload
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#263070]" />
                    Signature & Photo Proof of Delivery (POD)
                  </li>
                </ul>
              </div>
            </div>

            {/* Offline-first capabilities */}
            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
              <div className="p-6">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-700 mb-4">
                  <WifiHigh className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Offline Architecture</h3>
                <p className="text-gray-600 text-sm">
                  Leverages Dexie & IndexedDB on browsers to store data locally. Keep working without internet connection.
                </p>
              </div>

              <div className="p-6">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Background Sync</h3>
                <p className="text-gray-600 text-sm">
                  Automatically syncs changes when internet is restored with smart conflict-resolution and retry queues.
                </p>
              </div>

              <div className="p-6">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-700 mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Security & Identity</h3>
                <p className="text-gray-600 text-sm">
                  JWT-based sessions, OTP-based secure logins, and advanced RBAC settings to secure branch data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Transform your logistics channels</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Adopt NTIGI's web & mobile solution to centralize global logistics.
            </p>
            <Button size="lg" href="/demo" variant="secondary">Request a Demo</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
