const skills = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "JWT",
  "REST APIs",
  "AI Integration",
];

export default function Skills() {
  return (
    <section className="text-gray-300">
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-white/5 border border-gray-700 rounded-full text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}