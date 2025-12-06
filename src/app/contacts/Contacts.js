"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/useInView";
import MotionSection from "@/components/MotionSection";
import { useState } from "react";
import { motion } from "framer-motion/client";
import axios from "axios";
import MotionDiv from "@/components/MotionDiv";

export default function Contacts() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [formStatus, setFormStatus] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <MotionSection
        id="contact"
        ref={ref}
        className="py-16 md:py-24 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <MotionDiv
          className="text-center mb-12 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <Send className="w-8 h-8 text-sky-400 animate-bounce" />
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg font-medium">
            I’m currently available for freelance work and full-time positions. Feel free to reach out via email or connect with me on LinkedIn or GitHub.
          </p>
        </MotionDiv>

        {/* Two columns */}
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center w-full">
          
          {/* Left Column - Contact Details */}
          <MotionDiv
            className="w-full md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Email */}
            <MotionDiv
              className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02 }}
            >
              <Mail className="w-6 h-6 text-sky-400" />
              <a href="mailto:nihashinisuba@gmail.com" className="text-sky-400 font-medium hover:underline">
                nihashinisuba@gmail.com
              </a>
            </MotionDiv>

            {/* LinkedIn */}
            <MotionDiv
              className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => window.open("https://www.linkedin.com/in/nihashini-subatharan", "_blank")}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02 }}
            >
              <Linkedin className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium hover:underline">linkedin.com/in/nihashini-subatharan</span>
            </MotionDiv>

            {/* GitHub */}
            <MotionDiv
              className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => window.open("https://github.com/nihasuba", "_blank")}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02 }}
            >
              <Github className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-medium hover:underline">github.com/nihasuba</span>
            </MotionDiv>
          </MotionDiv>

          {/* Right Column - Contact Form */}
          <MotionDiv
            className="w-full md:w-1/2 bg-slate-800 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
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
                try {
                  const res = await axios.post("/api/contact",data )
                  console.log(res);
                  if (res.status === 200) {
                    setFormStatus("Message sent!");
                    form.reset();
                  } else {
                    setFormStatus("Failed to send message.");
                  }
                } catch (error) {
                  console.error(error);
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
                className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold py-2 px-4 rounded active:scale-[0.98] transition-transform"
              >
                Send
              </Button>
              {formStatus && (
                <div className="mt-2 text-center text-sky-400 font-semibold">{formStatus}</div>
              )}
            </form>
          </MotionDiv>

        </div>
      </MotionSection>
    </div>
  );
}
