"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/useInView";
import MotionSection from "@/components/MotionSection";
import { useState } from "react";

export default function Contacts() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [formStatus, setFormStatus] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <MotionSection
        id="contact"
        ref={ref}
        className="py-16 md:py-24 w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Send className="w-8 h-8 text-sky-400 animate-bounce" />
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg font-medium">
            I’m currently available for freelance work and full-time positions. Feel free to reach out via email or connect with me on LinkedIn or GitHub.
          </p>
        </div>

        {/* Two columns */}
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center w-full">
          
          {/* Left Column - Contact Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail className="w-6 h-6 text-sky-400" />
              <a href="mailto:nihashinisuba@gmail.com" className="text-sky-400 font-medium hover:underline">
                nihashinisuba@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                 onClick={() => window.open("https://www.linkedin.com/in/nihashini-subatharan", "_blank")}>
              <Linkedin className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium hover:underline">linkedin.com/in/nihashini-subatharan</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                 onClick={() => window.open("https://github.com/nihasuba", "_blank")}>
              <Github className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium hover:underline">github.com/nihasuba</span>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full md:w-1/2 bg-slate-800 rounded-lg shadow-lg p-8">
            <form
              className="space-y-6"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                setFormStatus("Sending...");
                const data = {
                  name: form.name.value,
                  email: form.email.value,
                  message: form.message.value,
                };
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                if (res.ok) {
                  setFormStatus("Message sent!");
                  form.reset();
                } else {
                  setFormStatus("Failed to send message.");
                }
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </Button>
              {formStatus && (
                <div className="mt-2 text-center text-sky-400 font-semibold">{formStatus}</div>
              )}
            </form>
          </div>

        </div>
      </MotionSection>
    </div>
  );
}
