export default function Contact() {
  return (
    <section className="text-gray-300">
      <h2 className="text-4xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-gray-400">
        Let’s work together on SaaS & AI products.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="mailto:Bratha500@gmail.com"
          className="px-5 py-2 bg-blue-600 rounded"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/mustafa-719644412"
          className="px-5 py-2 border border-gray-600 rounded"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}