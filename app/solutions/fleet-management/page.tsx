"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, Truck, User, MapPin, Wrench, GasPump, ChartLine,
  IdentificationCard, DeviceMobile, CheckCircle, ShieldCheck,
  ClipboardText, Gauge, Warning, UsersThree, Buildings,
} from "@phosphor-icons/react";

const vehicleCapabilities = [
  { icon: Truck, title: "Vehicle Registration", desc: "Register every vehicle in your fleet with type, capacity, license plate, registration number, and assigned branch. Full vehicle record accessible at any time." },
  { icon: Gauge, title: "Capacity Tracking", desc: "Track the load capacity of each vehicle by weight and volume. Prevent over-loading by monitoring what is assigned versus what the vehicle can carry on each run." },
  { icon: Wrench, title: "Maintenance Scheduling", desc: "Schedule and track vehicle maintenance by mileage or date. Receive alerts before service is due. Keep a complete maintenance history per vehicle." },
  { icon: GasPump, title: "Fuel Tracking", desc: "Log fuel fill-ups per vehicle and track fuel costs over time. Monitor fuel consumption per route to identify inefficiencies and reduce operating costs." },
  { icon: MapPin, title: "GPS Tracking Integration", desc: "Track every vehicle's live location on an interactive map. Managers see the full fleet in real time. Customers see their shipment moving toward them." },
  { icon: ChartLine, title: "Performance Metrics", desc: "Monitor delivery success rates, on-time percentages, distance covered, and fuel efficiency per vehicle. Compare fleet performance across routes and periods." },
];

const driverCapabilities = [
  { icon: User, title: "Driver Profiles", desc: "Create detailed profiles for every driver with contact information, assigned branch, active routes, and current delivery status." },
  { icon: IdentificationCard, title: "License Tracking", desc: "Record driver license numbers, license categories, issue dates, and expiry dates. Receive alerts when a license is approaching expiry." },
  { icon: ClipboardText, title: "Route Assignment", desc: "Assign drivers to specific routes or delivery runs. Drivers see their assigned shipments in the mobile app and can manage their queue throughout the day." },
  { icon: ChartLine, title: "Performance Tracking", desc: "Track deliveries completed, success rates, average delivery times, and customer confirmation rates per driver. Identify top performers and underperformers." },
  { icon: DeviceMobile, title: "Mobile App for Drivers", desc: "Drivers use NTIGI's mobile PWA on any smartphone. View delivery queue, navigate to stops, scan barcodes, capture signatures and photos. Works offline." },
  { icon: ShieldCheck, title: "POD Capture", desc: "Drivers capture proof of delivery directly from their phone: recipient signature, photo of the package, and GPS location. All attached to the shipment record instantly." },
];

const workflow = [
  { step: "01", title: "Register Vehicle", desc: "Add the vehicle with type, capacity, registration details, and assigned branch. The vehicle is immediately available for route and driver assignment." },
  { step: "02", title: "Create Driver Profile", desc: "Add the driver with license details and branch assignment. Link the driver to their vehicle. Set their initial role and permissions in the NTIGI mobile app." },
  { step: "03", title: "Assign to Route", desc: "Assign the driver and vehicle to a delivery route or specific run. Shipments appear in the driver's queue on their mobile app immediately." },
  { step: "04", title: "Track in Real Time", desc: "The vehicle GPS location updates live on the fleet map. Managers see every vehicle. Customers see their shipment status update as the driver progresses." },
  { step: "05", title: "Review Performance", desc: "After the run, review delivery success rates, fuel usage, and on-time performance per driver and vehicle. Schedule any required maintenance from the same dashboard." },
];

const vehicleRecord = [
  { label: "Vehicle Type", desc: "Van, truck, motorcycle, cargo bike, or custom type" },
  { label: "Load Capacity", desc: "Maximum weight and volume the vehicle can carry" },
  { label: "License Plate", desc: "Registration number for identification and compliance" },
  { label: "Assigned Branch", desc: "Which branch this vehicle operates from" },
  { label: "Current Status", desc: "Active, in maintenance, offline, or decommissioned" },
  { label: "Maintenance History", desc: "Full log of all service dates, work done, and costs" },
  { label: "Fuel Log", desc: "All fill-up entries with date, volume, and cost" },
  { label: "GPS Status", desc: "Live location and last known position with timestamp" },
];

