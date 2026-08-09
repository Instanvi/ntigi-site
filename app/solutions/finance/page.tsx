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
  ArrowRight, CurrencyDollar, Receipt, ChartLine, Cardholder,
  Bank, ArrowsCounterClockwise, FileText, Bell, CheckCircle,
  Buildings, UsersThree, Coins, BookOpenText, Terminal,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: Cardholder, title: "Multi-Method Payments", desc: "Accept cash, credit and debit cards, bank transfers, mobile money (MTN, Orange, Airtel), and COD collections. All payment types tracked in one place." },
  { icon: Receipt, title: "Automatic Invoice Generation", desc: "Invoices are created instantly when a shipment is booked. Custom templates, automatic numbering, tax calculations, and PDF generation built in." },
  { icon: CurrencyDollar, title: "Multi-Currency Support", desc: "Issue invoices and process payments in multiple currencies. Currency conversion is handled automatically with configurable exchange rates per route." },
  { icon: ArrowsCounterClockwise, title: "COD & Split Payments", desc: "Track cash on delivery collections across drivers and branches. Allow clients to pay using split payment methods across a single shipment." },
  { icon: ChartLine, title: "Revenue & P&L Reports", desc: "View revenue by branch, route, or agent. Generate profit and loss statements with custom date ranges and export to Excel or PDF instantly." },
  { icon: UsersThree, title: "Agent Commission Tracking", desc: "Calculate and track agent commissions automatically based on configurable structures. View individual agent performance and commission breakdowns." },
  { icon: Bank, title: "Outstanding Balances", desc: "Track client outstanding balances in real time. Set credit limits, configure credit terms, and send automated payment reminders via email or SMS." },
  { icon: FileText, title: "Refund Management", desc: "Process refunds and payment reversals against original invoices. Every refund is logged with reason, user, and timestamp for full audit trail." },
];

const workflow = [
  { step: "01", title: "Shipment Booked", desc: "When a shipment is created, the system calculates the charge based on route pricing, weight, service level, and any applicable surcharges." },
  { step: "02", title: "Invoice Generated", desc: "An invoice is automatically created with all shipment details, taxes, and totals. It is emailed to the client and available for PDF download." },
  { step: "03", title: "Payment Collected", desc: "Payment is recorded against the invoice: cash, card, mobile money, or bank transfer. Receipt is printed or emailed to the client immediately." },
  { step: "04", title: "COD Tracked", desc: "For COD shipments, collection is tracked per driver. Once delivered and collected, the payment is reconciled against the shipment record." },
  { step: "05", title: "Reports Generated", desc: "At any time, generate revenue reports, commission statements, and branch performance comparisons. Export to Excel, PDF, or CSV." },
];

const paymentMethods = [
  { name: "Cash", detail: "Walk-in and COD collection tracking" },
  { name: "Credit / Debit Card", detail: "Card terminal and gateway processing" },
  { name: "Bank Transfer", detail: "Wire and direct bank payment logging" },
  { name: "Mobile Money", detail: "MTN, Orange, Airtel integrations" },
  { name: "Stripe", detail: "Online payment gateway" },
  { name: "PayPal", detail: "International online payments" },
  { name: "COD", detail: "Cash on delivery with driver reconciliation" },
  { name: "Split Payment", detail: "Multiple methods on a single invoice" },
];

const accountingIntegrations = [
  { name: "QuickBooks", status: "Integration Ready", desc: "Sync invoices, payments, and client data to QuickBooks automatically." },
  { name: "Xero", status: "Integration Ready", desc: "Export financial records directly into Xero for accounting and reporting." },
  { name: "Custom Export", status: "Always Available", desc: "Export any financial data to Excel, CSV, or PDF for use in any accounting tool." },
];

