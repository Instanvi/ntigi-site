"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import FloatingShapes from "@/components/animations/FloatingShapes";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, CheckCircle, Camera, Signature, MapPin,
  DeviceMobile, Bell, Barcode, ClockCounterClockwise,
  Shield, Truck, ChartLine, UsersThree, Warning, Terminal,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  { icon: Signature, title: "Signature Capture", desc: "Drivers capture the recipient's digital signature directly on their mobile device at the point of delivery. Signature is stored against the shipment record instantly." },
  { icon: Camera, title: "Photo Documentation", desc: "Capture photos of delivered packages, damaged goods, or delivery locations. Photos are uploaded to the shipment record and timestamped for dispute resolution." },
  { icon: MapPin, title: "Real-Time GPS Tracking", desc: "Track every driver's location live during delivery runs. Managers see the full fleet on a map. Customers see their shipment moving toward them in real time." },
  { icon: Bell, title: "Automated Customer Notifications", desc: "Customers receive automatic SMS, email, and push notifications at each delivery milestone: out for delivery, arrived, delivered. No manual updates needed." },
  { icon: Barcode, title: "Barcode Scanning at Delivery", desc: "Drivers scan package barcodes to confirm the correct item is being delivered to the correct recipient. Prevents wrong-delivery incidents before they happen." },
  { icon: ClockCounterClockwise, title: "Delivery Timeline History", desc: "Every status update is logged with timestamp, GPS coordinates, and the driver who performed the action, from picked up through to delivered." },
  { icon: DeviceMobile, title: "Driver Mobile App (PWA)", desc: "Drivers use NTIGI's mobile PWA app to manage their delivery queue, navigate routes, scan barcodes, capture signatures and photos from any smartphone." },
  { icon: Shield, title: "Dispute Protection", desc: "Every delivery is backed by a complete evidence record: signature, photos, GPS location, timestamp, and driver identity. Resolve client disputes in seconds." },
];

const workflow = [
  { step: "01", title: "Assign to Driver", desc: "Shipments are assigned to a driver and appear in their delivery queue on the mobile app. The driver receives a notification with the day's pickup and delivery list." },
  { step: "02", title: "Pick Up & Scan", desc: "Driver scans the barcode at pickup to confirm they have the correct package. Status updates to In Transit and the customer is notified automatically." },
  { step: "03", title: "Navigate & Arrive", desc: "Driver navigates to the delivery address. GPS location is tracked throughout the route. Status updates to Out for Delivery when the driver is nearby." },
  { step: "04", title: "Capture POD", desc: "At the door, the driver captures the recipient's signature and takes a photo of the delivered package. Both are attached to the shipment record in real time." },
  { step: "05", title: "Confirm & Close", desc: "Delivery is confirmed, status updates to Delivered, and the customer receives instant notification. The full POD record is available for download immediately." },
];

const podRecord = [
  { label: "Recipient Signature", desc: "Digital signature captured on driver's device" },
  { label: "Delivery Photos", desc: "Photos of the package and delivery location" },
  { label: "GPS Coordinates", desc: "Exact location where delivery was confirmed" },
  { label: "Delivery Timestamp", desc: "Date and time of delivery confirmation" },
  { label: "Driver Identity", desc: "Which driver completed the delivery" },
  { label: "Barcode Scan Log", desc: "Package scan confirmation at delivery" },
];

const notificationTypes = [
  "Out for delivery SMS notification",
  "Estimated arrival time update",
  "Delivered confirmation with timestamp",
  "Photo delivery confirmation",
  "Failed delivery attempt alert",
  "Rescheduled delivery notification",
  "WhatsApp delivery updates",
  "Push notifications (iOS and Android)",
];

/* ── Feed data with realistic delays (ms) between lines ── */
interface FeedLine {
  status: string;
  msg: string;
  color: string;
  delayAfter: number;
}

