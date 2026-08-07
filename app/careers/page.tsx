"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Heart, Globe, HardDrive, Laptop, ArrowRight } from "@phosphor-icons/react";

const benefits = [
  { title: "Global Mobility", description: "Work remote-first from anywhere in the world, or collaborate from one of our corporate hubs in Douala, London, or Chicago.", icon: Globe },
  { title: "Comprehensive Coverage", description: "Premium health, dental, and travel insurance coverage powered directly by our integrated brand support.", icon: Heart },
  { title: "Growth & Learning", description: "An annual learning stipend for courses, conferences, or books to help you stay ahead in engineering and supply chain tech.", icon: HardDrive },
  { title: "Modern Work Setup", description: "A hardware budget to set up your home office with top-tier laptops, screens, and accessories to work efficiently.", icon: Laptop },
];

const jobs = [
  { title: "Senior Full-Stack Engineer (React / Next.js / Go)", department: "Engineering", location: "Douala, Cameroon (Hybrid) / Remote", type: "Full-Time", description: "Architect and develop core components for Ntigi Shipping Tech APIs and high-performance carrier integration backends." },
  { title: "Lead Mobile Developer (React Native / iOS & Android)", department: "Engineering", location: "Remote (Global)", type: "Full-Time", description: "Own the mobile checkout experience and localized hub tracking maps inside the consumer shipping application." },
  { title: "Supply Chain Product Manager", department: "Product", location: "Douala, Cameroon / Hybrid", type: "Full-Time", description: "Define product requirements for our automated customs clearance systems and coordinate integrations with international freight carriers." },
  { title: "Logistics Integration Specialist", department: "Operations", location: "Yaounde, Cameroon / Hybrid", type: "Full-Time", description: "Help enterprise clients integrate Ntigi APIs into their warehouse systems and orchestrate carrier dispatch channels." },
  { title: "Global Brand & Marketing Manager", department: "Marketing", location: "London, UK / Hybrid", type: "Full-Time", description: "Craft and execute the communication strategy for NTIGI Global, coordinating campaigns across all core branches." },
];

const departments = ["All", "Engineering", "Product", "Operations", "Marketing"];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const filteredJobs = jobs.filter((job) => selectedDept === "All" || job.department.toLowerCase() === selectedDept.toLowerCase());

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight">
                  Build the future of<br /><span className="text-blue-500">Borderless Trade</span>
                </h1>
                <p className="text-xs md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  We are a team of software engineers, logistics experts, and Fintech builders working globally to streamline international commerce. Join us and shape how cargo moves around the world.
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image
              src="/image1.jpg"
              alt="Logistics team working on borderless trade"
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
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Why work with us?</h2>
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

        <section className="py-16 bg-primary/[0.01]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Find your role</h2>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button key={dept} onClick={() => setSelectedDept(dept)} className={`px-3 py-1.5 border rounded-none text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${selectedDept === dept ? "bg-[#263071] border-[#263071] text-white" : "bg-background border-border-custom text-foreground hover:bg-primary/5"}`}>
                    {dept}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-12 border border-border-custom rounded-none text-xs text-foreground/50">
                  NO OPENINGS CURRENTLY ACTIVE IN THIS SECTION
                </div>
              ) : (
                filteredJobs.map((job, index) => (
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
                      Apply<ArrowRight className="ml-1.5 w-3.5 h-3.5" />
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
