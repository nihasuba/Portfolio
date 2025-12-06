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

  const renderSkillLogo = (skill) => (
    <div className="flex flex-col items-center justify-center gap-1 mx-auto">
      <div className="h-20 w-16 flex items-center justify-center mx-auto">
        <img
          src={skill.logo}
          alt={skill.name + " logo"}
          className="h-16 w-14 object-contain transition-transform duration-300"
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

  return (
    <MotionSection
      id="skills"
      ref={ref}
      className="bg-slate-900 flex items-center justify-center mx-auto py-16 md:py-24 w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
        
        {/* Title */}
        <MotionDiv
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 justify-center">
            <Code className="h-6 w-6 text-blue-600 animate-bounce" />
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            I've worked with a range of technologies in the web development world, from front-end to back-end.
          </p>
        </MotionDiv>

        {/* Skills Grid — FIXED full width */}
        <MotionDiv
          className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {skills.map((skill) => (
            <MotionDiv
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: 24 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 8px 32px 0 rgba(0, 180, 255, 0.15)",
              }}
              className="bg-slate-800 hover:bg-slate-700 rounded-xl p-3 flex flex-col items-center justify-center shadow-md transition-all cursor-pointer"
            >
              {renderSkillLogo(skill)}
            </MotionDiv>
          ))}
        </MotionDiv>

      </div>
    </MotionSection>
  );
};

export default Skills;
