import { ReservationForm } from "@/components/reservation-form";
import { HoursTable } from "@/components/hours-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const branches = [
  {
    name: "Paris Flagship",
    address: "27 Rue de l&apos;Atelier, Paris",
    phone: "+33 1 23 45 67 89"
  },
  {
    name: "Singapore Terrace",
    address: "88 Marina Esplanade, Singapore",
    phone: "+65 6123 4567"
  }
];

export default function ContactPage() {
  return (
    <div className="container-grid mt-16 pb-24">
      <Badge className="w-max">Reserve in minutes</Badge>
      <h1 className="mt-4 text-4xl font-semibold">Contact & Reservations</h1>
      <p className="mt-4 max-w-3xl text-lg text-ink/70">
        Tell us when you&apos;d like to dine and our concierge will confirm within five minutes. Prefer a call? Reach us directly on the hotline below.
      </p>
      <div className="mt-12 grid gap-12 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-8">
          <ReservationForm />
          <div className="rounded-3xl bg-white p-6 shadow-atelier">
            <h2 className="text-xl font-semibold text-ink">Direct hotline</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="badge-pill bg-primary/10 text-primary">
                {process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+00 000 0000"}
              </span>
              <Button asChild variant="secondary" size="sm">
                <a href={process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/0000000000"} target="_blank" rel="noreferrer">
                  WhatsApp Concierge
                </a>
              </Button>
              <Button asChild variant="secondary" size="sm">
                <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com/atelier27"} target="_blank" rel="noreferrer">
                  Facebook Messenger
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">Branch details</h2>
            <ul className="space-y-4 text-sm text-ink/70">
              {branches.map((branch) => (
                <li key={branch.name} className="rounded-3xl bg-white p-4 shadow-atelier">
                  <p className="text-lg font-semibold text-ink">{branch.name}</p>
                  <p dangerouslySetInnerHTML={{ __html: branch.address }} />
                  <p className="text-sm text-ink/60">{branch.phone}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-ink">Hours</h2>
            <p className="mt-2 text-sm text-ink/70">Our concierge desk responds instantly during service hours.</p>
            <div className="mt-4">
              <HoursTable />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-ink">Visit us</h2>
            <div className="mt-3 overflow-hidden rounded-3xl shadow-atelier">
              <iframe
                src="https://maps.example.com/embed/atelier27"
                title="Map to Atelier 27"
                width="100%"
                height="260"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
