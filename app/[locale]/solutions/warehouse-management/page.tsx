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
  ArrowRight, Warehouse, MapPin, Barcode, Stack, ArrowsLeftRight,
  ChartLine, CheckCircle, Package, ClipboardText, Cube,
  ArrowsCounterClockwise, Truck, Buildings, Terminal,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: Warehouse, title: "Multiple Warehouse Support", desc: "Register and manage any number of warehouse locations from a single NTIGI account. Each warehouse has its own location, capacity, assigned staff, and operational records." },
  { icon: MapPin, title: "Shelf and Bin Locations", desc: "Define physical shelf and bin locations within each warehouse. Assign incoming goods to specific shelf positions. Find any package by its bin location instantly." },
  { icon: Package, title: "Capacity Management", desc: "Track used and available capacity per warehouse. Monitor fill levels by weight and volume to prevent over-loading and plan incoming shipments effectively." },
  { icon: ChartLine, title: "Stock Tracking", desc: "Track stock levels in real time. View what is currently in the warehouse, what is reserved for outgoing shipments, and what has been dispatched." },
  { icon: Barcode, title: "Receiving with Barcode Scanning", desc: "Staff scan package barcodes at receiving to confirm every item entering the warehouse. Packages are automatically logged with location, weight, and arrival timestamp." },
  { icon: ArrowsLeftRight, title: "Goods-In and Dispatch", desc: "Full receiving and dispatch workflows. From the moment a package arrives to when it leaves the warehouse, every movement is recorded with user and timestamp." },
  { icon: Stack, title: "Consolidation and Pallet Tracking", desc: "Group incoming shipments into consolidation batches. Assign packages to pallets with weight and dimension tracking. Optimize loads before container assignment." },
  { icon: ClipboardText, title: "Manifest and Voyage Management", desc: "Generate voyage manifests directly from warehouse consolidation batches. Assign to containers or vehicles and track manifest status through to departure." },
];

const workflow = [
  { step: "01", title: "Configure Warehouse", desc: "Set up each warehouse with its name, location, capacity, and shelf layout. Assign warehouse staff and configure which shipment types are handled at that location." },
  { step: "02", title: "Receive Goods", desc: "Staff scan incoming packages at the receiving dock. Each item is logged against its shipment record, assigned a shelf location, and marked as in-warehouse." },
  { step: "03", title: "Locate and Track", desc: "At any time, staff can search for any package by its tracking number or barcode and immediately see which shelf or bin it is in and when it arrived." },
  { step: "04", title: "Consolidate for Dispatch", desc: "Group packages heading to the same destination into a consolidation batch. Assign to pallets, then to a container. Generate the manifest automatically." },
  { step: "05", title: "Dispatch and Close", desc: "When the load departs, confirm dispatch per package. Stock levels update instantly. All records are archived with a full audit trail." },
];

const warehouseRecord = [
  { label: "Name and Location", desc: "Warehouse identifier with GPS coordinates and address" },
  { label: "Total Capacity", desc: "Maximum weight and volume the warehouse can hold" },
  { label: "Current Occupancy", desc: "Real-time fill level by weight and volume" },
  { label: "Shelf and Bin Map", desc: "Physical layout of storage positions within the warehouse" },
  { label: "Assigned Staff", desc: "Which users can operate and view this warehouse" },
  { label: "Receiving Log", desc: "All goods received with date, quantity, and staff who received" },
  { label: "Dispatch Log", desc: "All goods dispatched with destination, vehicle, and departure time" },
  { label: "Current Stock", desc: "All packages currently in the warehouse with their bin locations" },
];

