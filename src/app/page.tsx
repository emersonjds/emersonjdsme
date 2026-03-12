"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "about"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-3xl">
          <a href="#home" onClick={() => scrollToSection("home")} className="text-lg font-semibold hover:text-accent transition-colors">
            Emerson
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "about", label: "About" }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <div className={`h-0.5 w-full bg-foreground transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`h-0.5 w-full bg-foreground transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`h-0.5 w-full bg-foreground transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {[
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "about", label: "About" }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Emerson</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full-stack developer crafting beautiful web experiences
            </p>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build web applications with modern technologies. Specializing in React, Next.js, and TypeScript.
          </p>
          <div className="flex gap-4 pt-4">
            <Button onClick={() => scrollToSection("projects")} size="lg">
              View my work
            </Button>
            <Button onClick={() => scrollToSection("about")} variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl space-y-12">
          <h2 className="text-3xl font-bold">Experience</h2>

          {[
            {
              title: "Senior Developer",
              company: "Tech Company",
              period: "2023 - Present",
              points: [
                "Led development of customer-facing features",
                "Mentored junior developers and reviewed code",
                "Improved application performance by 40%"
              ]
            },
            {
              title: "Full Stack Developer",
              company: "Startup",
              period: "2021 - 2023",
              points: [
                "Built and deployed web applications",
                "Designed and implemented REST APIs",
                "Reduced load times by optimizing database queries"
              ]
            },
            {
              title: "Frontend Developer",
              company: "Agency",
              period: "2020 - 2021",
              points: [
                "Created responsive web interfaces",
                "Collaborated with designers and backend teams",
                "Implemented pixel-perfect designs"
              ]
            }
          ].map((job, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="space-y-1 text-muted-foreground text-sm">
                {job.points.map((point, j) => (
                  <li key={j}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl space-y-12">
          <h2 className="text-3xl font-bold">Projects</h2>

          {[
            {
              title: "Project One",
              description: "A web application for managing tasks and productivity",
              tech: "React, TypeScript, Tailwind CSS, Next.js"
            },
            {
              title: "Project Two",
              description: "Real-time collaboration tool with live updates",
              tech: "Next.js, Node.js, PostgreSQL, WebSockets"
            },
            {
              title: "Project Three",
              description: "Mobile app built with modern React technologies",
              tech: "React Native, TypeScript, Firebase"
            }
          ].map((project, i) => (
            <div key={i} className="space-y-3 pb-8 border-b border-border last:border-b-0">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
              <p className="text-sm text-accent font-mono">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold">About</h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer with a passion for building beautiful, performant web applications. I have 5+ years of experience working with modern web technologies and love solving complex problems through clean, maintainable code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or writing about web development. I'm always eager to learn and stay updated with the latest trends in the industry.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Technologies I work with:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Tailwind CSS", "Git"].map(tech => (
                <span key={tech} className="text-muted-foreground">{tech}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <h3 className="font-semibold">Get in touch:</h3>
            <div className="flex gap-4">
              <a href="mailto:hello@example.com" className="text-accent hover:underline text-sm">
                Email
              </a>
              <a href="https://github.com" className="text-accent hover:underline text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-accent hover:underline text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6 max-w-3xl">
          <p>© 2024 Emerson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
