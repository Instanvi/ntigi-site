"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Globe,
  Award,
  Zap,
  ArrowRight
} from "@phosphor-icons/react";

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggers = [heroRef.current, benefitsRef.current, jobsRef.current];
      triggers.forEach((trigger) => {
        if (!trigger) return;
        const rect = trigger.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          trigger.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      title: "Global Mobility",
      description: "Work remote-first from anywhere in the world, or collaborate from one of our corporate hubs in Douala, London, or Chicago.",
      icon: <Globe className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Comprehensive Coverage",
      description: "Premium health, dental, and travel insurance coverage powered directly by our integrated brand support.",
      icon: <Heart className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Growth & Learning",
      description: "An annual learning stipend for courses, conferences, or books to help you stay ahead in engineering and supply chain tech.",
      icon: <Award className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Modern Work Setup",
      description: "A hardware budget to set up your home office with top-tier laptops, screens, and accessories to work efficiently.",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
    },
  ];

  const jobs = [
    {
      title: "Senior Full-Stack Engineer (React / Next.js / Go)",
      department: "Engineering",
      location: "Chicago, IL (Hybrid) / Remote",
      type: "Full-Time",
      description: "Architect and develop core components for Ntigi Shipping Tech APIs and high-performance carrier integration backends.",
    },
    {
      title: "Lead Mobile Developer (React Native / iOS & Android)",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-Time",
      description: "Own the mobile checkout experience and localized hub tracking maps inside the consumer shipping application.",
    },
    {
      title: "Supply Chain Product Manager",
      department: "Product",
      location: "Chicago, IL / Hybrid",
      type: "Full-Time",
      description: "Define product requirements for our automated customs clearance systems and coordinate integrations with international freight carriers.",
    },
    {
      title: "Logistics Integration Specialist",
      department: "Operations",
      location: "London, UK / Hybrid",
      type: "Full-Time",
      description: "Help enterprise clients integrate Ntigi APIs into their warehouse systems and orchestrate carrier dispatch channels.",
    },
    {
      title: "Global Brand & Marketing Manager",
      department: "Marketing",
      location: "London, UK / Hybrid",
      type: "Full-Time",
      description: "Craft and execute the communication strategy for NTIGI Global, coordinating campaigns across all core branches.",
    },
  ];

  const departments = ["All", "Engineering", "Product", "Operations", "Marketing"];

  const filteredJobs = jobs.filter(
    (job) => selectedDept === "All" || job.department.toLowerCase() === selectedDept.toLowerCase()
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16 font-mono">
        {/* Page Hero */}
        <section 
          ref={heroRef}
          className="relative py-16 bg-[var(--console-header)] border-b border-border-custom overflow-hidden reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-border-custom bg-primary/5 text-blue-500 text-[10px] uppercase tracking-wider rounded-[4px]">
                JOIN THE TEAM
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight">
                Build the future of borderless trade
              </h1>
              <p className="text-xs md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                We are a team of software engineers, logistics experts, and Fintech builders working globally to streamline international commerce. Join us and shape how cargo moves around the world.
              </p>
            </div>
          </div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* Benefits Section */}
        <section 
          ref={benefitsRef}
          className="py-16 border-b border-border-custom reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-border-custom bg-primary/5 text-blue-500 text-[10px] uppercase tracking-wider rounded-[4px]">
                PERKS & BENEFITS
              </span>
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Why work with us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-l border-border-custom bg-primary/[0.01]">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-[4px] bg-[var(--console-bg)] border border-border-custom">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">{benefit.title}</h3>
                  </div>
                  <p className="text-[11px] text-foreground/70 font-sans leading-relaxed font-medium">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section 
          ref={jobsRef}
          className="py-16 bg-primary/[0.01] reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-border-custom bg-primary/5 text-blue-500 text-[10px] uppercase tracking-wider rounded-[4px]">
                  OPEN POSITIONS
                </span>
                <h2 className="text-2xl font-bold font-sans uppercase mt-3">Find your role</h2>
              </div>

              {/* Department filter tabs */}
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3 py-1.5 border rounded-[4px] text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      selectedDept === dept
                        ? "bg-[#263071] border-[#263071] text-white"
                        : "bg-background border-border-custom text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Jobs List Grid */}
            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-12 border border-border-custom rounded-md text-xs text-foreground/50">
                  &gt;&gt; NO OPENINGS CURRENTLY ACTIVE IN THIS SECTION
                </div>
              ) : (
                filteredJobs.map((job, index) => (
                  <div 
                    key={index} 
                    className="p-6 border border-border-custom bg-[var(--console-bg)] rounded-[4px] hover:border-blue-500/50 shadow-glow transition-all duration-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold">
                        <span className="bg-primary/5 px-2 py-0.5 border border-border-custom text-blue-500 rounded-[3px]">
                          {job.department.toUpperCase()}
                        </span>
                        <span className="flex items-center gap-1 text-foreground/50">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-foreground/50">
                          <Clock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground font-sans uppercase tracking-tight">{job.title}</h3>
                      <p className="text-[11px] text-foreground/75 font-sans leading-relaxed font-medium max-w-2xl">{job.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full md:w-auto text-[10px]">
                      Apply
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Button>
                  </div>
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
