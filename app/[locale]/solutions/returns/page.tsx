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
  ArrowRight, ArrowsCounterClockwise, Package, Receipt, Bell,
  MapPin, CheckCircle, Camera, CurrencyDollar, ClipboardText,
  Barcode, ChartLine, ShoppingBag, Truck, Buildings, Warning, Terminal,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

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

function ConsoleFrame({ label, status, children, delay = 0 }: {
  label: string; status?: string; children: React.ReactNode; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: easeOutExpo }}
      className="relative w-full border border-border-custom bg-[var(--console-bg)] overflow-hidden group"
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
            <Terminal className="h-3 w-3 text-blue-500" />
            <span className="tracking-wider">{label}</span>
          </div>
        </div>
        {status && (
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <span className="tracking-wider text-blue-500">{status}</span>
          </div>
        )}
      </div>
      {children}
    </motion.div>
  );
}

export default function Returns() {
  const t = useTranslations("Solutions.returns");

  const capabilities = [
    { icon: ArrowsCounterClockwise, title: t("capabilities.0.title"), desc: t("capabilities.0.desc") },
    { icon: Package, title: t("capabilities.1.title"), desc: t("capabilities.1.desc") },
    { icon: MapPin, title: t("capabilities.2.title"), desc: t("capabilities.2.desc") },
    { icon: Barcode, title: t("capabilities.3.title"), desc: t("capabilities.3.desc") },
    { icon: Camera, title: t("capabilities.4.title"), desc: t("capabilities.4.desc") },
    { icon: Receipt, title: t("capabilities.5.title"), desc: t("capabilities.5.desc") },
    { icon: Bell, title: t("capabilities.6.title"), desc: t("capabilities.6.desc") },
    { icon: ChartLine, title: t("capabilities.7.title"), desc: t("capabilities.7.desc") },
  ];

  const workflow = [
    { step: "01", title: t("workflow.0.title"), desc: t("workflow.0.desc") },
    { step: "02", title: t("workflow.1.title"), desc: t("workflow.1.desc") },
    { step: "03", title: t("workflow.2.title"), desc: t("workflow.2.desc") },
    { step: "04", title: t("workflow.3.title"), desc: t("workflow.3.desc") },
    { step: "05", title: t("workflow.4.title"), desc: t("workflow.4.desc") },
  ];

  const returnRecord = [
    { label: t("returnRecord.0.label"), desc: t("returnRecord.0.desc") },
    { label: t("returnRecord.1.label"), desc: t("returnRecord.1.desc") },
    { label: t("returnRecord.2.label"), desc: t("returnRecord.2.desc") },
    { label: t("returnRecord.3.label"), desc: t("returnRecord.3.desc") },
    { label: t("returnRecord.4.label"), desc: t("returnRecord.4.desc") },
    { label: t("returnRecord.5.label"), desc: t("returnRecord.5.desc") },
    { label: t("returnRecord.6.label"), desc: t("returnRecord.6.desc") },
    { label: t("returnRecord.7.label"), desc: t("returnRecord.7.desc") },
  ];

  const returnTypes = [
    { name: t("returnTypes.0.name"), desc: t("returnTypes.0.desc") },
    { name: t("returnTypes.1.name"), desc: t("returnTypes.1.desc") },
    { name: t("returnTypes.2.name"), desc: t("returnTypes.2.desc") },
    { name: t("returnTypes.3.name"), desc: t("returnTypes.3.desc") },
    { name: t("returnTypes.4.name"), desc: t("returnTypes.4.desc") },
    { name: t("returnTypes.5.name"), desc: t("returnTypes.5.desc") },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO 2-col: text left, ship.jpeg right inside console frame */}
        <section className="relative border-b border-border-custom overflow-hidden noise-overlay">
          <FloatingShapes />
          <div className="grid md:grid-cols-2 min-h-[420px]">

            <div className="relative hidden md:block">
              <Image src="/ship.jpeg" alt="Returns logistics at port" fill className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--console-header)]/80" />
              <div className="absolute inset-0 bg-[var(--console-header)]/20" />
            </div>

            <div className="relative bg-[var(--console-header)] py-20 px-8 md:px-12 flex items-center z-10">
              <AnimatedSection className="space-y-5 max-w-lg">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  {t("jsx.h1_0_part1")}<br /><span className="text-blue-500">{t("jsx.h1_0_part2")}</span>
                </h1>
                <p className="text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  {t("jsx.p_0")}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">{t("jsx.Button_0")}</Button>
                  <Button variant="outline" href="/platform" size="lg">{t("jsx.Button_1")}</Button>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>

        {/* STATS BAR */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t-2 border-t-blue-500/20 border-border-custom">
              {[
                { display: t("jsx.stat_display_0"), label: t("jsx.stat_label_0") },
                { display: t("jsx.stat_display_1"), label: t("jsx.stat_label_1") },
                { display: t("jsx.stat_display_2"), label: t("jsx.stat_label_2") },
                { display: t("jsx.stat_display_3"), label: t("jsx.stat_label_3") },
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

        {/* WORKFLOW */}
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
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 200 }}
                    className="w-8 h-8 rounded-full bg-[var(--console-bg)] border border-blue-500/30 group-hover:border-blue-500/60 transition-colors flex items-center justify-center mb-3">
                    <span className="text-[10px] font-bold text-blue-500">{step.step}</span>
                  </motion.div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{step.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* RETURN RECORD + TYPES + FINANCIALS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <ClipboardText className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">{t("jsx.h3_0")}</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("jsx.p_3")}</p>
              <div className="space-y-3 pt-1">
                {returnRecord.map((item, i) => (
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
                  <ArrowsCounterClockwise className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">{t("jsx.h3_1")}</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("jsx.p_4")}</p>
                <div className="space-y-3 pt-1">
                  {returnTypes.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground mb-0.5">{item.name}</div>
                      <div className="text-xs text-foreground/60 font-sans font-medium">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-500">
                  <CurrencyDollar className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">{t("jsx.h3_2")}</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("jsx.p_5")}</p>
                <div className="flex items-start gap-2 pt-1">
                  <Warning className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/60 font-sans font-medium">{t("jsx.p_5_note")}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* PROOF console frame with app screenshot */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_2")}</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">{t("jsx.p_6")}</p>
            </AnimatedSection>
            <ConsoleFrame label={t("jsx.terminal_label_0")} status="LIVE" delay={0.1}>
              <div className="relative w-full aspect-[21/9] bg-[var(--console-bg)] overflow-hidden">
                <Image src="/shipmentlistHome.png" alt="NTIGI returns management screen" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/50 via-transparent to-transparent pointer-events-none" />
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.6, ease: easeOutExpo }}
                  className="absolute bottom-3 right-4 bg-black/70 border border-white/10 px-2 py-1 text-[8px] text-white/80 tracking-widest">
                  RETURNS // LIFECYCLE_VIEW
                </motion.div>
              </div>
              <div className="px-4 py-3 bg-[var(--console-header)]/60 border-t border-border-custom flex items-center gap-2">
                <ArrowsCounterClockwise className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span className="text-[11px] text-foreground/60 tracking-wider uppercase">{t("jsx.terminal_desc_0")}</span>
              </div>
            </ConsoleFrame>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_3")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { img: "/image1.jpg", icon: ShoppingBag, title: t("jsx.h4_0"), desc: t("jsx.p_7") },
                { img: "/image2.jpg", icon: Truck, title: t("jsx.h4_1"), desc: t("jsx.p_8") },
                { img: "/image3.jpg", icon: Buildings, title: t("jsx.h4_2"), desc: t("jsx.p_9") },
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

        {/* RELATED SOLUTIONS */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("jsx.h2_4")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {[
                { title: t("jsx.related_title_0"), desc: t("jsx.related_desc_0"), href: "/solutions/customer-portal" },
                { title: t("jsx.related_title_1"), desc: t("jsx.related_desc_1"), href: "/solutions/proof-of-delivery" },
                { title: t("jsx.related_title_2"), desc: t("jsx.related_desc_2"), href: "/solutions/finance" },
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

        {/* CTA */}
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
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("jsx.p_10")}</p>
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