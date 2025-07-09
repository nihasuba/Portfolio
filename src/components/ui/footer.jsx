import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-6 mt-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Nihashini Subatharan. All rights reserved.</span>
        <div className="flex space-x-4">
          <a href="https://github.com/nihasuba" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition icon-bounce glow-hover">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/nihashini-subatharan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition icon-bounce glow-hover">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
} 