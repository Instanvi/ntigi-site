"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">Request Live Demo</div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Request a<br /><span className="text-blue-500">Live Demo</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                See how our offline-first cloud platform streamlines maritime voyages, customs compliance, and package dispatch workflows.
              </p>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="py-20 border-b border-border-custom">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            {submitted ? (
              <AnimatedSection className="text-center py-16 space-y-6 bg-[var(--console-bg)] border border-border-custom rounded-none p-8">
                <div className="mx-auto w-16 h-16 bg-[var(--console-bg)] border border-border-custom rounded-none flex items-center justify-center text-blue-500">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">Request Received!</h2>
                <p className="text-sm text-foreground/70 max-w-md mx-auto font-sans leading-relaxed font-medium">
                  Thank you for your interest in NTIGI. One of our logistics optimization specialists will reach out to schedule a live walkthrough of our web and mobile PWA platform.
                </p>
                <div className="pt-4">
                  <Button variant="secondary" href="/">Return to Homepage</Button>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection className="bg-[var(--console-bg)] border border-border-custom rounded-none p-8 md:p-12 space-y-8">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">Schedule Your Demo</div>
                  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground">Experience NTIGI</h2>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Fill out the form below and our team will contact you to schedule a personalized demonstration.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Work Email</label>
                    <input required type="email" className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder="john.doe@logistics.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder="Global Freight Forwarders" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Primary Operations Area</label>
                    <select required className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors">
                      <option value="">Select industry area...</option>
                      <option value="freight">Ocean & Air Freight Forwarding</option>
                      <option value="courier">Courier & Last-Mile Delivery</option>
                      <option value="warehouse">Warehouse Management & Consolidation</option>
                      <option value="other">Other Logistics Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Special Requirements / Notes</label>
                    <textarea className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors h-28 resize-none" placeholder="Tell us about your branch count, integration needs, or offline operations challenges..."></textarea>
                  </div>
                  <Button variant="secondary" className="w-full py-4 text-base font-bold">Schedule My Live Demo</Button>
                </form>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
