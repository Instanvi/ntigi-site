"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Book, 
  Play,
  Question,
  EnvelopeSimple
} from "@phosphor-icons/react";

export default function Resources() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggers = [heroRef.current, videosRef.current, docsRef.current, supportRef.current];
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

  const tutorials = [
    {
      title: "Getting Started with NTIGI",
      description: "Complete walkthrough covering setup, first shipment, and tracking basics",
      duration: "15:30"
    },
    {
      title: "Offline Mode & Sync",
      description: "Working without internet and automatic data synchronization",
      duration: "8:45"
    },
    {
      title: "Multi-Branch Operations",
      description: "Managing routes, agencies, and inter-branch transfers",
      duration: "12:20"
    },
    {
      title: "Warehouse & Consolidation",
      description: "Manifest creation, voyage management, and cargo grouping",
      duration: "10:15"
    }
  ];

  const documentationSections = [
    {
      title: "Getting Started",
      items: [
        "Quick start guide",
        "Installation guide",
        "First shipment walkthrough",
        "User roles and permissions"
      ]
    },
    {
      title: "Core Features",
      items: [
        "Shipment creation and tracking",
        "Client and customer management",
        "Route and network configuration",
        "Pricing and quotations"
      ]
    },
    {
      title: "Advanced Topics",
      items: [
        "Customs and compliance",
        "Fleet and driver management",
        "Real-time messaging system",
        "Offline-first architecture"
      ]
    },
    {
      title: "API Documentation",
      items: [
        "REST API reference (30+ modules)",
        "Authentication and JWT tokens",
        "Webhooks and event notifications",
        "SDK examples and code samples"
      ]
    }
  ];

  const faqs = [
    {
      q: "Does NTIGI work offline?",
      a: "Yes. NTIGI has offline-first architecture. Create shipments, manage clients, and perform operations without internet. Data syncs automatically when reconnected."
    },
    {
      q: "What platforms are supported?",
      a: "Web (all modern browsers), Desktop (Windows 10/11), and Mobile (PWA for iOS & Android). All platforms sync in real-time."
    },
    {
      q: "How many users can the system handle?",
      a: "Built for enterprise scale: 10,000+ concurrent users, 100,000+ shipments per day, 1,000+ API requests per second."
    },
    {
      q: "What integrations are available?",
      a: "Payment gateways (Stripe, PayPal, Mobile Money), shipping carriers (DHL, FedEx, UPS), SMS (Twilio), Email (Resend), and cloud storage (Cloudinary)."
    },
    {
      q: "How is data security handled?",
      a: "AES-256 encryption at rest, TLS 1.3 in transit, JWT authentication, role-based access control, and complete audit trails."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16 font-mono">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Resources & Support
                <br />
                <span className="text-blue-500">For NTIGI Platform</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                Video tutorials, documentation, and support resources to help you master the NTIGI logistics platform.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* Video Tutorials Section */}
        <section 
          ref={videosRef}
          className="py-16 border-b border-border-custom reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Video Tutorials</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">Watch and learn how to use NTIGI platform features</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tutorials.map((tutorial, idx) => (
                <div key={idx} className="bg-[var(--console-bg)] border border-border-custom rounded-none overflow-hidden hover:border-blue-500/50 transition-colors">
                  {/* Video Player */}
                  <div className="relative aspect-video bg-black">
                    <video 
                      controls 
                      className="w-full h-full"
                      preload="metadata"
                    >
                      <source src="/hero.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-none">
                      <span className="text-xs text-white font-mono font-bold">{tutorial.duration}</span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-2">{tutorial.title}</h3>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{tutorial.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Library */}
        <section 
          ref={docsRef}
          className="py-16 border-b border-border-custom reveal-on-scroll bg-primary/[0.01]"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-left mb-12 max-w-2xl">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Documentation Library</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">Comprehensive guides and technical documentation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-l border-border-custom">
              {documentationSections.map((section, idx) => (
                <div key={idx} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-3">
                  <div className="p-2 w-9 h-9 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                    <Book className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-foreground/70 font-sans leading-relaxed font-medium flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          ref={supportRef}
          className="py-16 reveal-on-scroll border-b border-border-custom"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold font-sans uppercase mt-3">Frequently Asked Questions</h2>
              <p className="text-sm text-foreground/60 font-sans mt-2">Common questions about NTIGI platform</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-[var(--console-bg)] border border-border-custom rounded-none hover:border-blue-500/50 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <Question className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <h4 className="text-base font-bold uppercase tracking-wider text-foreground">{faq.q}</h4>
                  </div>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium pl-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA Section */}
        <section className="py-16 reveal-on-scroll">
          <div className="mx-auto max-w-7xl px-6 md:px-8">

            {/* Support CTA */}
            <div className="mt-16 p-8 bg-[var(--console-bg)] border border-border-custom rounded-none text-center">
              <EnvelopeSimple className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-sans uppercase tracking-tight mb-2">Need More Help?</h3>
              <p className="text-sm text-foreground/70 font-sans mb-6 max-w-xl mx-auto">
                Our support team and integration specialists are available 24/7 to assist with setup, custom configurations, and technical questions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/demo" 
                  className="px-6 py-2 bg-blue-500 text-white text-sm font-bold uppercase tracking-wider rounded-none hover:bg-blue-600 transition-colors"
                >
                  Request Demo
                </a>
                <a 
                  href="mailto:support@ntigi.com" 
                  className="px-6 py-2 bg-[var(--console-header)] border border-border-custom text-foreground text-sm font-bold uppercase tracking-wider rounded-none hover:border-blue-500/50 transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
