"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { navLinks } from "@/content";

const NAV_LINKS = navLinks.map((l) => ({ name: l.label, href: l.href }));

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-border-light shadow-sm">
      <Container size="xl">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-heading text-primary">
              NGO<span className="text-accent-orange">Fund</span>
            </span>
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
                <Button variant="accent">Donate Now</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <Link href="/donate" tabIndex={-1}>
              <Button variant="accent" size="sm">Donate</Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-border-light shadow-md transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0 overflow-hidden"
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-text-dark hover:text-primary px-4 py-2 rounded-md hover:bg-bg-off-white transition-colors"
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
