"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Globe,
  Package,
  ArrowLeft,
  ArrowRight,
  Buildings,
  FileText,
  CurrencyDollar,
  MapPin,
  ChartLine,
  Shield,
  ClockCounterClockwise,
  Truck,
  UsersThree,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";

const capabilities = [
  { icon: Globe, title: "Multi-Country Route Management", desc: "Create and manage routes spanning multiple countries with multi-leg stops, transit points, and dynamic pricing per corridor. Cover West Africa to global ports with a single system." },
  { icon: Package, title: "International Shipment Types", desc: "Handle standard, express, bulk, return, and COD international shipments. Capture sender and receiver details across borders with full address validation." },
  { icon: FileText, title: "Customs Documentation", desc: "Auto-generate commercial invoices, packing lists, certificates of origin, and customs declaration forms. Manage HS codes and calculate duties and taxes per shipment." },
  { icon: Buildings, title: "Partner Agency Network", desc: "Connect with partner agencies abroad. Manage inter-branch transfers, commission structures, and inter-agency settlements all from a single dashboard." },
  { icon: CurrencyDollar, title: "Multi-Currency Invoicing", desc: "Issue invoices in multiple currencies. Handle tax and VAT calculations per jurisdiction with automatic currency conversion and PDF generation." },
  { icon: MapPin, title: "Real-Time GPS Tracking", desc: "Track every international shipment live. Customers receive automated SMS, email, and push notifications at each status update along the route." },
  { icon: Shield, title: "Compliance & Sanctions Screening", desc: "Built-in regulatory compliance checking, dangerous goods handling, export/import restriction enforcement, and sanctions list screening on every shipment." },
  { icon: ChartLine, title: "Revenue & Route Analytics", desc: "Monitor revenue per route, agent commission reports, branch performance comparisons, and delivery success rates all exportable to Excel or PDF." },
];

const workflow = [
  { step: "01", title: "Book the Shipment", desc: "Create an international shipment with sender, receiver, package details, route, and service level. System generates a tracking number and receipt instantly." },
  { step: "02", title: "Generate Documents", desc: "NTIGI auto-produces all required customs documentation: commercial invoice, packing list, certificate of origin, ready for border submission." },
  { step: "03", title: "Assign to Voyage/Manifest", desc: "Group shipments into a manifest and assign to a voyage or container. Optimize load and print the manifest for carriers." },
  { step: "04", title: "Track Across Borders", desc: "Every status change: picked up, in transit, at customs, out for delivery, delivered, is logged and pushed to the customer in real time." },
  { step: "05", title: "Settle & Invoice", desc: "Once delivered, generate final invoices, process payments in local or foreign currency, and close the shipment with proof of delivery." },
];

const complianceItems = [
  "HS code management and duty calculation",
  "Commercial invoice generation",
  "Packing list and certificate of origin",
  "Customs declaration forms",
  "Dangerous goods handling",
  "Sanction list screening",
  "Export/import restriction checks",
  "Audit trail for every action",
];

const carrierIntegrations = [
  { name: "DHL", type: "API Integration" },
  { name: "FedEx", type: "API Integration" },
  { name: "UPS", type: "API Integration" },
  { name: "Local Carriers", type: "Custom APIs" },
];

const stats = [
  { value: 100, suffix: "K+", label: "Shipments processed daily" },
  { value: 22, suffix: "+", label: "Cargo handling methods" },
  { value: 4, suffix: "", label: "Languages supported" },
  { value: 30, suffix: "+", label: "API modules" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <div ref={ref} className="text-2xl font-bold text-blue-500 font-sans">{count}{suffix}</div>;
}

export default function InternationalForwarding() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                International<br /><span className="text-blue-500">Forwarding</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Manage cross-border shipments, customs documentation, multi-currency invoicing, and partner agency networks from a single offline-first platform built for international freight forwarders.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* Stats Bar */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border-custom">
              {stats.map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">Capabilities</div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Everything a Global Freight Forwarder Needs</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">From booking to final delivery, every tool built into one platform that works even without internet.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom bg-primary/[0.01]">
              {capabilities.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.08} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
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

        {/* Workflow */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">Workflow</div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">How International Forwarding Works</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A clear five-step process from booking to settlement, fully trackable at every stage.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-border-custom relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10" />
              {workflow.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.12} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] transition-all relative">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 200 }} className="w-8 h-8 rounded-full bg-[var(--console-bg)] border border-blue-500/30 flex items-center justify-center mb-3">
                    <span className="text-[10px] font-bold text-blue-500">{step.step}</span>
                  </motion.div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance + Carrier Integrations */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Shield className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">Customs & Compliance</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">NTIGI handles every document and compliance check required for international shipment clearance automatically, at the point of booking.</p>
              <div className="space-y-2 pt-2">
                {complianceItems.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Truck className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Carrier Integrations</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Connect with global carriers for rate comparison, label generation, and tracking all inside NTIGI.</p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {carrierIntegrations.map((carrier, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground">{carrier.name}</div>
                      <div className="text-sm text-blue-500 uppercase tracking-wider mt-0.5">{carrier.type}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <ClockCounterClockwise className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Offline-First Operation</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Create international shipments, issue documents, and update statuses even with no internet connection. Data syncs automatically the moment connectivity returns. Zero data loss, no duplicate entries.</p>
                <div className="flex items-start gap-2 pt-1">
                  <WarningCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">Critical for agents operating in West African port zones with intermittent connectivity.</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">Use Case</div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Built for Multi-Branch Forwarders</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { icon: Buildings, title: "Multiple Branches", desc: "Operate separate branches with data isolation, branch-level permissions, and consolidated reporting at the top level. Each branch sees only what it needs to." },
                { icon: UsersThree, title: "Partner Agencies", desc: "Onboard partner agencies at origin and destination points. Track commissions, inter-agency settlements, and partner performance from one place." },
                { icon: ChartLine, title: "Full Visibility", desc: "Real-time KPI dashboards, route utilization reports, and delivery success rates. Export any report to Excel, PDF, or CSV at any time." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Customs & Compliance", desc: "Centralize global trade operations and automate compliance documentation at every border.", href: "/solutions/customs-compliance" },
                { title: "Warehouse Management", desc: "Streamline goods-in to goods-out with consolidation, pallet tracking, and manifest generation.", href: "/solutions/warehouse" },
                { title: "Finance & Billing", desc: "Process payments in multiple currencies, generate invoices, and manage agent commissions.", href: "/solutions/finance" },
              ].map((sol, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Link href={sol.href} className="block p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/30 transition-all group h-full">
                    <h4 className="text-md font-bold uppercase tracking-wider text-foreground group-hover:text-blue-500 transition-colors mb-2">{sol.title}</h4>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mb-4">{sol.desc}</p>
                    <div className="flex items-center gap-1 text-blue-500 text-xs font-bold uppercase tracking-wider">
                      <span>Learn more</span><ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--console-header)] border-b border-border-custom relative overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to Streamline Your<br /><span className="text-blue-500">International Operations?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Book a live walkthrough with our team. We will show you how NTIGI handles your exact forwarding workflow end to end.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/contact" size="lg">Talk to Sales</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
