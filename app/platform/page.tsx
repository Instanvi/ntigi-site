"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/animations/AnimatedSection";
import FloatingShapes from "@/components/animations/FloatingShapes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Laptop, DeviceMobile, Desktop, Database, CloudArrowUp, ArrowsClockwise, ShieldCheck, Lightning, LockKey, Gear } from "@phosphor-icons/react";

export default function Platform() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <FloatingShapes />
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  One Platform<br /><span className="text-blue-500">Three Ways to Work</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  Access your logistics operations from anywhere. Web dashboard for managers, desktop app for stations, mobile app for drivers all synchronized in real-time.
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image
              src="/ship.jpeg"
              alt="Logistics transport and shipping"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Access From Anywhere</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
              {[
                { icon: Laptop, title: "Web Dashboard", desc: "Complete command center accessible from any browser. Track shipments, manage teams, generate reports, and oversee your entire network in real-time." },
                { icon: Desktop, title: "Desktop Application", desc: "Fast Windows app for courier stations. Create shipments in seconds, print labels instantly, and work completely offline with automatic background sync." },
                { icon: DeviceMobile, title: "Mobile App", desc: "Field tools for drivers and agents. Scan barcodes, update delivery status, capture proof of delivery, and navigate routes all from your phone." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Works Without Internet</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-border-custom">
              {[
                { icon: Database, title: "Local Storage", desc: "Create shipments, manage clients, process payments all without internet. Data stored safely on your device." },
                { icon: ArrowsClockwise, title: "Auto Sync", desc: "Changes sync automatically in the background when you reconnect. Never worry about manual uploads or data loss." },
                { icon: CloudArrowUp, title: "Fast Updates", desc: "Only new changes are uploaded, saving bandwidth. Process hundreds of shipments, sync in seconds." },
                { icon: ShieldCheck, title: "Data Safety", desc: "Multiple backup layers ensure nothing is ever lost, even during power outages or network failures." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02]">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center mb-3">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Enterprise-Grade Capabilities</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { icon: Lightning, title: "Speed", items: ["Pages load in under 2 seconds", "Process 100,000+ shipments daily", "Real-time status updates", "Instant search across all data"] },
                { icon: LockKey, title: "Security", items: ["Bank-level encryption", "Secure login with 2FA support", "Complete activity audit trails", "Role-based access control"] },
                { icon: Gear, title: "Integration", items: ["Connect to existing systems", "Import/export via Excel/CSV", "Print labels and receipts", "WhatsApp & SMS notifications"] },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] space-y-4">
                  <div className="flex items-center gap-2 text-blue-500">
                    <item.icon className="w-5 h-5" />
                    <h3 className="text-md font-bold uppercase tracking-wider">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((li, j) => (
                      <li key={j} className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>{li}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 border-b border-border-custom overflow-hidden noise-overlay">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/image3.jpg"
              alt="Logistics solutions background"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to See It<br /><span className="text-blue-500">In Action?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Book a live walkthrough and see how NTIGI works across web, desktop, and mobile for your specific operation.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/contact" size="lg">Talk to Sales</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-20" />
        </section>

      </main>
      <Footer />
    </div>
  );
}
