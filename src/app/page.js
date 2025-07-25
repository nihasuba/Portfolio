import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import MotionMain from '@/components/MotionMain';
import MotionDiv from '@/components/MotionDiv';

export default function Home() {
  return (
    <MotionMain
      className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4 sm:px-8 py-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
    >
      <div className="flex justify-center mt-8">
        <MotionDiv
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Animated glowing ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 via-fuchsia-500 to-blue-500 p-1 animate-pulse-slow group-hover:scale-110 group-hover:shadow-2xl transition-transform duration-300"></span>
          {/* Profile image with highlight */}
          <img
            src="/niha7.jpg"
            alt="Profile"
            className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300 ring-4 ring-sky-400/40"
          />
          {/* Orbiting text animation */}
          <div className="absolute inset-0 w-44 h-44 animate-spin-slow">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-sky-400 font-bold text-sm bg-slate-900 px-2 py-1 rounded-full border border-sky-400">Nihashini</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-fuchsia-400 font-bold text-xs bg-slate-900 px-2 py-1 rounded-full border border-fuchsia-400">Software Developer</span>
          </div>
          {/* Extra glow */}
          <span className="absolute -inset-2 rounded-full blur-2xl opacity-40 bg-gradient-to-tr from-sky-400 via-fuchsia-500 to-blue-500 z-0"></span>
        </MotionDiv>
      </div>
      <div className="flex flex-col items-center gap-4 animate-fade-in w-full max-w-xl mt-4">
        {/* Profile image placeholder removed */}
        <MotionDiv
          className="text-3xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.5, bounce: 0.5 }}
          as="h1"
        >
          Nihashini Subathran
        </MotionDiv>
        <MotionDiv
          className="text-lg sm:text-2xl font-semibold text-blue-200 text-center animate-pulse"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          as="h2"
        >
          Software developer
        </MotionDiv>
        <MotionDiv
          className="max-w-xl text-center text-base sm:text-lg text-slate-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
          as="p"
        >
          Computer Science undergraduate passionate about solving real-world problems, innovation, and crafting high-performance, user-friendly applications. Let’s build something amazing together!
        </MotionDiv>
        <MotionDiv
          className="flex gap-4 justify-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
        >
          <a href="https://github.com/nihasuba" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-all p-2 rounded-full bg-slate-800 hover:bg-slate-700">
            <Github className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/nihashini-subatharan" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-all p-2 rounded-full bg-slate-800 hover:bg-slate-700">
            <Linkedin className="w-7 h-7" />
          </a>
        </MotionDiv>
      </div>
    </MotionMain>
  );
}
