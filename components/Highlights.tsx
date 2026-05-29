const highlights = [
  "Layered Backend Architecture (Controller → Service → DB)",
  "JWT Authentication & Protected Routes",
  "AI Integration using OpenAI API",
  "Full-stack CRUD System",
  "Production-style error handling",
  "Type-safe frontend with TypeScript",
];

export default function Highlights() {
  return (
    <section className="text-gray-300">
      <h2 className="text-4xl font-bold mb-10">
        Engineering Highlights
      </h2>

      <ul className="space-y-3 text-gray-300">
        {highlights.map((h, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-blue-500">▹</span>
            {h}
          </li>
        ))}
      </ul>
    </section>
  );
}