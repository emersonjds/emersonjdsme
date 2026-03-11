import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Scene3DWrapper from "@/components/Scene3DWrapper";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emerson",
  jobTitle: "Software Engineer",
  url: "https://emersonjds.dev",
  sameAs: [
    "https://github.com/emersonjds",
    "https://linkedin.com/in/emersonjds",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Go",
    "Python",
    "Web Development",
    "Software Engineering",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main id="main-content" role="main">
        <Scene3DWrapper />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
