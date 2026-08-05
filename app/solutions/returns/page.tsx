"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  ArrowsCounterClockwise,
  Package,
  Receipt,
  Bell,
  MapPin,
  CheckCircle,
  Camera,
  CurrencyDollar,
  ClipboardText,
  Barcode,
  ChartLine,
  ShoppingBag,
  Truck,
  Buildings,
  Warning,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: ArrowsCounterClockwise,
    title: "Return Shipment Creation",
    desc: "Create return shipments with full sender and receiver details. Linked to the original outbound shipment for complete lifecycle tracking. Supports all package types and handling methods.",
  },
  {
    icon: Package,
    title: "22 Cargo Handling Tags",
    desc: "Apply any of 22 cargo handling tags to return shipments: Fragile, Damaged, Hazardous, Perishable, and more. Handlers see exactly how to treat returning goods.",
  },
  {
    icon: MapPin,
    title: "Real-Time Return Tracking",
    desc: "Track every return shipment live with GPS. Customers and operations staff see the return status from pickup to arrival at your warehouse or origin point.",
  },
  {
    icon: Barcode,
    title: "Barcode and QR Code",
    desc: "Auto-generate barcodes and QR codes for every return shipment. Print return labels on demand. Scan at pickup and receipt to confirm chain of custody.",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    desc: "Capture photos at pickup to document the condition of returned goods. Photos attach to the return record and protect against disputes over damage.",
  },
  {
    icon: Receipt,
    title: "Automatic Invoice and Refund",
    desc: "Generate return invoices automatically. Apply refunds or credit notes against the original invoice. Multi-currency support with full PDF generation.",
  },
  {
    icon: Bell,
    title: "Customer Notifications",
    desc: "Customers receive automatic SMS, email, and push notifications at each stage of their return: pickup confirmed, in transit, received, and refund issued.",
  },
  {
    icon: ChartLine,
    title: "Returns Reporting",
    desc: "Track return volumes per route, return reasons, refund totals, and processing times. Export reports to Excel or CSV for operations and finance teams.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Return Requested",
    desc: "Customer submits a return request through the portal or your agent creates one directly. The original shipment is linked and the return reason is recorded.",
  },
  {
    step: "02",
    title: "Return Label Issued",
    desc: "A return shipping label with barcode is generated instantly. Emailed to the customer or printed by your agent. Ready to apply to the package immediately.",
  },
  {
    step: "03",
    title: "Package Picked Up",
    desc: "Driver scans the return barcode at pickup and captures a photo of the package condition. Status updates to In Transit and the customer is notified automatically.",
  },
  {
    step: "04",
    title: "Received and Inspected",
    desc: "When the return arrives at your warehouse, staff scan it back into stock. Condition is logged with photos. The return is marked as received and the original order updated.",
  },
  {
    step: "05",
    title: "Refund Processed",
    desc: "A refund or credit note is applied against the original invoice. The customer receives a notification and the transaction is closed in the financial records.",
  },
];

const returnRecord = [
  { label: "Original Shipment Link", desc: "Connected to the outbound shipment for full lifecycle view" },
  { label: "Return Reason", desc: "Recorded at request time for reporting and analysis" },
  { label: "Package Condition", desc: "Documented with pickup photo and handling tags" },
  { label: "Pickup Timestamp", desc: "Date and time driver collected the return" },
  { label: "Driver Identity", desc: "Which driver handled the return pickup" },
  { label: "Return Tracking Number", desc: "Unique reference for this return shipment" },
  { label: "Receipt Confirmation", desc: "Scan confirmation when return arrives at warehouse" },
  { label: "Refund Reference", desc: "Linked credit note or refund transaction" },
];

const returnTypes = [
  { name: "Standard Return", desc: "Scheduled pickup and return to origin" },
  { name: "Express Return", desc: "Priority return with faster pickup window" },
  { name: "Damaged Goods Return", desc: "Condition-documented return with photo evidence" },
  { name: "Wrong Item Return", desc: "Linked to original shipment for reconciliation" },
  { name: "Refused Delivery", desc: "Package returned without delivery attempted" },
  { name: "COD Return", desc: "Return with COD collection reversal tracking" },
];

const stats = [
  { value: "Full", label: "Return lifecycle" },
  { value: "Auto", label: "Refund processing" },
  { value: "Real-Time", label: "GPS tracking" },
  { value: "Photo", label: "Condition evidence" },
];

export default function Returns() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <Link
              href="/solutions/customer-portal"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-blue-500 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Solutions</span>
            </Link>
            <div className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">
                For E-commerce and Courier Operations
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Returns
                <br />
                <span className="text-blue-500">Management</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Handle return shipments with the same tracking, documentation, and automation as outbound deliveries. From return label generation to refund processing, every step is tracked and managed in NTIGI.
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
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">
                Capabilities
              </div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                Reverse Logistics Built into NTIGI
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Returns use the same platform, same workflows, and same tracking as outbound shipments. No separate system needed.
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

        {/* Workflow */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12 max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">
                Workflow
              </div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                From Return Request to Refund
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                A five-step return lifecycle where every action is tracked, documented, and communicated automatically.
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

        {/* Return Record + Return Types - 2 column */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* Return Record */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <ClipboardText className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every Return Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                Each return is a complete operational record linked to its original outbound shipment. Every party involved can see the full return history at any point.
              </p>
              <div className="space-y-3 pt-1">
                {returnRecord.map((item, i) => (
                  <div key={i} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.label}</span>
                    </div>
                    <p className="text-sm text-foreground/60 font-sans font-medium pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Return Types + Finance */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <ArrowsCounterClockwise className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Return Types Supported</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Every return scenario your operation handles is covered in NTIGI with the appropriate workflow and documentation.
                </p>
                <div className="space-y-3 pt-1">
                  {returnTypes.map((item, i) => (
                    <div key={i} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-0.5">{item.name}</div>
                      <div className="text-sm text-foreground/60 font-sans font-medium">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <CurrencyDollar className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Financial Reconciliation</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Returns are fully reconciled against the original invoice. Credit notes, refunds, and partial refunds are all supported. Multi-currency returns handled automatically with PDF generation and email delivery.
                </p>
                <div className="flex items-start gap-2 pt-1">
                  <Warning className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">
                    Return invoices and refund records are available in the customer portal the moment they are processed.
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
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">
                Use Cases
              </div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                Who This Is Built For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <ShoppingBag className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">E-commerce Fulfilment</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Handle online shopper returns at scale. Customers initiate returns through the portal, receive a label automatically, and track the return to refund confirmation.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Courier Services</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Manage refused deliveries and wrong-address returns in your daily driver runs. Returns are created, dispatched, and tracked using the same driver mobile app.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Buildings className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">B2B Logistics</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Process bulk return shipments from business clients with credit notes issued automatically against their account. Full return volume reporting per client and per route.
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
                  title: "Customer Portal",
                  desc: "Customers submit return requests and track returns in real time through their self-service portal.",
                  href: "/solutions/customer-portal",
                },
                {
                  title: "Proof of Delivery",
                  desc: "Drivers capture photos and signatures at return pickup to document package condition at collection.",
                  href: "/solutions/proof-of-delivery",
                },
                {
                  title: "Finance and Billing",
                  desc: "Return invoices, credit notes, and refund processing are handled automatically and linked to the original transaction.",
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
                Ready to Handle Returns
                <br />
                <span className="text-blue-500">Without the Headache?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI manages your entire return lifecycle from request to refund in a live walkthrough with our team.
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
