import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const milestones = [
  { year: "2014", description: "Atelier 27 opens its first table in Paris." },
  { year: "2017", description: "Launch of the traveling chef residency program." },
  { year: "2020", description: "Second branch debuts in Singapore with terrace dining." },
  { year: "2024", description: "Global tasting menu inspired by guest cities." }
];

const team = [
  { name: "Renée Laurent", role: "Executive Chef", image: "/images/team/renee.jpg" },
  { name: "Marco Ishikawa", role: "Culinary Director", image: "/images/team/marco.jpg" },
  { name: "Priya Anand", role: "Beverage Curator", image: "/images/team/priya.jpg" },
  { name: "Noah Bennett", role: "Experience Host", image: "/images/team/noah.jpg" }
];

export default function AboutPage() {
  return (
    <div className="container-grid mt-16 pb-24 space-y-16">
      <section className="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-center">
        <div className="space-y-6">
          <Badge className="w-max">Our story</Badge>
          <h1 className="text-4xl font-semibold">About Atelier 27</h1>
          <p className="text-lg text-ink/70">
            Founded by globetrotting chefs and designers, Atelier 27 is a modern bistro weaving together international flavors with the warmth of neighborhood dining rooms.
          </p>
          <p className="text-ink/70">
            Our kitchens follow a simple promise: seek inspiration from every city we visit, source responsibly, and host as if each table were in our own home.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-accent/10 text-accent">Sustainably Sourced</Badge>
            <Badge className="bg-primary/10 text-primary">Brass Hospitality</Badge>
            <Badge className="bg-muted text-ink/70">City Partnerships</Badge>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-muted/60">
          <Image
            src="/images/hero/about-chef.jpg"
            alt="Chef plating a dish"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold">Timeline</h2>
        <div className="mt-8 space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-atelier sm:flex-row sm:items-center sm:justify-between">
              <span className="text-2xl font-semibold text-primary">{milestone.year}</span>
              <p className="text-ink/70">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold">Team Atelier</h2>
        <p className="mt-2 max-w-3xl text-ink/70">
          Designers, artisans, and hosts unite to compose every Atelier 27 experience. Meet some of the faces welcoming you nightly.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-3xl bg-white shadow-atelier">
              <div className="relative h-64 w-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-ink">{member.name}</p>
                <p className="text-sm text-ink/60">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
