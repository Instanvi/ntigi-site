"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { MagnifyingGlass, Globe, CaretDown, List, X, Sun, Moon } from "@phosphor-icons/react";
import { Button } from "./ui/Button";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("forwarders");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on load
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

  const roles = [
    { id: "forwarders", name: "Freight Forwarders" },
    { id: "brokers", name: "Customs Brokers" },
    { id: "warehouse", name: "Warehouse Operators" },
    { id: "carriers", name: "Carriers" },
  ];

  const solutions = {
    forwarders: [
      { name: "International Forwarding", desc: "Unlock the world's supply chains with deeply integrated forwarding.", href: "/solutions/shipment-management" },
      { name: "Customs & Compliance", desc: "Centralize your global trade operations and strengthen compliance.", href: "/solutions/manifest-voyage" },
      { name: "Transit Warehouse", desc: "Streamline goods-in to goods-out with accuracy and control.", href: "/solutions/warehouse" },
      { name: "Route Optimization", desc: "AI-powered route planning for optimal delivery times.", href: "/solutions/route-optimization" },
    ],
    brokers: [
      { name: "Customs & Compliance", desc: "Centralize your global trade operations and strengthen compliance.", href: "/solutions/manifest-voyage" },
      { name: "Bonded Warehouse", desc: "Integrate your customs brokerage and warehouse operations.", href: "/solutions/warehouse" },
    ],
    warehouse: [
      { name: "Product Warehouse", desc: "A scalable solution to optimize your warehousing.", href: "/solutions/warehouse" },
      { name: "Transit Warehouse", desc: "Streamline goods-in to goods-out with accuracy and control.", href: "/solutions/warehouse" },
      { name: "Cargo Customization", desc: "22+ cargo handling method tags directly in the system.", href: "/solutions/shipment-management" },
    ],
    carriers: [
      { name: "Liner and Agency", desc: "Control your entire ocean operations from a single platform.", href: "/solutions/manifest-voyage" },
      { name: "Finance & Billing", desc: "Process cash, card, and mobile payments automatically.", href: "/solutions/finance" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border-custom h-16 flex items-center transition-all duration-300">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto hover:opacity-90 transition-opacity" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors py-5 cursor-pointer"
              >
                Solutions
                <CaretDown className="h-3 w-3 text-gray-400" />
              </button>
              
              {solutionsOpen && (
                <div className="absolute top-full left-[-200px] w-[900px] bg-background border border-border-custom rounded-none shadow-glow overflow-hidden flex z-50">
                  <div className="w-[220px] bg-background/95 border-r border-border-custom p-4 space-y-1">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        onMouseEnter={() => setActiveTab(role.id)}
                        className={`w-full text-left px-3 py-2 text-xs tracking-wider uppercase rounded-none transition-all flex items-center justify-between cursor-pointer ${
                          activeTab === role.id 
                            ? "bg-primary/10 border-l-2 border-blue-500 text-[#3b82f6]" 
                            : "text-foreground/75 hover:bg-primary/5 hover:text-foreground"
                        }`}
                      >
                        {role.name}
                      </button>
                    ))}
                  </div>

                  {/* Middle Column: Solutions Cards Grid */}
                  <div className="flex-1 p-5 grid grid-cols-2 gap-3 bg-background/85">
                    {solutions[activeTab as keyof typeof solutions].map((sol, index) => (
                      <Link
                        key={index}
                        href={sol.href}
                        className="group p-3 rounded-none border border-transparent hover:border-border-custom hover:bg-primary/5 transition-all duration-200"
                      >
                        <h4 className="text-xs font-bold text-foreground group-hover:text-blue-400 transition-colors mb-1 uppercase tracking-wider">
                          {sol.name}
                        </h4>
                        <p className="text-[11px] text-foreground/70 leading-relaxed">
                          {sol.desc}
                        </p>
                      </Link>
                    ))}
                  </div>

                  {/* Right Column: eBook Callout Card */}
                  <div className="w-[200px] bg-background/95 border-l border-border-custom p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] tracking-wider uppercase border border-blue-500/30 bg-[#3b82f6]/10 text-blue-400 px-2 py-0.5 rounded-none">
                        eBook
                      </span>
                      <h4 className="text-xs uppercase tracking-wider text-foreground mt-4 leading-snug">
                        Reducing empty movements
                      </h4>
                      <p className="text-[10px] text-foreground/70 mt-2 leading-relaxed">
                        Blueprint to optimize global logistics.
                      </p>
                    </div>
                    <Button variant="secondary" size="sm" href="/resources" className="w-full mt-4 text-[10px]">
                      Download
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Link href="/platform" className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors">
              Platform
            </Link>
            <Link href="/resources" className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors">
              Resources
            </Link>
            <Link href="/company" className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors">
              Company
            </Link>
        </nav>

        {/* Right side: Search, Theme, My Account, Demo, Lang selector */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer" aria-label="Search">
            <MagnifyingGlass className="h-4 w-4" />
          </button>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer p-1 rounded-none border border-border-custom hover:bg-primary/5"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-500" />}
          </button>
          
          <Button 
            variant="outline"
            href="/company"
            className="px-4 py-1.5 text-[11px]"
          >
            My Account
          </Button>

          <Button 
            variant="primary" 
            size="sm"
            href="/demo"
            className="px-4 py-1.5 text-[11px]"
          >
            Demo
          </Button>

          <div className="flex items-center gap-1 text-[11px] text-foreground/70 hover:text-foreground cursor-pointer">
            <Globe className="h-3.5 w-3.5" />
            <span>EN</span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex lg:hidden items-center justify-center w-8 h-8 rounded-none text-foreground/75 hover:bg-primary/5 hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border-custom shadow-glow lg:hidden flex flex-col p-5 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Solutions Dropdown */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between text-xs tracking-wider uppercase text-foreground/80 py-1 font-bold"
            >
              <span>Solutions</span>
              <CaretDown className={`h-3 w-3 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileSolutionsOpen && (
              <div className="pl-4 space-y-3 border-l-2 border-blue-500/30 ml-2">
                {roles.map((role) => (
                  <div key={role.id} className="space-y-2">
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      {role.name}
                    </div>
                    <div className="space-y-2 pl-2">
                      {solutions[role.id as keyof typeof solutions].map((sol, index) => (
                        <Link
                          key={index}
                          href={sol.href}
                          className="block py-1.5 px-2 rounded-none border border-transparent hover:border-border-custom hover:bg-primary/5 transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="text-[11px] font-bold text-foreground">
                            {sol.name}
                          </div>
                          <div className="text-[10px] text-foreground/60 mt-0.5">
                            {sol.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/platform" className="text-xs tracking-wider uppercase text-foreground/80 py-1 font-bold" onClick={() => setIsOpen(false)}>
            Platform
          </Link>
          <Link href="/resources" className="text-xs tracking-wider uppercase text-foreground/80 py-1 font-bold" onClick={() => setIsOpen(false)}>
            Resources
          </Link>
          <Link href="/company" className="text-xs tracking-wider uppercase text-foreground/80 py-1 font-bold" onClick={() => setIsOpen(false)}>
            Company
          </Link>
          
          <div className="flex justify-between items-center py-2 border-t border-b border-border-custom/50 mt-2">
            <span className="text-xs text-foreground/60 uppercase">Theme</span>
            <button 
              onClick={toggleTheme}
              className="text-foreground p-1 rounded-none border border-border-custom"
            >
              {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-500" />}
            </button>
          </div>

          <Button 
            variant="outline"
            href="/company"
            className="w-full text-center py-2 text-xs font-bold"
            onClick={() => setIsOpen(false)}
          >
            My Account
          </Button>
          <Button 
            variant="primary"
            href="/demo"
            className="w-full text-center py-2 text-xs font-bold"
            onClick={() => setIsOpen(false)}
          >
            Demo
          </Button>
        </div>
      )}
    </header>
  );
}
