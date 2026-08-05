"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Stack,
  Bell,
  Code,
  ArrowsCounterClockwise,
  CurrencyDollar,
  MapPin,
  ChartLine,
  CheckCircle,
  Receipt,
  ShoppingBag,
  Storefront,
  Globe,
  Barcode,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: Stack,
    title: "Bulk Shipment Creation",
    desc: "Process hundreds of orders in one operation. Create shipments individually or import in bulk. Each order gets its own tracking number, label, and receipt automatically.",
  },
  {
    icon: MapPin,
    title: "Real-Time Order Tracking",
    desc: "Every online shopper can track their order in real time via the public tracking portal or customer portal. No login required for the public tracking page.",
  },
  {
    icon: Bell,
    title: "Automated Customer Notifications",
    desc: "Shoppers receive automatic SMS, email, push, and WhatsApp notifications at every delivery milestone. Configured once by your operations team, runs automatically.",
  },
  {
    icon: Code,
    title: "REST API for Store Integration",
    desc: "Connect your online store directly to NTIGI via the REST API. Orders placed on your platform trigger shipment creation in NTIGI automatically without manual entry.",
  },
  {
    icon: ArrowsCounterClockwise,
    title: "Returns Management",
    desc: "Customers initiate returns through the portal. Return labels are generated automatically. Every return is tracked, photographed, and reconciled against the original order.",
  },
  {
    icon: CurrencyDollar,
    title: "COD Management",
    desc: "Track cash on delivery collections per driver across every route. Automatic reconciliation when orders are delivered and paid. Full COD reporting per client and per run.",
  },
  {
    icon: Receipt,
    title: "Automatic Invoice Generation",
    desc: "Invoices are created the moment a shipment is booked. PDF generation, email delivery, and download access for customers in the portal from day one.",
  },
  {
    icon: Barcode,
    title: "Barcode and Label Printing",
    desc: "Generate and print shipping labels with barcodes and QR codes for every order. Batch print entire dispatch runs. Scan labels at pickup and delivery.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Order Received",
    desc: "Your online store sends order data to NTIGI via the REST API or your agent creates shipments manually. Each order is processed into a shipment record instantly.",
  },
  {
    step: "02",
    title: "Label Printed",
    desc: "A shipping label with barcode is generated and printed. The customer receives an order confirmation with tracking number via SMS and email automatically.",
  },
  {
    step: "03",
    title: "Dispatched and Tracked",
    desc: "The package is assigned to a driver and route. The customer can track live. Automated notifications fire at each status update without any manual intervention.",
  },
  {
    step: "04",
    title: "Delivered and Confirmed",
    desc: "Driver captures signature and delivery photo. Delivery confirmation is sent to the customer. COD payment is recorded if applicable. Invoice is closed.",
  },
  {
    step: "05",
    title: "Returns Processed",
    desc: "If a return is requested, the customer gets a label automatically. The return is tracked back to your warehouse and a credit note or refund is issued.",
  },
];

const apiCapabilities = [
  "Create shipments via REST API",
  "Bulk shipment creation endpoints",
  "Real-time tracking webhooks",
  "Status update callbacks to your store",
  "Label and barcode generation API",
  "Invoice and receipt retrieval",
  "Customer notification triggers",
  "COD status and reconciliation",
];

const notificationTriggers = [
  { event: "Order Confirmed", channel: "Email + SMS" },
  { event: "Package Picked Up", channel: "SMS + Push" },
  { event: "In Transit Update", channel: "SMS" },
  { event: "Out for Delivery", channel: "SMS + WhatsApp" },
  { event: "Delivered", channel: "Email + SMS + Push" },
  { event: "Delivery Photo", channel: "Email" },
  { event: "Return Initiated", channel: "Email + SMS" },
  { event: "Refund Issued", channel: "Email" },
];

const stats = [
  { value: "Bulk", label: "Order processing" },
  { value: "API", label: "Store integration" },
  { value: "Auto", label: "Notifications" },
  { value: "Real-Time", label: "GPS tracking" },
];

export default function EcommerceFulfillment() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <Link
              href="/solutions/returns"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-blue-500 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Solutions</span>
            </Link>
            <div className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">
                For E-commerce Businesses
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                E-commerce
                <br />
                <span className="text-blue-500">Fulfillment</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Connect your online store to NTIGI via REST API. Process bulk orders, automate customer notifications, manage COD collections, and handle returns. One logistics platform built for high-volume e-commerce fulfillment.
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
                Everything Your E-commerce Operation Needs
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                From order intake to delivery confirmation, NTIGI handles the full fulfillment lifecycle for e-commerce businesses of any size.
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
                From Order Placed to Delivered
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                A five-step fulfillment cycle where every action is automated, tracked, and visible to both your team and your customers.
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

        {/* API Capabilities + Notifications - 2 column */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* API */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Code className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">REST API Integration</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                Connect your e-commerce platform, marketplace, or custom store system directly to NTIGI. Orders flow in automatically and tracking data flows back to your storefront.
              </p>
              <div className="space-y-2 pt-1">
                {apiCapabilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Triggers + COD note */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Bell className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Automated Notification Events</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Every delivery event triggers an automatic notification to the customer via their preferred channel. No staff action required.
                </p>
                <div className="space-y-3 pt-1">
                  {notificationTriggers.map((item, i) => (
                    <div key={i} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.event}</span>
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{item.channel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <CurrencyDollar className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">COD for Online Stores</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Many e-commerce customers in West Africa and other markets prefer cash on delivery. NTIGI tracks COD collection per driver, reconciles per order, and reports outstanding COD totals at any time.
                </p>
                <div className="flex items-start gap-2 pt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">
                    COD orders tracked from dispatch through collection and reconciliation automatically.
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
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Online Retailers</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Process hundreds of orders daily with bulk creation, automatic label printing, and real-time tracking for every customer. Integrate your store via API and eliminate manual data entry.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Storefront className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Marketplace Sellers</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Fulfil orders from multiple marketplaces through a single NTIGI account. Separate client records per marketplace, combined reporting for your finance team.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Cross-Border E-commerce</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Ship internationally with customs documentation generated automatically. Multi-currency invoicing, duty calculations, and tracking from checkout to doorstep across borders.
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
                  desc: "Your online shoppers track their orders, download invoices, and submit returns through a self-service portal branded to your operation.",
                  href: "/solutions/customer-portal",
                },
                {
                  title: "Returns Management",
                  desc: "Handle customer returns at scale with automatic return labels, photo documentation, and refund processing.",
                  href: "/solutions/returns",
                },
                {
                  title: "Proof of Delivery",
                  desc: "Give customers delivery confirmation with signature, photo, and GPS coordinates delivered automatically after every drop.",
                  href: "/solutions/proof-of-delivery",
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
                Ready to Scale Your
                <br />
                <span className="text-blue-500">E-commerce Fulfilment?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI connects to your online store and handles your full order-to-delivery lifecycle in a live walkthrough with our team.
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
