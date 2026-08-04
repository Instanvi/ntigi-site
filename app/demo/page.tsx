"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-24">
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            {submitted ? (
              <div className="text-center py-16 space-y-6 bg-gray-50 rounded-3xl border border-gray-100 p-8">
                <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Request Received!</h1>
                <p className="text-gray-600 max-w-md mx-auto">
                  Thank you for your interest in NTIGI. One of our logistics optimization specialists will reach out to schedule a live walkthrough of our web and mobile PWA platform.
                </p>
                <div className="pt-4">
                  <Button variant="secondary" href="/">Return to Homepage</Button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl space-y-8">
                <div className="space-y-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Request Live Demo</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Experience NTIGI</h1>
                  <p className="text-gray-600">
                    See how our offline-first cloud platform streamlines maritime voyages, customs compliance, and package dispatch workflows.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070]" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070]" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                    <input required type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070]" placeholder="john.doe@logistics.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070]" placeholder="Global Freight Forwarders" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Operations Area</label>
                    <select required className="w-full px-4 py-3 border border-gray-200 bg-white rounded-xl focus:outline-none focus:border-[#263070]">
                      <option value="">Select industry area...</option>
                      <option value="freight">Ocean & Air Freight Forwarding</option>
                      <option value="courier">Courier & Last-Mile Delivery</option>
                      <option value="warehouse">Warehouse Management & Consolidation</option>
                      <option value="other">Other Logistics Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements / Notes</label>
                    <textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#263070] h-28" placeholder="Tell us about your branch count, integration needs, or offline operations challenges..."></textarea>
                  </div>

                  <Button variant="secondary" className="w-full py-4 text-base font-bold shadow-md">
                    Schedule My Live Demo
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
