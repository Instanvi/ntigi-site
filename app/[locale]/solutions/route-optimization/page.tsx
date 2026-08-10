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
  ArrowRight, MapPin, Path, Clock, Truck, ChartLine, CurrencyDollar,
  MapTrifold, Gauge, CheckCircle, DeviceMobile, Globe,
  ArrowsClockwise, UsersThree, Buildings, Terminal,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: Path, title: "Multi-Leg Route Creation", desc: "Define routes with multiple stops, waypoints, and transit hubs. Each leg has its own distance, transit time, pricing, and available service levels." },
  { icon: MapPin, title: "Stop & Location Management", desc: "Create and manage pickup and delivery locations with GPS coordinates, address validation, and coverage area mapping. Search and assign stops to any route." },
  { icon: Clock, title: "Transit Time Estimation", desc: "Set and display expected transit times per route segment. Customers and agents see estimated arrival windows at booking time, not after." },
  { icon: CurrencyDollar, title: "Pricing Per Route", desc: "Configure rate cards per route with weight-based, zone-based, and dimensional weight pricing. Apply service level surcharges, fuel fees, and seasonal rates." },
  { icon: MapTrifold, title: "Interactive Map Visualization", desc: "View routes, stops, and active deliveries on interactive maps powered by Leaflet and OpenStreetMap. Visualize coverage areas and cluster delivery locations." },
  { icon: Gauge, title: "Distance Calculation", desc: "Automatic distance and duration calculation between stops using Google Maps API. Distances inform pricing, transit time estimates, and fuel cost tracking." },
  { icon: Truck, title: "Vehicle Assignment to Routes", desc: "Assign registered vehicles to specific routes based on capacity, type, and availability. Track which vehicle is running which route at any point in time." },
  { icon: ChartLine, title: "Route Performance Analytics", desc: "Monitor shipment volumes per route, delivery success rates, average transit times, and revenue per corridor. Identify underperforming routes instantly." },
];

const workflow = [
  { step: "01", title: "Define the Route", desc: "Create a route with origin, destination, and intermediate stops. Set the route name, carrier type, transit time, and which services are available on this corridor." },
  { step: "02", title: "Configure Pricing", desc: "Set rate cards for the route: weight bands, zone pricing, package type rates, express surcharges, and any custom contract rates for specific clients." },
  { step: "03", title: "Assign Vehicles", desc: "Link vehicles from your fleet to the route. The system tracks capacity and ensures the right vehicle type is matched to the route requirements." },
  { step: "04", title: "Assign Shipments", desc: "Agents select the route at booking time. Shipments are grouped by route for dispatch. The system shows available capacity per run before assignment." },
  { step: "05", title: "Track and Report", desc: "Monitor every active shipment on the route in real time. Report on route utilization, delivery success, and revenue contribution at any time." },
];

const routeAttributes = [
  { label: "Origin and Destination", desc: "Full address with GPS coordinates for each route endpoint" },
  { label: "Intermediate Stops", desc: "Configurable waypoints with sequence and transit time per leg" },
  { label: "Route Scheduling", desc: "Set departure days, frequencies, and cutoff times per route" },
  { label: "Service Levels", desc: "Standard, express, and overnight options per route corridor" },
  { label: "Distance and Duration", desc: "Auto-calculated from Google Maps API at route creation" },
  { label: "Coverage Area", desc: "Geographic mapping of pickup and delivery zones per route" },
];

const mapFeatures = [
  "Interactive route visualization on OpenStreetMap",
  "Real-time vehicle and driver location tracking",
  "Delivery cluster mapping for dense urban areas",
  "Geofencing for zone-based coverage rules",
  "Address autocomplete powered by Google Maps",
  "Geocoding and reverse geocoding for all stops",
  "Route overlay showing full multi-leg path",
  "Live shipment movement during transit",
];

