"use client";
import { Mail, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/useInView";
import MotionSection from "@/components/MotionSection";

export default function Contacts() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient-bg text-white px-4">
      <MotionSection
        id="contact"
        ref={ref}
        className="py-16 md:py-24 w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 justify-center">
              <Mail className="h-5 w-5 text-sky-400" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">Get In Touch</h2>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-300">Let's work together on your next project</h3>
            <p className="text-slate-500 text-lg">
              I'm currently available for freelance work and full-time positions. If you have a project that you
              want to get started or need help with something, feel free to reach out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className={`bg-slate-800 text-center p-6 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer ${inView ? 'animate-super-in' : 'opacity-0 translate-y-8'} hover:scale-105 hover:shadow-xl hover:border-sky-400`}
              onClick={() => window.open('mailto:contact@example.com', '_self')}
              tabIndex={0}
              role="button"
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open('mailto:contact@example.com', '_self'); }}
            >
              <CardContent className="p-0 space-y-2">
                <Mail className="h-10 w-10 mx-auto text-sky-400" />
                <h3 className="font-semibold text-lg text-white">Email</h3>
                <p className="text-slate-200 text-base">nihashinisuba@gmail.com</p>
                <a
                  href="mailto:contact@example.com"
                  className="inline-block p-0 text-sky-400 font-medium"
                >
                  Send a message
                </a>
              </CardContent>
            </Card>
            <Card
              className={`bg-slate-800 text-center p-6 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer ${inView ? 'animate-super-in' : 'opacity-0 translate-y-8'} hover:scale-105 hover:shadow-xl hover:border-sky-400`}
              onClick={() => window.open('https://www.linkedin.com/in/nihashini-subatharan', '_blank')}
              tabIndex={0}
              role="button"
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open('https://www.linkedin.com/in/nihashini-subatharan', '_blank'); }}
            >
              <CardContent className="p-0 space-y-2">
                <Linkedin className="h-10 w-10 mx-auto text-sky-400" />
                <h3 className="font-semibold text-lg text-white">LinkedIn</h3>
                <p className="text-slate-200 text-base">linkedin.com/in/niha-suba</p>
                <a
                  href="https://www.linkedin.com/in/nihashini-subatharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-0 text-sky-400 font-medium"
                >
                  Connect with me
                </a>
              </CardContent>
            </Card>
            <Card
              className={`bg-slate-800 text-center p-6 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer ${inView ? 'animate-super-in' : 'opacity-0 translate-y-8'} hover:scale-105 hover:shadow-xl hover:border-sky-400`}
              onClick={() => window.open('https://github.com/nihasuba', '_blank')}
              tabIndex={0}
              role="button"
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open('https://github.com/nihasuba', '_blank'); }}
            >
              <CardContent className="p-0 space-y-2">
                <Github className="h-10 w-10 mx-auto text-sky-400" />
                <h3 className="font-semibold text-lg text-white">GitHub</h3>
                <p className="text-slate-200 text-base">github.com/nihasuba</p>
                <a
                  href="https://github.com/nihasuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-0 text-sky-400 font-medium"
                >
                  View projects
                </a>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </MotionSection>
    </div>
  );
}
