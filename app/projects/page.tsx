// app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const sectionReveal = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" as const },
  },
};

const glitchChild = {
  hidden: { x: -30, opacity: 0, filter: "blur(6px)" },
  visible: {
    x: 0,
    opacity: [0, 1, 0.35, 1, 0.9, 1],
    filter: [
      "blur(6px)",
      "blur(0px)",
      "blur(4px)",
      "blur(0px)",
      "blur(1px)",
      "blur(0px)",
    ],
    transition: { duration: 1.4, ease: "easeOut" as const },
  },
};

const projectsData = [
  {
    title: "Intelligent Pedestrian Signal Light System",
    subtitle: "Final Year Research Project • Published on ResearchGate",
    overview:
      "An intelligent traffic management system that adapts signal timing based on real-time pedestrian detection, weather conditions, and traffic flow to improve safety and efficiency.",
    role: "Lead Developer & Researcher",
    timeline: "2023 – 2024",
    tech: [
      "Python",
      "TensorFlow/Keras",
      "OpenCV",
      "Raspberry Pi 4",
      "IoT (MQTT)",
      "CNN",
    ],
    metrics: [
      { value: "80%", label: "Pedestrian Detection Accuracy" },
      { value: "18.5s", label: "Average Crossing Time (reduced from ~60s)" },
      { value: "5–10×", label: "Faster Real-time Processing (vs Arduino)" },
    ],
    challenges:
      "Real-time processing on embedded hardware, accurate detection in varying weather/lighting.",
    solution:
      "Custom CNN model trained on labeled dataset • Upgraded to Raspberry Pi 4 for multi-stream handling • IoT framework for sensor-camera-controller communication • Adaptive timing algorithm.",
    outcome:
      "Deployed prototype reduced crossing time in real-world case study • Violation deterrence via sirens/alerts • Full publication available on ResearchGate.",
    images: [
      "/projects/Setup.jpg",
      "/projects/Visual.png",
      "/projects/Presentation.png",
    ],
    links: {
      github: "https://github.com/Janith19/Image-Processing",
      researchgate:
        "https://www.researchgate.net/publication/385380140_IoT-Enabled_Intelligent_Pedestrian_Crossing_Signal_Light_System_with_Violation_Tracking",
    },
  },
  {
    title: "Scrabble Timer",
    subtitle: "Cross-platform Competitive Game Clock",
    overview:
      "A chess-clock-style timer for Scrabble players with penalty tracking, auto-disqualification, and intuitive controls.",
    role: "Sole Developer",
    timeline: "2023",
    tech: ["Flutter", "Dart", "Mobile UI/UX"],
    metrics: [
      { value: "Global", label: "Audience of Competitive Players" },
      { value: "Zero", label: "Timing Disputes in Testing" },
    ],
    challenges:
      "Precise timing, fair penalty enforcement, cross-platform consistency.",
    solution:
      "Implemented bidirectional timer logic • Penalty accumulation with visual feedback • Auto-pause/reset features.",
    outcome: "Enhanced gameplay fairness and user experience for 2 players.",
    images: ["/Scrabble/Main.jpeg"],
    links: { github: "https://github.com/Janith19/Scrabble_Timer" },
  },
  {
    title: "Zero-Budget Home Server (Self-Hosted Infrastructure)",
    subtitle: "Repurposed Hardware for Personal Cloud Services",
    overview:
      "Built a personal home server using an old laptop and Ubuntu Server LTS to explore self-hosting and Linux system administration.",
    role: "Developer",
    timeline: "2025 – 2026",
    tech: ["Ubuntu Server LTS", "Docker", "n8n", "Linux"],
    metrics: [{ value: "4+", label: "Self-Hosted Services Running" }],
    challenges:
      "Hardware limitations, service containerization, remote access setup.",
    solution:
      "Installed Ubuntu Server on repurposed laptop • Configured Docker containers for services • Set up dynamic DNS and secure remote access.",
    outcome:
      "Cost-effective personal cloud infrastructure • Gained hands-on Linux and networking experience.",

    links: {
      "Dev.to":
        "https://dev.to/janith19/building-a-home-server-on-a-zero-budget-no-raspberry-pi-needed-5g5h",
    },
  },
  {
    title: "Email Allocator Browser Extension",
    subtitle: "Gmail Productivity Tool",
    overview:
      "Chrome/Firefox extension that automatically categorizes and visually highlights emails using custom labels and colors.",
    role: "Sole Developer",
    timeline: "2024",
    tech: ["JavaScript", "Chrome Extension API", "Local Storage"],
    metrics: [{ value: "100%", label: "Functionality" }],
    challenges: "Real-time email detection, persistent custom rules.",
    solution:
      "Content scripts for DOM manipulation • Background service for storage sync.",
    outcome: "Improved email triage speed and visual organization.",
    images: ["/Email/Popup.png", "/Email/badge.png"],
    links: { github: "https://github.com/Janith19/email-allocator" },
  },
  {
    title: "Full-Stack Book Shop Website",
    subtitle: "MERN E-commerce Platform",
    overview:
      "Basic e-commerce platform with responsive design, admin dashboard, and user authentication.",
    role: "Full-Stack Developer",
    timeline: "2023",
    tech: ["HTML", "CSS", "JavaScript"],
    metrics: [{ value: "100%", label: "Functional E-commerce Flow" }],
    challenges: "web development basics",
    solution:
      " Followed tutorial • Implemented responsive design • Implemented user authentication • Implemented admin dashboard.",
    outcome: "Fully working demo site showcasing full-stack capabilities.",
    images: ["/UI1.png"],
    links: {
      demo: "https://brilliant-platypus-31b904.netlify.app/",
      github: "https://github.com/Janith19/TheBookHub",
    },
  },
];

