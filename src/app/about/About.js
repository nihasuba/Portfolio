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
          <div className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center transition-transform duration-700 ${inView ? 'animate-super-in' : 'translate-y-8 opacity-0'}` }>
            {/* Left Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative group">
                {/* Decorative border frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-fuchsia-500 to-blue-500 rounded-lg p-1 group-hover:scale-105 transition-transform duration-300"></div>
                {/* Image container */}
                <div className="relative bg-slate-900 rounded-lg p-2">
                  <img
                    src="/niha12.png"
                    alt="About me"
                    width={500}
                    height={600}
                    className="rounded-lg object-cover shadow-xl w-full max-w-xs md:w-72 lg:w-80 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400 via-fuchsia-500 to-blue-500 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
            {/* Right Content */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 bg-sky-400 rounded-full" />
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">About Me</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight text-slate-300">
                A Passionate Software Developer
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
              I'm Nihashini, a Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka,
               passionate about building scalable, user-friendly web applications. I specialize in full-stack development 
               with React, Node.js, Django, PHP, Java, Python, and MySQL, focusing on clean code, 
              REST APIs, and responsive design.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
              I've developed projects like an E-Commerce Platform, a Book Review System, and a MERN stack To-Do app, 
              emphasizing intuitive user experiences, secure authentication, and efficient data handling. 
              I'm eager to learn, grow, and create impactful software solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="font-semibold text-sky-400">Name</p>
                  <p className="text-slate-400">Nihashini Subathran</p>
                </div>
                <div>
                  <p className="font-semibold text-sky-400">Email</p>
                  <p className="text-slate-400">nihashinisuba@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold text-sky-400">Location</p>
                  <p className="text-slate-400">Point Pedro, Jaffna</p>
                </div>
                <div>
                  <p className="font-semibold text-sky-400">Availability</p>
                  <p className="text-slate-400">Full-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
};
