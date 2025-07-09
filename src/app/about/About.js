"use client";
import { useInView } from "@/lib/useInView";

export default function About()  {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div>
      <section
        id="about"
        ref={ref}
        className={`animated-gradient-bg py-16 md:py-24 text-slate-50 transition-opacity duration-700 ${inView ? 'animate-super-in' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center transition-transform duration-700 ${inView ? 'animate-super-in' : 'translate-y-8 opacity-0'}` }>
            {/* Left Image */}
            <div className="flex-1">
              <img
                src="/placeholder.svg"
                alt="About me"
                width={500}
                height={600}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            {/* Right Content */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 bg-sky-400 rounded-full" />
                <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">About Me</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-slate-100">
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
      </section>
    </div>
  );
};