/* Feed A: Accra / Tema corridor */
const podFeedLinesA: FeedLine[] = [
  { status: "ASSIGNED", msg: "PKG-2847 → Driver Kofi Mensah", color: "text-blue-400", delayAfter: 250 },
  { status: "ASSIGNED", msg: "PKG-2912 → Driver Ama Etta", color: "text-blue-400", delayAfter: 350 },
  { status: "ASSIGNED", msg: "PKG-3101 → Driver Sarah Ntone", color: "text-blue-400", delayAfter: 400 },
  { status: "PICKED_UP", msg: "PKG-2847 Barcode scan confirmed at Tema depot", color: "text-yellow-400", delayAfter: 1400 },
  { status: "PICKED_UP", msg: "PKG-2912 Barcode scan confirmed at Accra hub", color: "text-yellow-400", delayAfter: 900 },
  { status: "IN_TRANSIT", msg: "PKG-2847 GPS: 5.6037°N, 0.1870°W enroute", color: "text-foreground/50", delayAfter: 4200 },
  { status: "IN_TRANSIT", msg: "PKG-3101 GPS: 5.6500°N, 0.2000°W enroute", color: "text-foreground/50", delayAfter: 3100 },
  { status: "OUT_FOR_DEL", msg: "PKG-2912 Driver 0.8km from destination", color: "text-orange-400", delayAfter: 5800 },
  { status: "OUT_FOR_DEL", msg: "PKG-2847 Driver 1.2km from destination", color: "text-orange-400", delayAfter: 4600 },
  { status: "ARRIVED", msg: "PKG-2912 GPS lock: delivery location confirmed", color: "text-foreground/50", delayAfter: 3200 },
  { status: "SIG_CAPTURED", msg: "PKG-2912 Recipient: James Jones signed", color: "text-green-400", delayAfter: 450 },
  { status: "PHOTO_SAVED", msg: "PKG-2912 2 photos attached to record", color: "text-green-400", delayAfter: 280 },
  { status: "DELIVERED", msg: "PKG-2912 closed SMS sent to +233...", color: "text-green-400", delayAfter: 200 },
  { status: "ARRIVED", msg: "PKG-2847 GPS lock: delivery location confirmed", color: "text-foreground/50", delayAfter: 5100 },
  { status: "SIG_CAPTURED", msg: "PKG-2847 Recipient: Fatou Ndiaye signed", color: "text-green-400", delayAfter: 500 },
  { status: "PHOTO_SAVED", msg: "PKG-2847 3 photos attached to record", color: "text-green-400", delayAfter: 320 },
  { status: "DELIVERED", msg: "PKG-2847 closed SMS sent to +233...", color: "text-green-400", delayAfter: 200 },
  { status: "FAILED_ATTEMPT", msg: "PKG-3200 Recipient not available Driver Peter Njoh", color: "text-red-400", delayAfter: 8200 },
  { status: "ROUTE_UPDATED", msg: "PKG-3200 Rescheduled to 14:00 Driver Nji Che", color: "text-blue-400", delayAfter: 400 },
  { status: "COD_COLLECTED", msg: "PKG-3356 GHS 450.00 collected by Thomas Mueller", color: "text-green-400", delayAfter: 3800 },
];

/* Feed B: Lagos corridor */
const podFeedLinesB: FeedLine[] = [
  { status: "ASSIGNED", msg: "PKG-4021 → Driver Chioma Okafor", color: "text-blue-400", delayAfter: 200 },
  { status: "ASSIGNED", msg: "PKG-4156 → Driver John Smith", color: "text-blue-400", delayAfter: 300 },
  { status: "ASSIGNED", msg: "PKG-4288 → Driver Che Ntone", color: "text-blue-400", delayAfter: 450 },
  { status: "PICKED_UP", msg: "PKG-4021 Barcode scan confirmed at Lagos depot", color: "text-yellow-400", delayAfter: 1600 },
  { status: "PICKED_UP", msg: "PKG-4156 Barcode scan confirmed at Ikeja hub", color: "text-yellow-400", delayAfter: 1100 },
  { status: "PICKED_UP", msg: "PKG-4288 Barcode scan confirmed at Victoria Island", color: "text-yellow-400", delayAfter: 1300 },
  { status: "IN_TRANSIT", msg: "PKG-4021 GPS: 6.5244°N, 3.3792°E enroute", color: "text-foreground/50", delayAfter: 4500 },
  { status: "IN_TRANSIT", msg: "PKG-4156 GPS: 6.5100°N, 3.3500°E enroute", color: "text-foreground/50", delayAfter: 3300 },
  { status: "OUT_FOR_DEL", msg: "PKG-4021 Driver 1.5km from destination", color: "text-orange-400", delayAfter: 6200 },
  { status: "OUT_FOR_DEL", msg: "PKG-4156 Driver 0.4km from destination", color: "text-orange-400", delayAfter: 4100 },
  { status: "ARRIVED", msg: "PKG-4021 GPS lock: delivery location confirmed", color: "text-foreground/50", delayAfter: 2900 },
  { status: "SIG_CAPTURED", msg: "PKG-4021 Recipient: Paul Nji signed", color: "text-green-400", delayAfter: 550 },
  { status: "PHOTO_SAVED", msg: "PKG-4021 2 photos attached to record", color: "text-green-400", delayAfter: 300 },
  { status: "DELIVERED", msg: "PKG-4021 closed SMS sent to +234...", color: "text-green-400", delayAfter: 200 },
  { status: "ARRIVED", msg: "PKG-4156 GPS lock: delivery location confirmed", color: "text-foreground/50", delayAfter: 4800 },
  { status: "SIG_CAPTURED", msg: "PKG-4156 Recipient: Anna Schmidt signed", color: "text-green-400", delayAfter: 420 },
  { status: "PHOTO_SAVED", msg: "PKG-4156 1 photo attached to record", color: "text-green-400", delayAfter: 250 },
  { status: "DELIVERED", msg: "PKG-4156 closed WhatsApp confirmation sent", color: "text-green-400", delayAfter: 200 },
  { status: "FAILED_ATTEMPT", msg: "PKG-4288 COD refused by recipient Amadou Diallo", color: "text-red-400", delayAfter: 7500 },
  { status: "RETURNED", msg: "PKG-4288 Returned to depot Driver Che Ntone", color: "text-yellow-400", delayAfter: 1500 },
];

function PODTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [liveTime, setLiveTime] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const feed = cycle % 2 === 0 ? podFeedLinesA : podFeedLinesB;

  /* Real ticking wall-clock in the header */
  useEffect(() => {
    const update = () => {
      setLiveTime(
        new Date().toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  /* Build realistic timestamp for each line based on cumulative delays */
  const getTimestamp = (index: number) => {
    if (!startTime) return "--:--:--";
    let offset = 0;
    for (let i = 0; i < index; i++) offset += feed[i].delayAfter;
    const d = new Date(startTime + offset);
    return d.toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  /* Variable-delay feed: each line appears after its own realistic delay */
  useEffect(() => {
    if (!isInView) return;

    const now = Date.now();
    setStartTime(now);
    setVisibleLines(0);

    const timeouts: NodeJS.Timeout[] = [];
    let cumulative = 0;

    feed.forEach((line, i) => {
      if (i > 0) cumulative += feed[i - 1].delayAfter;
      const t = setTimeout(() => setVisibleLines(i + 1), cumulative);
      timeouts.push(t);
    });

    const totalDuration = cumulative + feed[feed.length - 1].delayAfter + 2500;
    const restart = setTimeout(() => setCycle((c) => c + 1), totalDuration);
    timeouts.push(restart);

    return () => timeouts.forEach(clearTimeout);
  }, [isInView, cycle, feed]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
      className="relative w-full border border-border-custom bg-[var(--console-bg)] overflow-hidden group aspect-[16/10] flex flex-col"
    >
      {/* Hover shimmer matches ConsoleFrame on other pages */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header bar */}
      <div className="px-4 py-2 bg-[var(--console-header)] border-b border-border-custom flex items-center justify-between text-[10px] text-foreground/60 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
          </div>
          <div className="flex items-center gap-1 pl-2 border-l border-border-custom">
            <Terminal className="h-3 w-3 text-blue-500" />
            <span className="tracking-wider">NTIGI // POD_FEED.sh</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-foreground/40 tabular-nums tracking-wider">
            {liveTime}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-500 tracking-wider">LIVE</span>
          </div>
        </div>
      </div>

      {/* Terminal body fills remaining height, clips overflow */}
      <div className="flex-1 p-4 font-mono text-[10px] leading-3 space-y-1 overflow-hidden">
        {feed.map((line, i) => (
          <motion.div
            key={`${cycle}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={
              i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
            }
            transition={{ duration: 0.15 }}
            className="flex items-start gap-2"
          >
            <span className="text-foreground/30 shrink-0 w-[52px] tabular-nums">
              {getTimestamp(i)}
            </span>
            <span className={`font-bold shrink-0 w-[100px] ${line.color}`}>
              {line.status}
            </span>
            <span className="text-foreground/60 truncate">{line.msg}</span>
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-blue-500 font-mono text-[10px]"
        >
          █
        </motion.span>
      </div>
    </motion.div>
  );
}

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

export default function ProofOfDelivery() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO text left, live POD terminal feed right */}
        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              <AnimatedSection className="space-y-5">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  Proof of<br /><span className="text-blue-500">Delivery</span>
                </h1>
                <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-md">
                  Capture signatures, photos, GPS coordinates, and delivery timestamps on every shipment. Protect your business from disputes and give customers real-time visibility from dispatch to doorstep.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                  <Button variant="outline" href="/platform" size="lg">Explore Platform</Button>
                </div>
              </AnimatedSection>

              <div className="hidden md:block">
                <PODTerminal />
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
                { display: "100%", label: "Delivery evidence" },
                { display: "Real-Time", label: "GPS tracking" },
                { display: "22+", label: "Cargo handling tags" },
                { display: "Mobile", label: "PWA driver app" },
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Complete Last-Mile Delivery Evidence</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every delivery backed by a full evidence record. Every customer kept informed. Every driver equipped with the tools they need.</p>
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
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">From Dispatch to Confirmed Delivery</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">A five-step process that keeps drivers, managers, and customers aligned from the moment a package leaves the warehouse.</p>
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

        {/* POD RECORD + NOTIFICATIONS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Shield className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">What Every POD Record Contains</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Each delivery confirmation generates a complete, tamper-proof evidence record stored against the shipment, retrievable any time by managers or clients.</p>
              <div className="space-y-3 pt-1">
                {podRecord.map((item, i) => (
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
                  <Bell className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Customer Notifications</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Customers stay informed at every step without your staff lifting a finger. All notifications are automated and sent via the customer's preferred channel.</p>
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
                  <h3 className="text-md font-bold uppercase tracking-wider">Driver Mobile App</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Drivers use NTIGI's mobile PWA on any Android or iOS device. No app store download required. Open the browser, log in, and start delivering. The app works offline and syncs when connectivity returns.</p>
                <div className="flex items-start gap-2 pt-1">
                  <Warning className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">Critical for drivers in areas with poor signal coverage. All POD data is captured offline and synced automatically.</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* DRIVER APP SCREEN */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Inside the Driver App</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">Every driver sees their queue, navigates stops, and submits POD from this screen on any smartphone, online or offline.</p>
            </AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
              className="relative w-full border border-border-custom bg-[var(--console-bg)] overflow-hidden group max-w-3xl"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="px-4 py-2 bg-[var(--console-header)] border-b border-border-custom flex items-center justify-between text-[10px] text-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
                  </div>
                  <div className="flex items-center gap-1 pl-2 border-l border-border-custom">
                    <DeviceMobile className="h-3 w-3 text-blue-500" />
                    <span className="tracking-wider">NTIGI // DRIVER_APP.sh</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  <span className="tracking-wider text-blue-500">LIVE</span>
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] bg-[var(--console-bg)] overflow-hidden">
                <Image
                  src="/shipmentlistHome.png"
                  alt="NTIGI driver shipment queue and delivery management"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/50 via-transparent to-transparent pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.6, ease: easeOutExpo }}
                  className="absolute bottom-3 right-3 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest"
                >
                  DRIVER // DELIVERY_QUEUE
                </motion.div>
              </div>
              <div className="px-4 py-3 bg-[var(--console-header)]/60 border-t border-border-custom flex items-center gap-2">
                <DeviceMobile className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span className="text-[11px] text-foreground/60 tracking-wider uppercase">Driver delivery queue scan, navigate, capture POD from any smartphone</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Who This Is Built For</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">

              <AnimatedSection delay={0} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/deliveryboy.jpg" alt="Local courier delivery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <Truck className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Local Courier Services</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Track 20 to 50 drivers daily with live GPS. Capture signatures and photos at every drop. Resolve customer disputes with timestamped evidence within minutes.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/personOffice.jpg" alt="E-commerce fulfilment delivery" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <UsersThree className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">E-commerce Fulfilment</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Give online shoppers the delivery experience they expect. Real-time tracking, automated notifications, and a photo confirmation they can access from their order page.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.24} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                <div className="relative h-44 overflow-hidden border-b border-border-custom">
                  <Image src="/image3.jpg" alt="Freight delivery network" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                      <ChartLine className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground">Freight Delivery Networks</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">Manage multi-stop delivery runs for bulk freight. Each stop gets its own POD record, keeping clients, agents, and operations teams aligned with zero paperwork.</p>
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
                { title: "Route Optimization", desc: "Plan and optimize delivery routes so drivers spend less time navigating and more time delivering.", href: "/solutions/route-optimization" },
                { title: "Fleet & Driver Management", desc: "Manage vehicle assignments, driver profiles, license tracking, and performance metrics across your fleet.", href: "/solutions/fleet-management" },
                { title: "Finance & Billing", desc: "Collect COD payments at delivery, reconcile collections per driver, and auto-generate delivery receipts.", href: "/solutions/finance" },
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

        {/* CTA */}
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
                Ready to Protect Every<br /><span className="text-blue-500">Delivery You Make?</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">See how NTIGI captures signatures, photos, and GPS evidence for every delivery in a live walkthrough with our team.</p>
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