"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI SaaS Dashboard",
    desc: "Full-stack CRM with AI insights, JWT auth, Prisma DB, and scalable architecture.",
    link: "https://github.com/Codin-eng/AI-SaaS-Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="text-gray-300">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">
              {p.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {p.desc}
            </p>

            <a
              href={p.link}
              className="text-blue-400 mt-4 inline-block"
            >
              View Code →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}