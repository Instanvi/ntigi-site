"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { motion } from "framer-motion";
import {
  Envelope, Phone, MapPin, Clock, CheckCircle,
  ChatCircle, Users, Wrench, CurrencyDollar,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function ContactPage() {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", subject: "general", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: `${formData.subject} - ${formData.company}`,
            message: formData.message,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully");
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", subject: "general", message: "" });
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
      setStatus("error");
    }
  };

  const offices = [
    {
      city: t("offices.0.city"), country: t("offices.0.country"), role: t("offices.0.role"),
      address: t("offices.0.address"), phone: t("offices.0.phone"),
      email: t("offices.0.email"), hours: t("offices.0.hours"),
    },
    {
      city: t("offices.1.city"), country: t("offices.1.country"), role: t("offices.1.role"),
      address: t("offices.1.address"), phone: t("offices.1.phone"),
      email: t("offices.1.email"), hours: t("offices.1.hours"),
    },
    {
      city: t("offices.2.city"), country: t("offices.2.country"), role: t("offices.2.role"),
      address: t("offices.2.address"), phone: t("offices.2.phone"),
      email: t("offices.2.email"), hours: t("offices.2.hours"),
    },
  ];

  const contactReasons = [
    { icon: CurrencyDollar, title: t("reasons.0.title"), desc: t("reasons.0.desc") },
    { icon: Wrench,         title: t("reasons.1.title"), desc: t("reasons.1.desc") },
    { icon: Users,          title: t("reasons.2.title"), desc: t("reasons.2.desc") },
    { icon: ChatCircle,     title: t("reasons.3.title"), desc: t("reasons.3.desc") },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        {/* HERO */}
        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  {t("hero.h1_part1")}<br /><span className="text-blue-500">{t("hero.h1_part2")}</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case max-w-2xl">
                  {t("hero.subtitle")}
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image src="/image2.jpg" alt="Global logistics support team" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* CONTACT REASON PILLS */}
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

        {/* OFFICES + FORM */}
        <section className="py-16 border-b border-border-custom">
          <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-12 gap-8">

            {/* Offices */}
            <div className="md:col-span-7 space-y-6">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-bold font-sans uppercase tracking-tight">{t("officesSection.title")}</h2>
                <p className="text-sm text-foreground/70 font-sans font-medium leading-relaxed mt-2">{t("officesSection.subtitle")}</p>
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

            {/* Contact Form */}
            <AnimatedSection direction="right" className="md:col-span-5">
              <div className="bg-[var(--console-bg)] rounded-none p-6 border border-border-custom space-y-5">
                <div className="border-b border-border-custom pb-4 space-y-1">
                  <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{t("form.heading")}</h3>
                  <p className="text-sm text-foreground/60 font-sans font-medium">{t("form.subheading")}</p>
                </div>
                {status === "success" ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-none bg-[var(--console-bg)] border border-border-custom text-blue-500 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-md font-bold uppercase tracking-wider text-foreground">{t("form.successTitle")}</h3>
                    <p className="text-sm text-foreground/70 font-sans font-medium leading-relaxed">{t("form.successDesc")}</p>
                    <Button variant="outline" size="lg" onClick={() => setStatus("idle")} className="w-full">{t("form.sendAnother")}</Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {[
                      { label: t("form.fullName"),    name: "name",    type: "text",  placeholder: t("form.fullNamePlaceholder") },
                      { label: t("form.workEmail"),   name: "email",   type: "email", placeholder: t("form.workEmailPlaceholder") },
                      { label: t("form.companyName"), name: "company", type: "text",  placeholder: t("form.companyNamePlaceholder") },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{field.label}</label>
                        <input type={field.type} name={field.name} value={(formData as any)[field.name]} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border-custom rounded-none text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder={field.placeholder} required />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.subject")}</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border-custom rounded-none text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors">
                        <option value="general">{t("form.subjectOptions.general")}</option>
                        <option value="sales">{t("form.subjectOptions.sales")}</option>
                        <option value="support">{t("form.subjectOptions.support")}</option>
                        <option value="api">{t("form.subjectOptions.api")}</option>
                        <option value="partnership">{t("form.subjectOptions.partnership")}</option>
                        <option value="demo">{t("form.subjectOptions.demo")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.message")}</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-background border border-border-custom rounded-none text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors h-28 resize-none" placeholder={t("form.messagePlaceholder")} required />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
                      {status === "submitting" ? t("form.sending") : t("form.submit")}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative py-24 border-b border-border-custom overflow-hidden noise-overlay">
          <div className="absolute inset-0 -z-10">
            <Image src="/ship.jpeg" alt="Cargo ship transportation" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <AnimatedSection className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold uppercase font-sans tracking-tight leading-none">{t("cta.title")}</h2>
                <p className="text-sm text-foreground/70 font-sans font-medium">{t("cta.subtitle")}</p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Button variant="primary" href="/demo" size="lg">{t("cta.demoButton")}</Button>
                <Button variant="outline" href="/pricing" size="lg">{t("cta.pricingButton")}</Button>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-20" />
        </section>

      </main>
      <Footer />
    </div>
  );
}
