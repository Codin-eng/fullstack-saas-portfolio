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
           className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition no-underline text-white block-inline"
        >
          Email Me
        </a>
<span> & </span>
        <a
          href="https://www.linkedin.com/in/mustafa-719644412"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition no-underline text-white block-inline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}