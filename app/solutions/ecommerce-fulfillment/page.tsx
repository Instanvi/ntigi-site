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
  ArrowRight, Package, Stack, Bell, Code, ArrowsCounterClockwise,
  CurrencyDollar, MapPin, ChartLine, CheckCircle, Receipt,
  ShoppingBag, Storefront, Globe, Barcode,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: Stack, title: "Bulk Shipment Creation", desc: "Process hundreds of orders in one operation. Create shipments individually or import in bulk. Each order gets its own tracking number, label, and receipt automatically." },
  { icon: MapPin, title: "Real-Time Order Tracking", desc: "Every online shopper can track their order in real time via the public tracking portal or customer portal. No login required for the public tracking page." },
  { icon: Bell, title: "Automated Customer Notifications", desc: "Shoppers receive automatic SMS, email, push, and WhatsApp notifications at every delivery milestone. Configured once by your operations team, runs automatically." },
  { icon: Code, title: "REST API for Store Integration", desc: "Connect your online store directly to NTIGI via the REST API. Orders placed on your platform trigger shipment creation in NTIGI automatically without manual entry." },
  { icon: ArrowsCounterClockwise, title: "Returns Management", desc: "Customers initiate returns through the portal. Return labels are generated automatically. Every return is tracked, photographed, and reconciled against the original order." },
  { icon: CurrencyDollar, title: "COD Management", desc: "Track cash on delivery collections per driver across every route. Automatic reconciliation when orders are delivered and paid. Full COD reporting per client and per run." },
  { icon: Receipt, title: "Automatic Invoice Generation", desc: "Invoices are created the moment a shipment is booked. PDF generation, email delivery, and download access for customers in the portal from day one." },
  { icon: Barcode, title: "Barcode and Label Printing", desc: "Generate and print shipping labels with barcodes and QR codes for every order. Batch print entire dispatch runs. Scan labels at pickup and delivery." },
];

