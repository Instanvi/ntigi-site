"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Globe, Shield, Heart, Users, Target, ChartLine } from "@phosphor-icons/react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";

const milestones = [
  { year: "2024", title: "API Foundation", desc: "Launched Ntigi Shipping Engine beta to coordinate West African freight routes." },
  { year: "2025", title: "Offline-First Engine", desc: "Deployed local-database tracking systems for agents working in low-connectivity areas." },
  { year: "2026", title: "Global Expansion", desc: "Integrated global custom clearance filing systems and established Chicago headquarters." },
];

export default function Company() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  Connecting Global<br /><span className="text-blue-500">Logistics Networks</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  Building offline-first cargo software to secure borderless supply chain operations for freight forwarders and courier agents globally.
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image
              src="/image2.jpg"
              alt="Logistics network hubs"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" className="p-6 bg-[var(--console-bg)] border border-border-custom rounded-none space-y-3">
              <div className="flex items-center gap-2 text-blue-500">
                <Target className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">OUR MISSION</h3>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed font-medium">
                To simplify international commerce by engineering robust, zero-downtime shipping systems. We resolve local infrastructure challenges with cloud-native reliability so logistics agencies can process shipments continuously.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="p-6 bg-[var(--console-bg)] border border-border-custom rounded-none space-y-3">
              <div className="flex items-center gap-2 text-blue-500">
                <Users className="w-5 h-5" />
                <h3 className="text-md font-bold uppercase tracking-wider">OUR VISION</h3>
              </div>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed font-medium">
                To build the foundational operating system for African and global shipping channels, bringing complete transparency, automated customs clearance, and instant label distribution to every courier branch.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Our Core Principles</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
              {[
                { icon: Globe, title: "Global Scalability", desc: "Adaptable multi-language and multi-branch systems to manage shipping networks of any size across borders." },
                { icon: Shield, title: "Data Sovereignty", desc: "Offline-first database architectures protecting transactional records and keeping agency tracking secure." },
                { icon: Heart, title: "Operational Stability", desc: "Engineered to work continuously during local network disruptions, preventing data entry duplication." },
              ].map((item, i) => (
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

        <section className="py-16 border-b border-border-custom bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Milestones &amp; History</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {milestones.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.12} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02]">
                  <div className="text-lg font-bold text-blue-500 mb-2">{item.year}</div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Executive Team</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <AnimatedSection className="p-6 bg-[var(--console-bg)] border border-border-custom rounded-none flex flex-col items-center text-center space-y-3 hover:border-blue-500/50 transition-colors">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-border-custom bg-foreground/5 mb-2">
                  <div className="absolute inset-0 bg-blue-500/5 flex items-center justify-center text-blue-500 font-bold uppercase tracking-widest text-xs">ASJ</div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Amahnui ST James</h3>
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mt-0.5">Chief Executive Officer</div>
                </div>
                <p className="text-xs text-foreground/70 font-sans leading-relaxed font-medium">
                  Leading strategic expansion and engineering paradigms across the Ntigi logistics network.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