export default function Projects() {
  return (
    <main className="bg-black text-white min-h-screen relative">
      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-overlay z-50 bg-repeat" />

      <section className="relative pt-32 pb-40 px-6 md:px-12 lg:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-center mb-20 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          PROJECTS
        </motion.h1>

        <div className="max-w-7xl mx-auto space-y-40 lg:space-y-56">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={sectionReveal}
              className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Left: Text Content */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-xl text-cyan-400/80 font-mono">
                    {project.subtitle}
                  </p>
                </div>

                <div className="space-y-10 text-lg text-gray-300 leading-relaxed">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                      Overview
                    </h3>
                    <p className="text-gray-200">{project.overview}</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                      <p className="text-sm text-gray-500 uppercase">Role</p>
                      <p className="font-semibold text-white">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase">
                        Timeline
                      </p>
                      <p className="font-semibold text-white">
                        {project.timeline}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                      Key Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {project.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="text-center p-6 bg-linear-to-br from-cyan-950/40 to-black/60 rounded-2xl border border-cyan-900/50 shadow-lg shadow-cyan-950/20"
                        >
                          <p className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">
                            {m.value}
                          </p>
                          <p className="text-sm text-gray-300 leading-tight">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-5 py-2 bg-cyan-950/60 border border-cyan-800/50 rounded-full text-sm text-cyan-200 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-cyan-900/40">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        Challenges
                      </h4>
                      <p className="text-gray-400">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-400">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        Outcome
                      </h4>
                      <p className="text-gray-400">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                {project.links && Object.keys(project.links).length > 0 && (
                  <div className="flex flex-wrap gap-5 mt-10">
                    {Object.entries(project.links).map(([key, url]) => (
                      <Link
                        key={key}
                        href={url as string}
                        target="_blank"
                        className="px-8 py-4 bg-cyan-600/20 hover:bg-cyan-600/50 border border-cyan-500/40 rounded-xl text-cyan-300 hover:text-white transition-all duration-300 shadow-md"
                      >
                        View {key.charAt(0).toUpperCase() + key.slice(1)} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Images */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                {project.images?.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden border border-cyan-900/60 shadow-2xl shadow-cyan-950/50 hover:shadow-cyan-900/70 transition-shadow duration-500"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} visual ${i + 1}`}
                      width={900}
                      height={700}
                      className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700"
                      quality={75}
                    />
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Back to Home - Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-40 text-center"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-4 px-12 py-7 rounded-2xl bg-linear-to-r from-cyan-600 via-cyan-500 to-indigo-700 text-white font-bold text-xl shadow-2xl shadow-cyan-900/60 border border-cyan-400/30 hover:scale-105 hover:shadow-cyan-700/70 transition-all duration-300"
          >
            <span>← Return to Home</span>
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