const workflow = [
  { step: "01", title: "Order Received", desc: "Your online store sends order data to NTIGI via the REST API or your agent creates shipments manually. Each order is processed into a shipment record instantly." },
  { step: "02", title: "Label Printed", desc: "A shipping label with barcode is generated and printed. The customer receives an order confirmation with tracking number via SMS and email automatically." },
  { step: "03", title: "Dispatched and Tracked", desc: "The package is assigned to a driver and route. The customer can track live. Automated notifications fire at each status update without any manual intervention." },
  { step: "04", title: "Delivered and Confirmed", desc: "Driver captures signature and delivery photo. Delivery confirmation is sent to the customer. COD payment is recorded if applicable. Invoice is closed." },
  { step: "05", title: "Returns Processed", desc: "If a return is requested, the customer gets a label automatically. The return is tracked back to your warehouse and a credit note or refund is issued." },
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

const apiLines = [
  { delay: 0,    color: "text-foreground/40", text: "POST /api/v1/shipments" },
  { delay: 320,  color: "text-green-400",     text: '→ 201 Created  { id: "SHP-29471" }' },
  { delay: 640,  color: "text-foreground/40", text: "POST /api/v1/shipments" },
  { delay: 960,  color: "text-green-400",     text: '→ 201 Created  { id: "SHP-29472" }' },
  { delay: 1280, color: "text-blue-400",      text: "GET  /api/v1/shipments/SHP-29471/label" },
  { delay: 1600, color: "text-green-400",     text: "→ 200 OK  label.pdf  [barcode attached]" },
  { delay: 1920, color: "text-yellow-400",    text: "WEBHOOK → order.shipped { tracking: true }" },
  { delay: 2240, color: "text-foreground/40", text: "GET  /api/v1/shipments?status=in_transit" },
  { delay: 2560, color: "text-green-400",     text: "→ 200 OK  [ 847 shipments ]" },
  { delay: 2880, color: "text-blue-400",      text: "POST /api/v1/notifications/bulk" },
  { delay: 3200, color: "text-green-400",     text: "→ 200 OK  sent: 847  failed: 0" },
];

function APITerminal() {
  const [visible, setVisible] = useState(0);
  const [cycle, setCycle] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    setVisible(0);
    const timers = apiLines.map((_, i) =>
      setTimeout(() => setVisible(i + 1), apiLines[i].delay)
    );
    const restart = setTimeout(() => setCycle(c => c + 1), apiLines[apiLines.length - 1].delay + 2800);
    return () => { timers.forEach(clearTimeout); clearTimeout(restart); };
  }, [isInView, cycle]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
      className="border border-border-custom bg-[var(--console-bg)] overflow-hidden"
    >
      <div className="px-4 py-2 bg-[var(--console-header)] border-b border-border-custom flex items-center justify-between text-[10px] text-foreground/60">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
          </div>
          <span className="pl-2 border-l border-border-custom tracking-wider">NTIGI // STORE_INTEGRATION.sh</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500 tracking-wider">CONNECTED</span>
        </div>
      </div>
      <div className="p-4 font-mono text-[11px] space-y-1.5 min-h-[280px]">
        {apiLines.map((line, i) => (
          <motion.div
            key={`${cycle}-${i}`}
            initial={{ opacity: 0, x: -6 }}
            animate={i < visible ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={`${line.color}`}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-blue-500 font-mono text-[11px] block"
        >
          █
        </motion.span>
      </div>
    </motion.div>
  );
}

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

export default function EcommerceFulfillment() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO — text left, looping API terminal right. No image, no badge. */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="space-y-5">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  E-commerce<br /><span className="text-blue-500">Fulfillment</span>
                </h1>
                <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-md">
                  Connect your online store to NTIGI via REST API. Process bulk orders, automate customer notifications, manage COD collections, and handle returns from one logistics platform.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                </div>
              </AnimatedSection>
              <div className="hidden md:block">
                <APITerminal />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.05)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* STATS BAR */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t-2 border-t-blue-500/20 border-border-custom">
              {[
                { display: "Bulk", label: "Order processing" },
                { display: "API", label: "Store integration" },
                { display: "Auto", label: "Notifications" },
                { display: "Real-Time", label: "GPS tracking" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <div className="text-2xl font-bold text-blue-500 font-sans">{stat.display}</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Everything Your E-commerce Operation Needs</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">From order intake to delivery confirmation, NTIGI handles the full fulfillment lifecycle for e-commerce businesses of any size.</p>
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

        {/* WORKFLOW */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Order Placed to Delivered</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A five-step fulfillment cycle where every action is automated, tracked, and visible to both your team and your customers.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-border-custom relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10" />
              {workflow.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.12} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] transition-all relative group">
                  <motion.div
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 200 }}
                    className="w-8 h-8 rounded-full bg-[var(--console-bg)] border border-blue-500/30 group-hover:border-blue-500/60 transition-colors flex items-center justify-center mb-3"
                  >
                    <span className="text-[10px] font-bold text-blue-500">{step.step}</span>
                  </motion.div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* API + NOTIFICATIONS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Code className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">REST API Integration</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Connect your e-commerce platform, marketplace, or custom store system directly to NTIGI. Orders flow in automatically and tracking data flows back to your storefront.</p>
              <div className="space-y-2 pt-1">
                {apiCapabilities.map((item, i) => (
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
                  <Bell className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Automated Notification Events</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every delivery event triggers an automatic notification to the customer via their preferred channel. No staff action required.</p>
                <div className="space-y-2 pt-1">
                  {notificationTriggers.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors flex items-center justify-between">
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.event}</span>
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{item.channel}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <CurrencyDollar className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">COD for Online Stores</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Many e-commerce customers in West Africa and other markets prefer cash on delivery. NTIGI tracks COD collection per driver, reconciles per order, and reports outstanding COD totals at any time.</p>
                <div className="flex items-start gap-2 pt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">COD orders tracked from dispatch through collection and reconciliation automatically.</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PROOF — flat image pair (no console header bar) */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">The Platform Your Team Uses</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Bulk order management and the dashboard your agents and managers see every day.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { src: "/shipmentlistHome.png", icon: Package, caption: "Bulk order list — all shipments, statuses, and tracking in one view" },
                { src: "/ntigidashboard.png", icon: ChartLine, caption: "Operations dashboard — volume, revenue, and delivery metrics live" },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: easeOutExpo }}
                  className="border border-border-custom overflow-hidden group"
                >
                  <div className="relative w-full aspect-[4/3] bg-[var(--console-bg)]">
                    <Image src={item.src} alt={item.caption} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="px-4 py-3 bg-[var(--console-header)] border-t border-border-custom flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-[11px] text-foreground/60 tracking-wider uppercase">{item.caption}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES — real photo headers */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { img: "/image1.jpg", icon: ShoppingBag, title: "Online Retailers", desc: "Process hundreds of orders daily with bulk creation, automatic label printing, and real-time tracking for every customer. Integrate your store via API and eliminate manual data entry." },
                { img: "/image2.jpg", icon: Storefront, title: "Marketplace Sellers", desc: "Fulfil orders from multiple marketplaces through a single NTIGI account. Separate client records per marketplace, combined reporting for your finance team." },
                { img: "/image3.jpg", icon: Globe, title: "Cross-Border E-commerce", desc: "Ship internationally with customs documentation generated automatically. Multi-currency invoicing, duty calculations, and tracking from checkout to doorstep across borders." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                  <div className="relative h-44 overflow-hidden border-b border-border-custom">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                        <item.icon className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Customer Portal", desc: "Your online shoppers track their orders, download invoices, and submit returns through a self-service portal branded to your operation.", href: "/solutions/customer-portal" },
                { title: "Returns Management", desc: "Handle customer returns at scale with automatic return labels, photo documentation, and refund processing.", href: "/solutions/returns" },
                { title: "Proof of Delivery", desc: "Give customers delivery confirmation with signature, photo, and GPS coordinates delivered automatically after every drop.", href: "/solutions/proof-of-delivery" },
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
          <motion.div animate={{ opacity: [0.04, 0.1, 0.04], scale: [1, 1.08, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 blur-3xl -z-10 pointer-events-none" />
          <motion.div animate={{ opacity: [0.03, 0.07, 0.03], scale: [1.05, 1, 1.05] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to Scale Your<br /><span className="text-blue-500">E-commerce Fulfilment?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI connects to your online store and handles your full order-to-delivery lifecycle in a live walkthrough with our team.</p>
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
