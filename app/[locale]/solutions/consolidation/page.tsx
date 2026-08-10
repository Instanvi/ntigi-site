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
  ArrowRight,
  Package,
  Cube,
  ClipboardText,
  Boat,
  Barcode,
  ArrowsLeftRight,
  Stack,
  ChartLine,
  CheckCircle,
  Truck,
  Buildings,
  ListChecks,
  Terminal,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: Stack, title: "Shipment Grouping", desc: "Group multiple individual shipments into a single consolidated load. Reduce per-unit shipping costs and optimize container utilization across routes." },
  { icon: Cube, title: "Container Management", desc: "Track and manage containers by type, capacity, and assigned voyage. Monitor fill levels and assign shipments to containers with load optimization." },
  { icon: Package, title: "Pallet Tracking", desc: "Assign shipments to pallets, track pallet weights, dimensions, and positions within containers. Full visibility from warehouse to port." },
  { icon: ClipboardText, title: "Manifest Generation", desc: "Create voyage manifests automatically from consolidated shipment data. Print or export manifests for carriers, customs, and port authorities." },
  { icon: Boat, title: "Voyage Management", desc: "Schedule and manage voyages with vessel details, departure and arrival ports, and estimated transit times. Assign manifests to voyages in one step." },
  { icon: ArrowsLeftRight, title: "Load Optimization", desc: "Maximize container utilization with load planning tools. Visualize how packages fit together by weight and volume before finalizing the load." },
  { icon: Barcode, title: "Barcode Scanning", desc: "Scan package barcodes at receiving and dispatch to verify every item in a consolidation. Reduce manual entry errors and speed up cargo processing." },
  { icon: ChartLine, title: "Manifest Status Tracking", desc: "Track manifests through every stage: open, in-progress, submitted, closed. Close and finalize manifests with a single action when the voyage departs." },
];

const workflow = [
  { step: "01", title: "Receive Shipments", desc: "Incoming shipments are received at the warehouse and scanned into the system. Each package is logged with weight, dimensions, and handling requirements." },
  { step: "02", title: "Group for Consolidation", desc: "Select shipments heading to the same destination or via the same route. Group them into a consolidation batch for a specific voyage." },
  { step: "03", title: "Assign to Container", desc: "Assign the consolidated batch to a container or pallet. Load optimization shows available capacity and suggests the most efficient arrangement." },
  { step: "04", title: "Generate Manifest", desc: "NTIGI auto-produces the voyage manifest with all shipment details, weights, package counts, and customs information ready for the carrier." },
  { step: "05", title: "Close & Dispatch", desc: "Close the manifest when loading is complete. The voyage status updates, customers are notified, and all records are archived with a full audit trail." },
];

const manifestFeatures = [
  "Auto-generated from shipment data",
  "Includes all package and weight details",
  "Customs-ready documentation",
  "PDF export for carriers and authorities",
  "Batch printing support",
  "Manifest versioning and history",
  "Status tracking: open, submitted, closed",
  "Finalize with single action",
];

const voyageDetails = [
  { label: "Vessel Name", desc: "Assign a vessel or transport identifier to each voyage" },
  { label: "Departure Port", desc: "Origin port with GPS coordinates and location details" },
  { label: "Arrival Port", desc: "Destination port with expected delivery window" },
  { label: "Transit Time", desc: "Estimated transit duration per route configuration" },
  { label: "Manifest Count", desc: "Number of manifests assigned to the voyage" },
  { label: "Shipment Count", desc: "Total packages across all manifests in the voyage" },
];

const stats = [
  { value: 100, suffix: "K+", label: "Shipments per day" },
  { value: 22, suffix: "+", label: "Cargo handling tags" },
  { value: 30, suffix: "+", label: "API modules" },
  { value: 100, suffix: "%", label: "Offline capable" },
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
  return (
    <div ref={ref} className="text-2xl font-bold text-blue-500 font-sans">
      {count}{suffix}
    </div>
  );
}

