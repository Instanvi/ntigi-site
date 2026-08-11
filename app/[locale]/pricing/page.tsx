"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight, Package, Scales, MapPin, Ruler, Tag, Clock,
  GasPump, CurrencyDollar, CheckCircle, ChartLine,
  UsersThree, Buildings, Globe, ArrowsLeftRight, Receipt,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

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

export default function Pricing() {
  const t = useTranslations("Pricing");

  const pricingFactors = [
    { icon: Scales,        title: t("factors.0.title"), desc: t("factors.0.desc"), example: t("factors.0.example") },
    { icon: Ruler,         title: t("factors.1.title"), desc: t("factors.1.desc"), example: t("factors.1.example") },
    { icon: MapPin,        title: t("factors.2.title"), desc: t("factors.2.desc"), example: t("factors.2.example") },
    { icon: Package,       title: t("factors.3.title"), desc: t("factors.3.desc"), example: t("factors.3.example") },
    { icon: Clock,         title: t("factors.4.title"), desc: t("factors.4.desc"), example: t("factors.4.example") },
    { icon: GasPump,       title: t("factors.5.title"), desc: t("factors.5.desc"), example: t("factors.5.example") },
    { icon: Tag,           title: t("factors.6.title"), desc: t("factors.6.desc"), example: t("factors.6.example") },
    { icon: CurrencyDollar,title: t("factors.7.title"), desc: t("factors.7.desc"), example: t("factors.7.example") },
  ];

  const howItWorks = [
    { step: "01", title: t("howItWorks.0.title"), desc: t("howItWorks.0.desc") },
    { step: "02", title: t("howItWorks.1.title"), desc: t("howItWorks.1.desc") },
    { step: "03", title: t("howItWorks.2.title"), desc: t("howItWorks.2.desc") },
    { step: "04", title: t("howItWorks.3.title"), desc: t("howItWorks.3.desc") },
    { step: "05", title: t("howItWorks.4.title"), desc: t("howItWorks.4.desc") },
  ];

  const clientContracts = [
    { label: t("clientContracts.0.label"), desc: t("clientContracts.0.desc") },
    { label: t("clientContracts.1.label"), desc: t("clientContracts.1.desc") },
    { label: t("clientContracts.2.label"), desc: t("clientContracts.2.desc") },
    { label: t("clientContracts.3.label"), desc: t("clientContracts.3.desc") },
    { label: t("clientContracts.4.label"), desc: t("clientContracts.4.desc") },
    { label: t("clientContracts.5.label"), desc: t("clientContracts.5.desc") },
  ];

  const quotationFeatures = [
    t("quotationFeatures.0"),
    t("quotationFeatures.1"),
    t("quotationFeatures.2"),
    t("quotationFeatures.3"),
    t("quotationFeatures.4"),
    t("quotationFeatures.5"),
  ];

  const paymentMethods = [
    { name: t("paymentMethods.0.name"), detail: t("paymentMethods.0.detail") },
    { name: t("paymentMethods.1.name"), detail: t("paymentMethods.1.detail") },
    { name: t("paymentMethods.2.name"), detail: t("paymentMethods.2.detail") },
    { name: t("paymentMethods.3.name"), detail: t("paymentMethods.3.detail") },
    { name: t("paymentMethods.4.name"), detail: t("paymentMethods.4.detail") },
    { name: t("paymentMethods.5.name"), detail: t("paymentMethods.5.detail") },
  ];

  const platformItems = [
    t("platformItems.0"),
    t("platformItems.1"),
    t("platformItems.2"),
    t("platformItems.3"),
    t("platformItems.4"),
    t("platformItems.5"),
  ];

  const businessModels = [
    { icon: Globe,      title: t("businessModels.0.title"), desc: t("businessModels.0.desc") },
    { icon: Buildings,  title: t("businessModels.1.title"), desc: t("businessModels.1.desc") },
    { icon: ChartLine,  title: t("businessModels.2.title"), desc: t("businessModels.2.desc") },
  ];

  const related = [
    { title: t("related.0.title"), desc: t("related.0.desc"), href: "/solutions/finance" },
    { title: t("related.1.title"), desc: t("related.1.desc"), href: "/solutions/route-optimization" },
    { title: t("related.2.title"), desc: t("related.2.desc"), href: "/solutions/international-forwarding" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO */}
        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  {t("hero.h1_part1")}<br /><span className="text-blue-500">{t("hero.h1_part2")}</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="primary" href="/demo" size="lg">{t("hero.demoButton")}</Button>
                  <Button variant="outline" href="/contact" size="lg">{t("hero.salesButton")}</Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image src="/payment.jpg" alt="Logistics transport and shipping" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* STATS BAR */}
        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border-custom">
              {[
                { display: t("stats.0.display"), label: t("stats.0.label") },
                { display: t("stats.1.display"), label: t("stats.1.label") },
                { display: t("stats.2.display"), label: t("stats.2.label") },
                { display: t("stats.3.display"), label: t("stats.3.label") },
              ].map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom text-center">
                  <div className="text-2xl font-bold text-blue-500 font-sans">{stat.display}</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING FACTORS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("factorsSection.title")}</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">{t("factorsSection.subtitle")}</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom bg-primary/[0.01]">
              {pricingFactors.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.08} direction="up" className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                  <div className="border-t border-border-custom pt-2">
                    <p className="text-xs text-blue-500 font-sans font-medium italic">{item.example}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("howItWorksSection.title")}</h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mt-3">{t("howItWorksSection.subtitle")}</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-5 border-t border-l border-border-custom relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -z-10" />
              {howItWorks.map((step, index) => (
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

        {/* CLIENT PRICING + QUOTATION + PAYMENTS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <UsersThree className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">{t("clientPricingSection.title")}</h3>
              </div>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("clientPricingSection.subtitle")}</p>
              <div className="space-y-3 pt-1">
                {clientContracts.map((item, i) => (
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
                  <Receipt className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">{t("quotationSection.title")}</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("quotationSection.subtitle")}</p>
                <div className="space-y-2 pt-1">
                  {quotationFeatures.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--console-bg)] border border-border-custom rounded-none p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <ArrowsLeftRight className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">{t("paymentsSection.title")}</h3>
                </div>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("paymentsSection.subtitle")}</p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {paymentMethods.map((method, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }} className="border border-border-custom p-3 hover:border-blue-500/40 transition-colors">
                      <div className="text-sm font-bold uppercase tracking-wider text-foreground">{method.name}</div>
                      <div className="text-sm text-foreground/60 font-sans font-medium mt-0.5">{method.detail}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BUSINESS MODELS */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("businessModelsSection.title")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {businessModels.map((item, i) => (
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

        {/* CUSTOM PRICING PANEL */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="bg-[var(--console-bg)] border border-border-custom rounded-none p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <div className="space-y-4 flex flex-col justify-center">
                <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("customPricingPanel.title")}</h2>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("customPricingPanel.subtitle")}</p>
                <div className="space-y-2 pt-1">
                  {platformItems.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06 }} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative border border-border-custom overflow-hidden group min-h-[300px]">
                <Image src="/image3.jpg" alt="Logistics warehouse operations" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--console-bg)]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <div className="border border-border-custom p-6 space-y-3">
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{t("customPricingPanel.quoteTitle")}</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("customPricingPanel.quoteDesc")}</p>
                  <Button variant="primary" href="/demo" size="lg" className="w-full">{t("customPricingPanel.demoButton")}</Button>
                </div>
                <div className="border border-border-custom p-6 space-y-3">
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{t("customPricingPanel.salesTitle")}</h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("customPricingPanel.salesDesc")}</p>
                  <Button variant="outline" href="/contact" size="lg" className="w-full">{t("customPricingPanel.salesButton")}</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-10">
              <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("relatedSection.title")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {related.map((sol, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Link href={sol.href} className="block p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/30 transition-all group h-full">
                    <h4 className="text-md font-bold uppercase tracking-wider text-foreground group-hover:text-blue-500 transition-colors mb-2">{sol.title}</h4>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium mb-4">{sol.desc}</p>
                    <div className="flex items-center gap-1 text-blue-500 text-xs font-bold uppercase tracking-wider">
                      <span>{t("learnMore")}</span><ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 border-b border-border-custom overflow-hidden noise-overlay">
          <div className="absolute inset-0 -z-10">
            <Image src="/image1.jpg" alt="Logistics solutions background" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-2xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-tight leading-none">
                {t("cta.h2_part1")}<br /><span className="text-blue-500">{t("cta.h2_part2")}</span>
              </h2>
              <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("cta.subtitle")}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary" href="/demo" size="lg">{t("cta.demoButton")}</Button>
                <Button variant="outline" href="/contact" size="lg">{t("cta.salesButton")}</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-20" />
        </section>

      </main>
      <Footer />
    </div>
  );
}
