import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="container-grid mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 via-primary to-accent p-10 text-white shadow-atelier">
        <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" aria-hidden />
        <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Book a Table Tonight</h2>
            <p className="mt-2 max-w-xl text-white/80">
              Let us prepare something unforgettable. Reservations confirm in under five minutes with personalized concierge follow-up.
            </p>
          </div>
          <Button asChild variant="outline" className="bg-white text-primary hover:bg-white/80">
            <Link href="/contact" aria-label="Reserve your table tonight">
              Reserve a Table
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
