"use client";

import { Briefcase, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useInView } from "@/lib/useInView";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment processing and inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Task Management App",
      description: "A productivity application for teams to manage projects and track progress.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work, skills, and contact information. Built with React, Tailwind CSS, and Framer Motion for smooth animations.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "MERN Todo List",
      description: "A full-stack todo list app with user registration and login. Built using MongoDB, Express, React, and Node.js.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Auth"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "EduConnect System (In Progress)",
      description: "A modern education management platform. Currently working on this project using Next.js, PostgreSQL, Django, and Supabase for real-time features and robust backend integration.",
      tags: ["Next.js", "PostgreSQL", "Django", "Supabase", "In Progress"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ];
  return (
    <section
      id="projects"
      ref={ref}
      className={`animated-gradient-bg py-16 md:py-24 transition-opacity duration-700 ${inView ? 'animate-super-in' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <Briefcase className="h-6 w-6 text-white" />
            <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">Featured Projects</h2>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Here are some of my recent projects. Each project reflects my passion for creating intuitive and impactful digital experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              style={inView ? { animationDelay: `${index * 120}ms` } : {}}
              className={`bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden animate-super-in ${inView ? '' : 'opacity-0 scale-95'}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-sky-400">{project.title}</h3>
                <p className="text-slate-200">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center pt-10">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-sky-400 text-sky-400 font-bold text-lg rounded-lg hover:bg-sky-50 transition shadow-lg hover:shadow-sky-400/30"
          >
            View All Projects
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}