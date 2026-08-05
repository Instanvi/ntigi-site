"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Warehouse,
  MapPin,
  Barcode,
  Stack,
  ArrowsLeftRight,
  ChartLine,
  CheckCircle,
  Package,
  ClipboardText,
  Cube,
  ArrowsCounterClockwise,
  Truck,
  Buildings,
  UsersThree,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: Warehouse,
    title: "Multiple Warehouse Support",
    desc: "Register and manage any number of warehouse locations from a single NTIGI account. Each warehouse has its own location, capacity, assigned staff, and operational records.",
  },
  {
    icon: MapPin,
    title: "Shelf and Bin Locations",
    desc: "Define physical shelf and bin locations within each warehouse. Assign incoming goods to specific shelf positions. Find any package by its bin location instantly.",
  },
  {
    icon: Package,
    title: "Capacity Management",
    desc: "Track used and available capacity per warehouse. Monitor fill levels by weight and volume to prevent over-loading and plan incoming shipments effectively.",
  },
  {
    icon: ChartLine,
    title: "Stock Tracking",
    desc: "Track stock levels in real time. View what is currently in the warehouse, what is reserved for outgoing shipments, and what has been dispatched.",
  },
  {
    icon: Barcode,
    title: "Receiving with Barcode Scanning",
    desc: "Staff scan package barcodes at receiving to confirm every item entering the warehouse. Packages are automatically logged with location, weight, and arrival timestamp.",
  },
  {
    icon: ArrowsLeftRight,
    title: "Goods-In and Dispatch",
    desc: "Full receiving and dispatch workflows. From the moment a package arrives to when it leaves the warehouse, every movement is recorded with user and timestamp.",
  },
  {
    icon: Stack,
    title: "Consolidation and Pallet Tracking",
    desc: "Group incoming shipments into consolidation batches. Assign packages to pallets with weight and dimension tracking. Optimize loads before container assignment.",
  },
  {
    icon: ClipboardText,
    title: "Manifest and Voyage Management",
    desc: "Generate voyage manifests directly from warehouse consolidation batches. Assign to containers or vehicles and track manifest status through to departure.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Configure Warehouse",
    desc: "Set up each warehouse with its name, location, capacity, and shelf layout. Assign warehouse staff and configure which shipment types are handled at that location.",
  },
  {
    step: "02",
    title: "Receive Goods",
    desc: "Staff scan incoming packages at the receiving dock. Each item is logged against its shipment record, assigned a shelf location, and marked as in-warehouse.",
  },
  {
    step: "03",
    title: "Locate and Track",
    desc: "At any time, staff can search for any package by its tracking number or barcode and immediately see which shelf or bin it is in and when it arrived.",
  },
  {
    step: "04",
    title: "Consolidate for Dispatch",
    desc: "Group packages heading to the same destination into a consolidation batch. Assign to pallets, then to a container. Generate the manifest automatically.",
  },
  {
    step: "05",
    title: "Dispatch and Close",
    desc: "When the load departs, confirm dispatch per package. Stock levels update instantly. All records are archived with a full audit trail.",
  },
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

const stats = [
  { value: "Multi", label: "Warehouse support" },
  { value: "Real-Time", label: "Stock tracking" },
  { value: "Barcode", label: "Scan to receive" },
  { value: "100%", label: "Movement audit trail" },
];

export default function WarehouseManagement() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Warehouse
                <br />
                <span className="text-blue-500">Management</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Manage multiple warehouses with shelf and bin location tracking, barcode-scan receiving, real-time stock levels, consolidation, and complete dispatch operations. Works fully offline.
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
                From Goods-In to Voyage Departure
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Every warehouse operation from receiving through consolidation to dispatch managed in one system that works even without internet.
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
                From Setup to Dispatch
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                A clear five-step warehouse lifecycle from initial configuration through to final dispatch with every action tracked.
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

        {/* Warehouse Record + Stock Features - 2 column */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* Warehouse Record */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Warehouse className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every Warehouse Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                Each warehouse is a complete operational record. Everything needed to manage, staff, and report on that location is in one place.
              </p>
              <div className="space-y-3 pt-1">
                {warehouseRecord.map((item, i) => (
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

            {/* Stock Tracking + Offline */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <ChartLine className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Stock Tracking Features</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Every package in your warehouse is tracked at the item level. No batch-level guesswork. Staff can find any specific package in seconds.
                </p>
                <div className="space-y-2 pt-1">
                  {stockFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <ArrowsCounterClockwise className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Works Offline at the Warehouse Floor</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Warehouse staff can scan, receive, and update stock even in areas without Wi-Fi or mobile signal. All actions queue locally and sync the moment connectivity returns. Zero lost receiving records, zero duplicate entries.
                </p>
                <div className="flex items-start gap-2 pt-1">
                  <Barcode className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">
                    Barcode scanning works fully offline via the NTIGI mobile PWA on any smartphone or tablet.
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
                  <Cube className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Transit Warehouse Operators</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Receive incoming shipments from multiple origins, sort by destination, consolidate into containers, and dispatch. Every movement tracked from dock to door.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Buildings className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Bonded Warehouses</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Store goods under customs bond with full audit trail per item. Track which goods have cleared customs and which are still under bond, with document generation at release.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Freight Consolidators</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Accept LCL (less than container load) shipments from multiple clients, consolidate into full container loads, and generate Bills of Lading and port manifests before departure.
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
                  title: "Consolidation and Manifests",
                  desc: "Group warehouse shipments into voyage manifests, assign containers, and track from consolidation to port departure.",
                  href: "/solutions/consolidation",
                },
                {
                  title: "Customs and Compliance",
                  desc: "Generate customs documents for bonded goods, manage HS codes, and run compliance screening on every release.",
                  href: "/solutions/customs-compliance",
                },
                {
                  title: "International Forwarding",
                  desc: "Coordinate multi-leg routes that flow through your warehouse as a transit hub before final international dispatch.",
                  href: "/solutions/international-forwarding",
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
                Ready to Take Control
                <br />
                <span className="text-blue-500">of Your Warehouse?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI manages receiving, stock tracking, consolidation, and dispatch for your warehouse operation in a live walkthrough with our team.
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
