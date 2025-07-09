import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4 sm:px-8 py-8">
      <div className="flex flex-col items-center gap-6 animate-fade-in w-full max-w-xl">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-blue-700 flex items-center justify-center mb-4 shadow-lg">
          {/* Profile image placeholder */}
          <span className="text-4xl sm:text-5xl">👤</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
          Nihashini Subathran
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold text-blue-200 text-center animate-pulse">
          Software developer
        </h2>
        <p className="max-w-xl text-center text-base sm:text-lg text-slate-500">
          Computer Science undergraduate passionate about solving real-world problems, innovation, and crafting high-performance, user-friendly applications. Let’s build something amazing together!
        </p>
      </div>
    </main>
  );
}
