"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Laptop, 
  DeviceMobile, 
  Desktop,
  Database,
  CloudArrowUp,
  ArrowsClockwise,
  ShieldCheck,
  Lightning,
  LockKey,
  Gear
} from "@phosphor-icons/react";

export default function Platform() {
  const heroRef = useRef<HTMLDivElement>(null);
  const platformsRef = useRef<HTMLDivElement>(null);
  const offlineRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggers = [heroRef.current, platformsRef.current, offlineRef.current, featuresRef.current];
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

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                One Platform
                <br />
                <span className="text-blue-500">Three Ways to Work</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                Access your logistics operations from anywhere. Web dashboard for managers, desktop app for stations, mobile app for drivers—all synchronized in real-time.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* Platform Channels */}
        <section 
          ref={platformsRef}
          className="py-16 border-b border-border-custom reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Access From Anywhere</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-l border-border-custom bg-primary/[0.01]">
              {/* Web Dashboard */}
              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Laptop className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-md font-bold uppercase tracking-wider text-foreground">Web Dashboard</h3>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Complete command center accessible from any browser. Track shipments, manage teams, generate reports, and oversee your entire network in real-time.
                </p>
              </div>

              {/* Desktop Application */}
              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <Desktop className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-md font-bold uppercase tracking-wider text-foreground">Desktop Application</h3>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Fast Windows app for courier stations. Create shipments in seconds, print labels instantly, and work completely offline with automatic background sync.
                </p>
              </div>

              {/* Mobile App */}
              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                  <DeviceMobile className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-md font-bold uppercase tracking-wider text-foreground">Mobile App</h3>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Field tools for drivers and agents. Scan barcodes, update delivery status, capture proof of delivery, and navigate routes—all from your phone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offline-First Features */}
        <section 
          ref={offlineRef}
          className="py-16 border-b border-border-custom reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Works Without Internet</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-border-custom">
              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02]">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center mb-3">
                  <Database className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-1">Local Storage</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Create shipments, manage clients, process payments—all without internet. Data stored safely on your device.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02]">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center mb-3">
                  <ArrowsClockwise className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-1">Auto Sync</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Changes sync automatically in the background when you reconnect. Never worry about manual uploads or data loss.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02]">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center mb-3">
                  <CloudArrowUp className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-1">Fast Updates</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Only new changes are uploaded, saving bandwidth. Process hundreds of shipments, sync in seconds.
                </p>
              </div>

              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02]">
                <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-md font-bold uppercase tracking-wider text-foreground mb-1">Data Safety</h4>
                <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">
                  Multiple backup layers ensure nothing is ever lost, even during power outages or network failures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section 
          ref={featuresRef}
          className="py-16 bg-primary/[0.01] reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Enterprise-Grade Capabilities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border-custom">
              {/* Speed */}
              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Lightning className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Speed</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Pages load in under 2 seconds
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Process 100,000+ shipments daily
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Real-time status updates
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Instant search across all data
                  </li>
                </ul>
              </div>

              {/* Security */}
              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <LockKey className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Security</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Bank-level encryption
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Secure login with 2FA support
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Complete activity audit trails
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Role-based access control
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.02] space-y-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Gear className="w-5 h-5" />
                  <h3 className="text-md font-bold uppercase tracking-wider">Integration</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Connect to existing systems
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Import/export via Excel/CSV
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Print labels and receipts
                  </li>
                  <li className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    WhatsApp & SMS notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
