"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border py-6">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold">Emerson</h2>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Software Engineer</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build web applications with React, Next.js, and TypeScript.
              Focused on clean code, performance, and user experience.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg">See my work</Button>
            <Button size="lg" variant="outline">Contact me</Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Project One",
                description: "A web application built with React and TypeScript",
                tech: "React, TypeScript, Tailwind"
              },
              {
                title: "Project Two",
                description: "Full-stack app with Next.js and Node.js",
                tech: "Next.js, Node.js, PostgreSQL"
              },
              {
                title: "Project Three",
                description: "Real-time dashboard application",
                tech: "React, WebSockets, D3.js"
              },
              {
                title: "Project Four",
                description: "API service with Go and REST",
                tech: "Go, PostgreSQL, Docker"
              }
            ].map((project, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Skills</h2>
            <p className="text-muted-foreground">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Git", "Python"].map(skill => (
              <Card key={skill} className="p-4">
                <p className="font-medium">{skill}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 max-w-5xl text-center text-muted-foreground text-sm">
          <p>© 2024 Emerson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
