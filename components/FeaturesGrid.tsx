"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Anchor, Package, Users, MapTrifold, Warehouse,
  CurrencyDollar, ChartLine, ShieldCheck,
  WifiHigh, Globe, Clock, CheckCircle
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

// Icon order must match the message keys
const featureIcons = [
  Anchor, Package, Users, MapTrifold, Warehouse,
  CurrencyDollar, ChartLine, ShieldCheck,
  WifiHigh, Globe, Clock, CheckCircle,
];

const featureKeys = [
  "manifest", "shipment", "crm", "route", "warehouse",
  "finance", "analytics", "compliance", "offline", "cloud",
  "continuous", "customs",
] as const;

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
  const t = useTranslations("Features");

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
            {t("sectionTitle1")}
            <br />
            <span className="text-[#3b82f6]">{t("sectionTitle2")}</span>
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {t("sectionDesc")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom"
        >
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[index];
            const indexStr = (index + 1).toString().padStart(2, "0");
            return (
              <motion.div
                key={key}
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
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                    {t(`items.${key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
