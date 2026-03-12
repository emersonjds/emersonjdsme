"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="space-y-8 mb-20">
          <div className="space-y-4">
            <Badge variant="outline">Available for work</Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Hi, I&apos;m <span className="gradient-text">Emerson</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Software Engineer crafting performant, beautiful & accessible digital experiences with modern technologies.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button size="lg">View my work</Button>
            <Button size="lg" variant="outline">Get in touch</Button>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="glass hover:border-accent/50 transition-colors">
                <CardHeader>
                  <CardTitle>Project {i}</CardTitle>
                  <CardDescription>Description of your project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Project details and technologies used.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Go", "PostgreSQL"].map((skill) => (
              <Card key={skill} className="glass text-center py-6">
                <p className="font-medium">{skill}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
