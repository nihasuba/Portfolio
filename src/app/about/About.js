"use client";
import { useInView } from "@/lib/useInView";
import MotionSection from "@/components/MotionSection";

export default function About()  {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div>
      <MotionSection
        id="about"
        ref={ref}
        className={`animated-gradient-bg py-16 md:py-24 text-slate-50`}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          {/* <div className="flex items-center justify-center mb-10 gap-3"> 
            <div className="h-5 w-5 bg-sky-400 rounded-full" /> 
            <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              About Me
            </h2>
          </div> */}
          <div className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center transition-transform duration-700 ${inView ? 'animate-super-in' : 'translate-y-8 opacity-0'}`}>
            
            {/* Left Image */}
            <div className="flex-1 flex justify-center md:flex-none">
              <div className="relative group">
                {/* Decorative border frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-fuchsia-500 to-blue-500 rounded-lg p-1 group-hover:scale-105 transition-transform duration-300"></div>
                {/* Image container */}
                <div className="relative bg-slate-900 rounded-lg p-2">
                  <img
                    src="/niha5.jpg"
                    alt="About me"
                    width={400}
                    height={780}
                    className="rounded-lg object-cover shadow-xl w-full max-w-xs md:w-64 lg:w-64 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400 via-fuchsia-500 to-blue-500 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 md:flex-[1.5] space-y-6">
              {/* Heading */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-5 w-5 bg-sky-400 rounded-full animate-bounce" />
                <h3 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                  About Me
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-lg leading-relaxed font-medium text-center md:text-left">
                I'm <span className="text-slate-400 font-semibold">Nihashini</span>, a{" "}
                <span className="text-slate-400 font-semibold">Computer Science and Technology undergraduate</span>{" "}
                at <span className="text-slate-400">Uva Wellassa University</span>, passionate about solving real-world
                problems through code and building{" "}
                <span className="text-slate-400">scalable</span>,{" "}
                <span className="text-slate-400">user-friendly</span> web applications.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed text-center md:text-left">
                I specialize in{" "}
                <span className="text-slate-400">full-stack development</span> with{" "}
                <span className="text-blue-400">React, Node.js, Django, PHP, Java, Python,</span> and{" "}
                <span className="text-blue-400">MySQL</span>, focusing on clean code, REST APIs, and{" "}
                <span className="text-slate-400">responsive design</span>.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed text-center md:text-left">
                I've developed projects like an{" "}
                <span className="text-blue-400">E-Commerce Platform</span>, a{" "}
                <span className="text-blue-400">Book Review System</span>, a{" "}
                <span className="text-blue-400">MERN Stack To-Do App</span>, and a{" "}
                <span className="text-blue-400">Car Rental System</span>, emphasizing{" "}
                <span className="text-blue-400">intuitive user experiences</span>,{" "}
                <span className="text-blue-400">secure authentication</span>, and{" "}
                <span className="text-blue-400">efficient data handling</span>. I thrive in{" "}
                <span className="text-blue-400">Agile team environments</span>, value clean, maintainable code, and am
                always eager to learn emerging technologies and best practices.
              </p>


            </div>

          </div>
        </div>
      </MotionSection>
    </div>
  );
};
