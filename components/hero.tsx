"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoModal } from "@/components/video-modal";
import { PhoneMock } from "@/components/phone-mock";

export const Hero = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-24 pt-24">
      <div className="container-grid grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Open Daily</Badge>
            <Badge>&lt; 5-Minute Reservation</Badge>
            <Badge>4.9 Rating</Badge>
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            A modern table for every city.
            <br />
            Crafted for curious palates.
          </h1>
          <p className="max-w-xl text-lg text-ink/70">
            Global flavors, crafted with care. Reserve in under five minutes and discover Atelier 27&apos;s international bistro experience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact" aria-label="Reserve a table online">
                Reserve a Table
              </Link>
            </Button>
            <VideoModal
              title="Inside Atelier 27"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              trigger={
                <Button variant="secondary" size="lg">
                  Watch Video
                </Button>
              }
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -top-10 left-10 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl lg:block" aria-hidden />
          <div className="pointer-events-none absolute -bottom-14 right-8 hidden h-20 w-20 rounded-full bg-accent/10 blur-2xl lg:block" aria-hidden />
          <PhoneMock />
        </motion.div>
      </div>
    </section>
  );
};
