"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, Buildings, UsersThree, ShieldCheck, ArrowsLeftRight,
  ChartLine, Globe, Lock, Bell, CheckCircle, CurrencyDollar,
  Eye, Sliders, TreeStructure, Terminal,
} from "@phosphor-icons/react";

const capabilities = [
  { icon: Buildings, title: "Multi-Branch Operations", desc: "Run any number of branches from a single NTIGI account. Each branch operates independently with its own shipments, staff, clients, and financial records." },
  { icon: Lock, title: "Branch-Level Data Isolation", desc: "Agents at Branch A cannot see Branch B data unless explicitly granted. Every record is scoped to its branch. No data leakage across your network." },
  { icon: ArrowsLeftRight, title: "Inter-Branch Transfers", desc: "Transfer shipments between branches when routes change or consolidation is needed. Every transfer is logged with origin, destination, reason, and timestamp." },
  { icon: CurrencyDollar, title: "Inter-Branch Settlements", desc: "Track financial obligations between branches. When Branch A hands off a shipment to Branch B, the settlement amount is calculated and recorded automatically." },
  { icon: UsersThree, title: "Partner Agency Network", desc: "Onboard external partner agencies as part of your network. Assign them routes, set commission structures, and track their performance from head office." },
  { icon: Sliders, title: "200+ Permission Controls", desc: "Assign granular permissions at the user level across 200+ control points. Restrict who can create shipments, view finances, generate reports, or modify settings per branch." },
  { icon: TreeStructure, title: "Custom Role Creation", desc: "Create custom roles beyond Admin, Manager, Agent, and Driver. Define exactly what each role can see and do across features, branches, and data types." },
  { icon: ChartLine, title: "Consolidated Reporting", desc: "View performance across all branches from a single dashboard. Compare revenue, shipment volumes, delivery success rates, and agent productivity network-wide." },
];

const workflow = [
  { step: "01", title: "Create Branches", desc: "Add each branch with its own name, location, contact details, business hours, and currency settings. Each branch is fully independent from day one." },
  { step: "02", title: "Assign Staff & Roles", desc: "Add staff to each branch and assign roles with specific permissions. A manager at one branch cannot access another unless explicitly configured." },
  { step: "03", title: "Configure Permissions", desc: "Set granular permissions per role across 200+ control points. Financial access, shipment editing, report generation: every action is configurable." },
  { step: "04", title: "Connect Partners", desc: "Onboard partner agencies for specific routes or regions. Configure commission rates, service agreements, and data visibility between your network and theirs." },
  { step: "05", title: "Monitor from Head Office", desc: "Access consolidated reporting across all branches and partners. See where volume is growing, where settlements are outstanding, and where performance needs attention." },
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
  { value: 200, suffix: "+", label: "Permission control points" },
  { value: 99, suffix: "+", label: "Branches supported" },
  { value: 100, suffix: "%", label: "Data isolation" },
  { value: 0, suffix: "ms", label: "Real-Time reporting" },
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
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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

export default function MultiBranch() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  Multi-Branch<br /><span className="text-blue-500">Network</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                  Operate unlimited branches and partner agencies from a single platform. Full data isolation between branches, 200 permission control points, inter-branch transfers, settlements, and consolidated network-wide reporting.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                </div>
              </AnimatedSection>
              
              <div className="hidden md:block">
                <ConsoleFrame label="NTIGI_OS // NETWORK_MAP.sh" status="LIVE" delay={0.25}>
                  <div className="p-6 font-mono text-xs text-blue-500/90 space-y-4 bg-black/40 min-h-[250px]">
                    <div>$ ntigi network list --detailed</div>
                    <div className="text-foreground/80 space-y-2">
                      <div>[HQ] DOUALA_OFFICE (Active - 10,240 pkgs/day)</div>
                      <div>├── [Branch] YAOUNDE_OFFICE (Active - 4,890 pkgs/day)</div>
                      <div>├── [Branch] BUEA_OFFICE (Active - 2,150 pkgs/day)</div>
                      <div>├── [Partner] LONDON_DEPOT (Connected - 1,800 pkgs/day)</div>
                      <div>└── [Partner] CHICAGO_HUB (Connected - 3,420 pkgs/day)</div>
                    </div>
                    <div className="pt-2 text-green-500 animate-pulse flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                      <span>● All 5 network nodes fully operational (Sync 100%)</span>
                    </div>
                  </div>
                </ConsoleFrame>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border-custom">
              {[
                { display: "200+", label: "Permission control points" },
                { display: "Unlimited", label: "Branches supported" },
                { display: "100%", label: "Data isolation" },
                { display: "Real-Time", label: "Network reporting" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <div className="text-2xl font-bold text-blue-500 font-sans">{stat.display}</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Run Your Entire Network from One Platform</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every branch, every partner, every agent. Fully connected, fully isolated, fully visible from head office.</p>
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

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Single Branch to Full Network</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Start with one branch and expand to a full multi-country network without changing platforms or migrating data.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-border-custom relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10" />
              {workflow.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.12} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] transition-all relative">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 200 }} className="w-8 h-8 rounded-full bg-[var(--console-bg)] border border-blue-500/30 flex items-center justify-center mb-3">
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
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <UsersThree className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">Role-Based Access Control</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every user in your network operates within their assigned role. Predefined roles cover all standard operations. Custom roles let you define exactly what each person can do.</p>
              <div className="space-y-3 pt-1">
                {rbacRoles.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.role}</span>
                    </div>
                    <p className="text-sm text-foreground/60 font-sans font-medium pl-5">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Eye className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Permission Categories</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">200+ individual permission points span every area of the platform. Grant or restrict access at the finest level of detail.</p>
                <div className="space-y-2 pt-1">
                  {permissionCategories.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <CurrencyDollar className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Inter-Branch Settlements</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every handoff between branches creates a traceable financial obligation. Settlements are tracked, reconciled, and reportable at any time.</p>
                <div className="space-y-2 pt-1">
                  {settlementItems.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.label}: </span>
                        <span className="text-sm text-foreground/60 font-sans font-medium">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { icon: Globe, image: "/image1.jpg", title: "International Freight Forwarders", desc: "Run branches across multiple countries with full data isolation. Head office sees everything. Each branch only sees its own. Commission settlements happen automatically." },
                { icon: Buildings, image: "/image2.jpg", title: "Regional Courier Networks", desc: "Manage city and town branches from one account. Agents at each location process their own shipments while operations managers see the full regional picture." },
                { icon: Bell, image: "/image3.jpg", title: "Agency Partnerships", desc: "Onboard third-party agencies as partners in your network. Assign them specific routes, set commission rates, and track shipment handoffs with full financial audit trail." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                  <div className="relative h-44 overflow-hidden border-b border-border-custom">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "International Forwarding", desc: "Manage cross-border shipments across your multi-branch network with multi-leg routing and partner agency coordination.", href: "/solutions/international-forwarding" },
                { title: "Finance & Billing", desc: "Track inter-branch settlements, agent commissions, and branch-level financial performance in one place.", href: "/solutions/finance" },
                { title: "Consolidation & Manifests", desc: "Group and transfer shipments between branches for consolidation with full manifest and voyage tracking.", href: "/solutions/consolidation" },
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

        <section className="py-20 bg-[var(--console-header)] border-b border-border-custom relative overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to Scale Your<br /><span className="text-blue-500">Logistics Network?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI manages multi-branch operations, permissions, and inter-agency settlements for your specific network structure in a live walkthrough.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/contact" size="lg">Talk to Sales</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
