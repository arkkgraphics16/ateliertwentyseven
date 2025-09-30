"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 120], ["rgba(247,245,240,0)", "rgba(247,245,240,0.95)"]);
  const shadow = useTransform(scrollY, [0, 120], ["0 0 0 rgba(0,0,0,0)", "0 10px 30px rgba(16,38,73,0.08)"]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      style={{ backgroundColor: background, boxShadow: shadow as any }}
    >
      <div className="container-grid flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-ink" aria-label="Atelier 27 home">
          <span className="h-10 w-10 rounded-full bg-primary/10" aria-hidden />
          Atelier 27
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Button asChild>
            <Link href="/contact" aria-label="Reserve a table">
              Reserve a Table
            </Link>
          </Button>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="secondary"
            size="sm"
            className="gap-2"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
            Menu
          </Button>
          <MobileMenu open={open} onOpenChange={setOpen} links={navLinks} />
        </div>
      </div>
    </motion.header>
  );
};
