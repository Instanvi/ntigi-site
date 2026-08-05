"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Barcode,
  MapPin,
  ChartBar,
  MagnifyingGlass,
  ArrowsCounterClockwise,
  Warning,
  CheckCircle,
  Package,
  ClipboardText,
  ArrowsLeftRight,
  ChartLine,
  Truck,
  Buildings,
  Stack,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: ChartBar,
    title: "Real-Time Stock Levels",
    desc: "See exactly how many packages and how much weight is currently held in each warehouse. Reserved, available, and in-transit quantities updated the moment any movement occurs.",
  },
  {
    icon: MapPin,
    title: "Shelf and Bin Location Tracking",
    desc: "Every package in your warehouse is assigned a specific shelf and bin. Find any item instantly by scanning its barcode or searching by tracking number.",
  },
  {
    icon: Barcode,
    title: "Barcode Scan to Receive",
    desc: "Warehouse staff scan incoming package barcodes at the receiving dock. Each scan logs the package with arrival time, weight, dimensions, and assigned bin location.",
  },
  {
    icon: ArrowsLeftRight,
    title: "Goods-In and Dispatch",
    desc: "Complete receiving and dispatch workflows with full audit trail. Every movement logged with which staff member performed it and at what timestamp.",
  },
  {
    icon: MagnifyingGlass,
    title: "Stock Search and Filtering",
    desc: "Search the entire inventory by tracking number, barcode, client, route, or package type. Advanced filters narrow results by status, date range, or location.",
  },
  {
    icon: ArrowsCounterClockwise,
    title: "Stock Movement History",
    desc: "Full history of every movement for any package: received, moved, consolidated, dispatched. Timestamped and linked to the staff member responsible.",
  },
  {
    icon: Warning,
    title: "Lost Parcel Reporting",
    desc: "Report missing packages directly from the stock interface. Search the found parcels database to match lost items. Track investigation status and resolution notes.",
  },
  {
    icon: ClipboardText,
    title: "Export Stock Reports",
    desc: "Export current stock levels, movement history, and warehouse utilization to Excel or CSV. Schedule reports for automatic delivery to management.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Receive and Scan",
    desc: "Incoming packages are scanned at the receiving dock. Each barcode scan logs the item automatically: weight, dimensions, handling requirements, and assigned bin.",
  },
  {
    step: "02",
    title: "Assign Location",
    desc: "The system assigns a shelf and bin location to each received package. Staff confirm placement. The package is now searchable and tracked at item level.",
  },
  {
    step: "03",
    title: "Monitor Levels",
    desc: "Real-time dashboard shows available capacity, reserved stock, items awaiting dispatch, and any packages flagged for attention or missing from expected location.",
  },
  {
    step: "04",
    title: "Search and Locate",
    desc: "Any package can be found in seconds by scanning its barcode or searching by tracking number, client name, or destination. Bin location is displayed immediately.",
  },
  {
    step: "05",
    title: "Dispatch and Update",
    desc: "When packages leave the warehouse, staff scan to confirm dispatch. Stock levels update instantly. The movement is recorded with timestamp and responsible staff.",
  },
];

const stockRecord = [
  { label: "Current Location", desc: "Warehouse, shelf, and bin position of the package" },
  { label: "Package Weight", desc: "Actual weight logged at receiving" },
  { label: "Dimensions", desc: "Length, width, and height for volumetric calculation" },
  { label: "Cargo Handling Tags", desc: "Fragile, Perishable, Hazardous, or any of 22 tags" },
  { label: "Arrival Timestamp", desc: "When the package was received and by which staff" },
  { label: "Shipment Reference", desc: "Linked to the parent shipment record" },
  { label: "Destination", desc: "Intended route and delivery address" },
  { label: "Status", desc: "In warehouse, reserved for consolidation, or dispatched" },
];

const searchCapabilities = [
  "Search by tracking number or barcode",
  "Filter by warehouse location",
  "Filter by client or shipper",
  "Filter by arrival date range",
  "Filter by destination route",
  "Filter by package type or handling tag",
  "Filter by current status",
  "Export filtered results to Excel or CSV",
];

const stats = [
  { value: "Item-Level", label: "Stock tracking" },
  { value: "Barcode", label: "Scan to locate" },
  { value: "Real-Time", label: "Level updates" },
  { value: "100%", label: "Movement audit" },
];

export default function InventoryControl() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <Link
              href="/solutions/warehouse-management"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-blue-500 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-xs uppercase font-bold tracking-wider">Solutions</span>
            </Link>
            <div className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">
                For Warehouse Operators and Logistics Teams
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Inventory and
                <br />
                <span className="text-blue-500">Stock Control</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Track every package at item level across all your warehouse locations. Barcode scan to receive, assign shelf and bin positions, monitor stock levels in real time, and locate any package in seconds.
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
                Complete Visibility Over Every Package
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                From the moment a package enters your warehouse to when it leaves, every detail is tracked and searchable.
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
                From Dock to Dispatch
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                A clear five-step workflow covering every stock movement from the moment goods arrive to when they leave.
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

        {/* Stock Record + Search - 2 column */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* Stock Record */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Package className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Each Stock Item Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                Every package in the system carries a full item-level record. Nothing is tracked at batch level only.
              </p>
              <div className="space-y-3 pt-1">
                {stockRecord.map((item, i) => (
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

            {/* Search + Offline */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <MagnifyingGlass className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Search and Filter Capabilities</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Find any package across all your warehouses in seconds using multiple search and filter options.
                </p>
                <div className="space-y-2 pt-1">
                  {searchCapabilities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <Stack className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Works Offline on the Warehouse Floor</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Warehouse staff use the NTIGI mobile PWA to scan barcodes, receive goods, and update stock anywhere in the building, including dead zones with no signal. All actions queue and sync when connectivity returns. Zero lost receiving records.
                </p>
                <div className="flex items-start gap-2 pt-1">
                  <Barcode className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">
                    Works on any Android or iOS device via the browser. No app store installation required.
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
                  <Buildings className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Multi-Warehouse Operators</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Manage stock across multiple warehouse locations from one dashboard. Each warehouse has independent bin maps and stock levels. Head office sees everything.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Transit Hubs</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  High-volume receiving with barcode scanning at the dock. Sort incoming goods by destination, assign to consolidation batches, and track dwell time for every package.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <ChartLine className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Operations Managers</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Real-time visibility over stock levels, capacity utilization, and movement history without needing to walk the warehouse floor. Export reports for stakeholders on demand.
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
                  title: "Warehouse Management",
                  desc: "Configure warehouse locations, set up shelf maps, manage capacity, and run full receiving and dispatch operations.",
                  href: "/solutions/warehouse-management",
                },
                {
                  title: "Consolidation and Manifests",
                  desc: "Group stock items into consolidation batches, assign to containers, and generate voyage manifests for dispatch.",
                  href: "/solutions/consolidation",
                },
                {
                  title: "Customs and Compliance",
                  desc: "Run compliance screening and generate customs documentation for stock held under bond or awaiting export clearance.",
                  href: "/solutions/customs-compliance",
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
                Ready for Full Visibility
                <br />
                <span className="text-blue-500">Over Your Stock?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI tracks every package at item level across all your warehouses in a live walkthrough with our team.
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
