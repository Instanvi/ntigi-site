"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Heart, Globe, HardDrive, Laptop, ArrowRight } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function CareersPage() {
  const t = useTranslations("Careers");

  const benefits = [
    { title: t("benefits.0.title"), description: t("benefits.0.description"), icon: Globe },
    { title: t("benefits.1.title"), description: t("benefits.1.description"), icon: Heart },
    { title: t("benefits.2.title"), description: t("benefits.2.description"), icon: HardDrive },
    { title: t("benefits.3.title"), description: t("benefits.3.description"), icon: Laptop },
  ];

  const jobs = [
    { title: t("jobs.0.title"), department: t("jobs.0.department"), location: t("jobs.0.location"), type: t("jobs.0.type"), description: t("jobs.0.description") },
    { title: t("jobs.1.title"), department: t("jobs.1.department"), location: t("jobs.1.location"), type: t("jobs.1.type"), description: t("jobs.1.description") },
    { title: t("jobs.2.title"), department: t("jobs.2.department"), location: t("jobs.2.location"), type: t("jobs.2.type"), description: t("jobs.2.description") },
    { title: t("jobs.3.title"), department: t("jobs.3.department"), location: t("jobs.3.location"), type: t("jobs.3.type"), description: t("jobs.3.description") },
    { title: t("jobs.4.title"), department: t("jobs.4.department"), location: t("jobs.4.location"), type: t("jobs.4.type"), description: t("jobs.4.description") },
  ];

  // Department filter keys — kept in English for filtering logic, labels translated
  const deptKeys = ["All", "Engineering", "Product", "Operations", "Marketing"];
  const deptLabels: Record<string, string> = {
    All:         t("departments.all"),
    Engineering: t("departments.engineering"),
    Product:     t("departments.product"),
    Operations:  t("departments.operations"),
    Marketing:   t("departments.marketing"),
  };

  const [selectedDept, setSelectedDept] = useState("All");

  // Jobs store department as translated string so we match back via index
  const deptIndexMap: Record<string, number> = { Engineering: 0, Product: 1, Operations: 2, Marketing: 3 };
  const filteredJobs = jobs.filter((job, i) => {
    if (selectedDept === "All") return true;
    return job.department === t(`jobs.${[0,1,2,3,4].find(idx => {
      const raw = ["Engineering","Product","Operations","Operations","Marketing"];
      return raw[idx] === selectedDept;
    }) ?? -1}.department`);
  });

  // Simpler: filter by raw department key using a parallel raw array
  const rawDepts = ["Engineering", "Engineering", "Product", "Operations", "Marketing"];
  const filteredJobsFinal = jobs.filter((_, i) => selectedDept === "All" || rawDepts[i] === selectedDept);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO */}
        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight">
                  {t("hero.h1_part1")}<br /><span className="text-blue-500">{t("hero.h1_part2")}</span>
                </h1>
                <p className="text-xs md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  {t("hero.subtitle")}
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image src="/image1.jpg" alt="Logistics team working on borderless trade" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* BENEFITS */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("benefitsSection.title")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border-custom bg-primary/[0.01]">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.1} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{benefit.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* JOB LISTINGS */}
        <section className="py-16 bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">{t("jobsSection.title")}</h2>
              <div className="flex flex-wrap gap-2">
                {deptKeys.map((key) => (
                  <button key={key} onClick={() => setSelectedDept(key)} className={`px-3 py-1.5 border rounded-none text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${selectedDept === key ? "bg-[#263071] border-[#263071] text-white" : "bg-background border-border-custom text-foreground hover:bg-primary/5"}`}>
                    {deptLabels[key]}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-4">
              {filteredJobsFinal.length === 0 ? (
                <div className="text-center py-12 border border-border-custom rounded-none text-xs text-foreground/50">
                  {t("jobsSection.noOpenings")}
                </div>
              ) : (
                filteredJobsFinal.map((job, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="p-6 border border-border-custom bg-[var(--console-bg)] rounded-none hover:border-blue-500/50 transition-all duration-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                        <span className="bg-primary/5 px-2 py-0.5 border border-border-custom text-blue-500 rounded-none">{job.department.toUpperCase()}</span>
                        <span className="flex items-center gap-1 text-foreground/50"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                        <span className="flex items-center gap-1 text-foreground/50"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                      </div>
                      <h3 className="text-md font-bold text-foreground font-sans uppercase tracking-tight">{job.title}</h3>
                      <p className="text-sm text-foreground/75 font-sans leading-relaxed font-medium max-w-2xl">{job.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full md:w-auto text-xs">
                      {t("jobsSection.applyButton")}<ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Button>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
