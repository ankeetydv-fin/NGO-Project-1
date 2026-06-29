"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { navLinks } from "@/content";
import Image from "next/image";

const NAV_LINKS = navLinks.map((l) => ({ name: l.label, href: l.href }));

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Top Tier: Scrolls away with page */}
      <div className="bg-surface w-full hidden lg:block border-b border-border-light/40">
        <Container size="xl" className="px-0 sm:px-4 lg:px-8">
          <div className="flex items-stretch justify-between">
            {/* Logo Area - Made Bigger */}
            <Link href="/" className="py-3 pr-4 flex items-center gap-4 shrink-0">
              <Image
                src="/Logo_Icon.png"
                alt="Shiv Prabha Foundation Logo"
                width={80}
                height={80}
                className="object-contain w-16 h-16 lg:w-20 lg:h-20"
              />
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-2xl lg:text-3xl text-text-dark font-heading leading-tight tracking-tight uppercase">
                  Shiv Prabha
                </span>
                <span className="font-extrabold text-sm lg:text-base text-primary uppercase tracking-widest leading-tight">
                  Foundation
                </span>
              </div>
            </Link>

            {/* Contact Info (Red Rectangle) */}
            <div className="flex items-center justify-end bg-primary my-0 pl-12 pr-8 text-white gap-8 font-medium">
              <span className="flex items-center gap-2 text-sm z-10 hover:text-white/80 transition-colors cursor-pointer">
                <Mail size={16} /> info@shivprabha.org
              </span>
              <span className="flex items-center gap-2 text-sm z-10 hover:text-white/80 transition-colors cursor-pointer">
                <Phone size={16} /> +919818885691
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Tier: Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full bg-black shadow-md">
        <Container size="xl">
          <div className="flex h-16 items-center justify-between">
            
            {/* Mobile Top Bar (Logo & Toggle) - Visible only on small screens */}
            <div className="lg:hidden flex items-center justify-between w-full h-16">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/Logo_Icon.png" alt="Logo" width={48} height={48} className="object-contain w-10 h-10" />
                <div className="flex flex-col justify-center">
                  <span className="font-extrabold text-lg text-white font-heading leading-tight uppercase">
                    Shiv Prabha
                  </span>
                  <span className="font-extrabold text-[10px] text-primary uppercase tracking-widest leading-tight">
                    Foundation
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Links - matching previous text styles but for dark bg */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-start">
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-primary text-sm font-bold transition-colors py-4 uppercase tracking-wider"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Donate Button - Using standard Button component */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="primary">Donate Now</Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Dropdown */}
        <div
          className={cn(
            "lg:hidden absolute left-0 w-full bg-black border-t border-neutral-800 shadow-xl transition-all duration-300 ease-in-out z-50",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden"
          )}
          style={{ top: "100%" }}
        >
          <nav className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary font-bold px-4 py-3 rounded-md transition-colors text-base uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-4 sm:hidden">
               <Link href="/donate" tabIndex={-1} onClick={() => setIsOpen(false)}>
                 <Button variant="primary" className="w-full">Donate Now</Button>
               </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