function ConsoleFrame({
  label,
  status,
  children,
  delay = 0,
}: {
  label: string;
  status?: string;
  children: React.ReactNode;
  delay?: number;
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

export default function Consolidation() {
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
                  Consolidation<br /><span className="text-blue-500">& Manifests</span>
                </h1>
                <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-md">
                  Group shipments, manage containers, generate voyage manifests, and track every load from warehouse floor to port departure all in one offline-first system.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                </div>
              </AnimatedSection>

              <div className="hidden md:block">
                <ConsoleFrame label="NTIGI_OS // CONSOLIDATION.sh" status="LIVE" delay={0.25}>
                  <div className="relative w-full aspect-[16/10] bg-[var(--console-bg)] overflow-hidden">
                    <Image
                      src="/ntigidashboard.png"
                      alt="NTIGI consolidation batch screen"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/60 via-transparent to-transparent pointer-events-none" />
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, ease: easeOutExpo }}
                      className="absolute bottom-3 right-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest"
                    >
                      CONSOL // BATCH_VIEW
                    </motion.div>
                  </div>
                </ConsoleFrame>
              </div>

            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.05)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

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

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Everything from Grouping to Departure</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Full consolidation operations in one system from receiving individual packages through to closing the voyage manifest.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom bg-primary/[0.01]">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={index} delay={index * 0.08} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <cap.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{cap.title}</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{cap.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Receiving to Voyage Departure</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                A clear five-step consolidation process every action tracked, every document generated automatically.
              </p>
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

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Manifest & Voyage Inside NTIGI</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                From auto-generating a manifest from your consolidation batch to tracking a voyage from port to port all inside one screen.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              <ConsoleFrame label="NTIGI // MANIFEST_GEN.sh" status="READY" delay={0.1}>
                <div className="relative w-full aspect-[16/10] bg-[var(--console-bg)] overflow-hidden">
                  <Image
                    src="/shipmentlistHome.png"
                    alt="NTIGI manifest generation screen"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/50 via-transparent to-transparent pointer-events-none" />
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.6, ease: easeOutExpo }}
                    className="absolute bottom-3 left-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest"
                  >
                    MANIFEST // AUTO_GEN
                  </motion.div>
                </div>
                <div className="px-4 py-3 border-t border-border-custom bg-[var(--console-header)]/60 flex items-center gap-2">
                  <ListChecks className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span className="text-[11px] text-foreground/60 tracking-wider uppercase">Auto-generated manifest with all shipment, weight &amp; customs data</span>
                </div>
              </ConsoleFrame>

              <ConsoleFrame label="NTIGI // VOYAGE_TRACKER.sh" status="LIVE" delay={0.2}>
                <div className="relative w-full aspect-[16/10] bg-[var(--console-bg)] overflow-hidden">
                  <Image
                    src="/ntigidashboard.png"
                    alt="NTIGI voyage tracker screen"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/50 via-transparent to-transparent pointer-events-none" />
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.7, ease: easeOutExpo }}
                    className="absolute bottom-3 left-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest"
                  >
                    VOYAGE // PORT_TO_PORT
                  </motion.div>
                </div>
                <div className="px-4 py-3 border-t border-border-custom bg-[var(--console-header)]/60 flex items-center gap-2">
                  <Boat className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span className="text-[11px] text-foreground/60 tracking-wider uppercase">Voyage record with vessel, ports, manifests &amp; shipment totals</span>
                </div>
              </ConsoleFrame>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <ListChecks className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Manifest Management</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Manifests are generated automatically from the shipments in your consolidation. No manual data entry the system builds the document from the booking record.
                </p>
                <div className="space-y-2 pt-1">
                  {manifestFeatures.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.05 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" className="bg-[var(--console-bg)] border border-border-custom p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Boat className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Voyage Record Details</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Each voyage captures the full operational picture vessel, ports, timelines, and all associated manifests and shipments.
                </p>
                <div className="space-y-3 pt-1">
                  {voyageDetails.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-0.5">{item.label}</div>
                      <div className="text-sm text-foreground/60 font-sans font-medium">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              <AnimatedSection delay={0} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-40 overflow-hidden border-b border-border-custom">
                  <Image
                    src="/portview.jpg"
                    alt="Ocean freight cargo ship at port"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Boat className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Ocean Freight Operators</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Consolidate LCL shipments into full containers. Generate Bills of Lading and port manifests directly from NTIGI.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-40 overflow-hidden border-b border-border-custom bg-[var(--console-header)]">
                  <Image
                    src="/image3.webp"
                    alt="Ocean freight cargo ship at port"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Buildings className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Warehouse Operators</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Manage goods-in with barcode scanning, assign to consolidation batches by destination, and track every pallet from shelf to dispatch dock.</p>
                </div>
              </AnimatedSection>


              <AnimatedSection delay={0.24} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-40 overflow-hidden border-b border-border-custom bg-[var(--console-header)]">
                  <Image
                    src="/image4.webp"
                    alt="Ocean freight cargo ship at port"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Truck className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Courier Consolidators</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Bundle last-mile courier packages into route-based consolidations for dispatch vehicles. Reduce trips, increase delivery density per run.</p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "International Forwarding", desc: "Manage cross-border shipments, multi-leg routes, and partner agency networks end to end.", href: "/solutions/international-forwarding" },
                { title: "Customs & Compliance", desc: "Auto-generate customs documentation and run compliance screening on every consolidated shipment.", href: "/solutions/customs-compliance" },
                { title: "Warehouse Management", desc: "Manage shelf locations, stock levels, receiving, and dispatch within your warehouse operations.", href: "/solutions/warehouse" },
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

        {/* â”€â”€ CTA animated gradient only, no image â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                Ready to Streamline Your<br /><span className="text-blue-500">Consolidation Operations?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI manages your consolidation workflow from warehouse receiving to voyage departure in a live walkthrough with our team.
              </p>
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
