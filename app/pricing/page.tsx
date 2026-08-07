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
  ArrowRight, Package, Scales, MapPin, Ruler, Tag, Clock,
  GasPump, CurrencyDollar, CheckCircle, ChartLine,
  UsersThree, Buildings, Globe, ArrowsLeftRight, Receipt,
} from "@phosphor-icons/react";

const pricingFactors = [
  { icon: Scales, title: "Package Weight", desc: "Rates are calculated by actual weight. Define weight bands with different prices per kilogram or per fixed band. Heavier shipments move to higher tiers automatically.", example: "0 to 5 kg: base rate / 5 to 20 kg: mid rate / 20 kg plus: bulk rate" },
  { icon: Ruler, title: "Dimensions and Volume", desc: "Volumetric weight is calculated from package dimensions. The system automatically applies the higher of actual weight or volumetric weight.", example: "Oversized light packages are billed by cubic volume, not just mass" },
  { icon: MapPin, title: "Route and Zone", desc: "Each route has its own rate card. Zone-based pricing groups origins and destinations into pricing zones. Cross-zone shipments apply the configured inter-zone rate.", example: "Zone A to Zone A: local rate / Zone A to Zone B: regional rate" },
  { icon: Package, title: "Package Type", desc: "Different rates apply to envelopes, parcels, boxes, and pallets. Each package type has configurable base rates, size restrictions, and weight limits.", example: "Envelope: flat rate / Standard box: weight-based / Pallet: volume-based" },
  { icon: Clock, title: "Service Level", desc: "Standard, express, same-day, next-day, and overnight service levels each carry their own rate multiplier or fixed surcharge applied on top of the base route rate.", example: "Standard: base / Express: base + 30% / Same-day: base + 60%" },
  { icon: GasPump, title: "Fuel Surcharge", desc: "Apply a configurable fuel surcharge as a percentage or fixed amount per shipment. Update it globally or per route to reflect changing fuel costs.", example: "Current surcharge: configured per route or network-wide" },
  { icon: Tag, title: "Handling Fees", desc: "Apply additional charges for special handling requirements: fragile, perishable, hazardous, oversized, or white glove service. Mapped to 22 cargo handling tags.", example: "Fragile handling: +5 / Hazardous: +15 / White glove: +25" },
  { icon: CurrencyDollar, title: "Duties and Taxes", desc: "For international shipments, customs duties and VAT are calculated per HS code and destination country. Added to the invoice automatically at booking.", example: "HS code + destination = applicable duty rate applied to declared value" },
];

const howItWorks = [
  { step: "01", title: "You Set the Rates", desc: "Your operations team configures rate cards in NTIGI for each route, service level, weight band, and package type. Rates are yours to control and update at any time." },
  { step: "02", title: "Agent Books a Shipment", desc: "When an agent creates a shipment, they select the route, package type, weight, dimensions, and service level. NTIGI calculates the charge automatically." },
  { step: "03", title: "System Calculates the Price", desc: "The pricing engine applies the matching rate card: base rate, service level multiplier, fuel surcharge, handling fees, and any applicable duties or taxes." },
  { step: "04", title: "Invoice is Generated", desc: "An invoice is produced instantly with all charges broken down. Sent to the client automatically by email with full PDF and receipt generation." },
  { step: "05", title: "Client Pays", desc: "Payment is collected via cash, card, mobile money, bank transfer, or COD. Multi-currency is supported. The system records payment and closes the invoice." },
];

const clientContracts = [
  { label: "Custom Rate Contracts", desc: "Set agreed rates for specific clients that override standard pricing" },
  { label: "Frequent Shipper Discounts", desc: "Apply volume discounts to clients who ship regularly" },
  { label: "Credit Limits", desc: "Set maximum outstanding balances before shipments are blocked" },
  { label: "Credit Terms", desc: "Configure payment periods for account clients" },
  { label: "Custom Pricing Tiers", desc: "Group clients into pricing tiers with different rate structures" },
  { label: "Seasonal Rate Adjustments", desc: "Override rates during peak periods with time-bound rules" },
];

const quotationFeatures = [
  "Instant quote generation before booking",
  "Multi-service level comparison on one screen",
  "Save and share quotes with clients",
  "Convert quotes directly to bookings",
  "Quote history per client",
  "Email quotes as PDF to customers",
];

const paymentMethods = [
  { name: "Cash", detail: "Walk-in and agent-collected" },
  { name: "Card", detail: "Credit and debit processing" },
  { name: "Mobile Money", detail: "MTN, Orange, Airtel" },
  { name: "Bank Transfer", detail: "Wire and direct bank" },
  { name: "COD", detail: "Driver collects at delivery" },
  { name: "Split Payment", detail: "Multiple methods per invoice" },
];

