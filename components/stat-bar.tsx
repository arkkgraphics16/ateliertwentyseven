"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of culinary craft", value: "10+ Years" },
  { label: "Branches worldwide", value: "2 Branches" },
  { label: "Guest reviews", value: "1,200+ Reviews" }
];

export const StatBar = () => {
  return (
    <section className="container-grid -mt-12 grid gap-6 md:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="card-surface rounded-3xl bg-white p-6"
        >
          <p className="text-xs uppercase tracking-wide text-ink/60">{stat.label}</p>
          <p className="mt-3 text-2xl font-semibold text-ink">{stat.value}</p>
        </motion.div>
      ))}
    </section>
  );
};
