"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Shield,
  Scales,
  Globe,
  ClipboardText,
  Warning,
  MagnifyingGlass,
  CheckCircle,
  Lock,
  Receipt,
  Barcode,
  Buildings,
  ChartLine,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: FileText,
    title: "Commercial Invoice Generation",
    desc: "Auto-generate compliant commercial invoices for every international shipment. Pre-filled with shipper, receiver, commodity details, HS codes, and declared values.",
  },
  {
    icon: ClipboardText,
    title: "Packing List & Certificate of Origin",
    desc: "Produce packing lists and certificates of origin directly from shipment data. No re-entering information documents pull from the booking record.",
  },
  {
    icon: Scales,
    title: "HS Code Management",
    desc: "Search and assign Harmonized System (HS) codes to packages. System validates codes and calculates applicable duties and taxes per destination country.",
  },
  {
    icon: Globe,
    title: "Duty & Tax Calculation",
    desc: "Automatically compute customs duties, VAT, and applicable import taxes based on HS codes, declared values, and destination regulations.",
  },
  {
    icon: Warning,
    title: "Dangerous Goods Handling",
    desc: "Flag and classify dangerous goods per IATA and IMDG regulations. Ensure correct documentation and handling instructions are attached to every relevant shipment.",
  },
  {
    icon: Shield,
    title: "Sanction List Screening",
    desc: "Screen senders and receivers against international sanctions lists before shipment processing. Block or flag restricted entities automatically.",
  },
  {
    icon: MagnifyingGlass,
    title: "Export / Import Restriction Checks",
    desc: "Validate every shipment against country-level export and import restriction databases. Catch prohibited items before they reach the border.",
  },
  {
    icon: Lock,
    title: "Audit Trail & Compliance Logs",
    desc: "Every document generated, status changed, and decision made is logged with user, timestamp, and reason providing a complete, exportable compliance audit trail.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Create Shipment",
    desc: "Enter package details, sender, receiver, and commodity information. System prompts for HS codes and declared value at the point of booking.",
  },
  {
    step: "02",
    title: "Auto Compliance Check",
    desc: "System screens against sanctions lists and restriction databases in real time. Flagged shipments are held for review before processing continues.",
  },
  {
    step: "03",
    title: "Generate Documents",
    desc: "One click produces commercial invoice, packing list, certificate of origin, and customs declaration form all pre-populated and formatted for submission.",
  },
  {
    step: "04",
    title: "Calculate Duties",
    desc: "Duties, VAT, and import taxes are computed using HS codes and destination country rules. Totals appear on the invoice and can be passed to the client.",
  },
  {
    step: "05",
    title: "Submit & Archive",
    desc: "Submit documentation to customs authorities. All records are archived with full audit trail searchable, exportable, and retained per your data policy.",
  },
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
  { value: "200+", label: "Permission control points" },
  { value: "100%", label: "Audit trail coverage" },
  { value: "30+", label: "API modules" },
  { value: "4", label: "Languages supported" },
];

export default function CustomsCompliance() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Customs &
                <br />
                <span className="text-blue-500">Compliance</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Automate customs documentation, HS code management, duty calculations, and regulatory compliance checks all built directly into the NTIGI shipment workflow.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">
                  Request a Demo
                </Button>
                <Button variant="outline" href="/platform" size="lg">
                  Explore Platform
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* Stats Bar */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border-custom">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <div className="text-2xl font-bold text-blue-500 font-sans">{stat.value}</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                Built for Compliant Global Trade
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Every compliance requirement handled automatically from document generation to regulatory screening before the shipment moves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom bg-primary/[0.01]">
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3"
                >
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                From Booking to Clearance
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Compliance is embedded in the shipment workflow not a separate step that slows you down.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-border-custom">
              {workflow.map((step, index) => (
                <div
                  key={index}
                  className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] transition-all"
                >
                  <div className="text-2xl font-bold text-blue-500 mb-3 font-sans">{step.step}</div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents + Compliance Checks - 2 column */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* Document Types */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Receipt className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">Documents Generated</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                All required customs documents are produced directly from the shipment record no separate system, no re-entry of data.
              </p>
              <div className="space-y-3 pt-2">
                {documentTypes.map((doc, i) => (
                  <div key={i} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Barcode className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{doc.name}</span>
                    </div>
                    <p className="text-sm text-foreground/60 font-sans font-medium pl-5">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Checks */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Automated Compliance Checks</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Every shipment runs through a full compliance screening stack before processing automatically, without manual intervention.
                </p>
                <div className="space-y-2 pt-2">
                  {complianceChecks.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <Lock className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Enterprise-Grade Security</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  All compliance data is protected with AES-256 encryption at rest and TLS 1.3 in transit. Role-based access control ensures only authorized staff can view or modify sensitive customs records.
                </p>
                <div className="flex items-start gap-2 pt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">
                    Complete audit trail with user, timestamp, and action recorded on every document change.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                Who This Is Built For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Buildings className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Customs Brokers</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Handle multiple client accounts with document generation, HS code lookup, and duty calculation built in. Reduce manual paperwork and clearance time.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Freight Forwarders</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Embed compliance directly into your international forwarding workflow. Documents are generated at the point of booking not as an afterthought.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <ChartLine className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Compliance Teams</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Full audit trail, exportable compliance logs, and screening records for every shipment. Built-in GDPR tools and configurable data retention policies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                {
                  title: "International Forwarding",
                  desc: "Manage cross-border shipments, multi-leg routes, and partner agency networks end to end.",
                  href: "/solutions/international-forwarding",
                },
                {
                  title: "Consolidation & Manifests",
                  desc: "Group shipments into voyages, manage containers, and generate manifests for customs submission.",
                  href: "/solutions/consolidation",
                },
                {
                  title: "Finance & Billing",
                  desc: "Issue multi-currency invoices with duties and taxes automatically calculated per jurisdiction.",
                  href: "/solutions/finance",
                },
              ].map((sol, i) => (
                <Link
                  key={i}
                  href={sol.href}
                  className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/30 transition-all group"
                >
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground group-hover:text-blue-500 transition-colors mb-2">
                    {sol.title}
                  </h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mb-4">{sol.desc}</p>
                  <div className="flex items-center gap-1 text-blue-500 text-xs font-bold uppercase tracking-wider">
                    <span>Learn more</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--console-header)] border-b border-border-custom relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to Automate Your
                <br />
                <span className="text-blue-500">Customs Operations?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI handles documentation, screening, and duty calculations for your specific trade lanes in a live demo with our team.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">
                  Request a Demo
                </Button>
                <Button variant="outline" href="/contact" size="lg">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

      </main>

      <Footer />
    </div>
  );
}
