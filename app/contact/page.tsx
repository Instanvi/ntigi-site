"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import {
  Envelope,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  HardDrive
} from "@phosphor-icons/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "general",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggers = [heroRef.current, contentRef.current];
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "general",
        message: "",
      });
    }, 1500);
  };

  const offices = [
    {
      city: "Douala",
      country: "Cameroon",
      role: "Global Headquarters",
      address: "4 etage, Bonaberi, Douala",
      phone: "+237 233 44 55 66",
      email: "douala@ntigi.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM (GMT+1)",
    },
    {
      city: "London",
      country: "United Kingdom",
      role: "European Operations Hub",
      address: "30 St Mary Axe (The Gherkin), London",
      phone: "+44 20 7946 0958",
      email: "london@ntigi.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM (GMT)",
    },
    {
      city: "New York",
      country: "United States",
      role: "North American Desk",
      address: "1 World Trade Center, New York, NY",
      phone: "+1 212 555 0199",
      email: "nyc@ntigi.com",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM (EST)",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16">
        {/* Page Hero */}
        <section 
          ref={heroRef}
          className="relative py-16 bg-[var(--console-header)] border-b border-border-custom overflow-hidden reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight">
                Connect with our global offices
              </h1>
              <p className="text-xs md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                Connect with our team to inquire about pricing, API access, customized branch installations, and support plans.
              </p>
            </div>
          </div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* Contact Info and Form Grid */}
        <section 
          ref={contentRef}
          className="py-16 reveal-on-scroll"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-12 gap-8">
            
            {/* Left Column: Office details */}
            <div className="md:col-span-7 space-y-6">
              <div className="text-left">
                <h2 className="text-xl font-bold font-sans uppercase mt-3">Corporate Locations</h2>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-l border-border-custom bg-primary/[0.01]">
                {offices.map((office, index) => (
                  <div 
                    key={index} 
                    className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-4"
                  >
                    <div className="flex justify-between items-center border-b border-border-custom pb-2.5 text-xs">
                      <span className="font-bold text-foreground uppercase tracking-wider">{office.city} - {office.country}</span>
                      <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">{office.role}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-foreground/75 font-sans font-medium">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Phone className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:underline hover:text-blue-500 transition-colors">{office.phone}</a>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Envelope className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <a href={`mailto:${office.email}`} className="hover:underline hover:text-blue-500 transition-colors">{office.email}</a>
                      </div>
                      <div className="flex items-start gap-2.5 font-mono text-[10px] uppercase tracking-wider">
                        <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Secure terminal-style inquiry form */}
            <div className="md:col-span-5">
              <div className="bg-[var(--console-bg)] rounded-md p-6 border border-border-custom shadow-glow space-y-4">
                <div className="flex items-center justify-between border-b border-border-custom pb-2.5 text-[10px] text-foreground/60">
                  <div className="flex items-center gap-1.5 font-bold">
                    <HardDrive className="h-4 w-4 text-blue-500" />
                    <span>INQUIRY_UPLOAD_PANEL</span>
                  </div>
                  <span className="text-green-600 dark:text-green-400 uppercase tracking-widest font-bold text-[9px]">SECURE CHANNEL</span>
                </div>

                {status === "success" ? (
                  <div className="text-center py-10 space-y-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-[4px] bg-green-500/10 text-green-500 border border-green-500/25 text-sm font-bold">
                      ✓
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider">Upload Complete</h3>
                    <p className="text-xs text-foreground/75 font-sans leading-relaxed">Your message has been processed successfully. An operations officer will respond shortly.</p>
                    <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
                      Send another
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4 text-xs font-sans" onSubmit={handleSubmit}>
                    <div>
                      <label className="block font-bold text-foreground/60 mb-1 uppercase tracking-wider font-mono text-[9px]">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[var(--console-header)] border border-border-custom rounded-[4px] text-foreground focus:outline-none focus:border-blue-500 font-mono text-xs" 
                        placeholder="Logistics Ltd." 
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-foreground/60 mb-1 uppercase tracking-wider font-mono text-[9px]">Contact Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[var(--console-header)] border border-border-custom rounded-[4px] text-foreground focus:outline-none focus:border-blue-500 font-mono text-xs" 
                        placeholder="name@company.com" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-foreground/60 mb-1 uppercase tracking-wider font-mono text-[9px]">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[var(--console-header)] border border-border-custom rounded-[4px] text-foreground focus:outline-none focus:border-blue-500 font-mono text-xs"
                      >
                        <option value="general">GENERAL ENQUIRY</option>
                        <option value="api">API ACCESS REQUEST</option>
                        <option value="support">TECHNICAL SUPPORT</option>
                        <option value="sales">SALES & DEPLOYMENT</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-foreground/60 mb-1 uppercase tracking-wider font-mono text-[9px]">Inquiry Details</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[var(--console-header)] border border-border-custom rounded-[4px] text-foreground focus:outline-none focus:border-blue-500 h-24 font-sans text-xs" 
                        placeholder="Describe your branch size and software needs..."
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="secondary" 
                      className="w-full py-2.5 text-xs font-mono tracking-widest uppercase"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "TRANSMITTING..." : "Submit Inquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