const reportTypes = [
  "Revenue reports (daily, weekly, monthly)",
  "Payment collection reports",
  "Outstanding balances by client",
  "Profit and loss statements",
  "Agent commission reports",
  "Branch performance comparison",
  "COD reconciliation reports",
  "Custom date range reports",
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

export default function Finance() {
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
                  Finance<br /><span className="text-blue-500">& Billing</span>
                </h1>
                <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-md">
                  Accept every payment method, auto-generate invoices, track commissions, manage outstanding balances, and produce financial reports, all built directly into the NTIGI logistics workflow.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                </div>
              </AnimatedSection>

              <div className="hidden md:block">
                <ConsoleFrame label="NTIGI_OS // FINANCE_OVERVIEW.sh" status="LIVE" delay={0.25}>
                  <div className="relative w-full aspect-[16/10] bg-[var(--console-bg)] overflow-hidden">
                    <Image
                      src="/ntigidashboard.png"
                      alt="NTIGI finance and billing dashboard"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/60 via-transparent to-transparent pointer-events-none" />
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.9, ease: easeOutExpo }}
                      className="absolute bottom-3 right-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest"
                    >
                      FINANCE // REVENUE_VIEW
                    </motion.div>
                  </div>
                </ConsoleFrame>
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
                { display: "8+", label: "Payment methods" },
                { display: "Multi", label: "Currency support" },
                { display: "100%", label: "Audit trail" },
                { display: "Excel/PDF", label: "Export formats" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <div className="text-2xl font-bold text-blue-500 font-sans">{stat.display}</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES icons only, no badge */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Complete Financial Control</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every financial operation from payment collection to accounting exports, integrated into your logistics workflow.</p>
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Booking to Settlement</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Finance is embedded in the shipment lifecycle. No separate billing system needed.</p>
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
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">

            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none overflow-hidden">
              <div className="relative h-40 overflow-hidden border-b border-border-custom">
                <Image
                  src="/money.jpg"
                  alt="NTIGI payment and billing screen"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--console-bg)]/40 to-[var(--console-bg)]/90" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <Coins className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">Payment Methods Accepted</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every payment method your clients use is supported. Configure which methods are active per branch and per service level.</p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {paymentMethods.map((method, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground">{method.name}</div>
                      <div className="text-xs text-foreground/60 font-sans font-medium mt-0.5">{method.detail}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <ChartLine className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Financial Reports</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every report you need, available instantly with custom date ranges and one-click export.</p>
                <div className="space-y-2 pt-1">
                  {reportTypes.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <BookOpenText className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Accounting Integrations</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Connect your existing accounting tools or export to any platform using standard formats.</p>
                <div className="space-y-3 pt-1">
                  {accountingIntegrations.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.name}</span>
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{item.status}</span>
                      </div>
                      <p className="text-xs text-foreground/60 font-sans font-medium">{item.desc}</p>
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

              <AnimatedSection delay={0} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/logisticsboss.jpg" alt="Freight forwarder finance operations" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Buildings className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Freight Forwarders</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Invoice in multiple currencies, track outstanding balances across international clients, and sync financials with QuickBooks or Xero at month end.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/image4.webp" alt="Courier network COD reconciliation" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <UsersThree className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Courier Networks</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Reconcile COD collections across 20+ drivers daily, auto-calculate agent commissions, and view branch-level revenue performance in real time.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.24} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/ai.jpg" alt="Finance team reviewing reports" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Bell className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Finance Teams</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Set credit limits, receive automated overdue payment reminders, review P&L statements per period, and export any report for external audits.</p>
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
                { title: "International Forwarding", desc: "Manage cross-border shipments with multi-currency pricing and partner agency commission tracking.", href: "/solutions/international-forwarding" },
                { title: "Client Management", desc: "Track client balances, credit limits, custom pricing tiers, and shipment history in one database.", href: "/solutions/client-management" },
                { title: "Customs & Compliance", desc: "Auto-calculate duties and taxes per HS code and destination for accurate international invoicing.", href: "/solutions/customs-compliance" },
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

        {/* CTA animated gradient only, no static grid, no image */}
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
                Ready to Take Control of<br /><span className="text-blue-500">Your Logistics Finances?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI handles invoicing, payments, commissions, and accounting exports for your operation in a live demo.</p>
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
