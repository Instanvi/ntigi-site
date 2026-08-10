"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import FloatingShapes from "@/components/animations/FloatingShapes";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, ArrowsCounterClockwise, Package, Receipt, Bell,
  MapPin, CheckCircle, Camera, CurrencyDollar, ClipboardText,
  Barcode, ChartLine, ShoppingBag, Truck, Buildings, Warning, Terminal,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: ArrowsCounterClockwise, title: "Return Shipment Creation", desc: "Create return shipments with full sender and receiver details. Linked to the original outbound shipment for complete lifecycle tracking. Supports all package types and handling methods." },
  { icon: Package, title: "22 Cargo Handling Tags", desc: "Apply any of 22 cargo handling tags to return shipments: Fragile, Damaged, Hazardous, Perishable, and more. Handlers see exactly how to treat returning goods." },
  { icon: MapPin, title: "Real-Time Return Tracking", desc: "Track every return shipment live with GPS. Customers and operations staff see the return status from pickup to arrival at your warehouse or origin point." },
  { icon: Barcode, title: "Barcode and QR Code", desc: "Auto-generate barcodes and QR codes for every return shipment. Print return labels on demand. Scan at pickup and receipt to confirm chain of custody." },
  { icon: Camera, title: "Photo Documentation", desc: "Capture photos at pickup to document the condition of returned goods. Photos attach to the return record and protect against disputes over damage." },
  { icon: Receipt, title: "Automatic Invoice and Refund", desc: "Generate return invoices automatically. Apply refunds or credit notes against the original invoice. Multi-currency support with full PDF generation." },
  { icon: Bell, title: "Customer Notifications", desc: "Customers receive automatic SMS, email, and push notifications at each stage of their return: pickup confirmed, in transit, received, and refund issued." },
  { icon: ChartLine, title: "Returns Reporting", desc: "Track return volumes per route, return reasons, refund totals, and processing times. Export reports to Excel or CSV for operations and finance teams." },
];

const workflow = [
  { step: "01", title: "Return Requested", desc: "Customer submits a return request through the portal or your agent creates one directly. The original shipment is linked and the return reason is recorded." },
  { step: "02", title: "Return Label Issued", desc: "A return shipping label with barcode is generated instantly. Emailed to the customer or printed by your agent. Ready to apply to the package immediately." },
  { step: "03", title: "Package Picked Up", desc: "Driver scans the return barcode at pickup and captures a photo of the package condition. Status updates to In Transit and the customer is notified automatically." },
  { step: "04", title: "Received and Inspected", desc: "When the return arrives at your warehouse, staff scan it back into stock. Condition is logged with photos. The return is marked as received and the original order updated." },
  { step: "05", title: "Refund Processed", desc: "A refund or credit note is applied against the original invoice. The customer receives a notification and the transaction is closed in the financial records." },
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
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: easeOutExpo }}
      className="relative w-full border border-border-custom bg-[var(--console-bg)] overflow-hidden group"
    >
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="px-4 py-2 bg-[var(--console-header)] border-b border-border-custom flex items-center justify-between text-[10px] text-foreground/60">
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