const driverRecord = [
  { label: "Full Name and Contact", desc: "Personal details for identification and communication" },
  { label: "License Number", desc: "Driver license number and applicable categories" },
  { label: "License Expiry", desc: "Expiry date with automated alert before renewal" },
  { label: "Assigned Vehicle", desc: "Which vehicle this driver is currently operating" },
  { label: "Assigned Routes", desc: "Active route assignments for the current period" },
  { label: "Delivery History", desc: "All deliveries completed with timestamps and outcomes" },
  { label: "Performance Score", desc: "Delivery success rate and on-time percentage" },
  { label: "Mobile App Access", desc: "Login credentials and device assignment for the PWA" },
];

const maintenanceAlerts = [
  "Scheduled service due date approaching",
  "Mileage-based service interval reached",
  "License expiry within 30 days",
  "Vehicle capacity exceeded on assignment",
  "Fuel consumption above route average",
  "Unscheduled downtime recorded",
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

export default function FleetManagement() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">For Courier and Logistics Operations</div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Fleet and Driver<br /><span className="text-blue-500">Management</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Register and track every vehicle in your fleet, manage driver profiles and license compliance, monitor GPS locations in real time, schedule maintenance, and measure performance across your entire delivery operation.
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
                { display: "Real-Time", label: "GPS fleet tracking" },
                { display: "Full", label: "Maintenance history" },
                { display: "Mobile", label: "PWA driver app" },
                { display: "100%", label: "POD evidence capture" },
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
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">Fleet Management</div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Complete Vehicle Control</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every vehicle in your operation registered, tracked, maintained, and reported from a single platform.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
              {vehicleCapabilities.map((item, index) => (
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
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider mb-3">Driver Management</div>
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Full Driver Lifecycle Tracking</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">From onboarding to daily performance: every driver record, license, route, and delivery outcome managed in one place.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom bg-background">
              {driverCapabilities.map((item, index) => (
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

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Registration to Daily Operations</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A clear five-step process for onboarding a new vehicle or driver and getting them operational on the first day.</p>
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

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Truck className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every Vehicle Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Each vehicle has a complete operational record. Every detail needed to dispatch, maintain, and report on that vehicle is in one place.</p>
              <div className="space-y-3 pt-1">
                {vehicleRecord.map((item, i) => (
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
                  <User className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">What Every Driver Record Contains</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Complete driver records from personal details and license compliance through to daily performance and delivery history.</p>
                <div className="space-y-2 pt-1">
                  {driverRecord.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-bold uppercase tracking-wider text-foreground">{item.label}: </span>
                        <span className="text-sm text-foreground/60 font-sans font-medium">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Warning className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Proactive Alerts</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">NTIGI watches your fleet and driver compliance automatically. These alerts trigger before problems occur, not after.</p>
                <div className="space-y-2 pt-1">
                  {maintenanceAlerts.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { icon: Truck, title: "City Courier Companies", desc: "Manage 10 to 100 drivers daily. Track every vehicle on a live map, assign shipments to drivers automatically, and review delivery performance at the end of each day." },
                { icon: Buildings, title: "Freight Transport Operators", desc: "Track heavy vehicles on long inter-city routes. Monitor fuel consumption per trip, schedule servicing by mileage, and ensure license compliance for all commercial drivers." },
                { icon: UsersThree, title: "Multi-Branch Logistics Networks", desc: "Each branch manages its own fleet independently while head office sees network-wide performance. Compare vehicle utilization and driver productivity across all locations." },
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

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Route Optimization", desc: "Assign your registered vehicles and drivers to optimized routes with distance calculation, transit times, and real-time tracking.", href: "/solutions/route-optimization" },
                { title: "Proof of Delivery", desc: "Your drivers capture signatures, photos, and GPS confirmation at every stop using the same NTIGI mobile app.", href: "/solutions/proof-of-delivery" },
                { title: "Multi-Branch Network", desc: "Manage fleets across multiple branches with branch-level data isolation and consolidated head-office reporting.", href: "/solutions/multi-branch" },
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
                Ready to Take Control<br /><span className="text-blue-500">of Your Fleet?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI manages your vehicles, drivers, and delivery performance in a live walkthrough with our team.</p>
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
