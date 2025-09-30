import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const PhoneMock = () => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto max-w-xs overflow-hidden rounded-[2.5rem] border-8 border-white bg-card shadow-atelier"
      initial={{ y: prefersReduced ? 0 : 20, opacity: 0 }}
      animate={{ y: prefersReduced ? 0 : [20, 0, 20], opacity: 1 }}
      transition={{ duration: prefersReduced ? 0 : 8, repeat: prefersReduced ? 0 : Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/images/hero/phone-mock.jpg"
        alt="Mobile reservation preview"
        width={320}
        height={640}
        className="h-full w-full object-cover"
        priority
      />
    </motion.div>
  );
};
