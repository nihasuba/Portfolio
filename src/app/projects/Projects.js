"use client";

import { Briefcase, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useInView } from "@/lib/useInView";
import React, { useState } from "react";
import MotionSection from "@/components/MotionSection";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [showAll, setShowAll] = useState(false);
  const projects = [
    
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with payment processing and inventory management.",
      tags: ["React", "PHP", "MySQL"],
      image: "elitez.png",
    },
    {
      title: "Car Rental",
      description: "Car rental web app with JWT auth, bookings, admin dashboard, ImageKit-optimized images, built using MERN stack and responsive UI.",
      tags: ["Next.js", "Express.js", "MongoDB", "Atlas", "Imagekit"],
      image: "/carrental.png",
    },
    {
      title: "Task Management App",
      description: "A productivity application for teams to manage projects and track progress.",
      tags: ["React", "Django", "PostgreSQL"],
      image: "/task-manager.png",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work, skills, and contact information. Built with React, Tailwind CSS, and Framer Motion for smooth animations.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/portfolio.png",
    },
    
    {
      title: "EduConnect System (In Progress)",
      description: "A Online education platform. Currently working on this project.",
      tags: ["Next.js", "PostgreSQL", "Django", "Supabase", "In Progress"],
      image: "/educonnect.png",
    },
    {
      title: "Todo List in MERN",
      description: "A full-stack todo list app with user registration and login with forgot password email system.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Auth"],
      image: "/to_do.png",
    },
    {
      title: "Book Review",
      description: "Discover, and review your favorite books. A platform to explore books, write reviews.",
      tags: [ "Next.js", "PostgreSQL", "Django", "TailwindCSS"],
      image: "/bookreview.png",
    },
  ];
  return (
    <MotionSection
      id="projects"
      ref={ref}
      className="animated-gradient-bg py-16 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <Briefcase className="h-6 w-6 text-blue-500" />
            <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">Featured Projects</h2>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Here are some of my recent projects. Each project reflects my passion for creating intuitive and impactful digital experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {(showAll ? projects : projects.slice(0, 5)).map((project, index) => (
            <div
              key={index}
              style={inView ? { animationDelay: `${index * 120}ms` } : {}}
              className={`bg-slate-800 rounded-2xl shadow-lg border border-slate-700 transition-transform duration-300 cursor-pointer ${inView ? 'animate-super-in' : 'opacity-0 translate-y-8'} hover:scale-105 hover:shadow-xl hover:border-sky-400 overflow-hidden`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-48  transition-transform hover:scale-105 duration-300"
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
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold text-lg rounded-xl hover:from-sky-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronRight className="ml-2 h-5 w-5 rotate-180" />
              </>
            ) : (
              <>
                View All Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </MotionSection>
  );
}