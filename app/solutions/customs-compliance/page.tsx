"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import FloatingShapes from "@/components/animations/FloatingShapes";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, FileText, Shield, Scales, Globe, ClipboardText,
  Warning, MagnifyingGlass, CheckCircle, Lock, Receipt, Barcode,
  Buildings, ChartLine, Terminal,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: FileText, title: "Commercial Invoice Generation", desc: "Auto-generate compliant commercial invoices for every international shipment. Pre-filled with shipper, receiver, commodity details, HS codes, and declared values." },
  { icon: ClipboardText, title: "Packing List & Certificate of Origin", desc: "Produce packing lists and certificates of origin directly from shipment data. No re-entering information, documents pull from the booking record." },
  { icon: Scales, title: "HS Code Management", desc: "Search and assign Harmonized System codes to packages. System validates codes and calculates applicable duties and taxes per destination country." },
  { icon: Globe, title: "Duty & Tax Calculation", desc: "Automatically compute customs duties, VAT, and applicable import taxes based on HS codes, declared values, and destination regulations." },
  { icon: Warning, title: "Dangerous Goods Handling", desc: "Flag and classify dangerous goods per IATA and IMDG regulations. Ensure correct documentation and handling instructions are attached to every relevant shipment." },
  { icon: Shield, title: "Sanction List Screening", desc: "Screen senders and receivers against international sanctions lists before shipment processing. Block or flag restricted entities automatically." },
  { icon: MagnifyingGlass, title: "Export / Import Restriction Checks", desc: "Validate every shipment against country-level export and import restriction databases. Catch prohibited items before they reach the border." },
  { icon: Lock, title: "Audit Trail & Compliance Logs", desc: "Every document generated, status changed, and decision made is logged with user, timestamp, and reason, providing a complete exportable compliance audit trail." },
];

const workflow = [
  { step: "01", title: "Create Shipment", desc: "Enter package details, sender, receiver, and commodity information. System prompts for HS codes and declared value at the point of booking." },
  { step: "02", title: "Auto Compliance Check", desc: "System screens against sanctions lists and restriction databases in real time. Flagged shipments are held for review before processing continues." },
  { step: "03", title: "Generate Documents", desc: "One click produces commercial invoice, packing list, certificate of origin, and customs declaration form, all pre-populated and formatted for submission." },
  { step: "04", title: "Calculate Duties", desc: "Duties, VAT, and import taxes are computed using HS codes and destination country rules. Totals appear on the invoice and can be passed to the client." },
  { step: "05", title: "Submit & Archive", desc: "Submit documentation to customs authorities. All records are archived with full audit trail, searchable, exportable, and retained per your data policy." },
];

const documentTypes = [
  { name: "Commercial Invoice", desc: "Legally required export document with full shipment and valuation details" },
  { name: "Packing List", desc: "Detailed breakdown of all items, weights, and dimensions per package" },
  { name: "Certificate of Origin", desc: "Certifies where goods were manufactured for tariff preference purposes" },
  { name: "Customs Declaration", desc: "Formal declaration submitted to customs authorities for clearance" },
  { name: "Airway Bill / Bill of Lading", desc: "Transport contract between shipper and carrier with full shipment details" },
  { name: "Dangerous Goods Declaration", desc: "IATA/IMDG-compliant declaration for hazardous materials" },
];

const complianceChecks = [
  "Sanctions list screening (OFAC, UN, EU)",
  "Export/import restriction validation",
  "Prohibited items checking",
  "Dangerous goods classification",
  "HS code validation per destination",
  "Dual-use goods identification",
  "Country embargo verification",
  "GDPR-compliant data retention",
];

const stats = [
  { value: 200, suffix: "+", label: "Permission control points" },
  { value: 100, suffix: "%", label: "Audit trail coverage" },
  { value: 30, suffix: "+", label: "API modules" },
  { value: 4, suffix: "", label: "Languages supported" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return <div ref={ref} className="text-2xl font-bold text-blue-500 font-sans">{count}{suffix}</div>;
}

function ConsoleFrame({ label, status, children, delay = 0 }: {
  label: string; status?: string; children: React.ReactNode; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: easeOutExpo }}
      className="relative w-full border border-border-custom bg-[var(--console-bg)] overflow-hidden group"
    >
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="px-4 py-2 border-b border-border-custom bg-[var(--console-header)] flex items-center justify-between text-[10px] text-foreground/60">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
          </div>
          <div className="flex items-center gap-1 pl-2 border-l border-border-custom">
            <Terminal className="h-3 w-3 text-blue-500" />
            <span className="tracking-wider">{label}</span>
          </div>
        </div>
        {status && (
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <span className="tracking-wider text-blue-500">{status}</span>
          </div>
        )}
      </div>
      {children}
    </motion.div>
  );
}

