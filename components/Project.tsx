"use client";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.div
      className="w-full h-screen"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>project</h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Commence transparent et un peu en dessous de sa position finale
        whileInView={{ opacity: 1, y: 0 }} // Devient complètement visible et se déplace à sa position finale
        viewport={{ once: true }} // Ne se déclenche qu'une seule fois
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        hello
      </motion.div>
    </motion.div>
  );
}
