"use client";
import Link from 'next/link'
import { Github, Linkedin, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  // Ensure component is mounted before running client-side logic
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#contact", label: "Contact", id: "contact" }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm shadow-lg fixed w-full z-10 border-b border-slate-800 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="flex w-full md:w-auto justify-between items-center">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent tracking-tight mb-2 md:mb-0">Portfolio</span>
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 hover:bg-slate-800 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={handleToggle}
          >
            {menuOpen ? <X className="w-7 h-7 text-sky-400" /> : <Menu className="w-7 h-7 text-sky-400" />}
          </button>
        </div>
        {/* Nav Links */}
        <div
          className={`flex-col md:flex-row items-center gap-2 md:gap-8 text-base font-semibold w-full md:w-auto md:flex ${menuOpen ? 'flex' : 'hidden'} md:flex bg-slate-900/95 backdrop-blur-sm md:bg-transparent absolute md:static left-0 top-16 md:top-auto px-4 md:px-0 py-4 md:py-0 border-b md:border-0 border-slate-800 md:shadow-none shadow-lg`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`
                relative px-4 py-2 md:py-1 rounded-lg md:rounded-none
                transition-all duration-300 ease-in-out
                hover:text-sky-400 hover:bg-slate-800/50 md:hover:bg-transparent
                focus:outline-none
                w-full md:w-auto text-center
                ${mounted && activeSection === link.id 
                  ? 'text-sky-400 bg-slate-800/30 md:bg-transparent' 
                  : 'text-slate-300 hover:text-sky-400'
                }
                group
              `}
              onClick={handleClose}
            >
              {link.label}
              {/* Active indicator for desktop */}
              <span className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2
                w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500
                transition-all duration-300 ease-in-out
                ${mounted && activeSection === link.id ? 'w-full' : 'group-hover:w-full'}
                hidden md:block
              `}></span>
              {/* Hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a 
            href="https://github.com/nihasuba" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-sky-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 focus:outline-none group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nihashini-subatharan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-sky-400 transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 focus:outline-none group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </nav>
  )
}
