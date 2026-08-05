"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 100, suffix: "K+", label: "Daily Shipments" },
  { value: 100, suffix: "%", label: "Offline Capable" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-xl font-extrabold text-blue-500 font-sans">
      {count}
      {suffix}
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="w-full py-20 bg-background border-t border-border-custom text-foreground relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-radial-[circle_at_center,var(--primary-glow),transparent_70%]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeOutExpo }}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-border-custom bg-primary/5 text-blue-500 text-[10px] uppercase tracking-wider rounded-none"
          >
            GET STARTED
          </motion.span>

          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight uppercase">
            Ready to Transform Your
            <br />
            <span className="text-[#3b82f6]">Logistics Operations?</span>
          </h2>

          <p className="text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Join leading freight forwarders and shipping companies using NTIGI to centralize their databases and scale operations.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button variant="secondary" size="lg" href="/demo" className="px-6 py-3 text-xs">
              <CalendarBlank className="mr-1.5 h-4 w-4" />
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" href="/company" className="px-6 py-3 text-xs">
              Contact Sales
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: easeOutExpo }}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border-custom mt-10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-primary/5 border border-border-custom rounded-none text-center">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <div className="text-[9px] font-bold text-foreground/50 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}