const pricingRules = [
  { name: "Weight-Based Pricing", desc: "Rate tiers by package weight with configurable bands" },
  { name: "Zone-Based Pricing", desc: "Different rates based on origin and destination zones" },
  { name: "Dimensional Weight", desc: "Volumetric weight calculation for oversized packages" },
  { name: "Service Level Rates", desc: "Standard, express, and overnight pricing per corridor" },
  { name: "Fuel Surcharge", desc: "Configurable fuel surcharge applied per route or globally" },
  { name: "Seasonal Pricing", desc: "Adjust rates for peak seasons with time-bound rules" },
  { name: "Custom Rate Contracts", desc: "Client-specific agreed rates override default pricing" },
  { name: "Handling Fees", desc: "Additional fees for special cargo types or extra services" },
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

export default function RouteOptimization() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO console frame header + screenshot background, text overlaid bottom-left.
            Fixed min-h matches other hero sections (~420px content area). */}
        <section className="relative border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />

          {/* console header bar */}
          <div className="relative z-10 px-4 py-2 bg-[var(--console-header)] border-b border-border-custom flex items-center justify-between text-[10px] text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
              </div>
              <div className="flex items-center gap-1 pl-2 border-l border-border-custom">
                <Terminal className="h-3 w-3 text-blue-500" />
                <span className="tracking-wider">NTIGI_OS // ROUTE_NETWORK.sh</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span className="tracking-wider text-blue-500">LIVE</span>
            </div>
          </div>

          {/* screenshot background + overlaid text fixed height matches other heroes */}
          <div className="relative min-h-[420px] flex items-end">
            <Image
              src="/shipmentlistHome.png"
              alt="NTIGI route and shipment management"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

            {/* text panel sits at the bottom of the fixed-height container */}
            <div className="relative z-10 w-full">
              <div className="mx-auto max-w-7xl px-6 md:px-8 py-10">
                <AnimatedSection className="max-w-xl space-y-4">
                  <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                    Route<br /><span className="text-blue-500">Optimization</span>
                  </h1>
                  <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                    Create and manage multi-leg routes with stop management, transit time estimation, zone-based pricing, real-time GPS tracking, and interactive map visualization.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                    <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t-2 border-t-blue-500/20 border-border-custom">
              {[
                { display: "Multi-Leg", label: "Route support" },
                { display: "Real-Time", label: "GPS tracking" },
                { display: "11+", label: "Pricing rule types" },
                { display: "100%", label: "Offline capable" },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <div className="text-2xl font-bold text-blue-500 font-sans">{stat.display}</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Full Route and Network Control</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every aspect of your delivery network configured, priced, tracked, and reported from a single platform.</p>
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Route Setup to Live Tracking</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A clear five-step process that takes a new corridor from definition to fully operational delivery route.</p>
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

        {/* ROUTE DETAIL + MAPS CARDS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Path className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every Route Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Each route is a complete operational record. Every piece of information agents need to book, price, and dispatch a shipment is attached to the route.</p>
              <div className="space-y-3 pt-1">
                {routeAttributes.map((item, i) => (
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
                  <Globe className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Maps and Location Features</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Powered by Leaflet with OpenStreetMap and Google Maps API for address resolution, distance calculation, and live tracking visualization.</p>
                <div className="space-y-2 pt-1">
                  {mapFeatures.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <ArrowsClockwise className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Offline Route Access</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Route data syncs to the desktop and mobile apps during connectivity and remains available offline. Agents can book shipments on any route without an internet connection.</p>
                <div className="flex items-start gap-2 pt-1">
                  <DeviceMobile className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">Works on web, Windows desktop app, and mobile PWA with full offline parity.</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PRICING ENGINE 4-col grid, no badge */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Every Pricing Model Your Route Needs</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Configure any combination of pricing rules per route. Mix weight tiers, zone rates, service levels, and custom contracts on the same corridor.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom bg-background">
              {pricingRules.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.08} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <CurrencyDollar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{item.name}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES real photo card headers */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">

              <AnimatedSection delay={0} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/image4.webp" alt="City courier delivery network" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Truck className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">City Courier Networks</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Define inner-city delivery zones with cluster mapping, assign drivers to zone routes, and track every vehicle on a live map throughout the delivery day.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/ship.jpeg" alt="Inter-city freight lines at port" fill className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Buildings className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Inter-City Freight Lines</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Create multi-leg routes spanning cities and borders with stop-by-stop transit times. Price each corridor separately and report on performance per line.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.24} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/image3.jpg" alt="Agency network partners" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <UsersThree className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Agency Networks</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Assign partner agencies to specific route segments. Each agency handles their leg with full visibility into what is arriving, when, and what it should cost.</p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* RELATED SOLUTIONS */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Related Solutions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: "Fleet and Driver Management", desc: "Register vehicles, track maintenance, and assign drivers to the routes you have configured.", href: "/solutions/fleet-management" },
                { title: "Proof of Delivery", desc: "Capture signatures, photos, and GPS confirmation at every stop along your delivery routes.", href: "/solutions/proof-of-delivery" },
                { title: "Finance and Billing", desc: "Apply the route pricing rules directly to invoices. Every charge calculated from the route rate card at booking time.", href: "/solutions/finance" },
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

        {/* CTA animated gradient, no static grid */}
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
                Ready to Build Your<br /><span className="text-blue-500">Delivery Network?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI manages your route corridors, stop networks, and pricing structures in a live walkthrough with our team.</p>
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
