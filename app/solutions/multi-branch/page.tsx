"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  UsersThree,
  ShieldCheck,
  ArrowsLeftRight,
  ChartLine,
  Globe,
  Lock,
  Bell,
  CheckCircle,
  CurrencyDollar,
  Eye,
  Sliders,
  TreeStructure,
} from "@phosphor-icons/react";

const capabilities = [
  {
    icon: Buildings,
    title: "Multi-Branch Operations",
    desc: "Run any number of branches from a single NTIGI account. Each branch operates independently with its own shipments, staff, clients, and financial records.",
  },
  {
    icon: Lock,
    title: "Branch-Level Data Isolation",
    desc: "Agents at Branch A cannot see Branch B data unless explicitly granted. Every record is scoped to its branch. No data leakage across your network.",
  },
  {
    icon: ArrowsLeftRight,
    title: "Inter-Branch Transfers",
    desc: "Transfer shipments between branches when routes change or consolidation is needed. Every transfer is logged with origin, destination, reason, and timestamp.",
  },
  {
    icon: CurrencyDollar,
    title: "Inter-Branch Settlements",
    desc: "Track financial obligations between branches. When Branch A hands off a shipment to Branch B, the settlement amount is calculated and recorded automatically.",
  },
  {
    icon: UsersThree,
    title: "Partner Agency Network",
    desc: "Onboard external partner agencies as part of your network. Assign them routes, set commission structures, and track their performance from head office.",
  },
  {
    icon: Sliders,
    title: "200+ Permission Controls",
    desc: "Assign granular permissions at the user level across 200+ control points. Restrict who can create shipments, view finances, generate reports, or modify settings per branch.",
  },
  {
    icon: TreeStructure,
    title: "Custom Role Creation",
    desc: "Create custom roles beyond Admin, Manager, Agent, and Driver. Define exactly what each role can see and do across features, branches, and data types.",
  },
  {
    icon: ChartLine,
    title: "Consolidated Reporting",
    desc: "View performance across all branches from a single dashboard. Compare revenue, shipment volumes, delivery success rates, and agent productivity network-wide.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Create Branches",
    desc: "Add each branch with its own name, location, contact details, business hours, and currency settings. Each branch is fully independent from day one.",
  },
  {
    step: "02",
    title: "Assign Staff & Roles",
    desc: "Add staff to each branch and assign roles with specific permissions. A manager at one branch cannot access another unless explicitly configured.",
  },
  {
    step: "03",
    title: "Configure Permissions",
    desc: "Set granular permissions per role across 200+ control points. Financial access, shipment editing, report generation: every action is configurable.",
  },
  {
    step: "04",
    title: "Connect Partners",
    desc: "Onboard partner agencies for specific routes or regions. Configure commission rates, service agreements, and data visibility between your network and theirs.",
  },
  {
    step: "05",
    title: "Monitor from Head Office",
    desc: "Access consolidated reporting across all branches and partners. See where volume is growing, where settlements are outstanding, and where performance needs attention.",
  },
];

const rbacRoles = [
  { role: "Admin", desc: "Full access to all branches, settings, financials, and user management" },
  { role: "Manager", desc: "Branch-level management with limited financial and config access" },
  { role: "Agent", desc: "Shipment creation, client management, and own branch operations only" },
  { role: "Driver", desc: "Delivery queue, route navigation, POD capture, and status updates" },
  { role: "Customer", desc: "Own shipments, invoice downloads, tracking, and payment history" },
  { role: "Custom Role", desc: "Any combination of the 200+ permissions, built to your workflow" },
];

const permissionCategories = [
  "Shipment create, view, edit, delete",
  "Client management and credit control",
  "Financial access and report generation",
  "System configuration and settings",
  "User and role management",
  "Manifest and voyage operations",
  "Warehouse and inventory access",
  "Branch transfer authorization",
  "Partner agency management",
  "Audit log access and export",
];

const settlementItems = [
  { label: "Transfer Recording", desc: "Every inter-branch shipment handoff is logged automatically" },
  { label: "Amount Calculation", desc: "Settlement amounts computed from agreed inter-branch rates" },
  { label: "Outstanding Tracking", desc: "View all unsettled inter-branch obligations at any time" },
  { label: "Settlement Reports", desc: "Export settlement history by branch, period, or partner" },
  { label: "Commission Tracking", desc: "Agent and partner commissions calculated and tracked per shipment" },
  { label: "Reconciliation Tools", desc: "Match payments to settlements and mark obligations as cleared" },
];

const stats = [
  { value: "200+", label: "Permission control points" },
  { value: "Unlimited", label: "Branches supported" },
  { value: "100%", label: "Data isolation" },
  { value: "Real-Time", label: "Network reporting" },
];

export default function MultiBranch() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">

        {/* Hero */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Multi-Branch
                <br />
                <span className="text-blue-500">Network</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Operate unlimited branches and partner agencies from a single platform. Full data isolation between branches, 200 permission control points, inter-branch transfers, settlements, and consolidated network-wide reporting.
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
                Run Your Entire Network from One Platform
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Every branch, every partner, every agent. Fully connected, fully isolated, fully visible from head office.
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">
                From Single Branch to Full Network
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">
                Start with one branch and expand to a full multi-country network without changing platforms or migrating data.
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

        {/* RBAC + Permissions - 2 column */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            {/* RBAC Roles */}
            <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <UsersThree className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">Role-Based Access Control</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                Every user in your network operates within their assigned role. Predefined roles cover all standard operations. Custom roles let you define exactly what each person can do.
              </p>
              <div className="space-y-3 pt-1">
                {rbacRoles.map((item, i) => (
                  <div key={i} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.role}</span>
                    </div>
                    <p className="text-sm text-foreground/60 font-sans font-medium pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Permission Categories + Settlements */}
            <div className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Eye className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Permission Categories</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  200+ individual permission points span every area of the platform. Grant or restrict access at the finest level of detail.
                </p>
                <div className="space-y-2 pt-1">
                  {permissionCategories.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <CurrencyDollar className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Inter-Branch Settlements</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Every handoff between branches creates a traceable financial obligation. Settlements are tracked, reconciled, and reportable at any time.
                </p>
                <div className="space-y-3 pt-1">
                  {settlementItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.label}:</span>
                        <span className="text-sm text-foreground/60 font-sans font-medium"> {item.desc}</span>
                      </div>
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
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">International Freight Forwarders</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Run branches across multiple countries with full data isolation. Head office sees everything. Each branch only sees its own. Commission settlements happen automatically.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Buildings className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Regional Courier Networks</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Manage city and town branches from one account. Agents at each location process their own shipments while operations managers see the full regional picture.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Bell className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Agency Partnerships</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Onboard third-party agencies as partners in your network. Assign them specific routes, set commission rates, and track shipment handoffs with full financial audit trail.
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
                  desc: "Manage cross-border shipments across your multi-branch network with multi-leg routing and partner agency coordination.",
                  href: "/solutions/international-forwarding",
                },
                {
                  title: "Finance & Billing",
                  desc: "Track inter-branch settlements, agent commissions, and branch-level financial performance in one place.",
                  href: "/solutions/finance-billing",
                },
                {
                  title: "Consolidation & Manifests",
                  desc: "Group and transfer shipments between branches for consolidation with full manifest and voyage tracking.",
                  href: "/solutions/consolidation",
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
                <span className="text-blue-500">Logistics Network?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                See how NTIGI manages multi-branch operations, permissions, and inter-agency settlements for your specific network structure in a live walkthrough.
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
