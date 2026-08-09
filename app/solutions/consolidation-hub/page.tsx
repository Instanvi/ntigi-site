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
  ArrowRight, Stack, Cube, Package, Barcode, ArrowsLeftRight,
  ClipboardText, CheckCircle, Boat, Warehouse, Truck,
  Buildings, ListChecks, ChartLine,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: Stack, title: "Pallet Tracking", desc: "Assign individual packages to pallets with full weight and dimension tracking. Each pallet has its own record showing current load, assigned container, and departure status." },
  { icon: Cube, title: "Container Fill Optimization", desc: "Visualize available container capacity before finalizing a load. The system shows weight and volume utilization and flags containers that are over or under capacity." },
  { icon: ArrowsLeftRight, title: "Load Planning", desc: "Plan how packages are arranged across pallets and containers. Organize by destination, route, or shipment type to minimize handling time at discharge ports." },
  { icon: Barcode, title: "Barcode Scan to Consolidate", desc: "Warehouse staff scan barcodes at the consolidation station to assign packages to consolidation batches. Each scan is logged with timestamp and operator identity." },
  { icon: ClipboardText, title: "Manifest Workflows", desc: "Generate voyage manifests automatically from consolidation batch data. Manifests include all package details, weights, dimensions, and customs information for carriers." },
  { icon: Boat, title: "Voyage Assignment", desc: "Assign consolidation batches to voyages in one step. Track the voyage from manifest creation through departure confirmation and arrival at destination port." },
  { icon: Warehouse, title: "Warehouse Location Integration", desc: "Consolidated cargo stays linked to its warehouse shelf and bin location until dispatch. Staff always know where any item is in the warehouse during the consolidation process." },
  { icon: ChartLine, title: "Hub Performance Reports", desc: "Monitor consolidation volumes, container fill rates, average dwell time per shipment, and departure schedules. Export reports for operations and management teams." },
];

const workflow = [
  { step: "01", title: "Receive at Hub", desc: "Incoming shipments arrive at the consolidation hub and are scanned into the system. Each package is assigned a bin location and flagged for its destination consolidation batch." },
  { step: "02", title: "Sort and Group", desc: "Packages are sorted by destination route and grouped into consolidation batches. The system shows how many packages are ready for each batch and their combined weight." },
  { step: "03", title: "Assign to Pallets", desc: "Staff scan packages to assign them to pallets. Load optimization tracks remaining capacity and alerts when a pallet reaches its weight or volume limit." },
  { step: "04", title: "Load into Containers", desc: "Pallets are assigned to containers. The system shows container fill levels and confirms the load is within capacity before the manifest is generated." },
  { step: "05", title: "Generate and Dispatch", desc: "Manifest is produced automatically. Staff confirm loading is complete and close the manifest. The voyage status updates and the consolidation batch is dispatched." },
];

const manifestFeatures = [
  "Auto-generated from consolidation batch data",
  "All package weights and dimensions included",
  "Customs-ready with HS codes and declared values",
  "PDF export for carriers and port authorities",
  "Batch printing for multi-manifest operations",
  "Manifest versioning and amendment history",
  "Status tracking: open, submitted, closed",
  "Finalize with single confirmation action",
];

