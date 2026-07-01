"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function HeroReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}
