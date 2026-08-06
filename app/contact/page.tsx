"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import {
  Envelope, Phone, MapPin, Clock, CheckCircle,
  ChatCircle, Users, Wrench, CurrencyDollar,
} from "@phosphor-icons/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", subject: "general", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", subject: "general", message: "" });
    }, 1500);
  };

  const offices = [
    { city: "Douala", country: "Cameroon", role: "Global Headquarters", address: "4 etage, Bonaberi, Douala", phone: "+237 233 44 55 66", email: "douala@ntigi.com", hours: "Mon to Fri: 8:00 AM to 5:00 PM (GMT+1)" },
    { city: "London", country: "United Kingdom", role: "European Operations Hub", address: "30 St Mary Axe, London, EC3A 8BF", phone: "+44 20 7946 0958", email: "london@ntigi.com", hours: "Mon to Fri: 9:00 AM to 6:00 PM (GMT)" },
    { city: "Chicago", country: "United States", role: "North American Headquarters", address: "233 S Wacker Drive, Chicago, IL 60606", phone: "+1 312 555 0199", email: "chicago@ntigi.com", hours: "Mon to Fri: 9:00 AM to 5:00 PM (CST)" },
  ];

  const contactReasons = [
    { icon: CurrencyDollar, title: "Sales and Pricing", desc: "Get a custom pricing proposal based on your operation size, branch count, and shipment volume." },
    { icon: Wrench, title: "Technical Support", desc: "Support for setup, configuration, integrations, and troubleshooting across all NTIGI platforms." },
    { icon: Users, title: "Partnerships", desc: "Discuss agency network partnerships, integration partnerships, or reseller agreements." },
    { icon: ChatCircle, title: "General Enquiries", desc: "Questions about NTIGI's capabilities, deployment options, or team training programs." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative py-20 bg-[var(--console-header)] border-b border-border-custom overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-blue-500/30 text-blue-500 rounded-none text-xs font-bold uppercase tracking-wider">Global Offices</div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                Get in Touch<br /><span className="text-blue-500">with Our Team</span>
              </h1>
              <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                Reach out for pricing, API access, custom branch installations, technical support, or partnership discussions. Our team responds within one business day.
              </p>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="border-b border-border-custom bg-[var(--console-bg)]">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border-custom">
              {contactReasons.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="p-6 border-r border-b md:border-b-0 border-border-custom hover:bg-primary/[0.04] transition-all space-y-2">
                  <div className="p-2 w-9 h-9 rounded-none bg-background border border-border-custom text-blue-500 flex items-center justify-center mb-3">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/60 font-sans font-medium leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-6">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">Corporate Locations</h2>
                <p className="text-sm text-foreground/70 font-sans font-medium leading-relaxed mt-2">Three offices across Africa, Europe, and North America, covering all major logistics trade lanes.</p>
              </AnimatedSection>
              <div className="grid grid-cols-1 gap-0 border-t border-l border-border-custom bg-primary/[0.01]">
                {offices.map((office, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="p-6 border-r border-b border-border-custom hover:bg-primary/[0.04] transition-all duration-200 space-y-4">
                    <div className="flex justify-between items-center border-b border-border-custom pb-3">
                      <span className="text-md font-bold text-foreground uppercase tracking-wider">{office.city}, {office.country}</span>
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{office.role}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/75 font-sans font-medium">{office.address}</span></div>
                      <div className="flex items-start gap-2.5"><Phone className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="text-sm text-foreground/75 font-sans font-medium hover:text-blue-500 transition-colors">{office.phone}</a></div>
                      <div className="flex items-start gap-2.5"><Envelope className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><a href={`mailto:${office.email}`} className="text-sm text-foreground/75 font-sans font-medium hover:text-blue-500 transition-colors">{office.email}</a></div>
                      <div className="flex items-start gap-2.5"><Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground/75 font-sans font-medium">{office.hours}</span></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatedSection direction="right" className="md:col-span-5">
              <div className="bg-[var(--console-bg)] rounded-none p-6 border border-border-custom space-y-5">
                <div className="border-b border-border-custom pb-4 space-y-1">
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">Send Us a Message</h3>
                  <p className="text-sm text-foreground/60 font-sans font-medium">Fill in the form and our team will respond within one business day.</p>
                </div>
                {status === "success" ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-md font-bold uppercase tracking-wider text-foreground">Message Sent</h3>
                    <p className="text-sm text-foreground/70 font-sans font-medium leading-relaxed">Your message has been received. An NTIGI team member will respond within one business day.</p>
                    <Button variant="outline" size="lg" onClick={() => setStatus("idle")} className="w-full">Send Another Message</Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {[
                      { label: "Full Name", name: "name", type: "text", placeholder: "Your full name" },
                      { label: "Work Email", name: "email", type: "email", placeholder: "name@company.com" },
                      { label: "Company Name", name: "company", type: "text", placeholder: "Your company" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{field.label}</label>
                        <input type={field.type} name={field.name} value={(formData as any)[field.name]} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border-custom rounded-none text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder={field.placeholder} required />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Subject</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border-custom rounded-none text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors">
                        <option value="general">General Enquiry</option>
                        <option value="sales">Sales and Pricing</option>
                        <option value="support">Technical Support</option>
                        <option value="api">API Access Request</option>
                        <option value="partnership">Partnership</option>
                        <option value="demo">Request a Demo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border-custom rounded-none text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors h-28 resize-none" placeholder="Describe your branch size, requirements, or question..." required />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-[var(--console-header)] border-b border-border-custom relative overflow-hidden noise-overlay">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold uppercase font-sans tracking-tight leading-none">Prefer to See It First?</h2>
                <p className="text-sm text-foreground/70 font-sans font-medium">Book a live demo and our team will walk you through NTIGI for your specific operation.</p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Button variant="primary" href="/demo" size="lg">Request a Demo</Button>
                <Button variant="outline" href="/pricing" size="lg">View Pricing</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
