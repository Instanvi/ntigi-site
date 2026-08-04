"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Shield, Heart, Envelope, MapPin, Phone, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Company() {
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
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-300">About NTIGI</span>
              <h1 className="text-4xl md:text-5xl font-bold">Connecting Global Operations</h1>
              <p className="text-xl text-gray-300">
                Building offline-first cargo software to secure borderless supply chain operations for freight forwarders and courier agents globally.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Core Principles</h2>
              <p className="text-gray-600">
                We design logistics solutions around stability, speed, and real-world network challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-50 rounded-2xl text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070]">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Global Scalability</h3>
                <p className="text-gray-600">
                  Adaptable multi-language and multi-branch systems to manage shipping networks of any size across borders.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-2xl text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070]">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Data Sovereignty</h3>
                <p className="text-gray-600">
                  Offline-first database architectures protecting transactional records and keeping agency tracking secure.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-2xl text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-[#263070]/10 rounded-xl flex items-center justify-center text-[#263070]">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Operational Stability</h3>
                <p className="text-gray-600">
                  Engineered to work continuously during local network disruptions, preventing data entry duplication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                Connect with our team to inquire about pricing, API access, customized branch installations, and support plans.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#263070] shadow-sm">
                    <Envelope className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email Us</div>
                    <a href="mailto:info@ntigi.com" className="font-semibold text-gray-900 hover:text-primary">info@ntigi.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#263070] shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Call Support</div>
                    <a href="tel:+18005556789" className="font-semibold text-gray-900 hover:text-primary">+1 (800) 555-6789</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#263070] shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Global Hub</div>
                    <div className="font-semibold text-gray-900">Chicago, IL, United States</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Request Information</h3>
              <p className="text-sm text-gray-600">Fill out this quick form and our specialists will respond within 24 hours.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070]" placeholder="Logistics Ltd." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070]" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Details</label>
                  <textarea className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070] h-24" placeholder="How can we help optimize your operations?"></textarea>
                </div>
                <Button variant="secondary" className="w-full">Submit Inquiry</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
