"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import { LinkedinLogo, FacebookLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Button } from "./ui";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-background border-t border-border-custom text-foreground/80 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">

          {/* Column 1: Solutions */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              {t("solutions")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/solutions/international-forwarding" className="hover:text-blue-500 transition-colors">{t("links.intlForwarding")}</Link></li>
              <li><Link href="/solutions/customs-compliance"       className="hover:text-blue-500 transition-colors">{t("links.customs")}</Link></li>
              <li><Link href="/solutions/warehouse-management"     className="hover:text-blue-500 transition-colors">{t("links.warehouse")}</Link></li>
              <li><Link href="/solutions/fleet-management"         className="hover:text-blue-500 transition-colors">{t("links.courier")}</Link></li>
              <li><Link href="/solutions/ecommerce-fulfillment"    className="hover:text-blue-500 transition-colors">{t("links.ecommerce")}</Link></li>
              <li><Link href="/solutions/finance-billing"          className="hover:text-blue-500 transition-colors">{t("links.finance")}</Link></li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              {t("platform")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/platform" className="hover:text-blue-500 transition-colors">{t("links.platformOverview")}</Link></li>
              <li><Link href="/pricing"  className="hover:text-blue-500 transition-colors">{t("links.pricing")}</Link></li>
              <li><Link href="/demo"     className="hover:text-blue-500 transition-colors">{t("links.requestDemo")}</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              {t("resources")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/docs"    className="hover:text-blue-500 transition-colors">{t("links.docs")}</Link></li>
              <li><Link href="/support" className="hover:text-blue-500 transition-colors">{t("links.support")}</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">{t("links.contact")}</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              {t("company")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/company" className="hover:text-blue-500 transition-colors">{t("links.about")}</Link></li>
              <li><Link href="/careers" className="hover:text-blue-500 transition-colors">{t("links.careers")}</Link></li>
              <li><Link href="/blog"    className="hover:text-blue-500 transition-colors">{t("links.blog")}</Link></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">{t("newsletter")}</h4>
            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
              {t("newsletterDesc")}
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative border-b border-border-custom pb-1.5">
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="w-full bg-transparent border-none text-foreground placeholder-foreground/40 focus:outline-none text-xs uppercase tracking-wider"
                  required
                />
              </div>
              <Button type="submit" variant="primary">
                {t("signUp")}
              </Button>
            </form>
          </div>
        </div>

        {/* Middle row */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-border-custom gap-4">
          <Link href="/" className="inline-block">
            <Logo className="h-7.5 w-auto opacity-80" />
          </Link>
          <div className="flex gap-2">
            <a href="https://linkedin.com/company/ntigi" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="LinkedIn">
              <LinkedinLogo className="h-4.5 w-4.5" />
            </a>
            <a href="https://facebook.com/ntigi" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="Facebook">
              <FacebookLogo className="h-4.5 w-4.5" />
            </a>
            <a href="https://twitter.com/ntigi" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="Twitter">
              <TwitterLogo className="h-4.5 w-4.5" />
            </a>
            <a href="https://youtube.com/@ntigi" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="YouTube">
              <YoutubeLogo className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 text-xs text-foreground/50 gap-4">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/privacy" className="hover:text-foreground transition-colors">{t("privacy")}</Link>
            <Link href="/terms"   className="hover:text-foreground transition-colors">{t("terms")}</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">{t("cookies")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
