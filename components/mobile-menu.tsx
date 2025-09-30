"use client";

import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  links: { href: string; label: string }[];
}

export const MobileMenu = ({ open, onOpenChange, links }: MobileMenuProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-surface" id="mobile-menu">
        <nav className="mt-12 flex flex-col gap-4 text-lg font-medium" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl px-4 py-3 transition hover:bg-muted/60"
              onClick={() => onOpenChange(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10">
          <Button asChild className="w-full">
            <Link href="/contact" onClick={() => onOpenChange(false)}>
              Reserve a Table
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
