"use client";
import React from 'react'
import { Code } from 'lucide-react';
import { useInView } from "@/lib/useInView";

const skills = [
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "React", logo: "/logos/react.jpeg" },
  { name: "Next.js", logo: "/logos/next.svg" },
  { name: "Node.js", logo: "/logos/node.png" },
  { name: "Express", logo: "logos/express.jpeg" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "HTML5", logo: "/logos/html5.svg" },
  { name: "CSS3", logo: "/logos/css3.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Django", logo: "/logos/django.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "Python", logo: "logos/python.png" },
  { name: "C", logo: "/logos/C.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
  { name: "Supabase", logo: "/logos/supabase.png" },
  { name: "Postman", logo: "/logos/postman.png" }

];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  
  const renderSkillLogo = (skill) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="h-24 w-16 flex items-center justify-center">
          <img
            src={skill.logo}
            alt={skill.name + " logo"}
            className="h-20 w-14 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="h-20 w-14 bg-sky-400 rounded flex items-center justify-center text-slate-900 font-bold text-xs" style={{display: 'none'}}>
            {skill.name.charAt(0)}
          </div>
        </div>
        {/* <p className="font-semibold text-sky-400 text-sm">{skill.name}</p> */}
      </div>
    );
  };

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
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Skills & Technologies</h2>
            </div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              I've worked with a range of technologies in the web development world, from front-end to back-end.
            </p>
          </div>
          {/* Skills Grid */}
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-4 space-x-2">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                style={inView ? { animationDelay: `${index * 80}ms` } : {}}
                className={`bg-slate-900 shadow-sm hover:shadow-lg rounded-xl p-4 text-center w-24 transition-all border border-slate-700 hover:border-sky-400 animate-super-in ${inView ? '' : 'opacity-0 scale-95'}`}
              >
                {renderSkillLogo(skill)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills