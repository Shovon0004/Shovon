"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Server,
  MapPin,
  Calendar,
  Building,
  TrendingUp,
  CheckCircle,
  Award,
  BookOpen,
  Phone,
  Globe,
  Code,
  Database,
  Cloud,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ShovonPortfolio() {
  const skills = {
    "Programming Languages": [
      { name: "JavaScript", level: 90, category: "Frontend/Backend" },
      { name: "Python", level: 85, category: "Automation/AI" },
      { name: "Java", level: 80, category: "Backend" },
      { name: "C/C++", level: 75, category: "System Programming" },
      { name: "SQL", level: 80, category: "Database" },
    ],
    "DevOps & Cloud": [
      { name: "Docker", level: 85, category: "Containerization" },
      { name: "Kubernetes", level: 80, category: "Orchestration" },
      { name: "Git/GitHub", level: 90, category: "Version Control" },
      { name: "Linux", level: 75, category: "Operating System" },
    ],
    "Web Technologies": [
      { name: "React.js", level: 90, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Full-Stack" },
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Tailwind CSS", level: 90, category: "Styling" },
      { name: "Three.js", level: 70, category: "3D Graphics" },
    ],
    "Tools & Frameworks": [
      { name: "Spring Boot", level: 75, category: "Java Framework" },
      { name: "Postman", level: 85, category: "API Testing" },
      { name: "VS Code", level: 95, category: "IDE" },
      { name: "NumPy/Pandas", level: 80, category: "Data Science" },
    ],
  }

  const projects = [
    {
      title: "Kubernetes Learning Project",
      category: "DevOps & Infrastructure",
      year: "2025",
      description:
        "Comprehensive Kubernetes deployment project featuring microservices architecture with Minikube, exploring container orchestration, Helm charts, and Docker integration.",
      achievements: [
        "Successfully deployed multi-container microservices on Kubernetes",
        "Implemented service discovery and load balancing",
        "Configured Helm charts for package management",
        "Integrated Docker containerization workflow",
      ],
      technologies: ["Kubernetes", "Docker", "Helm", "Minikube", "YAML"],
      type: "Infrastructure",
      status: "Completed",
    },
    {
      title: "Campus Cogni - AI Job Portal",
      category: "Full-Stack Development",
      year: "2025",
      description:
        "AI-powered job search platform with advanced recruiter tools and automated candidate skill verification through intelligent examination systems.",
      achievements: [
        "Built scalable job matching algorithm using AI",
        "Implemented automated skill assessment system",
        "Created comprehensive recruiter dashboard",
        "Integrated real-time candidate verification",
      ],
      technologies: ["React.js", "Node.js", "AI/ML", "MongoDB", "Express.js"],
      type: "Web Application",
      status: "In Production",
    },
    {
      title: "Midnight Cravings - Delivery Platform",
      category: "E-commerce & Logistics",
      year: "2025",
      description:
        "Late-night delivery platform serving campus students with real-time order tracking, inventory management, and automated dispatch system.",
      achievements: [
        "Successfully serving 500+ active student users",
        "Implemented real-time order tracking system",
        "Built automated inventory management",
        "Achieved 95% on-time delivery rate",
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Payment Gateway"],
      type: "E-commerce",
      status: "Live & Active",
    },
    {
      title: "Adhyayan AI - Learning Platform",
      category: "AI & Education",
      year: "2025",
      description:
        "AI-powered educational platform that generates personalized mind maps from uploaded syllabi, enhancing student learning through visual knowledge representation.",
      achievements: [
        "Developed AI-based syllabus parsing system",
        "Created interactive mind map generation",
        "Implemented personalized learning paths",
        "Built responsive educational dashboard",
      ],
      technologies: ["Python", "AI/ML", "React.js", "NLP", "Data Visualization"],
      type: "AI Application",
      status: "Completed",
    },
    {
      title: "LexiShift - Accessibility Tool",
      category: "AI & Accessibility",
      year: "2025",
      description:
        "Dyslexia-friendly PDF converter with customizable text formatting and layout optimization for improved readability and accessibility.",
      achievements: [
        "Built PDF processing and conversion engine",
        "Implemented customizable text formatting",
        "Created accessibility-focused UI/UX",
        "Integrated dyslexia-friendly design patterns",
      ],
      technologies: ["JavaScript", "PDF.js", "AI", "CSS", "Accessibility APIs"],
      type: "Accessibility Tool",
      status: "Completed",
    },
    {
      title: "Robolu - IoT Rover",
      category: "IoT & Hardware",
      year: "2024",
      description:
        "Bluetooth-controlled rover using ESP32/ESP8266 microcontrollers with wireless mobile control interface and real-time command processing.",
      achievements: [
        "Designed and built IoT-controlled rover",
        "Implemented Bluetooth communication protocol",
        "Created mobile control application",
        "Integrated real-time sensor feedback",
      ],
      technologies: ["ESP32", "Bluetooth", "C++", "Mobile App", "IoT"],
      type: "Hardware Project",
      status: "Completed",
    },
  ]

  const experience = [
    {
      title: "Full-Stack Web Developer Intern",
      company: "TherapyU",
      period: "Feb 2025 – Mar 2025",
      location: "Remote",
      type: "Internship",
      description:
        "Contributed to core product development using modern full-stack technologies, focusing on scalable web applications and user experience optimization.",
      responsibilities: [
        "Built and maintained core product features using React.js and Node.js",
        "Collaborated with cross-functional teams on feature development",
        "Implemented responsive design and performance optimizations",
        "Participated in code reviews and agile development processes",
      ],
    },
    {
      title: "Tech Support / Developer",
      company: "Susrut Eye Hospital",
      period: "2025",
      location: "Kolkata, India",
      type: "Collaborato",
      description:
        "Led digitization initiatives and developed automation support tools to streamline hospital operations and improve staff efficiency.",
      responsibilities: [
        "Developed automation tools for hospital management systems",
        "Implemented digitization solutions for patient records",
        "Created staff support applications and workflows",
        "Provided technical support and system maintenance",
      ],
    },
    {
      title: "Developer & Research Assistant",
      company: "TCS Employee Collaboration",
      period: "2025",
      location: "Remote",
      type: "Collaboration",
      description:
        "Collaborated with TCS employee on backend development and research-driven modules, gaining exposure to enterprise-level development practices.",
      responsibilities: [
        "Developed backend logic for enterprise applications",
        "Contributed to research-driven development modules",
        "Implemented scalable backend architectures",
        "Participated in enterprise development methodologies",
      ],
    },
  ]

  const achievements = [
    { title: "LeetCode Contributor", description: "Contributed a question to LeetCode platform", year: "2024" },
    { title: "300+ DSA Problems", description: "Solved 100+ Data Structures & Algorithms problems", year: "2024-2025" },
    { title: "15+ Hackathons", description: "Participated in 15+ national/state-level hackathons", year: "2024-2025" },
    { title: "2nd Place - IT Fair", description: "LALANI COMPUTER ACADEMY", year: "2024" },
    { title: "3rd Place - Upskill Mafia", description: "Hackathon Achievement", year: "2025" },
    { title: "4th Place - Clash of Coders", description: "Adamas University", year: "2024" },
    {
      title: "Multiple Finalist",
      description: "Double Slash 3.0, Level Supermind, Innofusion, Smart Bengal",
      year: "2024-2025",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Server className="h-6 w-6 text-slate-700" />
            <span className="font-semibold text-slate-900">Shovon Halder</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {[ "Experience", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://github.com/Shovon0004"
                target="_blank"
                className="text-slate-600 hover:text-slate-900"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://linkedin.com/in/shovon-halder"
                target="_blank"
                className="text-slate-600 hover:text-slate-900"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available for DevOps & Full-Stack opportunities</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Shovon Halder
                  <br />
                  <span className="text-slate-600">DevOps & Full-Stack Developer</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                  Computer Science student passionate about DevOps, cloud infrastructure, and full-stack development.
                  Experienced in Kubernetes, Docker, and modern web technologies with a proven track record in
                  hackathons and real-world projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800" asChild>
                  <Link href="mailto:shovonhalder04@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">8+</div>
                  <div className="text-sm text-slate-600">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">15+</div>
                  <div className="text-sm text-slate-600">Hackathons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">8.2</div>
                  <div className="text-sm text-slate-600">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">300+</div>
                  <div className="text-sm text-slate-600">DSA Problems</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <Image
                      src="/placeholder-user.png?height=128&width=128"
                      alt="Shovon Halder"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-slate-100"
                    />
                  </div>
                  <CardTitle className="text-xl">Shovon Halder</CardTitle>
                  <CardDescription>BTech Computer Science Student</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4" />
                    <span>Kolkata, West Bengal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4" />
                    <span>+91-9800567487</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Building className="h-4 w-4" />
                    <span>Adamas University (2023-2027)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <BookOpen className="h-4 w-4" />
                    <span>CGPA: 8.2/10</span>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900">Core Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {["Kubernetes", "Docker", "React.js", "Node.js", "Python", "JavaScript"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hands-on experience in full-stack development, DevOps practices, and enterprise collaboration.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-l-4 border-l-slate-900">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-700">{job.company}</CardDescription>
                    </div>
                    <div className="text-sm text-slate-600 mt-2 md:mt-0">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{job.type}</Badge>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{job.description}</p>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive skill set spanning DevOps, full-stack development, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900 flex items-center">
                    {category === "DevOps & Cloud" && <Cloud className="h-5 w-5 mr-2" />}
                    {category === "Programming Languages" && <Code className="h-5 w-5 mr-2" />}
                    {category === "Web Technologies" && <Globe className="h-5 w-5 mr-2" />}
                    {category === "Tools & Frameworks" && <Database className="h-5 w-5 mr-2" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-xs text-slate-500">{skill.category}</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <div className="text-xs text-slate-500 text-right">{skill.level}% proficiency</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Diverse portfolio showcasing DevOps, AI, full-stack development, and IoT implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.year}
                        </span>
                        <Badge
                          variant={project.status === "Live & Active" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>

                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <TrendingUp className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-xs text-slate-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs text-slate-700 border-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Achievements & Recognition</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Consistent performance in competitive programming, hackathons, and technical challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg text-slate-900 flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">{achievement.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {achievement.year}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">Google Developers Student Club</div>
                    <div className="text-sm text-slate-600">Certified Member</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Connect</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Open to DevOps opportunities, full-stack development roles, and collaborative projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-slate-700 mx-auto mb-4" />
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription className="text-sm">shovonhalder04@gmail.com</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-slate-900 hover:bg-slate-800" asChild>
                  <Link href="mailto:shovonhalder04@gmail.com">Send Email</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-slate-700 mx-auto mb-4" />
                <CardTitle className="text-lg">Phone</CardTitle>
                <CardDescription className="text-sm">+91-9800567487</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-slate-900 hover:bg-slate-800" asChild>
                  <Link href="tel:+919800567487">Call Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Linkedin className="h-8 w-8 text-slate-700 mx-auto mb-4" />
                <CardTitle className="text-lg">LinkedIn</CardTitle>
                <CardDescription className="text-sm">Professional Network</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-slate-900 hover:bg-slate-800" asChild>
                  <Link href="https://linkedin.com/in/shovon-halder" target="_blank">
                    Connect
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Github className="h-8 w-8 text-slate-700 mx-auto mb-4" />
                <CardTitle className="text-lg">GitHub</CardTitle>
                <CardDescription className="text-sm">Code Repository</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-slate-900 hover:bg-slate-800" asChild>
                  <Link href="https://github.com/Shovon0004" target="_blank">
                    View Projects
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Server className="h-5 w-5 text-slate-600" />
              <span className="text-slate-600">© 2025 Shovon Halder. Built with Next.js & Tailwind CSS.</span>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  )
}
