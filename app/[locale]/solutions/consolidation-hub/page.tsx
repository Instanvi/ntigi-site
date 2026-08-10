"use client";

import { useTranslations } from "next-intl";
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
  ArrowRight, Stack, Cube, Package, Barcode, ArrowsLeftRight,
  ClipboardText, CheckCircle, Boat, Warehouse, Truck,
  Buildings, ListChecks, ChartLine,
} from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;











function CountUp({ target, suffix }: { target: number | string; suffix: string }) {
  const numericTarget = typeof target === "string" ? parseFloat(target) || 0 : target;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = numericTarget / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);
  return <div ref={ref} className="text-2xl font-bold text-blue-500 font-sans">{count}{suffix}</div>;
}

export default function ConsolidationHub() {
  const t = useTranslations("Solutions.consolidation-hub");
  const capabilities = [
    {
      icon: Stack,
      title: t("capabilities.0.title"),
      desc: t("capabilities.0.desc"),
    },
    {
      icon: Cube,
      title: t("capabilities.1.title"),
      desc: t("capabilities.1.desc"),
    },
    {
      icon: ArrowsLeftRight,
      title: t("capabilities.2.title"),
      desc: t("capabilities.2.desc"),
    },
    {
      icon: Barcode,
      title: t("capabilities.3.title"),
      desc: t("capabilities.3.desc"),
    },
    {
      icon: ClipboardText,
      title: t("capabilities.4.title"),
      desc: t("capabilities.4.desc"),
    },
    {
      icon: Boat,
      title: t("capabilities.5.title"),
      desc: t("capabilities.5.desc"),
    },
    {
      icon: Warehouse,
      title: t("capabilities.6.title"),
      desc: t("capabilities.6.desc"),
    },
    {
      icon: ChartLine,
      title: t("capabilities.7.title"),
      desc: t("capabilities.7.desc"),
    },
  ];
  const workflow = [
    {
      step: "01",
      title: t("workflow.0.title"),
      desc: t("workflow.0.desc"),
    },
    {
      step: "02",
      title: t("workflow.1.title"),
      desc: t("workflow.1.desc"),
    },
    {
      step: "03",
      title: t("workflow.2.title"),
      desc: t("workflow.2.desc"),
    },
    {
      step: "04",
      title: t("workflow.3.title"),
      desc: t("workflow.3.desc"),
    },
    {
      step: "05",
      title: t("workflow.4.title"),
      desc: t("workflow.4.desc"),
    },
  ];
  const manifestFeatures = [
    t("manifestFeatures.0"),
    t("manifestFeatures.1"),
    t("manifestFeatures.2"),
    t("manifestFeatures.3"),
    t("manifestFeatures.4"),
    t("manifestFeatures.5"),
    t("manifestFeatures.6"),
    t("manifestFeatures.7"),
  ];
  const palletRecord = [
    {
      label: t("palletRecord.0.label"),
      desc: t("palletRecord.0.desc"),
    },
    {
      label: t("palletRecord.1.label"),
      desc: t("palletRecord.1.desc"),
    },
    {
      label: t("palletRecord.2.label"),
      desc: t("palletRecord.2.desc"),
    },
    {
      label: t("palletRecord.3.label"),
      desc: t("palletRecord.3.desc"),
    },
    {
      label: t("palletRecord.4.label"),
      desc: t("palletRecord.4.desc"),
    },
    {
      label: t("palletRecord.5.label"),
      desc: t("palletRecord.5.desc"),
    },
  ];
  const stats = [
    {
      value: "100",
      suffix: "K+",
      label: t("stats.0.label"),
    },
    {
      value: "22",
      suffix: "+",
      label: t("stats.1.label"),
    },
    {
      value: "30",
      suffix: "+",
      label: t("stats.2.label"),
    },
    {
      value: "100",
      suffix: "%",
      label: t("stats.3.label"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO ship.jpeg full background, text overlaid bottom-left. No badge. */}
        <section className="relative border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />
          <div className="relative min-h-[420px] flex items-end">
            <Image src="/ship.jpeg" alt="" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-transparent" />
            <div className="relative z-10 w-full">
              <div className="mx-auto max-w-7xl px-6 md:px-8 py-10">
                <AnimatedSection className="max-w-xl space-y-4">
                  <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                    {t("jsx.h1_0_part1")}<br /><span className="text-blue-500">{t("jsx.h1_0_part2")}</span>
                  </h1>
                  <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                    {t("jsx.p_0")}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Button variant="primary" href="/demo" size="lg">{t("jsx.Button_0")}</Button>
                    <Button variant="outline" href="/platform" size="lg">{t("jsx.Button_1")}</Button>
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
              {stats.map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES no badge */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_0")}</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">{t("jsx.p_1")}</p>
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

        {/* WORKFLOW no badge */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_1")}</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">{t("jsx.p_2")}</p>
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

        {/* MANIFEST + PALLET DETAIL CARDS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <ListChecks className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">{t("jsx.h3_0")}</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("jsx.p_3")}</p>
              <div className="space-y-2 pt-2">
                {manifestFeatures.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Stack className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">{t("jsx.h3_1")}</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("jsx.p_4")}</p>
              <div className="space-y-3 pt-1">
                {palletRecord.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                    <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-0.5">{item.label}</div>
                    <div className="text-xs text-foreground/60 font-sans font-medium">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PROOF flat image pair, no console header bar */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_2")}</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">{t("jsx.p_5")}</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { src: "/shipmentlistHome.png", icon: Package, caption: t("jsx.caption_0") },
                { src: "/ntigidashboard.png", icon: ChartLine, caption: t("jsx.caption_1") },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: easeOutExpo }}
                  className="border border-border-custom overflow-hidden group"
                >
                  <div className="relative w-full aspect-[4/3] bg-[var(--console-bg)]">
                    <Image src={item.src} alt={item.caption} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="px-4 py-3 bg-[var(--console-header)] border-t border-border-custom flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="text-[11px] text-foreground/60 tracking-wider uppercase">{item.caption}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES real photo headers, no badge */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_3")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { img: "/image1.jpg", icon: Boat, title: t("jsx.h4_0"), desc: t("jsx.p_6") },
                { img: "/image2.jpg", icon: Buildings, title: t("jsx.h4_1"), desc: t("jsx.p_7") },
                { img: "/image3.jpg", icon: Truck, title: t("jsx.h4_2"), desc: t("jsx.p_8") },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="border-r border-b border-border-custom overflow-hidden hover:bg-primary/[0.02] transition-all group">
                  <div className="relative h-44 overflow-hidden border-b border-border-custom">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-header)]/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="p-1.5 w-7 h-7 rounded-none bg-[var(--console-bg)]/80 border border-blue-500/40 text-blue-500 flex items-center justify-center">
                        <item.icon className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_4")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: t("jsx.related_title_0"), desc: t("jsx.related_desc_0"), href: "/solutions/warehouse-management" },
                { title: t("jsx.related_title_1"), desc: t("jsx.related_desc_1"), href: "/solutions/inventory-control" },
                { title: t("jsx.related_title_2"), desc: t("jsx.related_desc_2"), href: "/solutions/customs-compliance" },
              ].map((sol, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Link href={sol.href} className="block p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/30 transition-all group h-full">
                    <h4 className="text-md font-bold uppercase tracking-wider text-foreground group-hover:text-blue-500 transition-colors mb-2">{sol.title}</h4>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mb-4">{sol.desc}</p>
                    <div className="flex items-center gap-1 text-blue-500 text-xs font-bold uppercase tracking-wider">
                      <span>{t("jsx.learn_more")}</span><ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA animated gradient, no static grid */}
        <section className="py-20 bg-[var(--console-header)] border-b border-border-custom relative overflow-hidden noise-overlay">
          <motion.div animate={{ opacity: [0.04, 0.1, 0.04], scale: [1, 1.08, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 blur-3xl -z-10 pointer-events-none" />
          <motion.div animate={{ opacity: [0.03, 0.07, 0.03], scale: [1.05, 1, 1.05] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                {t("jsx.h2_5_part1")}<br /><span className="text-blue-500">{t("jsx.h2_5_part2")}</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("jsx.p_9")}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">{t("jsx.Button_0")}</Button>
                <Button variant="outline" href="/contact" size="lg">{t("jsx.Button_3")}</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
