"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimatedSection from "@/components/animations/AnimatedSection";
import FloatingShapes from "@/components/animations/FloatingShapes";
import { Button } from "@/components/ui/Button";
import { Laptop, DeviceMobile, Desktop, Database, CloudArrowUp, ArrowsClockwise, ShieldCheck, Lightning, LockKey, Gear } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function Platform() {
  const t = useTranslations("PlatformPage");

  const accessItems = [
    { icon: Laptop,       title: t("access.0.title"), desc: t("access.0.desc") },
    { icon: Desktop,      title: t("access.1.title"), desc: t("access.1.desc") },
    { icon: DeviceMobile, title: t("access.2.title"), desc: t("access.2.desc") },
  ];

  const offlineItems = [
    { icon: Database,       title: t("offline.0.title"), desc: t("offline.0.desc") },
    { icon: ArrowsClockwise,title: t("offline.1.title"), desc: t("offline.1.desc") },
    { icon: CloudArrowUp,   title: t("offline.2.title"), desc: t("offline.2.desc") },
    { icon: ShieldCheck,    title: t("offline.3.title"), desc: t("offline.3.desc") },
  ];

  const enterpriseItems = [
    { icon: Lightning, title: t("enterprise.0.title"), items: [t("enterprise.0.items.0"), t("enterprise.0.items.1"), t("enterprise.0.items.2"), t("enterprise.0.items.3")] },
    { icon: LockKey,   title: t("enterprise.1.title"), items: [t("enterprise.1.items.0"), t("enterprise.1.items.1"), t("enterprise.1.items.2"), t("enterprise.1.items.3")] },
    { icon: Gear,      title: t("enterprise.2.title"), items: [t("enterprise.2.items.0"), t("enterprise.2.items.1"), t("enterprise.2.items.2"), t("enterprise.2.items.3")] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO */}
        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <FloatingShapes />
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  {t("hero.h1_part1")}<br /><span className="text-blue-500">{t("hero.h1_part2")}</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  {t("hero.subtitle")}
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image src="/plat.jpg" alt="Logistics transport and shipping" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* ACCESS FROM ANYWHERE */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("accessSection.title")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
              {accessItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
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

        {/* WORKS WITHOUT INTERNET */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("offlineSection.title")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-border-custom">
              {offlineItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02]">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center mb-3">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE CAPABILITIES */}
        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("enterpriseSection.title")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {enterpriseItems.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] space-y-4">
                  <div className="flex items-center gap-2 text-blue-500">
                    <item.icon className="w-5 h-5" />
                    <h3 className="text-md font-bold uppercase tracking-wider">{item.title}</h3>
                  </div>
                  <ul className="space-y-2 list-disc list-outside pl-4 marker:text-blue-500">
                    {item.items.map((li, j) => (
                      <li key={j} className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{li}</li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 border-b border-border-custom overflow-hidden noise-overlay">
          <div className="absolute inset-0 -z-10">
            <Image src="/image3.jpg" alt="Logistics solutions background" fill className="object-cover object-center" />
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
