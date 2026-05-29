export default function About() {
  return (
    <section className="text-gray-300">
      <h2 className="text-4xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-gray-400 leading-relaxed">
        I am a Full-Stack Software Engineer focused on designing and building scalable SaaS systems and AI-powered applications.
        <br /><br />

        My work goes beyond writing code — I focus on system architecture, backend design, API structure, and production-ready engineering practices.
        <br /><br />

        Recently, I built a full-stack AI SaaS dashboard with authentication, role-based access, CRUD operations, and AI-generated business insights using OpenAI API. The system follows a layered architecture (Controller → Service → Database) to ensure scalability and maintainability.
        <br /><br />

        I enjoy solving real-world product problems, optimizing system flows, and turning business requirements into clean and scalable software systems.
      </p>
    </section>
  );
}