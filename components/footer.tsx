import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-muted/60 bg-white">
      <div className="container-grid grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Atelier 27</h3>
          <p className="text-sm text-ink/70">
            A modern table for every city. Atelier 27 curates global flavors, seasonal sourcing, and warm hospitality.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink/70">Visit</h4>
          <p className="mt-3 text-sm text-ink/70">
            123 Culinary Avenue
            <br />
            Metropolis, NY 10001
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink/70">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li>
              Phone: <span className="font-medium">{process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+00 000 0000"}</span>
            </li>
            <li>
              <Link href={process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/0000000000"} className="hover:text-accent">
                WhatsApp
              </Link>
            </li>
            <li>
              <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com/atelier27"} className="hover:text-accent">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink/70">Hours</h4>
          <p className="text-sm text-ink/70">Open daily from 11:00 to 23:00</p>
          <Link href="/contact" className="badge-pill inline-flex w-max bg-primary/10 text-sm font-semibold text-primary">
            Reserve Tonight
          </Link>
        </div>
      </div>
      <div className="border-t border-muted/40 py-6 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} Atelier 27. All rights reserved.
      </div>
    </footer>
  );
};
