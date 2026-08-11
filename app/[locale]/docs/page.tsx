"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import { Book, Question } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function Resources() {
  const t = useTranslations("Docs");

  const tutorials = [
    { title: t("tutorials.0.title"), description: t("tutorials.0.description"), duration: t("tutorials.0.duration") },
    { title: t("tutorials.1.title"), description: t("tutorials.1.description"), duration: t("tutorials.1.duration") },
    { title: t("tutorials.2.title"), description: t("tutorials.2.description"), duration: t("tutorials.2.duration") },
    { title: t("tutorials.3.title"), description: t("tutorials.3.description"), duration: t("tutorials.3.duration") },
  ];

  const documentationSections = [
    {
      title: t("docSections.0.title"),
      items: [
        t("docSections.0.items.0"),
        t("docSections.0.items.1"),
        t("docSections.0.items.2"),
        t("docSections.0.items.3"),
      ],
    },
    {
      title: t("docSections.1.title"),
      items: [
        t("docSections.1.items.0"),
        t("docSections.1.items.1"),
        t("docSections.1.items.2"),
        t("docSections.1.items.3"),
      ],
    },
    {
      title: t("docSections.2.title"),
      items: [
        t("docSections.2.items.0"),
        t("docSections.2.items.1"),
        t("docSections.2.items.2"),
        t("docSections.2.items.3"),
      ],
    },
    {
      title: t("docSections.3.title"),
      items: [
        t("docSections.3.items.0"),
        t("docSections.3.items.1"),
        t("docSections.3.items.2"),
        t("docSections.3.items.3"),
      ],
    },
  ];

  const faqs = [
    { q: t("faqs.0.q"), a: t("faqs.0.a") },
    { q: t("faqs.1.q"), a: t("faqs.1.a") },
    { q: t("faqs.2.q"), a: t("faqs.2.a") },
    { q: t("faqs.3.q"), a: t("faqs.3.a") },
    { q: t("faqs.4.q"), a: t("faqs.4.a") },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
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
            <Image
              src="/image3.jpg"
              alt="Documentation and resources"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("videosSection.title")}</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">{t("videosSection.subtitle")}</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tutorials.map((tutorial, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="bg-[var(--console-bg)] border border-border-custom rounded-none overflow-hidden hover:border-blue-500/50 transition-colors">
                  <div className="relative aspect-video bg-black">
                    <video controls className="w-full h-full" preload="metadata">
                      <source src="/hero.mp4" type="video/mp4" />
                      {t("videoFallback")}
                    </video>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-none">
                      <span className="text-xs text-white font-bold">{tutorial.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-2">{tutorial.title}</h3>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{tutorial.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("librarySection.title")}</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">{t("librarySection.subtitle")}</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-custom">
              {documentationSections.map((section, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.08} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <Book className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("faqSection.title")}</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">{t("faqSection.subtitle")}</p>
            </AnimatedSection>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08, duration: 0.5 }} className="p-6 bg-[var(--console-bg)] border border-border-custom rounded-none hover:border-blue-500/50 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <Question className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <h4 className="text-base font-bold uppercase tracking-wider text-foreground">{faq.q}</h4>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium pl-9">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
