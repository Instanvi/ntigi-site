"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, Package, MapPin, Receipt, User, Bell, DeviceMobile,
  MagnifyingGlass, CurrencyDollar, CheckCircle, ArrowsCounterClockwise,
  ChartLine, Globe, ShoppingBag, UsersThree,
} from "@phosphor-icons/react";

const capabilities = [
  { icon: Package, title: "Self-Service Shipment Booking", desc: "Customers book shipments directly through the portal without calling an agent. Select route, package type, service level, and confirm pricing before submitting." },
  { icon: MapPin, title: "Real-Time Shipment Tracking", desc: "Every customer can track their own shipments live. Status updates from picked up through to delivered, with GPS-backed location data at each stage." },
  { icon: Receipt, title: "Invoice Downloads", desc: "Customers access and download PDF invoices for all their shipments directly from the portal. No need to contact an agent for billing documents." },
  { icon: CurrencyDollar, title: "Payment History", desc: "Full payment history is visible to each customer: every payment made, every outstanding balance, and every invoice status in one place." },
  { icon: User, title: "Profile Management", desc: "Customers update their own contact details, addresses, and notification preferences without staff involvement. Changes are reflected across all their shipments instantly." },
  { icon: Bell, title: "Automated Notifications", desc: "Customers receive automatic SMS, email, push, and WhatsApp notifications at every shipment milestone. Configured by the customer, not by your agents." },
  { icon: MagnifyingGlass, title: "Public Tracking Portal", desc: "Any shipment can be tracked publicly by entering the tracking number. No login required. Share the tracking link with anyone who needs visibility on a shipment." },
  { icon: DeviceMobile, title: "Mobile App Access", desc: "The full customer portal is accessible as a mobile PWA. Customers install it once from their browser and access it like a native app on any device." },
];

const workflow = [
  { step: "01", title: "Customer Registers", desc: "Customers register or are created in the system by your agents. They receive login credentials and access their personalized portal immediately." },
  { step: "02", title: "Books a Shipment", desc: "The customer selects route, package details, and service level. Pricing is calculated automatically from your configured rate cards. No agent needed." },
  { step: "03", title: "Receives Confirmation", desc: "A booking confirmation is sent automatically via email and SMS with the tracking number, cost summary, and estimated delivery window." },
  { step: "04", title: "Tracks in Real Time", desc: "The customer follows their shipment through the portal or public tracking link. Each status update triggers an automatic notification to their preferred channel." },
  { step: "05", title: "Downloads Invoice", desc: "Once delivered, the customer downloads their PDF invoice from the portal. Outstanding balances and payment history are always visible in their account." },
];

const customerFeatures = [
  { label: "Shipment Booking", desc: "Book new shipments without contacting an agent" },
  { label: "Live Tracking", desc: "GPS-backed status updates for every shipment" },
  { label: "Invoice Downloads", desc: "PDF invoices available at any time" },
  { label: "Payment History", desc: "Full transaction and balance history" },
  { label: "Profile Updates", desc: "Manage contact details and preferences" },
  { label: "Notification Settings", desc: "Choose SMS, email, WhatsApp, or push alerts" },
  { label: "Return Requests", desc: "Initiate return shipments from the portal" },
  { label: "Mobile PWA", desc: "Works on any smartphone without an app store" },
];

const notificationTypes = [
  "Shipment booked confirmation",
  "Package picked up notification",
  "In-transit status updates",
  "Out for delivery alert",
  "Delivered confirmation with timestamp",
  "Proof of delivery photo and signature",
  "Invoice generated notification",
  "Payment received confirmation",
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

export default function CustomerPortal() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">For E-commerce and Courier Clients</div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Customer<br /><span className="text-blue-500">Portal</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Give every client their own self-service portal. Book shipments, track deliveries in real time, download invoices, and manage their profile from any device. No agent calls required.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border-custom">
              {[
                { display: "Self-Service", label: "Shipment booking" },
                { display: "Real-Time", label: "GPS tracking" },
                { display: "Mobile", label: "PWA access" },
                { display: "Auto", label: "Notifications" },
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Everything Customers Need Without Calling You</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">The customer portal handles every common client request automatically, reducing support calls and improving the customer experience.</p>
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Registration to Delivered</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">The complete customer journey from first login to delivery confirmation, without a single agent interaction needed.</p>
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
                <User className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Each Customer Can Do</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every client gets a secure, personalized portal showing only their own shipments, invoices, and payment history.</p>
              <div className="space-y-3 pt-1">
                {customerFeatures.map((item, i) => (
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
                  <Bell className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Automated Notification Events</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Every shipment event triggers an automatic notification via the customer's preferred channel. No manual sending by your staff.</p>
                <div className="space-y-2 pt-1">
                  {notificationTypes.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <DeviceMobile className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Mobile PWA Access</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Customers access the full portal from any smartphone without downloading an app. Open the browser, log in, and add to home screen. Available on iOS and Android. Works even with intermittent connectivity.</p>
                <div className="flex items-start gap-2 pt-1">
                  <Globe className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">Supports English, French, Chinese, and German out of the box with more languages ready to add.</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who Benefits Most</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { icon: ShoppingBag, title: "E-commerce Businesses", desc: "Give your online shoppers the tracking experience they expect. Real-time notifications, delivery photos, and a clean tracking page branded to your logistics operation." },
                { icon: UsersThree, title: "Frequent Business Shippers", desc: "Business clients who ship daily can manage their own bookings, monitor outstanding balances, and download invoices for accounting without needing your staff." },
                { icon: ArrowsCounterClockwise, title: "Returns Management", desc: "Customers submit return shipment requests through the portal. Your team reviews and approves. The return is created, tracked, and invoiced automatically." },
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
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Proof of Delivery", desc: "Signature capture and photo confirmation sent directly to the customer via the portal after every delivery.", href: "/solutions/proof-of-delivery" },
                { title: "Finance and Billing", desc: "Invoices generated at booking are immediately available for customer download in the portal.", href: "/solutions/finance" },
                { title: "International Forwarding", desc: "International clients track multi-leg shipments and receive customs status updates through the portal.", href: "/solutions/international-forwarding" },
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
                Ready to Give Customers<br /><span className="text-blue-500">Full Self-Service?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI's customer portal handles bookings, tracking, invoicing, and notifications for your clients in a live walkthrough.</p>
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
