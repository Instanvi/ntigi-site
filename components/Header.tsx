"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Globe, List, X, Sun, Moon, CaretDown } from "@phosphor-icons/react";
import { Button } from "./ui/Button";
import MegaMenu from "./MegaMenu";

export default function Header() {
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

  /* ─── Data ─── */
  const solutionTabs = [
    { id: "forwarders", label: "Freight Forwarders" },
    { id: "courier", label: "Courier & Delivery" },
    { id: "warehouse", label: "Warehouse Operators" },
    { id: "ecommerce", label: "E-commerce" },
  ];
  const solutionItems: Record<string, { name: string; desc: string; href: string }[]> = {
    forwarders: [
      { name: "International Forwarding", desc: "End-to-end forwarding operations with multi-leg routing and agency networks.", href: "/solutions/international-forwarding" },
      { name: "Customs & Compliance", desc: "Automated declarations, duty calculations, and regulatory document generation.", href: "/solutions/customs-compliance" },
      { name: "Consolidation & Manifests", desc: "Group shipments, manage containers, and generate voyage manifests.", href: "/solutions/consolidation" },
      { name: "Multi-Branch Network", desc: "Inter-branch transfers, settlements, and role-based data isolation.", href: "/solutions/multi-branch" },
    ],
    courier: [
      { name: "Route Optimization", desc: "AI-powered planning for delivery times, fuel savings, and fleet efficiency.", href: "/solutions/route-optimization" },
      { name: "Fleet & Driver Management", desc: "Vehicle registration, maintenance schedules, and driver mobile app.", href: "/solutions/fleet-management" },
      { name: "Proof of Delivery", desc: "Signature capture, photo documentation, and real-time GPS tracking.", href: "/solutions/proof-of-delivery" },
      { name: "Finance & Billing", desc: "Cash, card, mobile money, COD tracking, and automated invoicing.", href: "/solutions/finance-billing" },
    ],
    warehouse: [
      { name: "Warehouse Management", desc: "Multi-warehouse support with shelf locations, capacity, and stock tracking.", href: "/solutions/warehouse-management" },
      { name: "Inventory & Stock Control", desc: "Real-time stock levels, receiving, dispatch, and bin management.", href: "/solutions/inventory-control" },
      { name: "Consolidation Hub", desc: "Pallet tracking, load optimization, and container manifest workflows.", href: "/solutions/consolidation-hub" },
    ],
    ecommerce: [
      { name: "Fulfillment Operations", desc: "High-volume order processing, bulk shipment creation, and tracking.", href: "/solutions/ecommerce-fulfillment" },
      { name: "Returns Management", desc: "Return shipment handling, refunds, and reverse logistics workflows.", href: "/solutions/returns" },
      { name: "Customer Portal", desc: "Self-service booking, tracking, invoice downloads, and payment history.", href: "/solutions/customer-portal" },
    ],
  };

  const platformItems = [
    { name: "Platform Overview", desc: "A unified view of how NTIGI connects your entire logistics operation.", href: "/platform" },
    { name: "Pricing", desc: "Transparent pricing for teams of all sizes. No hidden fees.", href: "/pricing" },
    { name: "Request a Demo", desc: "See NTIGI in action with a personalized walkthrough.", href: "/demo" },
    { name: "API & Developers", desc: "REST API, webhooks, SDKs, and integration guides.", href: "/developers" },
  ];

  const resourceItems = [
    { name: "Documentation", desc: "Comprehensive guides for users, admins, and developers.", href: "/docs" },
    { name: "Support Center", desc: "Searchable knowledge base and troubleshooting guides.", href: "/support" },
    { name: "Customer Stories", desc: "How freight forwarders and couriers scale with NTIGI.", href: "/resources/stories" },
    { name: "Partner Network", desc: "Explore our global network of agencies and integrators.", href: "/partners" },
    { name: "Contact Us", desc: "Reach our team for sales, support, or partnerships.", href: "/contact" },
  ];

  const companyItems = [
    { name: "About NTIGI", desc: "Our mission to modernize global logistics with offline-first technology.", href: "/company" },
    { name: "Careers", desc: "Engineering, sales, support, and logistics specialist roles.", href: "/careers" },
    { name: "Blog", desc: "Insights on logistics tech, compliance, and industry trends.", href: "/blog" },
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
          <MegaMenu label="Solutions" tabs={solutionTabs} items={solutionItems} />
          <MegaMenu label="Platform" items={platformItems} />
          <MegaMenu label="Resources" items={resourceItems} />
          <MegaMenu label="Company" items={companyItems} />
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={toggleTheme}
            className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer p-1 rounded-none border border-border-custom hover:bg-primary/5"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-500" />}
          </button>

          <Button variant="outline" href="https://new.ntigi.cm/login" className="px-4 py-1.5 text-[11px]">
            My Account
          </Button>

          <Button variant="primary" size="sm" href="/demo" className="px-4 py-1.5 text-[11px]">
            Demo
          </Button>

          <div className="flex items-center gap-1 text-[11px] text-foreground/70 hover:text-foreground cursor-pointer">
            <Globe className="h-3.5 w-3.5" />
            <span>EN</span>
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
              Solutions
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "solutions" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "solutions" && (
              <div className="pb-3 space-y-4">
                {solutionTabs.map((tab) => (
                  <div key={tab.id} className="pl-2">
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1.5">
                      {tab.label}
                    </div>
                    <div className="space-y-0.5">
                      {solutionItems[tab.id].map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                        >
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
              Platform
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "platform" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "platform" && (
              <div className="pb-3 space-y-0.5 pl-2">
                {platformItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                  >
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
              Resources
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "resources" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "resources" && (
              <div className="pb-3 space-y-0.5 pl-2">
                {resourceItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                  >
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
              Company
              <CaretDown className={`h-3 w-3 transition-transform ${mobileExpanded === "company" ? "rotate-180" : ""}`} />
            </button>
            {mobileExpanded === "company" && (
              <div className="pb-3 space-y-0.5 pl-2">
                {companyItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 px-2 text-[11px] text-foreground/80 hover:text-blue-400 hover:bg-primary/5 transition-colors rounded-none"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <div className="flex justify-between items-center py-3 border-b border-border-custom/50">
            <span className="text-xs text-foreground/60 uppercase font-bold tracking-wider">Theme</span>
            <button
              onClick={toggleTheme}
              className="text-foreground p-1.5 rounded-none border border-border-custom hover:bg-primary/5 transition-colors"
            >
              {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-500" />}
            </button>
          </div>

          {/* CTAs */}
          <div className="pt-3 space-y-2">
            <Button
              variant="outline"
              href="https://new.ntigi.cm/login"
              className="w-full text-center py-2.5 text-xs font-bold"
              onClick={() => setIsOpen(false)}
            >
              My Account
            </Button>
            <Button
              variant="primary"
              href="/demo"
              className="w-full text-center py-2.5 text-xs font-bold"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}