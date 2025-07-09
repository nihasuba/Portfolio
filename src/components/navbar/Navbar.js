"use client";
import Link from 'next/link'
import { Github, Linkedin, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="bg-slate-900 shadow-md fixed w-full z-10 border-b border-slate-800 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="flex w-full md:w-auto justify-between items-center">
          <span className="text-2xl md:text-3xl font-extrabold text-sky-400 tracking-tight mb-2 md:mb-0">Portfolio</span>
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={handleToggle}
          >
            {menuOpen ? <X className="w-7 h-7 text-sky-400" /> : <Menu className="w-7 h-7 text-sky-400" />}
          </button>
        </div>
        {/* Nav Links */}
        <div
          className={`flex-col md:flex-row items-center gap-2 md:gap-8 text-base font-semibold w-full md:w-auto md:flex ${menuOpen ? 'flex' : 'hidden'} md:flex bg-slate-900 md:bg-transparent absolute md:static left-0 top-16 md:top-auto px-4 md:px-0 py-4 md:py-0 border-b md:border-0 border-slate-800 md:shadow-none shadow-lg`}
        >
          <Link href="/" className="hover:text-sky-400 transition py-2 md:py-0 w-full md:w-auto text-center" onClick={handleClose}>Home</Link>
          <Link href="#about" className="hover:text-sky-400 transition py-2 md:py-0 w-full md:w-auto text-center" onClick={handleClose}>About</Link>
          <Link href="#projects" className="hover:text-sky-400 transition py-2 md:py-0 w-full md:w-auto text-center" onClick={handleClose}>Projects</Link>
          <Link href="#skills" className="hover:text-sky-400 transition py-2 md:py-0 w-full md:w-auto text-center" onClick={handleClose}>Skills</Link>
          <Link href="#contact" className="hover:text-sky-400 transition py-2 md:py-0 w-full md:w-auto text-center" onClick={handleClose}>Contact</Link>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/nihasuba" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition icon-bounce glow-hover">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/nihashini-subatharan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition icon-bounce glow-hover">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  )
}
