import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Awards from "@/components/awards";
import Education from "@/components/education";
import Stack from "@/components/stack";
import Experience from "@/components/experience";
import Countries from "@/components/countries";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Education />
        <Stack />
        <Experience />
        <Countries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
