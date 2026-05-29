import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Architecture from "@/components/Architecture";
import Highlights from "@/components/Highlights";
import Thinking from "@/components/Thinking";
import ProjectGallery from "@/components/projectGallery";

export default function Page() {
  return (
    <main className="min-h-screen text-white">

      <div className="fixed inset-0 bg-gradient-to-b from-black via-black to-blue-950 opacity-80 -z-10" />

      <div className="max-w-6xl mx-auto px-6">

        <Hero />

        <About />

        <Highlights />

        <Projects />

<section className="py-20">
  <h2 className="text-4xl font-bold mb-6">
    Case Study
  </h2>

  <div className="text-gray-300 space-y-4">
    <p>
      Built a SaaS CRM dashboard to manage clients and generate AI-driven insights.
    </p>

    <p>
      Problem: manual client analysis was slow and inconsistent.
    </p>

    <p>
      Solution: integrated OpenAI API to generate structured business insights.
    </p>

    <p>
      Impact: reduced analysis time from minutes to seconds.
    </p>
  </div>
</section>

<Architecture />
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-8">
            Project Screenshots
          </h2>

          <ProjectGallery />
        </section>

        <Architecture />

        <Thinking />

        <Skills />

        <Contact />

      </div>
    </main>
  );
}