const platformItems = [
  "Based on number of users and branches",
  "Based on monthly shipment volume",
  "Cloud, on-premise, or hybrid deployment",
  "30-day free trial available",
  "Dedicated onboarding and training",
  "Custom enterprise agreements available",
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

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  Usage-Based<br /><span className="text-blue-500">Payment</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                  NTIGI does not charge flat monthly subscription fees. Your clients pay based on what they send or receive: package weight, dimensions, route, service level, and handling requirements. You configure the rates. NTIGI calculates and invoices automatically.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/contact" size="lg">Talk to Sales</Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image
              src="/payment.jpg"
              alt="Logistics transport and shipping"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border-custom">
              {[
                { display: "Pay Per", label: "Shipment sent or received" },
                { display: "Custom", label: "Rate cards per route" },
                { display: "Auto", label: "Invoice on every booking" },
                { display: "Multi", label: "Currency support" },
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">What Determines the Cost of a Shipment</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Each shipment is priced by combining the relevant factors below. You configure all of them. Your rates, your rules, your margins.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom bg-primary/[0.01]">
              {pricingFactors.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.08} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                  <div className="border-t border-border-custom pt-2">
                    <p className="text-xs text-blue-500 font-sans font-medium italic">{item.example}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Booking to Payment</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Pricing is embedded in the shipment workflow. The moment a booking is created, the price is calculated and the invoice is ready.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-border-custom relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10" />
              {howItWorks.map((step, index) => (
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
                <h3 className="text-md font-bold uppercase tracking-wider">Client-Specific Pricing</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Not every client pays the same rate. NTIGI gives you the tools to price each client relationship correctly, from one-time senders to high-volume account customers.</p>
              <div className="space-y-3 pt-1">
                {clientContracts.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.label}</span>
                    </div>
                    <p className="text-sm text-foreground/60 font-sans font-medium pl-5">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Receipt className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Instant Quotation Generator</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Before any booking is made, agents and customers can generate an instant price quote based on the shipment details. Compare service levels side by side.</p>
                <div className="space-y-2 pt-1">
                  {quotationFeatures.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <ArrowsLeftRight className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Payment Methods Accepted</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every payment method your clients use is supported. Configure which are active per branch.</p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {paymentMethods.map((method, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground">{method.name}</div>
                      <div className="text-sm text-foreground/60 font-sans font-medium mt-0.5">{method.detail}</div>
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Built for Every Logistics Business Model</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { icon: Globe, title: "Freight Forwarders", desc: "Price international shipments by weight, route, and service level. Apply duties and taxes automatically at booking. Issue multi-currency invoices to clients in any country." },
                { icon: Buildings, title: "Courier Companies", desc: "Set city-by-city delivery rates. Offer standard and express tiers. Collect cash or mobile money on delivery. Auto-reconcile COD collections across all drivers." },
                { icon: ChartLine, title: "Logistics Operators", desc: "Manage warehouse handling fees, consolidation charges, voyage costs, and agent commissions. Every cost attached to every shipment, tracked and reported." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="p-6 border-r border-b border-border-custom space-y-3 hover:bg-primary/[0.04] transition-all">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="bg-[var(--console-bg)] border border-border-custom rounded-none p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <div className="space-y-4 flex flex-col justify-center">
                <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Custom Pricing for Your Operation</h2>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">NTIGI platform access is priced based on your operation size, shipment volume, number of users, required features, and deployment model. We build a plan around your business, not a one-size tier.</p>
                <div className="space-y-2 pt-1">
                  {platformItems.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative border border-border-custom overflow-hidden group min-h-[300px]">
                <Image
                  src="/image3.jpg"
                  alt="Logistics warehouse operations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <div className="border border-border-custom p-6 space-y-3">
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">Get a Custom Quote</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Tell our team about your operation. We will prepare a pricing proposal based on your branch count, shipment volumes, and deployment requirements.</p>
                  <Button variant="primary" href="/demo" size="lg" className="w-full">Request a Demo</Button>
                </div>
                <div className="border border-border-custom p-6 space-y-3">
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">Talk to Sales</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Speak directly with our team about your requirements and get answers to pricing questions the same day.</p>
                  <Button variant="outline" href="/contact" size="lg" className="w-full">Contact Sales</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Finance and Billing", desc: "Manage invoices, payment collection, COD reconciliation, agent commissions, and financial reporting across all branches.", href: "/solutions/finance" },
                { title: "Route Optimization", desc: "Configure the rate cards, service levels, and zone pricing that feed into every shipment cost calculation.", href: "/solutions/route-optimization" },
                { title: "International Forwarding", desc: "Multi-currency invoicing, duty calculations, and partner agency commission structures for cross-border operations.", href: "/solutions/international-forwarding" },
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

        <section className="relative py-24 border-b border-border-custom overflow-hidden noise-overlay">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/image1.jpg"
              alt="Logistics solutions background"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Ready to Start Pricing<br /><span className="text-blue-500">Your Shipments Correctly?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI's pricing engine handles your rate cards, service levels, and automatic invoicing in a live walkthrough with our team.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/contact" size="lg">Talk to Sales</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-20" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