export default function CustomsCompliance() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="space-y-5">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  Customs &<br /><span className="text-blue-500">Compliance</span>
                </h1>
                <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-md">
                  Automate customs documentation, HS code management, duty calculations, and regulatory compliance checks, all built directly into the NTIGI shipment workflow.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                </div>
              </AnimatedSection>

              <div className="hidden md:block">
                <ConsoleFrame label="NTIGI_OS // COMPLIANCE_CHECK.sh" status="LIVE" delay={0.25}>
                  <div className="relative w-full aspect-[16/10] bg-[var(--console-bg)] overflow-hidden">
                    <Image src="/ntigidashboard.png" alt="NTIGI customs compliance screen" fill className="object-cover object-top" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/60 via-transparent to-transparent pointer-events-none" />
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.9, ease: easeOutExpo }}
                      className="absolute bottom-3 right-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest"
                    >
                      COMPLIANCE // AUTO_SCREEN
                    </motion.div>
                  </div>
                </ConsoleFrame>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.05)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* STATS BAR */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t-2 border-t-blue-500/20 border-border-custom">
              {stats.map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES — icons only, no badge */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Built for Compliant Global Trade</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every compliance requirement handled automatically, from document generation to regulatory screening, before the shipment moves.</p>
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

        {/* WORKFLOW — no badge, plain H2 */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Booking to Clearance</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Compliance is embedded in the shipment workflow, not a separate step that slows you down.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-border-custom relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10" />
              {workflow.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.12} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] transition-all relative group">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 200 }}
                    className="w-8 h-8 rounded-full bg-[var(--console-bg)] border border-blue-500/30 group-hover:border-blue-500/60 transition-colors flex items-center justify-center mb-3">
                    <span className="text-[10px] font-bold text-blue-500">{step.step}</span>
                  </motion.div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTS + COMPLIANCE — text cards, untouched */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Receipt className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">Documents Generated</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">All required customs documents are produced directly from the shipment record, no separate system, no re-entry of data.</p>
              <div className="space-y-3 pt-2">
                {documentTypes.map((doc, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Barcode className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{doc.name}</span>
                    </div>
                    <p className="text-sm text-foreground/60 font-sans font-medium pl-5">{doc.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Automated Compliance Checks</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every shipment runs through a full compliance screening stack before processing, automatically, without manual intervention.</p>
                <div className="space-y-2 pt-2">
                  {complianceChecks.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <Lock className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Enterprise-Grade Security</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">All compliance data is protected with AES-256 encryption at rest and TLS 1.3 in transit. Role-based access control ensures only authorized staff can view or modify sensitive customs records.</p>
                <div className="flex items-start gap-2 pt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">Complete audit trail with user, timestamp, and action recorded on every document change.</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PROOF SECTION — 2 console frames */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">See It in Action</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Live compliance screening at booking and auto-generated customs documents — all inside the same screen.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              <ConsoleFrame label="NTIGI // SANCTIONS_SCREEN.sh" status="READY" delay={0.1}>
                <div className="relative w-full aspect-[16/10] bg-[var(--console-bg)] overflow-hidden">
                  <Image src="/shipmentlistHome.png" alt="NTIGI compliance screening view" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/50 via-transparent to-transparent pointer-events-none" />
                  <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.6, ease: easeOutExpo }}
                    className="absolute bottom-3 left-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest">
                    SCREEN // OFAC_UN_EU
                  </motion.div>
                </div>
                <div className="px-4 py-3 border-t border-border-custom bg-[var(--console-header)]/60 flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span className="text-[11px] text-foreground/60 tracking-wider uppercase">Real-time sanctions and restriction screening at point of booking</span>
                </div>
              </ConsoleFrame>

              <ConsoleFrame label="NTIGI // CUSTOMS_DOCS.sh" status="LIVE" delay={0.2}>
                <div className="relative w-full aspect-[16/10] bg-[var(--console-bg)] overflow-hidden">
                  <Image src="/ntigidashboard.png" alt="NTIGI customs document generation" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/50 via-transparent to-transparent pointer-events-none" />
                  <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.7, ease: easeOutExpo }}
                    className="absolute bottom-3 left-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest">
                    DOCS // AUTO_GEN
                  </motion.div>
                </div>
                <div className="px-4 py-3 border-t border-border-custom bg-[var(--console-header)]/60 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span className="text-[11px] text-foreground/60 tracking-wider uppercase">Commercial invoice, packing list &amp; certificate generated in one click</span>
                </div>
              </ConsoleFrame>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">

              <AnimatedSection delay={0} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/personOffice.jpg" alt="Customs broker reviewing shipment documents" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Buildings className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Customs Brokers</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Handle multiple client accounts with document generation, HS code lookup, and duty calculation built in. Reduce manual paperwork and clearance time.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/logisticsboss.jpg" alt="Freight forwarder at port managing shipments" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Globe className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Freight Forwarders</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Embed compliance directly into your international forwarding workflow. Documents are generated at the point of booking, not as an afterthought.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.24} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/complaince.jpg" alt="Compliance team reviewing audit logs" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <ChartLine className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Compliance Teams</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Full audit trail, exportable compliance logs, and screening records for every shipment. Built-in GDPR tools and configurable data retention policies.</p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* RELATED SOLUTIONS */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "International Forwarding", desc: "Manage cross-border shipments, multi-leg routes, and partner agency networks end to end.", href: "/solutions/international-forwarding" },
                { title: "Consolidation & Manifests", desc: "Group shipments into voyages, manage containers, and generate manifests for customs submission.", href: "/solutions/consolidation" },
                { title: "Finance & Billing", desc: "Issue multi-currency invoices with duties and taxes automatically calculated per jurisdiction.", href: "/solutions/finance-billing" },
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

        {/* CTA — animated gradient only, no image, no static grid */}
        <section className="py-20 bg-[var(--console-header)] border-b border-border-custom relative overflow-hidden noise-overlay">
          <motion.div
            animate={{ opacity: [0.04, 0.1, 0.04], scale: [1, 1.08, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 blur-3xl -z-10 pointer-events-none"
          />
          <motion.div
            animate={{ opacity: [0.03, 0.07, 0.03], scale: [1.05, 1, 1.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary blur-3xl -z-10 pointer-events-none"
          />
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to Automate Your<br /><span className="text-blue-500">Customs Operations?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI handles documentation, screening, and duty calculations for your specific trade lanes in a live demo with our team.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/contact" size="lg">Talk to Sales</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
