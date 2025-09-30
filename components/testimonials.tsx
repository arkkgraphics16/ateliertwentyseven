"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Atelier 27 redefines international dining. Every plate balances artistry and comfort in a way that feels unforgettable.",
    name: "Lina Morales",
    role: "Travel Editor",
    image: "/images/testimonials/lina.jpg"
  },
  {
    quote: "From the seamless reservation to the last sip of dessert wine, the experience is polished yet genuinely warm.",
    name: "Darius Chen",
    role: "Food Critic",
    image: "/images/testimonials/darius.jpg"
  },
  {
    quote: "Our team dinner impressed clients from three continents. Atelier 27 is the new benchmark for global cuisine.",
    name: "Sofia Alvarez",
    role: "Creative Director",
    image: "/images/testimonials/sofia.jpg"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="container-grid mt-24">
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-10 shadow-brass lg:flex-row lg:items-center lg:gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-semibold">Guests love Atelier 27</h2>
          <p className="mt-3 text-ink/70">Voices from our global community of diners, creators, and tastemakers.</p>
          <div className="mt-6 flex gap-3">
            <Button variant="secondary" size="sm" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed text-ink">“{testimonials[index].quote}”</p>
              <div>
                <p className="font-semibold text-ink">{testimonials[index].name}</p>
                <p className="text-sm text-ink/60">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
