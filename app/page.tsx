import Image from "next/image";
import { Hero } from "@/components/hero";
import { StatBar } from "@/components/stat-bar";
import { DishCard } from "@/components/dish-card";
import { WhyUs } from "@/components/why-us";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { VideoModal } from "@/components/video-modal";
import { Button } from "@/components/ui/button";

const signatureDishes = [
  {
    name: "Charred Octopus",
    description: "Smoked paprika, preserved lemon aioli, fennel salad.",
    price: 19,
    image: "/images/dishes/charred-octopus.jpg",
    tags: ["gluten-free", "bestseller"]
  },
  {
    name: "Lobster Tagliatelle",
    description: "Bisque emulsion, cherry tomato confit, chive oil.",
    price: 29,
    image: "/images/dishes/lobster-tagliatelle.jpg",
    tags: ["bestseller"]
  },
  {
    name: "Black Truffle Mafaldine",
    description: "Forest mushrooms, black garlic crumble, pecorino.",
    price: 28,
    image: "/images/dishes/truffle-mafaldine.jpg",
    tags: ["vegetarian"]
  },
  {
    name: "Harissa Lamb Rack",
    description: "Smoked carrot purée, pistachio dukkah, mint jus.",
    price: 36,
    image: "/images/dishes/harissa-lamb.jpg",
    tags: ["spicy"]
  },
  {
    name: "Miso Caramel Cheesecake",
    description: "Sesame brittle, black sesame tuile, yuzu gel.",
    price: 13,
    image: "/images/dishes/miso-caramel-cheesecake.jpg"
  },
  {
    name: "Saffron Gin Fizz",
    description: "Citrus cordial, saffron mist, elderflower foam.",
    price: 15,
    image: "/images/dishes/saffron-gin-fizz.jpg",
    tags: ["bestseller"]
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBar />
      <section className="container-grid mt-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Signature dishes</h2>
            <p className="mt-2 max-w-2xl text-ink/70">
              Spotlighting Atelier 27 classics that travel across our menus. Each plate captures our love for color, texture, and seasonality.
            </p>
          </div>
          <Button asChild variant="secondary">
            <a href="/menu" aria-label="See the full menu">
              Explore full menu
            </a>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </section>
      <WhyUs />
      <section className="container-grid mt-24 grid gap-10 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">An evening at Atelier 27</h2>
          <p className="text-ink/70">
            Slip into our brass-lit dining rooms or terrace lounges while we choreograph a journey from welcome cocktail to dessert cart.
          </p>
          <div className="relative overflow-hidden rounded-3xl bg-muted/60">
            <Image
              src="/images/hero/dining-room.jpg"
              alt="Guests dining at Atelier 27"
              width={960}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="card-surface flex flex-col justify-between rounded-3xl bg-white p-8 shadow-brass">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Featured video</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">Tour our kitchen studio</h3>
            <p className="mt-3 text-ink/70">
              Meet the artisans behind Atelier 27 and see how we plate globally inspired courses with precision.
            </p>
          </div>
          <VideoModal
            title="Tour our kitchen studio"
            videoUrl="https://player.vimeo.com/video/1084537"
            trigger={
              <button className="mt-6 flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-brass transition hover:bg-primary/90">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  ▶
                </span>
                Watch feature
              </button>
            }
          />
        </div>
      </section>
      <Testimonials />
      <CtaSection />
    </>
  );
}