const stockFeatures = [
  "Real-time stock levels per warehouse",
  "Reserved versus available stock tracking",
  "Package-level location search by barcode",
  "Arrival and departure timestamp on every movement",
  "Bulk receiving and dispatch operations",
  "Lost parcel reporting and investigation tools",
  "Barcode scanning via mobile PWA for warehouse staff",
  "Export stock reports to Excel or CSV",
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

export default function WarehouseManagement() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO Ã¢â‚¬â€ full-width background image (image2.jpg) with heavy overlay.
            Different from the 2-col console frame pattern on other pages.
            Text sits left, image fills the entire hero background.
            FloatingShapes on top for depth. */}
        <section className="relative py-24 border-b border-border-custom overflow-hidden noise-overlay">
          {/* background image Ã¢â‚¬â€ full bleed, overlaid */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/image2.jpg"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
            {/* dark overlay so text stays fully readable in both modes */}
            <div className="absolute inset-0 bg-background/85" />
            {/* subtle blue tint at bottom */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-transparent" />
          </div>

          <FloatingShapes />

          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-5">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Warehouse<br /><span className="text-blue-500">Management</span>
              </h1>
              <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-md">
                Manage multiple warehouses with shelf and bin location tracking, barcode-scan receiving, real-time stock levels, consolidation, and complete dispatch operations. Works fully offline.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t-2 border-t-blue-500/20 border-border-custom">
              {[
                { display: "Multi", label: "Warehouse support" },
                { display: "Real-Time", label: "Stock tracking" },
                { display: "Barcode", label: "Scan to receive" },
                { display: "100%", label: "Movement audit trail" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <div className="text-2xl font-bold text-blue-500 font-sans">{stat.display}</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES Ã¢â‚¬â€ icons only, no badge */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Goods-In to Voyage Departure</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every warehouse operation from receiving through consolidation to dispatch managed in one system that works even without internet.</p>
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Setup to Dispatch</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A clear five-step warehouse lifecycle from initial configuration through to final dispatch with every action tracked.</p>
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

        {/* PROOF SECTION Ã¢â‚¬â€ single full-width console frame above the detail cards.
            Different from the 2-col pattern used on intl-forwarding/customs/consolidation.
            One wide screenshot showing the warehouse/dashboard view, then the
            warehouse record and stock tracking detail cards below. */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Inside the Warehouse View</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Stock levels, shelf locations, dispatch records Ã¢â‚¬â€ all visible in one screen per warehouse.</p>
            </AnimatedSection>

            {/* single wide console frame */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
              className="relative w-full border border-border-custom bg-[var(--console-bg)] overflow-hidden group mb-8"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              {/* console header bar */}
              <div className="px-4 py-2 border-b border-border-custom bg-[var(--console-header)] flex items-center justify-between text-[10px] text-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
                  </div>
                  <div className="flex items-center gap-1 pl-2 border-l border-border-custom">
                    <Terminal className="h-3 w-3 text-blue-500" />
                    <span className="tracking-wider">NTIGI // WAREHOUSE_STOCK.sh</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="tracking-wider text-blue-500">LIVE</span>
                </div>
              </div>
              {/* screenshot Ã¢â‚¬â€ full width, taller aspect for this single wide frame */}
              <div className="relative w-full aspect-[21/9] bg-[var(--console-bg)] overflow-hidden">
                <Image
                  src="/ntigidashboard.png"
                  alt="NTIGI warehouse stock and location tracking"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/60 via-transparent to-transparent pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.7, ease: easeOutExpo }}
                  className="absolute bottom-3 right-4 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest"
                >
                  WAREHOUSE // STOCK_VIEW
                </motion.div>
              </div>
              {/* caption bar */}
              <div className="px-4 py-3 border-t border-border-custom bg-[var(--console-header)]/60 flex items-center gap-2">
                <Warehouse className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span className="text-[11px] text-foreground/60 tracking-wider uppercase">Real-time stock levels, bin locations, and dispatch status per warehouse</span>
              </div>
            </motion.div>

            {/* warehouse record + stock tracking detail cards below */}
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Warehouse className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">What Every Warehouse Record Contains</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Each warehouse is a complete operational record. Everything needed to manage, staff, and report on that location is in one place.</p>
                <div className="space-y-3 pt-1">
                  {warehouseRecord.map((item, i) => (
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
                    <ChartLine className="w-5 h-5" />
                    <h3 className="text-md font-bold uppercase tracking-wider">Stock Tracking Features</h3>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every package in your warehouse is tracked at the item level. Staff can find any specific package in seconds.</p>
                  <div className="space-y-2 pt-1">
                    {stockFeatures.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                  <div className="flex items-center gap-2 text-blue-500">
                    <ArrowsCounterClockwise className="w-5 h-5" />
                    <h3 className="text-md font-bold uppercase tracking-wider">Works Offline at the Warehouse Floor</h3>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Warehouse staff can scan, receive, and update stock even in areas without Wi-Fi or mobile signal. All actions queue locally and sync the moment connectivity returns.</p>
                  <div className="flex items-start gap-2 pt-1">
                    <Barcode className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/60 font-sans font-medium">Barcode scanning works fully offline via the NTIGI mobile PWA on any smartphone or tablet.</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* USE CASES Ã¢â‚¬â€ real photo card headers, no graphs, no badges
            image1 Ã¢â€ â€™ Transit Warehouse Operators
            image3 Ã¢â€ â€™ Bonded Warehouses
            ship.jpeg Ã¢â€ â€™ Freight Consolidators (port/container context) */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">

              <AnimatedSection delay={0} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/image1.jpg" alt="Transit warehouse operations" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Cube className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Transit Warehouse Operators</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Receive incoming shipments from multiple origins, sort by destination, consolidate into containers, and dispatch. Every movement tracked from dock to door.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/image3.jpg" alt="Bonded warehouse customs bond storage" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Buildings className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Bonded Warehouses</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Store goods under customs bond with full audit trail per item. Track which goods have cleared customs and which are still under bond, with document generation at release.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.24} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/ship.jpeg" alt="Freight consolidators at port" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Truck className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Freight Consolidators</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Accept LCL shipments from multiple clients, consolidate into full container loads, and generate Bills of Lading and port manifests before departure.</p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* RELATED SOLUTIONS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Consolidation and Manifests", desc: "Group warehouse shipments into voyage manifests, assign containers, and track from consolidation to port departure.", href: "/solutions/consolidation" },
                { title: "Customs and Compliance", desc: "Generate customs documents for bonded goods, manage HS codes, and run compliance screening on every release.", href: "/solutions/customs-compliance" },
                { title: "International Forwarding", desc: "Coordinate multi-leg routes that flow through your warehouse as a transit hub before final international dispatch.", href: "/solutions/international-forwarding" },
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

        {/* CTA Ã¢â‚¬â€ animated gradient only, no static grid */}
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
                Ready to Take Control<br /><span className="text-blue-500">of Your Warehouse?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI manages receiving, stock tracking, consolidation, and dispatch for your warehouse operation in a live walkthrough.</p>
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
