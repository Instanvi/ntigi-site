"use client";

import { motion } from "framer-motion";
import {
  Anchor, Package, Users, MapTrifold, Warehouse,
  CurrencyDollar, ChartLine, ShieldCheck,
  WifiHigh, Globe, Clock, CheckCircle
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const features = [
  { icon: Anchor, title: "Manifest & Voyage Management", description: "Complete control over maritime cargo manifests, voyage planning, and vessel tracking with real-time updates." },
  { icon: Package, title: "Shipment Management", description: "End-to-end shipment tracking from origin to destination with automated status updates and notifications." },
  { icon: Users, title: "Client CRM Integration", description: "Comprehensive CRM with granular permission levels, customer self-service, and contract tiering." },
  { icon: MapTrifold, title: "Route Optimization", description: "Intelligent corridor planning and multi-leg tracking for optimal transit speeds and route costs." },
  { icon: Warehouse, title: "Warehouse Operations", description: "Integrated storage capacity tracking, shelf allocations, and receipt/dispatch documentation." },
  { icon: CurrencyDollar, title: "Finance & Billing", description: "Automated billing templates, split payment operations, and multi-currency exchange tracking." },
  { icon: ChartLine, title: "Real-Time Analytics", description: "Consolidated operational performance reporting and visual analytics grids." },
  { icon: ShieldCheck, title: "Enterprise Compliance", description: "Role-based visibility, complete activity trails, and secure JWT/OTP validations." },
  { icon: WifiHigh, title: "Offline-First Syncing", description: "Input and query data without internet connections. Auto-sync updates dynamically when online." },
  { icon: Globe, title: "Seamless Cloud Access", description: "Secure browser-based console and Progressive Web Application (PWA) on any device." },
  { icon: Clock, title: "Continuous Operation", description: "Browser-level caching ensures cargo management operations never stall due to network downtime." },
  { icon: CheckCircle, title: "Customs & Compliances", description: "Automated commercial invoicing, HS code searches, and export rule screening." },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="w-full py-20 bg-background border-t border-border-custom">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="text-left space-y-3 mb-12 max-w-3xl"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight uppercase">
            One Database.
            <br />
            <span className="text-[#3b82f6]">Unified Logistics Control.</span>
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Manage every step of global forwardings, client transactions, and warehouse transfers on a secure, offline-first ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const indexStr = (index + 1).toString().padStart(2, "0");
            return (
              <motion.div
                key={index}
                variants={card}
                className="group p-6 bg-primary/[0.01] border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between min-h-[200px] relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-none bg-background border border-border-custom text-blue-500 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-bold text-foreground/40 group-hover:text-blue-500 transition-colors">
                      {indexStr}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 group-hover:text-blue-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}