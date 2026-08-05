"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
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
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: Stack,
    title: "Shipment Grouping",
    desc: "Group multiple individual shipments into a single consolidated load. Reduce per-unit shipping costs and optimize container utilization across routes.",
  },
  {
    icon: Cube,
    title: "Container Management",
    desc: "Track and manage containers by type, capacity, and assigned voyage. Monitor fill levels and assign shipments to containers with load optimization.",
  },
  {
    icon: Package,
    title: "Pallet Tracking",
    desc: "Assign shipments to pallets, track pallet weights, dimensions, and positions within containers. Full visibility from warehouse to port.",
  },
  {
    icon: ClipboardText,
    title: "Manifest Generation",
    desc: "Create voyage manifests automatically from consolidated shipment data. Print or export manifests for carriers, customs, and port authorities.",
  },
  {
    icon: Boat,
    title: "Voyage Management",
    desc: "Schedule and manage voyages with vessel details, departure and arrival ports, and estimated transit times. Assign manifests to voyages in one step.",
  },
  {
    icon: ArrowsLeftRight,
    title: "Load Optimization",
    desc: "Maximize container utilization with load planning tools. Visualize how packages fit together by weight and volume before finalizing the load.",
  },
  {
    icon: Barcode,
    title: "Barcode Scanning",
    desc: "Scan package barcodes at receiving and dispatch to verify every item in a consolidation. Reduce manual entry errors and speed up cargo processing.",
  },
  {
    icon: ChartLine,
    title: "Manifest Status Tracking",
    desc: "Track manifests through every stage: open, in-progress, submitted, closed. Close and finalize manifests with a single action when the voyage departs.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Receive Shipments",
    desc: "Incoming shipments are received at the warehouse and scanned into the system. Each package is logged with weight, dimensions, and handling requirements.",
  },
  {
    step: "02",
    title: "Group for Consolidation",
    desc: "Select shipments heading to the same destination or via the same route. Group them into a consolidation batch for a specific voyage.",
  },
  {
    step: "03",
    title: "Assign to Container",
    desc: "Assign the consolidated batch to a container or pallet. Load optimization shows available capacity and suggests the most efficient arrangement.",
  },
  {
    step: "04",
    title: "Generate Manifest",
    desc: "NTIGI auto-produces the voyage manifest with all shipment details, weights, package counts, and customs information ready for the carrier.",
  },
  {
    step: "05",
    title: "Close & Dispatch",
    desc: "Close the manifest when loading is complete. The voyage status updates, customers are notified, and all records are archived with a full audit trail.",
  },
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
  { value: "100K+", label: "Shipments per day" },
  { value: "22+", label: "Cargo handling tags" },
  { value: "30+", label: "API modules" },
  { value: "100%", label: "Offline capable" },
];

export default function Consolidation() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Consolidation
                <br />
                <span className="text-blue-500">& Manifests</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Group shipments, manage containers, generate voyage manifests, and track every load from warehouse floor to port departure all in one offline-first system.
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                Everything from Grouping to Departure
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Full consolidation operations in one system from receiving individual packages through to closing the voyage manifest.
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

        {/* How It Works */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                From Receiving to Voyage Departure
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                A clear five-step consolidation process every action tracked, every document generated automatically.
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

        {/* Manifest + Voyage Details - 2 column */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* Manifest Features */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <ListChecks className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">Manifest Management</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                Manifests are generated automatically from the shipments in your consolidation. No manual data entry the system builds the document from the booking record.
              </p>
              <div className="space-y-2 pt-2">
                {manifestFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Voyage Details */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Boat className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Voyage Record Details</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Each voyage captures the full operational picture vessel, ports, timelines, and all associated manifests and shipments.
                </p>
                <div className="space-y-3 pt-1">
                  {voyageDetails.map((item, i) => (
                    <div key={i} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-0.5">{item.label}</div>
                      <div className="text-sm text-foreground/60 font-sans font-medium">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                Who This Is Built For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Boat className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Ocean Freight Operators</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Consolidate LCL (less than container load) shipments into full containers. Generate Bills of Lading and port manifests directly from NTIGI.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Buildings className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Warehouse Operators</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Manage goods-in with barcode scanning, assign to consolidation batches by destination, and track every pallet from shelf to dispatch dock.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Courier Consolidators</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Bundle last-mile courier packages into route-based consolidations for dispatch vehicles. Reduce trips, increase delivery density per run.
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
                  title: "International Forwarding",
                  desc: "Manage cross-border shipments, multi-leg routes, and partner agency networks end to end.",
                  href: "/solutions/international-forwarding",
                },
                {
                  title: "Customs & Compliance",
                  desc: "Auto-generate customs documentation and run compliance screening on every consolidated shipment.",
                  href: "/solutions/customs-compliance",
                },
                {
                  title: "Warehouse Management",
                  desc: "Manage shelf locations, stock levels, receiving, and dispatch within your warehouse operations.",
                  href: "/solutions/warehouse",
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
                Ready to Streamline Your
                <br />
                <span className="text-blue-500">Consolidation Operations?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI manages your consolidation workflow from warehouse receiving to voyage departure in a live walkthrough with our team.
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
