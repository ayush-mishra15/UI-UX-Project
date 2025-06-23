"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FlipWords } from "@/components/ui/flip-words";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";


const About = () => {
  return (
    <div className=" bg-black p-20 text-white min-h-screen ">
      {/* Hero Section */}
      <LampContainer className=" pt-44">
        <div className=" z-10 pt-44 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl"
          >
            Start Building With Code
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-neutral-300 max-w-2xl mx-auto mt-6"
          >
            What started as a small blog to simplify coding has now evolved into a full-fledged platform helping thousands master web development and land real-world tech roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-14 text-3xl font-semibold text-cyan-400"
          >
            We aim to <FlipWords words={["educate", "mentor", "empower"]} /> through code.
          </motion.div>
        </div>
      </LampContainer>

      {/* Highlights Section */}
      <section className="relative z-10 py-20 px-4 bg-[#0e1a2a]/50 rounded-3xl shadow-inner shadow-cyan-800/10 mt-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-300 mb-4 tracking-tight">
          What We Stand For
        </h2>
        <div className="w-32 h-1 bg-cyan-500 mx-auto rounded mb-8" />

        <p className="text-center text-neutral-400 text-base max-w-2xl mx-auto mb-16">
          We're on a mission to make high-quality tech education accessible, affordable, and practical.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Our Mission",
            "Our Vision",
            "Our Impact",
            "Our Approach",
            "Why It Matters",
            "The Road Ahead",
          ].map((title, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group rounded-2xl bg-gradient-to-tr from-[#1e293b] via-[#111827] to-[#0f172a] p-6 border border-cyan-500/10 
              hover:border-cyan-400 shadow-md hover:shadow-cyan-400/40 hover:shadow-lg 
              transition-all duration-300 transform hover:scale-[1.03] hover:ring-2 hover:ring-cyan-500/30 hover:ring-offset-2 hover:ring-offset-[#0f172a]"
            >
              <h3 className="text-white text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-cyan-400">
                {title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-cyan-200">
                {
                  [
                    "To equip learners with real-world coding skills through project-based, modern web development education.",
                    "A world where anyone with curiosity and grit can become a developer, regardless of background or location.",
                    "Over 70,000 learners trained, 150+ projects built, and hundreds successfully placed in tech jobs worldwide.",
                    "Interactive lessons, real projects, mentorship, and community-driven learning — not just theory.",
                    "Tech is the future. We help students unlock opportunities, independence, and creativity through coding.",
                    "We're building AI-assisted tools, collaborative workspaces, and launching tracks for data science and DevOps.",
                  ][idx]
                }
              </p>
            </motion.div>
          ))}
        </div>
      </section>

        {/* Timeline Section */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-extrabold mb-16 text-cyan-400">
            🚀 Key Milestones in Our Journey
        </h2>
        <div className="relative border-l-2 border-cyan-600 pl-8 ml-4">
            {[
            {
                year: "2020",
                title: "The Spark",
                description:
                "Started as a small coding blog to help beginners understand the basics of HTML, CSS, and JavaScript.",
                icon: "💡",
            },
            {
                year: "2021",
                title: "Community Built",
                description:
                "Launched our first React course and Discord community — 5,000+ learners joined within the first few months.",
                icon: "👥",
            },
            {
                year: "2022",
                title: "Scaling Up",
                description:
                "We launched full-stack bootcamps, mock interviews, and began building career-oriented roadmaps.",
                icon: "📈",
            },
            {
                year: "2023",
                title: "Global Reach",
                description:
                "Courses translated into 4 languages, new instructors onboarded, and partnerships formed with hiring platforms.",
                icon: "🌐",
            },
            {
                year: "2024",
                title: "Smarter Learning",
                description:
                "Released AI code reviewers, real-time project feedback, and peer-to-peer collaboration features.",
                icon: "🤖",
            },
            ].map((milestone, idx) => (
            <div key={idx} className="relative mb-14">
                <span className="absolute left-[-48px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white text-lg shadow-md border-4 border-[#0f172a]">
                {milestone.icon}
                </span>
                <time className="block text-sm text-cyan-300 font-medium mb-1">
                {milestone.year}
                </time>
                <h3 className="text-xl font-semibold text-white hover:text-cyan-300 transition duration-300">
                {milestone.title}
                </h3>
                <p className="text-neutral-400 mt-2 leading-relaxed hover:text-neutral-300 transition duration-300">
                {milestone.description}
                </p>
            </div>
            ))}
        </div>
        </section>
            <ShootingStars className="z-0"/>
            <StarsBackground />
        </div>
  );
};

export default About;