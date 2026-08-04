"use client";

import Link from "next/link";
import Logo from "./Logo";
import { LinkedinLogo, FacebookLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Button } from "./ui";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border-custom text-foreground/80 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
             Recommended
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/shipment-management" className="hover:text-blue-500 transition-colors">
                  Centralize Global Trade and Supply Chain
                </Link>
              </li>
              <li>
                <Link href="/solutions/warehouse" className="hover:text-blue-500 transition-colors">
                  Powerful Suite of Warehouse Management Systems
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-blue-500 transition-colors">
                  Seamless shipments on a single platform.
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
            Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/solutions/shipment-management" className="hover:text-blue-500 transition-colors">Forwarding</Link></li>
              <li><Link href="/solutions/manifest-voyage" className="hover:text-blue-500 transition-colors">Customs</Link></li>
              <li><Link href="/solutions/warehouse" className="hover:text-blue-500 transition-colors">Warehouse</Link></li>
              <li><Link href="/solutions/client-management" className="hover:text-blue-500 transition-colors">Ecommerce</Link></li>
              <li><Link href="/platform" className="hover:text-blue-500 transition-colors">Enterprise</Link></li>
              <li><Link href="/solutions/route-optimization" className="hover:text-blue-500 transition-colors">Transport</Link></li>
              <li><Link href="/solutions/finance" className="hover:text-blue-500 transition-colors">Finance</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
            Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/resources" className="hover:text-blue-500 transition-colors">NTIGI Partners</Link></li>
              <li><Link href="/resources" className="hover:text-blue-500 transition-colors">Support</Link></li>
              <li><Link href="/resources" className="hover:text-blue-500 transition-colors">Customer stories</Link></li>
              <li><Link href="/company" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
            NTIGI Global
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/company" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="/company" className="hover:text-blue-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">NEWSLETTER</h4>
            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
              Subscribe for the latest updates on new NTIGI functionality, success stories from our customers, and insights.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative border-b border-border-custom pb-1.5">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS*" 
                  className="w-full bg-transparent border-none text-foreground placeholder-foreground/40 focus:outline-none text-xs uppercase tracking-wider"
                  required
                />
              </div>
              <Button 
                type="submit"
                variant="primary">
                Sign up now
              </Button>
            </form>
          </div>
        </div>

        {/* Middle row: Logo and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-border-custom gap-4">
          <Link href="/" className="inline-block">
            <Logo className="h-7.5 w-auto opacity-80" />
          </Link>
          <div className="flex gap-2">
            <a href="https://linkedin.com" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="LinkedIn">
              <LinkedinLogo className="h-4.5 w-4.5" />
            </a>
            <a href="https://facebook.com" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="Facebook">
              <FacebookLogo className="h-4.5 w-4.5" />
            </a>
            <a href="https://twitter.com" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="Twitter">
              <TwitterLogo className="h-4.5 w-4.5" />
            </a>
            <a href="https://youtube.com" className="w-7 h-7 rounded-none border border-border-custom flex items-center justify-center hover:bg-primary/10 transition-colors text-foreground/60 hover:text-foreground" aria-label="YouTube">
              <YoutubeLogo className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Bottom footer: Copyright and legal links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 text-xs text-foreground/50 gap-4">
          <p>© {new Date().getFullYear()} NTIGI. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-foreground transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
