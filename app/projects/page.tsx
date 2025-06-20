import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2024",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2023",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2023",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work and skills with smooth animations and optimized performance.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2024",
    featured: false,
  },
  {
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics dashboard for social media metrics with data visualization and automated reporting features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2023",
    featured: false,
  },
  {
    title: "Recipe Sharing Platform",
    description:
      "A community-driven recipe sharing platform where users can create, share, and discover new recipes with rating and review system.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Prisma", "NextAuth.js", "Cloudinary", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "2024",
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground">A showcase of my recent work and side projects</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <Link href={project.liveUrl} target="_blank" className="text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link href={project.githubUrl} target="_blank" className="text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
