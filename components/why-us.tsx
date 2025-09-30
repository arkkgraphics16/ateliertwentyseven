"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Timer, Sun, PawPrint, CreditCard } from "lucide-react";

const features = [
  {
    title: "Locally Sourced",
    description: "Seasonal produce from trusted growers.",
    icon: Leaf,
    color: "bg-[#FBEEDF]"
  },
  {
    title: "Family-Friendly",
    description: "Thoughtful experiences for all ages.",
    icon: Users,
    color: "bg-[#EAF4F1]"
  },
  {
    title: "Fast Service",
    description: "Five-minute reservation response guarantee.",
    icon: Timer,
    color: "bg-[#F4ECFA]"
  },
  {
    title: "Outdoor Seating",
    description: "Sun-drenched terraces with city views.",
    icon: Sun,
    color: "bg-[#FDEEEB]"
  },
  {
    title: "Pet-Friendly",
    description: "Water bowls and treats for four-legged guests.",
    icon: PawPrint,
    color: "bg-[#ECF6FF]"
  },
  {
    title: "Cashless",
    description: "Seamless, secure contactless payments.",
    icon: CreditCard,
    color: "bg-[#FFF6E6]"
  }
];

export const WhyUs = () => {
  return (
    <section className="container-grid mt-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Why Atelier 27?</h2>
          <p className="mt-2 max-w-2xl text-ink/70">
            We blend international inspiration with local ingredients, creating polished dining moments that feel personal, warm, and effortlessly modern.
          </p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-6 shadow-brass"
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${feature.color}`}>
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
