"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CaretDown } from "@phosphor-icons/react";

interface MegaMenuItem {
    name: string;
    desc: string;
    href: string;
}

interface MegaMenuTab {
    id: string;
    label: string;
}

interface MegaMenuProps {
    label: string;
    tabs?: MegaMenuTab[];
    items: Record<string, MegaMenuItem[]> | MegaMenuItem[];
}

export default function MegaMenu({ label, tabs, items }: MegaMenuProps) {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs && tabs.length > 0 ? tabs[0].id : "");
    const [animKey, setAnimKey] = useState(tabs && tabs.length > 0 ? tabs[0].id : "flat");
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const hasSidebar = !!tabs && tabs.length > 0;

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const handleEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setOpen(true);
    };

    const handleLeave = () => {
        timerRef.current = setTimeout(() => {
            setOpen(false);
        }, 150);
    };

    const handleTabChange = (tabId: string) => {
        if (tabId === activeTab) return;
        setActiveTab(tabId);
        setAnimKey(tabId + Date.now());
    };

    const getActiveItems = (): MegaMenuItem[] => {
        if (hasSidebar && typeof items === "object" && !Array.isArray(items)) {
            return items[activeTab] || [];
        }
        return Array.isArray(items) ? items : [];
    };

    const activeItems = getActiveItems();

    const gridClass = hasSidebar
        ? "grid-cols-2"
        : activeItems.length <= 4
            ? "grid-cols-2"
            : "grid-cols-3";

    return (
        <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <button className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors py-5 cursor-pointer">
                {label}
                <CaretDown className="h-3 w-3 text-gray-400" />
            </button>

            {open && (
                <div
                    className="fixed left-1/2 -translate-x-1/2 top-14 z-50 w-[min(900px,calc(100vw-2rem))] bg-background border border-border-custom rounded-none shadow-glow overflow-hidden flex max-h-[calc(100vh-5rem)]"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    {/* Sidebar Solutions only */}
                    {hasSidebar && tabs && (
                        <div className="w-[220px] bg-background/95 border-r border-border-custom p-5 space-y-2 shrink-0">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onMouseEnter={() => handleTabChange(tab.id)}
                                    className={`w-full text-left px-4 py-3 text-[13px] tracking-wider uppercase rounded-none transition-all duration-200 flex items-center justify-between cursor-pointer ${activeTab === tab.id
                                            ? "bg-primary/10 border-l-2 border-blue-500 text-[#3b82f6]"
                                            : "text-foreground/75 hover:bg-primary/5 hover:text-foreground"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-6 bg-background/85 overflow-y-auto">
                        <div
                            key={hasSidebar ? animKey : "flat"}
                            className={`grid gap-4 mega-swap ${gridClass}`}
                        >
                            {activeItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group p-4 rounded-none border border-transparent hover:border-border-custom hover:bg-primary/5 transition-all duration-200"
                                >
                                    <h4 className="text-[13px] font-bold text-foreground group-hover:text-blue-400 transition-colors mb-1.5 uppercase tracking-wider">
                                        {item.name}
                                    </h4>
                                    <p className="text-[12px] text-foreground/70 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes megaSwap {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.995);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .mega-swap {
          animation: megaSwap 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>
    );
}