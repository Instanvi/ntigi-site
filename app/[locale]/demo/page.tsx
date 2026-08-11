"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function RequestDemo() {
  const t = useTranslations("Demo");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    operationsArea: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "demo",
          data: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            company: formData.company,
            operationsArea: formData.operationsArea,
            notes: formData.notes,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Demo request sent successfully");
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", company: "", operationsArea: "", notes: "" });
      } else {
        toast.error(result.error || "Failed to send demo request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-16">

        <section className="relative min-h-[500px] border-b border-border-custom overflow-hidden noise-overlay flex items-stretch">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8 py-20 flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              <AnimatedSection className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight leading-none">
                  {t("hero.h1_part1")}<br /><span className="text-blue-500">{t("hero.h1_part2")}</span>
                </h1>
                <p className="text-md md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                  {t("hero.subtitle")}
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 z-0">
            <Image
              src="/shipment.jpg"
              alt="Logistics live demo demonstration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--console-header)] via-[var(--console-header)]/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        <section className="py-20 border-b border-border-custom">
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            {submitted ? (
              <AnimatedSection className="text-center py-16 space-y-6 bg-[var(--console-bg)] border border-border-custom rounded-none p-8">
                <div className="mx-auto w-16 h-16 bg-[var(--console-bg)] border border-border-custom rounded-none flex items-center justify-center text-blue-500">
                  <CheckCircle className="h-10 w-10 animate-bounce" />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">{t("success.title")}</h2>
                <p className="text-sm text-foreground/70 max-w-md mx-auto font-sans leading-relaxed font-medium">
                  {t("success.desc")}
                </p>
                <div className="pt-4">
                  <Button variant="secondary" href="/">{t("success.backButton")}</Button>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection className="bg-[var(--console-bg)] border border-border-custom rounded-none p-8 md:p-12 space-y-8">
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground">{t("form.heading")}</h2>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed font-medium">{t("form.subheading")}</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.firstName")}</label>
                      <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder={t("form.firstNamePlaceholder")} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.lastName")}</label>
                      <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder={t("form.lastNamePlaceholder")} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.email")}</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder={t("form.emailPlaceholder")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.company")}</label>
                    <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors" placeholder={t("form.companyPlaceholder")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.operationsArea")}</label>
                    <select required name="operationsArea" value={formData.operationsArea} onChange={handleChange} className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors">
                      <option value="">{t("form.operationsAreaPlaceholder")}</option>
                      <option value="freight">{t("form.operationsAreaOptions.freight")}</option>
                      <option value="courier">{t("form.operationsAreaOptions.courier")}</option>
                      <option value="warehouse">{t("form.operationsAreaOptions.warehouse")}</option>
                      <option value="other">{t("form.operationsAreaOptions.other")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">{t("form.notes")}</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} className="w-full px-4 py-3 border border-border-custom bg-background text-foreground rounded-none focus:outline-none focus:border-blue-500 transition-colors h-28 resize-none" placeholder={t("form.notesPlaceholder")}></textarea>
                  </div>
                  <Button variant="secondary" type="submit" disabled={isSubmitting} className="w-full py-4 text-base font-bold">
                    {isSubmitting ? t("form.submitting") : t("form.submitButton")}
                  </Button>
                </form>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
