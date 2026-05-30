"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { navLinks as staticNavLinks } from "@/content";

import Image from "next/image";

interface NavbarProps {
  links?: { name: string; href: string }[];
}

export function Navbar({ links }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const NAV_LINKS = (links ?? staticNavLinks.map((l) => ({ name: l.label, href: l.href })));

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-border-light shadow-sm">
      <Container size="xl">
        <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between">

          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/Logo_Icon.png"
              alt="Shiv Prabha Foundation Logo"
              width={48}
              height={48}
              className="object-contain w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
            />
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold text-base sm:text-lg lg:text-xl text-text-dark leading-none tracking-tight">Shiv Prabha</span>
              <span className="font-bold text-xs sm:text-sm text-primary leading-tight">Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-primary font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="primary">Donate Now</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <Link href="/donate" tabIndex={-1}>
              <Button variant="primary" size="sm">Donate</Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute left-0 w-full bg-surface border-b border-border-light shadow-md transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden"
        )}
        style={{ top: "100%" }}
      >
        <nav className="flex flex-col p-3 sm:p-4 space-y-1 sm:space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base sm:text-lg font-medium text-text-dark hover:text-primary px-4 py-3 rounded-md hover:bg-bg-off-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
