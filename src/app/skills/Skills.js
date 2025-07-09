"use client";
import React from 'react'
import { Code } from 'lucide-react';  // Import the Code icon
import { useInView } from "@/lib/useInView";

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "HTML/CSS",
    "GitHub",
    "Django",
    "Java",
    "Python",
    "C",
    "MySQL",
    "Supabase"
    
  ];
  return (
    <div>
      <section
        id="skills"
        ref={ref}
        className={`bg-slate-900 py-16 md:py-24 transition-opacity duration-700 ${inView ? 'animate-super-in' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 space-y-12">
          {/* Title and Intro */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 justify-center">
              <Code className="h-6 w-6 text-blue-600" />
              <h2 className="text-4xl font-extrabold text-sky-500">Skills & Technologies</h2>
            </div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              I've worked with a range of technologies in the web development world, from front-end to back-end.
            </p>
          </div>
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                style={inView ? { animationDelay: `${index * 80}ms` } : {}}
                className={`bg-slate-400 shadow-sm hover:shadow-lg rounded-xl p-4 text-center transition-all border border-gray-200 hover:border-sky-400 animate-super-in ${inView ? '' : 'opacity-0 scale-95'}`}
              >
                <p className="font-semibold text-sky-700 text-base">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills