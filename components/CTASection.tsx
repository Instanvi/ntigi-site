"use client";

import { useEffect, useRef } from "react";
import { Button } from "./ui/Button";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use IntersectionObserver instead of scroll event
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("active");
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 bg-background border-t border-border-custom text-foreground relative overflow-hidden reveal-on-scroll"
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,var(--primary-glow),transparent_70%]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-border-custom bg-primary/5 text-blue-500 text-[10px] uppercase tracking-wider rounded-none">
            GET STARTED
          </span>

          <h2 className="text-2xl md:text-4.5xl font-extrabold text-foreground leading-tight uppercase">
            Ready to Transform Your
            <br />
            <span className="text-[#3b82f6]">Logistics Operations?</span>
          </h2>

          <p className="text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Join leading freight forwarders and shipping companies using NTIGI to centralize their databases and scale operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="secondary" 
              size="lg"
              href="/demo"
              className="px-6 py-3 text-xs"
            >
              <CalendarBlank className="mr-1.5 h-4 w-4" />
              Schedule a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="/company"
              className="px-6 py-3 text-xs"
            >
              Contact Sales
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border-custom mt-10">
            <div className="p-4 bg-primary/5 border border-border-custom rounded-none text-center">
              <div className="text-xl font-extrabold text-blue-500">99.9%</div>
              <div className="text-[9px] font-bold text-foreground/50 uppercase tracking-widest mt-1">Uptime SLA</div>
            </div>
            <div className="p-4 bg-primary/5 border border-border-custom rounded-none text-center">
              <div className="text-xl font-extrabold text-blue-500">24/7</div>
              <div className="text-[9px] font-bold text-foreground/50 uppercase tracking-widest mt-1">Support</div>
            </div>
            <div className="p-4 bg-primary/5 border border-border-custom rounded-none text-center">
              <div className="text-xl font-extrabold text-blue-500">SOC 2</div>
              <div className="text-[9px] font-bold text-foreground/50 uppercase tracking-widest mt-1">Certified</div>
            </div>
            <div className="p-4 bg-primary/5 border border-border-custom rounded-none text-center">
              <div className="text-xl font-extrabold text-blue-500">GDPR</div>
              <div className="text-[9px] font-bold text-foreground/50 uppercase tracking-widest mt-1">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
