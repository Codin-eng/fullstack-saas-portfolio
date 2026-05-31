"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-gray-300">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold leading-tight"
      >
        Full-Stack SaaS <br />
        <span className="text-blue-500">
          & AI Developer
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mt-6 max-w-xl"
      >
        I build scalable SaaS systems with Next.js, Node.js,
        PostgreSQL, and AI integrations for real-world business solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="https://github.com/Codin-eng"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          GitHub &
        </a>

        <a
          href="#projects"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:border-white transition"
        >
          View Projects
        </a>
      
      
      
      </motion.div>
    </section>
  );
}