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
  href="https://ai-saa-s-frontend-syfz.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
   className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition no-underline text-white block-inline"
>
  Live Demo
</a>
<span> & </span>
            <a
              href={p.link}
               className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition no-underline text-white block-inline"
            >
              View Code →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}