const palletRecord = [
  { label: "Pallet ID", desc: "Unique identifier linked to barcode and QR code for scanning" },
  { label: "Total Weight", desc: "Combined actual weight of all packages on the pallet" },
  { label: "Volume Used", desc: "Calculated cubic volume against pallet capacity limit" },
  { label: "Package Count", desc: "Number of individual packages assigned to this pallet" },
  { label: "Assigned Container", desc: "Which container this pallet has been loaded into" },
  { label: "Destination", desc: "Target route and delivery destination for the pallet" },
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

export default function ConsolidationHub() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO ship.jpeg full background, text overlaid bottom-left. No badge. */}
        <section className="relative border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />
          <div className="relative min-h-[420px] flex items-end">
            <Image src="/ship.jpeg" alt="" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-transparent" />
            <div className="relative z-10 w-full">
              <div className="mx-auto max-w-7xl px-6 md:px-8 py-10">
                <AnimatedSection className="max-w-xl space-y-4">
                  <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                    Consolidation<br /><span className="text-blue-500">Hub</span>
                  </h1>
                  <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                    Pallet tracking, load optimization, and container manifest workflows for warehouse consolidation operations. Every package tracked from receiving through to voyage departure in one offline-first system.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                    <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
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

        {/* CAPABILITIES no badge */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Full Consolidation Hub Control</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every step from receiving shipments at the hub to loading the final container and generating the voyage manifest, tracked and automated.</p>
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

        {/* WORKFLOW no badge */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Hub Receiving to Voyage Dispatch</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A clear five-step hub consolidation cycle from the moment freight arrives to when the container departs.</p>
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

        {/* MANIFEST + PALLET DETAIL CARDS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <ListChecks className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">Manifest Generation</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Voyage manifests are produced automatically from consolidation batch data. No re-entering information. The manifest pulls directly from the shipment and pallet records.</p>
              <div className="space-y-2 pt-2">
                {manifestFeatures.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Stack className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every Pallet Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Each pallet in the hub has a complete operational record. Staff can locate, weigh, and dispatch any pallet without guesswork.</p>
              <div className="space-y-3 pt-1">
                {palletRecord.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-0.5">{item.label}</div>
                    <div className="text-xs text-foreground/60 font-sans font-medium">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PROOF flat image pair, no console header bar */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Hub Operations Inside NTIGI</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">The consolidation batch view and operations dashboard your warehouse team uses from the hub floor every day.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { src: "/shipmentlistHome.png", icon: Package, caption: "Consolidation batch view packages grouped by destination and pallet" },
                { src: "/ntigidashboard.png", icon: ChartLine, caption: "Hub operations dashboard container fill rates and voyage status" },
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

        {/* USE CASES real photo headers, no badge */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { img: "/image1.jpg", icon: Boat, title: "Ocean Freight Consolidators", desc: "Receive LCL cargo from multiple shippers, sort by port of destination, load into FCL containers, and generate Bills of Lading and port manifests in one workflow." },
                { img: "/image2.jpg", icon: Buildings, title: "Transit Warehouse Hubs", desc: "Manage high-volume receiving from multiple origins. Sort, palletize, and load outbound containers while tracking every package through barcode scanning at each stage." },
                { img: "/image3.jpg", icon: Truck, title: "Regional Distribution Centers", desc: "Consolidate last-mile deliveries from a central hub into route-based loads. Maximize vehicle capacity and reduce the number of runs with load optimization tools." },
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
                { title: "Warehouse Management", desc: "Configure warehouse shelf and bin locations, manage capacity, and run full receiving and dispatch operations that feed into the consolidation hub.", href: "/solutions/warehouse-management" },
                { title: "Inventory and Stock Control", desc: "Track every package at item level with barcode scanning and real-time stock updates that integrate directly with consolidation batch assignments.", href: "/solutions/inventory-control" },
                { title: "Customs and Compliance", desc: "Generate customs documentation for consolidated shipments and run compliance screening before the manifest is submitted to port authorities.", href: "/solutions/customs-compliance" },
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

        {/* CTA animated gradient, no static grid */}
        <section className="py-20 bg-[var(--console-header)] border-b border-border-custom relative overflow-hidden noise-overlay">
          <motion.div animate={{ opacity: [0.04, 0.1, 0.04], scale: [1, 1.08, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 blur-3xl -z-10 pointer-events-none" />
          <motion.div animate={{ opacity: [0.03, 0.07, 0.03], scale: [1.05, 1, 1.05] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to Optimize Your<br /><span className="text-blue-500">Consolidation Hub?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI handles pallet tracking, load optimization, and manifest generation for your consolidation hub in a live walkthrough with our team.</p>
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
