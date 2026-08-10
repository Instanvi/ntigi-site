"use client";

import { useState, useEffect, ElementType } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import {
  Globe,
  List,
  X,
  Sun,
  Moon,
  CaretDown,
  Airplane,
  AirplaneTilt,
  ShieldCheck,
  Stack,
  Buildings,
  MapPinLine,
  Truck,
  CheckCircle,
  CreditCard,
  Warehouse,
  Cube,
  ArrowsInLineHorizontal,
  Package,
  ArrowUUpLeft,
  UserCircle,
  SquaresFour,
  Tag,
  PlayCircle,
  BookOpen,
  Envelope,
  Building,
  Briefcase,
  Article,
  ShoppingCart,
} from "@phosphor-icons/react";
import { Button } from "./ui/Button";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

  /* ─── Solutions ─── */
  const solutionTabs = [
    { id: "forwarders", label: t("solutionTabs.forwarders"), icon: Airplane },
    { id: "courier",    label: t("solutionTabs.courier"),    icon: Truck },
    { id: "warehouse",  label: t("solutionTabs.warehouse"),  icon: Warehouse },
    { id: "ecommerce",  label: t("solutionTabs.ecommerce"),  icon: ShoppingCart },
  ];

  const solutionItems: Record<string, { name: string; desc: string; href: string; icon: ElementType }[]> = {
    forwarders: [
      { name: t("solutions.forwarders.intlForwarding.name"), desc: t("solutions.forwarders.intlForwarding.desc"), href: "/solutions/international-forwarding", icon: AirplaneTilt },
      { name: t("solutions.forwarders.customs.name"),        desc: t("solutions.forwarders.customs.desc"),        href: "/solutions/customs-compliance",        icon: ShieldCheck },
      { name: t("solutions.forwarders.consolidation.name"),  desc: t("solutions.forwarders.consolidation.desc"),  href: "/solutions/consolidation",             icon: Stack },
      { name: t("solutions.forwarders.multiBranch.name"),    desc: t("solutions.forwarders.multiBranch.desc"),    href: "/solutions/multi-branch",              icon: Buildings },
    ],
    courier: [
      { name: t("solutions.courier.routeOpt.name"), desc: t("solutions.courier.routeOpt.desc"), href: "/solutions/route-optimization", icon: MapPinLine },
      { name: t("solutions.courier.fleet.name"),    desc: t("solutions.courier.fleet.desc"),    href: "/solutions/fleet-management",   icon: Truck },
      { name: t("solutions.courier.pod.name"),      desc: t("solutions.courier.pod.desc"),      href: "/solutions/proof-of-delivery",  icon: CheckCircle },
      { name: t("solutions.courier.finance.name"),  desc: t("solutions.courier.finance.desc"),  href: "/solutions/finance-billing",    icon: CreditCard },
    ],
    warehouse: [
      { name: t("solutions.warehouse.wms.name"),              desc: t("solutions.warehouse.wms.desc"),              href: "/solutions/warehouse-management", icon: Warehouse },
      { name: t("solutions.warehouse.inventory.name"),        desc: t("solutions.warehouse.inventory.desc"),        href: "/solutions/inventory-control",    icon: Cube },
      { name: t("solutions.warehouse.consolidationHub.name"), desc: t("solutions.warehouse.consolidationHub.desc"), href: "/solutions/consolidation-hub",    icon: ArrowsInLineHorizontal },
    ],
    ecommerce: [
      { name: t("solutions.ecommerce.fulfillment.name"), desc: t("solutions.ecommerce.fulfillment.desc"), href: "/solutions/ecommerce-fulfillment", icon: Package },
      { name: t("solutions.ecommerce.returns.name"),     desc: t("solutions.ecommerce.returns.desc"),     href: "/solutions/returns",               icon: ArrowUUpLeft },
      { name: t("solutions.ecommerce.portal.name"),      desc: t("solutions.ecommerce.portal.desc"),      href: "/solutions/customer-portal",       icon: UserCircle },
    ],
  };

  /* ─── Platform ─── */
  const platformItems = [
    { name: t("platform.overview.name"), desc: t("platform.overview.desc"), href: "/platform",  icon: SquaresFour },
    { name: t("platform.pricing.name"),  desc: t("platform.pricing.desc"),  href: "/pricing",   icon: Tag },
    { name: t("platform.demo.name"),     desc: t("platform.demo.desc"),     href: "/demo",      icon: PlayCircle },
  ];

  /* ─── Resources ─── */
  const resourceItems = [
    { name: t("resources.docs.name"),    desc: t("resources.docs.desc"),    href: "/docs",    icon: BookOpen },
    { name: t("resources.contact.name"), desc: t("resources.contact.desc"), href: "/contact", icon: Envelope },
  ];

  /* ─── Company ─── */
  const companyItems = [
    { name: t("company.about.name"),   desc: t("company.about.desc"),   href: "/company",  icon: Building },
    { name: t("company.careers.name"), desc: t("company.careers.desc"), href: "/careers",  icon: Briefcase },
    { name: t("company.blog.name"),    desc: t("company.blog.desc"),    href: "/blog",      icon: Article },
  ];

  const toggleMobileSection = (section: string) => {
    setMobileExpanded((prev) => (prev === section ? null : section));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border-custom h-16 flex items-center transition-all duration-300">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto hover:opacity-90 transition-opacity" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <MegaMenu label={t("nav.solutions")} tabs={solutionTabs} items={solutionItems} />
          <MegaMenu label={t("nav.platform")}  items={platformItems} />
          <MegaMenu label={t("nav.resources")} items={resourceItems} />
          <MegaMenu label={t("nav.company")}   items={companyItems} />
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer p-1 rounded-none border border-border-custom hover:bg-primary/5"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-500" />}
          </button>

          <Button variant="outline" href="https://new.ntigi.cm/login" className="px-4 py-1.5 text-[11px]">
            {t("myAccount")}
          </Button>

          <Button variant="primary" size="sm" href="/demo" className="px-4 py-1.5 text-[11px]">
            {t("demo")}
          </Button>

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-[11px] text-foreground/70">
            <Globe className="h-3.5 w-3.5" />
            <button
              onClick={() => switchLocale("en")}
              className={`px-1 cursor-pointer transition-colors ${locale === "en" ? "text-blue-500 font-bold" : "hover:text-foreground"}`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => switchLocale("fr")}
              className={`px-1 cursor-pointer transition-colors ${locale === "fr" ? "text-blue-500 font-bold" : "hover:text-foreground"}`}
              aria-label="Passer en français"
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex lg:hidden items-center justify-center w-8 h-8 rounded-none text-foreground/75 hover:bg-primary/5 hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border-custom shadow-glow lg:hidden flex flex-col p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">

          {/* Solutions */}
          <div className="border-b border-border-custom/50">
            <button
              onClick={() => toggleMobileSection("solutions")}
              className="w-full flex items-center justify-between py-3 text-xs font-bold tracking-wider uppercase text-foreground/80"
            >
              {t("nav.solutions")}
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "solutions" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "solutions" && (
              <div className="pb-3 space-y-4">
                {solutionTabs.map((tab) => (
                  <div key={tab.id} className="pl-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1.5">
                      {tab.icon && <tab.icon className="h-3 w-3" />}
                      {tab.label}
                    </div>
                    <div className="space-y-0.5">
                      {solutionItems[tab.id].map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-1.5 py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                        >
                          {item.icon && <item.icon className="h-3 w-3 shrink-0" />}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Platform */}
          <div className="border-b border-border-custom/50">
            <button
              onClick={() => toggleMobileSection("platform")}
              className="w-full flex items-center justify-between py-3 text-xs font-bold tracking-wider uppercase text-foreground/80"
            >
              {t("nav.platform")}
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "platform" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "platform" && (
              <div className="pb-3 space-y-0.5 pl-2">
                {platformItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1.5 py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                  >
                    {item.icon && <item.icon className="h-3 w-3 shrink-0" />}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="border-b border-border-custom/50">
            <button
              onClick={() => toggleMobileSection("resources")}
              className="w-full flex items-center justify-between py-3 text-xs font-bold tracking-wider uppercase text-foreground/80"
            >
              {t("nav.resources")}
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "resources" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "resources" && (
              <div className="pb-3 space-y-0.5 pl-2">
                {resourceItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1.5 py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                  >
                    {item.icon && <item.icon className="h-3 w-3 shrink-0" />}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company */}
          <div className="border-b border-border-custom/50">
            <button
              onClick={() => toggleMobileSection("company")}
              className="w-full flex items-center justify-between py-3 text-xs font-bold tracking-wider uppercase text-foreground/80"
            >
              {t("nav.company")}
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "company" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "company" && (
              <div className="pb-3 space-y-0.5 pl-2">
                {companyItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1.5 py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                  >
                    {item.icon && <item.icon className="h-3 w-3 shrink-0" />}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Theme + Language row */}
          <div className="flex justify-between items-center py-3 border-b border-border-custom/50">
            <span className="text-xs text-foreground/60 uppercase font-bold tracking-wider">{t("theme")}</span>
            <div className="flex items-center gap-3">
              {/* Language switcher mobile */}
              <div className="flex items-center gap-1 text-[11px] text-foreground/70">
                <Globe className="h-3.5 w-3.5" />
                <button
                  onClick={() => switchLocale("en")}
                  className={`px-1 cursor-pointer transition-colors ${locale === "en" ? "text-blue-500 font-bold" : "hover:text-foreground"}`}
                >
                  EN
                </button>
                <span className="text-foreground/30">|</span>
                <button
                  onClick={() => switchLocale("fr")}
                  className={`px-1 cursor-pointer transition-colors ${locale === "fr" ? "text-blue-500 font-bold" : "hover:text-foreground"}`}
                >
                  FR
                </button>
              </div>
              <button
                onClick={toggleTheme}
                className="text-foreground p-1.5 rounded-none border border-border-custom hover:bg-primary/5 transition-colors"
              >
                {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-500" />}
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-3 space-y-2">
            <Button
              variant="outline"
              href="https://new.ntigi.cm/login"
              className="w-full text-center py-2.5 text-xs font-bold"
              onClick={() => setIsOpen(false)}
            >
              {t("myAccount")}
            </Button>
            <Button
              variant="primary"
              href="/demo"
              className="w-full text-center py-2.5 text-xs font-bold"
              onClick={() => setIsOpen(false)}
            >
              {t("demo")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
