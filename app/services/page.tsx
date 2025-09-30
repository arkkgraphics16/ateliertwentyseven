import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Catering",
    description: "Customized multi-course menus and live chef stations for gatherings from 20 to 300 guests.",
    cta: "Plan catering"
  },
  {
    title: "Delivery",
    description: "Chef-prepared dishes delivered chilled or hot, complete with plating instructions.",
    cta: "View delivery menu"
  },
  {
    title: "Private Dining",
    description: "Reserve our brass salon or terrace greenhouse with dedicated service and sommelier pairings.",
    cta: "Design your event"
  },
  {
    title: "Corporate Events",
    description: "Hybrid meeting packages with curated bites, mixology classes, and virtual broadcast support.",
    cta: "Connect with us"
  }
];

export default function ServicesPage() {
  return (
    <div className="container-grid mt-16 pb-24">
      <Badge className="w-max">For every occasion</Badge>
      <h1 className="mt-4 text-4xl font-semibold">Services</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/70">
        Atelier 27 travels from intimate dinners to large-scale celebrations. Explore flexible services designed to bring our international kitchen to you.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-brass">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold text-ink">{service.title}</h2>
              <p className="text-ink/70">{service.description}</p>
            </div>
            <Button asChild variant="secondary" className="mt-6 w-max">
              <Link href="/contact" aria-label={`Contact Atelier 27 about ${service.title}`}>
                {service.cta}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