export default function Returns() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO 2-col: text left, ship.jpeg right inside console frame */}
        <section className="relative border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />
          <div className="grid md:grid-cols-2 min-h-[420px]">

            <div className="relative hidden md:block">
              <Image src="/ship.jpeg" alt="Returns logistics at port" fill className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--console-header)]/80" />
              <div className="absolute inset-0 bg-[var(--console-header)]/20" />
            </div>

            <div className="relative bg-[var(--console-header)] py-20 px-8 md:px-12 flex items-center z-10">
              <AnimatedSection className="space-y-5 max-w-lg">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  Returns<br /><span className="text-blue-500">Management</span>
                </h1>
                <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  Handle return shipments with the same tracking, documentation, and automation as outbound deliveries. From return label generation to refund processing, every step managed in NTIGI.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>

        {/* STATS BAR */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t-2 border-t-blue-500/20 border-border-custom">
              {[
                { display: "Full", label: "Return lifecycle" },
                { display: "Auto", label: "Refund processing" },
                { display: "Real-Time", label: "GPS tracking" },
                { display: "Photo", label: "Condition evidence" },
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Reverse Logistics Built into NTIGI</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Returns use the same platform, same workflows, and same tracking as outbound shipments. No separate system needed.</p>
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Return Request to Refund</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A five-step return lifecycle where every action is tracked, documented, and communicated automatically.</p>
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

        {/* RETURN RECORD + TYPES + FINANCIALS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <ClipboardText className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every Return Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Each return is a complete operational record linked to its original outbound shipment. Every party can see the full return history at any point.</p>
              <div className="space-y-3 pt-1">
                {returnRecord.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.label}</span>
                    </div>
                    <p className="text-xs text-foreground/60 font-sans font-medium pl-5">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <ArrowsCounterClockwise className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Return Types Supported</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every return scenario your operation handles is covered in NTIGI with the appropriate workflow and documentation.</p>
                <div className="space-y-3 pt-1">
                  {returnTypes.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-0.5">{item.name}</div>
                      <div className="text-xs text-foreground/60 font-sans font-medium">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <CurrencyDollar className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Financial Reconciliation</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Returns are fully reconciled against the original invoice. Credit notes, refunds, and partial refunds all supported. Multi-currency returns handled automatically with PDF generation and email delivery.</p>
                <div className="flex items-start gap-2 pt-1">
                  <Warning className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">Return invoices and refund records are available in the customer portal the moment they are processed.</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PROOF console frame with app screenshot */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Returns Inside NTIGI</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Return shipments are created, tracked, and closed in the same shipment list your agents use every day.</p>
            </AnimatedSection>
            <ConsoleFrame label="NTIGI // RETURNS_VIEW.sh" status="LIVE" delay={0.1}>
              <div className="relative w-full aspect-[21/9] bg-[var(--console-bg)] overflow-hidden">
                <Image src="/shipmentlistHome.png" alt="NTIGI returns management screen" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/50 via-transparent to-transparent pointer-events-none" />
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.6, ease: easeOutExpo }}
                  className="absolute bottom-3 right-4 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest">
                  RETURNS // LIFECYCLE_VIEW
                </motion.div>
              </div>
              <div className="px-4 py-3 bg-[var(--console-header)]/60 border-t border-border-custom flex items-center gap-2">
                <ArrowsCounterClockwise className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span className="text-[11px] text-foreground/60 tracking-wider uppercase">Return shipments tracked alongside outbound in the same workflow</span>
              </div>
            </ConsoleFrame>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { img: "/image1.jpg", icon: ShoppingBag, title: "E-commerce Fulfilment", desc: "Handle online shopper returns at scale. Customers initiate returns through the portal, receive a label automatically, and track the return to refund confirmation." },
                { img: "/image2.jpg", icon: Truck, title: "Courier Services", desc: "Manage refused deliveries and wrong-address returns in your daily driver runs. Returns are created, dispatched, and tracked using the same driver mobile app." },
                { img: "/image3.jpg", icon: Buildings, title: "B2B Logistics", desc: "Process bulk return shipments from business clients with credit notes issued automatically against their account. Full return volume reporting per client and per route." },
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

        {/* RELATED SOLUTIONS */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Customer Portal", desc: "Customers submit return requests and track returns in real time through their self-service portal.", href: "/solutions/customer-portal" },
                { title: "Proof of Delivery", desc: "Drivers capture photos and signatures at return pickup to document package condition at collection.", href: "/solutions/proof-of-delivery" },
                { title: "Finance and Billing", desc: "Return invoices, credit notes, and refund processing handled automatically and linked to the original transaction.", href: "/solutions/finance" },
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
                Ready to Handle Returns<br /><span className="text-blue-500">Without the Headache?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI manages your entire return lifecycle from request to refund in a live walkthrough with our team.</p>
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
