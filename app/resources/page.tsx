"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import { Book, Question } from "@phosphor-icons/react";

const tutorials = [
  { title: "Getting Started with NTIGI", description: "Complete walkthrough covering setup, first shipment, and tracking basics", duration: "15:30" },
  { title: "Offline Mode & Sync", description: "Working without internet and automatic data synchronization", duration: "8:45" },
  { title: "Multi-Branch Operations", description: "Managing routes, agencies, and inter-branch transfers", duration: "12:20" },
  { title: "Warehouse & Consolidation", description: "Manifest creation, voyage management, and cargo grouping", duration: "10:15" },
];

const documentationSections = [
  { title: "Getting Started", items: ["Quick start guide", "Installation guide", "First shipment walkthrough", "User roles and permissions"] },
  { title: "Core Features", items: ["Shipment creation and tracking", "Client and customer management", "Route and network configuration", "Pricing and quotations"] },
  { title: "Advanced Topics", items: ["Customs and compliance", "Fleet and driver management", "Real-time messaging system", "Offline-first architecture"] },
  { title: "API Documentation", items: ["REST API reference (30+ modules)", "Authentication and JWT tokens", "Webhooks and event notifications", "SDK examples and code samples"] },
];

const faqs = [
  { q: "Does NTIGI work offline?", a: "Yes. NTIGI has offline-first architecture. Create shipments, manage clients, and perform operations without internet. Data syncs automatically when reconnected." },
  { q: "What platforms are supported?", a: "Web (all modern browsers), Desktop (Windows 10/11), and Mobile (PWA for iOS & Android). All platforms sync in real-time." },
  { q: "How many users can the system handle?", a: "Built for enterprise scale: 10,000+ concurrent users, 100,000+ shipments per day, 1,000+ API requests per second." },
  { q: "What integrations are available?", a: "Payment gateways (Stripe, PayPal, Mobile Money), shipping carriers (DHL, FedEx, UPS), SMS (Twilio), Email (Resend), and cloud storage (Cloudinary)." },
  { q: "How is data security handled?", a: "AES-256 encryption at rest, TLS 1.3 in transit, JWT authentication, role-based access control, and complete audit trails." },
];

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Resources &amp; Support<br /><span className="text-blue-500">For NTIGI Platform</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                Video tutorials, documentation, and support resources to help you master the NTIGI logistics platform.
              </p>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Video Tutorials</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">Watch and learn how to use NTIGI platform features</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tutorials.map((tutorial, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="bg-[var(--console-bg)] border border-border-custom rounded-none overflow-hidden hover:border-blue-500/50 transition-colors">
                  <div className="relative aspect-video bg-black">
                    <video controls className="w-full h-full" preload="metadata">
                      <source src="/hero.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-none">
                      <span className="text-xs text-white font-bold">{tutorial.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-2">{tutorial.title}</h3>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{tutorial.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Documentation Library</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">Comprehensive guides and technical documentation</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom">
              {documentationSections.map((section, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.08} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <Book className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Frequently Asked Questions</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">Common questions about NTIGI platform</p>
            </AnimatedSection>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08, duration: 0.5 }} className="p-6 bg-[var(--console-bg)] border border-border-custom rounded-none hover:border-blue-500/50 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <Question className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <h4 className="text-base font-bold uppercase tracking-wider text-foreground">{faq.q}</h4>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium pl-9">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
