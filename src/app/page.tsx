"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        {/* Background gradient blur */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-8 text-center">
            {/* Badge */}
            <div className="inline-block">
              <Badge variant="outline" className="bg-accent/10 border-accent/30 text-accent">
                ✨ Welcome to my portfolio
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text inline-block">Emerson</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Software Engineer passionate about building beautiful, performant applications with modern technologies. Based in creating digital experiences that matter.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="gap-2 h-12">
                View my work <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12">
                Let's connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-8">
              <Button size="sm" variant="ghost" className="rounded-full w-10 h-10 p-0">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full w-10 h-10 p-0">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="rounded-full w-10 h-10 p-0">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">
                Some of my recent work and side projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Project Alpha",
                  desc: "A modern web application built with React",
                  tech: ["React", "TypeScript", "Tailwind"]
                },
                {
                  title: "Project Beta",
                  desc: "Full-stack solution with Next.js",
                  tech: ["Next.js", "Node.js", "PostgreSQL"]
                },
                {
                  title: "Project Gamma",
                  desc: "Design system and component library",
                  tech: ["React", "Storybook", "Figma"]
                },
                {
                  title: "Project Delta",
                  desc: "Real-time collaboration platform",
                  tech: ["WebSockets", "React", "Go"]
                }
              ].map((project, i) => (
                <Card key={i} className="glass-elevated group hover:border-accent/50 transition-all cursor-pointer overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription>{project.desc}</CardDescription>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map(t => (
                        <Badge key={t} variant="secondary" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
              <p className="text-muted-foreground text-lg">
                Tools and technologies I work with
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React", "Next.js", "TypeScript", "Tailwind CSS",
                "Node.js", "PostgreSQL", "Docker", "Git",
                "Python", "Go", "GraphQL", "AWS"
              ].map(skill => (
                <Card key={skill} className="glass p-4 text-center hover:border-accent/50 transition-colors">
                  <p className="font-medium text-sm">{skill}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Let's work together</h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>
          <Button size="lg" className="gap-2 h-12">
            Get in touch <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-muted-foreground">© 2024 Emerson. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
