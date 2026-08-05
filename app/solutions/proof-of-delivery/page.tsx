"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Camera,
  Signature,
  MapPin,
  DeviceMobile,
  Bell,
  Barcode,
  ClockCounterClockwise,
  Shield,
  Truck,
  ChartLine,
  UsersThree,
  Warning,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: Signature,
    title: "Signature Capture",
    desc: "Drivers capture the recipient's digital signature directly on their mobile device at the point of delivery. Signature is stored against the shipment record instantly.",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    desc: "Capture photos of delivered packages, damaged goods, or delivery locations. Photos are uploaded to the shipment record and timestamped for dispute resolution.",
  },
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    desc: "Track every driver's location live during delivery runs. Managers see the full fleet on a map. Customers see their shipment moving toward them in real time.",
  },
  {
    icon: Bell,
    title: "Automated Customer Notifications",
    desc: "Customers receive automatic SMS, email, and push notifications at each delivery milestone: out for delivery, arrived, delivered. No manual updates needed.",
  },
  {
    icon: Barcode,
    title: "Barcode Scanning at Delivery",
    desc: "Drivers scan package barcodes to confirm the correct item is being delivered to the correct recipient. Prevents wrong-delivery incidents before they happen.",
  },
  {
    icon: ClockCounterClockwise,
    title: "Delivery Timeline History",
    desc: "Every status update — picked up, in transit, out for delivery, delivered — is logged with timestamp, GPS coordinates, and the driver who performed the action.",
  },
  {
    icon: DeviceMobile,
    title: "Driver Mobile App (PWA)",
    desc: "Drivers use NTIGI's mobile PWA app to manage their delivery queue, navigate routes, scan barcodes, capture signatures and photos — all from any smartphone.",
  },
  {
    icon: Shield,
    title: "Dispute Protection",
    desc: "Every delivery is backed by a complete evidence record: signature, photos, GPS location, timestamp, and driver identity. Resolve client disputes in seconds.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Assign to Driver",
    desc: "Shipments are assigned to a driver and appear in their delivery queue on the mobile app. The driver receives a notification with the day's pickup and delivery list.",
  },
  {
    step: "02",
    title: "Pick Up & Scan",
    desc: "Driver scans the barcode at pickup to confirm they have the correct package. Status updates to 'In Transit' and the customer is notified automatically.",
  },
  {
    step: "03",
    title: "Navigate & Arrive",
    desc: "Driver navigates to the delivery address. GPS location is tracked throughout the route. Status updates to 'Out for Delivery' when the driver is nearby.",
  },
  {
    step: "04",
    title: "Capture POD",
    desc: "At the door, the driver captures the recipient's signature and takes a photo of the delivered package. Both are attached to the shipment record in real time.",
  },
  {
    step: "05",
    title: "Confirm & Close",
    desc: "Delivery is confirmed, status updates to 'Delivered', and the customer receives instant notification. The full POD record is available for download immediately.",
  },
];

const podRecord = [
  { label: "Recipient Signature", desc: "Digital signature captured on driver's device" },
  { label: "Delivery Photos", desc: "Photos of the package and delivery location" },
  { label: "GPS Coordinates", desc: "Exact location where delivery was confirmed" },
  { label: "Delivery Timestamp", desc: "Date and time of delivery confirmation" },
  { label: "Driver Identity", desc: "Which driver completed the delivery" },
  { label: "Barcode Scan Log", desc: "Package scan confirmation at delivery" },
];

const notificationTypes = [
  "Out for delivery SMS notification",
  "Estimated arrival time update",
  "Delivered confirmation with timestamp",
  "Photo delivery confirmation",
  "Failed delivery attempt alert",
  "Rescheduled delivery notification",
  "WhatsApp delivery updates",
  "Push notifications (iOS and Android)",
];

const stats = [
  { value: "100%", label: "Delivery evidence" },
  { value: "Real-Time", label: "GPS tracking" },
  { value: "22+", label: "Cargo handling tags" },
  { value: "Mobile", label: "PWA driver app" },
];

export default function ProofOfDelivery() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <Link
              href="/solutions/route-optimization"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-blue-500 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Solutions</span>
            </Link>
            <div className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">
                For Couriers & Last-Mile Delivery
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Proof of
                <br />
                <span className="text-blue-500">Delivery</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Capture signatures, photos, GPS coordinates, and delivery timestamps on every shipment. Protect your business from disputes and give customers real-time visibility from dispatch to doorstep.
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
                Complete Last-Mile Delivery Evidence
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Every delivery backed by a full evidence record. Every customer kept informed. Every driver equipped with the tools they need.
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
                From Dispatch to Confirmed Delivery
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                A five-step process that keeps drivers, managers, and customers aligned from the moment a package leaves the warehouse.
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

        {/* POD Record + Notifications */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* POD Record Contents */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Shield className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every POD Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                Each delivery confirmation generates a complete, tamper-proof evidence record stored against the shipment — retrievable any time by managers or clients.
              </p>
              <div className="space-y-3 pt-1">
                {podRecord.map((item, i) => (
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

            {/* Notifications + Driver App */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Bell className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Customer Notifications</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Customers stay informed at every step without your staff lifting a finger. All notifications are automated and sent via the customer's preferred channel.
                </p>
                <div className="space-y-2 pt-1">
                  {notificationTypes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <DeviceMobile className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Driver Mobile App</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Drivers use NTIGI's mobile PWA on any Android or iOS device. No app store download required — just open the browser, log in, and start delivering. The app works offline and syncs when connectivity returns.
                </p>
                <div className="flex items-start gap-2 pt-1">
                  <Warning className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">
                    Critical for drivers in areas with poor signal coverage — all POD data is captured offline and synced automatically.
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
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Local Courier Services</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Track 20 to 50 drivers daily with live GPS. Capture signatures and photos at every drop. Resolve customer disputes with timestamped evidence within minutes.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <UsersThree className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">E-commerce Fulfilment</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Give online shoppers the delivery experience they expect. Real-time tracking, automated notifications, and a photo confirmation they can access from their order page.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <ChartLine className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Freight Delivery Networks</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Manage multi-stop delivery runs for bulk freight. Each stop gets its own POD record, keeping clients, agents, and operations teams aligned with zero paperwork.
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
                  title: "Route Optimization",
                  desc: "Plan and optimize delivery routes so drivers spend less time navigating and more time delivering.",
                  href: "/solutions/route-optimization",
                },
                {
                  title: "Fleet & Driver Management",
                  desc: "Manage vehicle assignments, driver profiles, license tracking, and performance metrics across your fleet.",
                  href: "/solutions/fleet-management",
                },
                {
                  title: "Finance & Billing",
                  desc: "Collect COD payments at delivery, reconcile collections per driver, and auto-generate delivery receipts.",
                  href: "/solutions/finance-billing",
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
                Ready to Protect Every
                <br />
                <span className="text-blue-500">Delivery You Make?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI captures signatures, photos, and GPS evidence for every delivery — in a live walkthrough with our team.
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
