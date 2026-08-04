"use client";

import { useEffect, useRef } from "react";
import { Button } from "./ui/Button";
import BackgroundGrid from "./BackgroundGrid";
import { Terminal, WifiHigh } from "@phosphor-icons/react";

export default function HeroSection() {
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
      className="relative z-0 w-full pt-28 pb-16 overflow-hidden flex flex-col justify-center min-h-[90vh] reveal-on-scroll"
    >
      {/* Dynamic Background Animations */}
      <BackgroundGrid />

      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col items-center space-y-6 text-center relative z-10">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight max-w-4xl uppercase">
          The operating system for
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#263071] to-[#3b82f6] dark:from-blue-400 dark:via-indigo-200 dark:to-white">
            global logistics
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-sm md:text-base text-foreground/70 dark:text-gray-400 leading-relaxed normal-case">
          Unify your end-to-end supply chain on one intelligent platform. Web, desktop, and mobile all synchronized, all offline-first.
        </p>

        {/* CTA Button */}
        <div className="pt-2 flex flex-wrap gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            href="/demo"
            className="px-6 py-3 text-sm uppercase tracking-wider"
          >
            &gt;&gt;&gt; Initialize Demo
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            href="#features"
            className="px-6 py-3 text-sm uppercase tracking-wider"
          >
            View Specs
          </Button>
        </div>

        {/* Terminal/Route Visualizer Container */}
        <div className="w-full max-w-4xl pt-8">
          {/* Main Console Box */}
          <div className="relative w-full rounded-none border border-border-custom bg-[var(--console-bg)] shadow-glow overflow-hidden">
            {/* Console Header Bar */}
            <div className="px-4 py-2 border-b border-border-custom bg-[var(--console-header)] flex items-center justify-between text-[10px] text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-none bg-red-500/30 border border-red-500/50" />
                  <span className="w-2.5 h-2.5 rounded-none bg-yellow-500/30 border border-yellow-500/50" />
                  <span className="w-2.5 h-2.5 rounded-none bg-green-500/30 border border-green-500/50" />
                </div>
                <div className="flex items-center gap-1 pl-2 border-l border-border-custom">
                  <Terminal className="h-3 w-3 text-[#3b82f6]" />
                  <span className="tracking-wider">NTIGI_OS // ROUTE_MONITOR.sh</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-none bg-blue-500 animate-ping" />
                <span className="tracking-wider text-[#3b82f6]">SYNC: ACTIVE</span>
              </div>
            </div>

            {/* Layout Grid inside console */}
            <div className="grid md:grid-cols-3 min-h-[300px]">
              {/* Left Column: Live Terminal logs */}
              <div className="md:col-span-1 border-r border-border-custom p-4 text-left text-[9px] leading-5 text-foreground/50 flex flex-col justify-between bg-[var(--console-header)]/40">
                <div className="space-y-1">
                  <p className="text-foreground/80 font-bold">NTIGI v4.2.1-SECURE</p>
                  <p className="text-blue-500 dark:text-blue-400">Connecting global databases...</p>
                  <p className="text-green-600 dark:text-green-400">✓ Syncing local DB: OK</p>
                  <p className="text-foreground/75">Manifest loaded: V-9932L</p>
                  <p className="text-foreground/60">Port: Rotterdam</p>
                  <p className="text-foreground/60">Lat: 51.9244° N</p>
                  <p className="text-foreground/60">Lon: 4.4777° E</p>
                  <p className="text-yellow-600 dark:text-yellow-400">&gt;&gt; Running optimization...</p>
                  <p className="text-blue-600 dark:text-blue-300">Route cost: -14.2%</p>
                </div>
                <div className="pt-4 border-t border-border-custom text-[8px] text-foreground/45">
                  <p>CPU: 12.4% | MEM: 4.8 GB</p>
                  <p className="text-green-600 dark:text-green-500 font-bold">&gt;&gt; LOCAL CACHE ACTIVE</p>
                </div>
              </div>

              {/* Right Column: Platform Video Visualizer */}
              <div className="md:col-span-2 relative aspect-[16/10] md:aspect-auto w-full bg-black/5 overflow-hidden flex items-center justify-center">
                {/* Background Video with Poster */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/hero-poster.jpg"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-85"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Cyber HUD Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                <div className="absolute bottom-3 right-3 bg-black/75 border border-white/10 px-2 py-1 rounded-none text-[8px] text-white/80 tracking-widest pointer-events-none">
                  CAM_01_VESSEL_SAT
                </div>
                
                {/* Crosshair indicator */}
                <div className="absolute size-8 border border-blue-500/20 rounded-none flex items-center justify-center pointer-events-none animate-pulse-subtle">
                  <div className="size-1.5 bg-blue-500 rounded-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
