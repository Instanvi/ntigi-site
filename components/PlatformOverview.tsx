"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Laptop, DeviceMobile, HardDrive, WifiHigh } from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function PlatformOverview() {
  const t = useTranslations("Platform");

  const featureList = [
    { icon: Laptop,       title: t("webApp.title"),    desc: t("webApp.desc")    },
    { icon: DeviceMobile, title: t("mobileApp.title"), desc: t("mobileApp.desc") },
  ];

  const offlineItems = [
    t("offlineItems.item1"),
    t("offlineItems.item2"),
    t("offlineItems.item3"),
  ];

  return (
    <section className="w-full py-20 bg-background border-t border-border-custom">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="space-y-5"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight uppercase">
              {t("section1Title1")}
              <br />
              <span className="text-[#3b82f6]">{t("section1Title2")}</span>
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
              {t("section1Desc")}
            </p>

            <div className="space-y-4 pt-2">
              {featureList.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: easeOutExpo }}
                  className="flex items-start gap-3 p-3 bg-primary/[0.01] border border-border-custom rounded-none"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-none bg-background border border-border-custom flex items-center justify-center text-blue-500">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{f.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="outline" size="lg" href="/platform" className="text-sm uppercase tracking-wider">
                {t("explorePlatform")}
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-border-custom shadow-glow bg-[var(--console-bg)]">
              <Image src="/ship.jpeg" alt="NTIGI Platform Overview" fill className="object-cover opacity-90 dark:opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 to-transparent" />
              <div className="absolute bottom-3 left-3 bg-background border border-border-custom px-2.5 py-1 text-[9px] text-[#3b82f6] rounded-none font-bold">
                {t("console.vesselMonitor")}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="order-2 md:order-1 relative"
          >
            <div className="relative aspect-[4/3] rounded-none overflow-hidden border border-border-custom bg-[var(--console-bg)] p-4 flex flex-col justify-between shadow-glow">
              <div className="flex items-center justify-between border-b border-border-custom pb-2 text-[9px] text-foreground/60">
                <div className="flex items-center gap-1.5 font-bold">
                  <HardDrive className="h-3.5 w-3.5 text-blue-500" />
                  <span>{t("console.storageSync")}</span>
                </div>
                <span className="text-green-600 dark:text-green-400 uppercase tracking-widest font-bold">{t("console.offlineActive")}</span>
              </div>

              <div className="my-6 text-center space-y-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-none bg-[var(--console-header)] border border-border-custom text-blue-500"
                >
                  <WifiHigh className="w-7 h-7" />
                </motion.div>
                <div>
                  <div className="text-4xl font-extrabold text-foreground tracking-tight">{t("console.indexedDb")}</div>
                  <div className="text-[9px] font-bold text-foreground/45 uppercase tracking-widest mt-1">{t("console.readyForWrites")}</div>
                </div>
              </div>

              <div className="border-t border-border-custom pt-2 flex items-center justify-between text-[8px] text-foreground/50">
                <span>{t("console.queueSize")}</span>
                <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  {t("console.syncStandby")}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="order-1 md:order-2 space-y-5"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight uppercase">
              {t("section2Title1")}
              <br />
              <span className="text-[#3b82f6]">{t("section2Title2")}</span>
            </h2>
            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
              {t("section2Desc")}
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-foreground/80">
              {offlineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: easeOutExpo }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#3b82f6]">&gt;&gt;</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="outline" size="lg" href="/platform" className="text-sm uppercase tracking-wider">
                {t("learnMore")}
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
