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

          {/* Column 1: Solutions */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/international-forwarding" className="hover:text-blue-500 transition-colors">
                  International Forwarding
                </Link>
              </li>
              <li>
                <Link href="/solutions/customs-compliance" className="hover:text-blue-500 transition-colors">
                  Customs & Compliance
                </Link>
              </li>
              <li>
                <Link href="/solutions/warehouse-management" className="hover:text-blue-500 transition-colors">
                  Warehouse Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/fleet-management" className="hover:text-blue-500 transition-colors">
                  Courier & Delivery
                </Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce-fulfillment" className="hover:text-blue-500 transition-colors">
                  E-commerce Fulfillment
                </Link>
              </li>
              <li>
                <Link href="/solutions/finance-billing" className="hover:text-blue-500 transition-colors">
                  Finance & Billing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/platform" className="hover:text-blue-500 transition-colors">Platform Overview</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-500 transition-colors">Pricing</Link></li>
              <li><Link href="/demo" className="hover:text-blue-500 transition-colors">Request a Demo</Link></li>
              <li><Link href="/developers" className="hover:text-blue-500 transition-colors">API & Developers</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/docs" className="hover:text-blue-500 transition-colors">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-blue-500 transition-colors">Support Center</Link></li>
              <li><Link href="/resources/stories" className="hover:text-blue-500 transition-colors">Customer Stories</Link></li>
              <li><Link href="/partners" className="hover:text-blue-500 transition-colors">Partner Network</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/company" className="hover:text-blue-500 transition-colors">About NTIGI</Link></li>
              <li><Link href="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Newsletter</h4>
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
              <Button type="submit" variant="primary">
                Sign up now
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
          <p>© {new Date().getFullYear()} NTIGI. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}