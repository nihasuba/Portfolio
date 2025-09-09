"use client";
import React from "react";
import { Code } from "lucide-react";
import { useInView } from "@/lib/useInView";
import MotionSection from "@/components/MotionSection";
import MotionDiv from "@/components/MotionDiv";

const skills = [
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "React", logo: "/logos/react.jpeg" },
  { name: "Next.js", logo: "/logos/next.svg" },
  { name: "Node.js", logo: "/logos/node.png" },
  { name: "Express", logo: "/logos/express.jpeg" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "PostgreSQL", logo: "/logos/postgresql.png" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "HTML5", logo: "/logos/html5.svg" },
  { name: "CSS3", logo: "/logos/css3.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Django", logo: "/logos/django.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "C", logo: "/logos/C.png" },
  { name: "MySQL", logo: "/logos/mysql.png" },
  { name: "Supabase", logo: "/logos/supabase.png" },
  { name: "Postman", logo: "/logos/postman.png" },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const renderSkillLogo = (skill) => {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="h-20 w-16 flex items-center justify-center">
          <img
            src={skill.logo}
            alt={skill.name + " logo"}
            className="h-16 w-14 object-contain transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="h-16 w-14 bg-gradient-to-r from-sky-400 to-blue-500 rounded flex items-center justify-center text-slate-900 font-bold text-xs hidden">
            {skill.name.charAt(0)}
          </div>
        </div>
        <p className="font-medium text-slate-300 text-xs sm:text-sm">{skill.name}</p>
      </div>
    );
  };

  return (
    <div>
      <MotionSection
        id="skills"
        ref={ref}
        className="bg-slate-900 py-16 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 space-y-12">
          {/* Title and Intro */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 justify-center">
              <Code className="h-6 w-6 text-blue-600" />
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              I've worked with a range of technologies in the web development world, from front-end to back-end.
            </p>
          </div>
          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <MotionDiv
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay: inView ? 0.1 + index * 0.05 : 0,
                  ease: "easeOut",
                }}
                className="bg-slate-800 hover:bg-slate-700 rounded-xl p-3 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all"
              >
                {renderSkillLogo(skill)}
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default Skills;
