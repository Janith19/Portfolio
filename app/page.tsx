"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";

const glitch = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.14,
    },
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

const sectionReveal = {
  hidden: { opacity: 0, y: 160, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.4, ease: "easeOut" as const },
  },
};
const projects = [
  {
    title: "Intelligent Pedestrian Signal System",
    desc: "Final-year research project • Adaptive traffic signals with real-time CNN-based pedestrian detection (80% accuracy) • Weather-aware timing • IoT sensor integration on Raspberry Pi 4 • Reduced crossing time to ~18.5s • ResearchGate publication",
    tags: ["Python", "CNN", "IoT", "Raspberry Pi", "Research"],
    link: "https://www.researchgate.net/publication/385380140_IoT-Enabled_Intelligent_Pedestrian_Crossing_Signal_Light_System_with_Violation_Tracking",
  },
  {
    title: "Scrabble Timer",
    desc: "Competitive chess-clock style timer for global Scrabble players • Penalty system with auto-disqualification • Intuitive UX for fair gameplay • Cross-platform mobile app",
    tags: ["Flutter", "Mobile", "Game Utilities"],
    link: "https://github.com/Janith19/Scrabble_Timer",
  },
  {
    title: "Email Allocator Browser Extension",
    desc: "Chrome/Firefox extension that auto-categorizes Gmail with custom visual labels & colors • Persistent storage • Dynamic email detection • Productivity tool built from scratch",
    tags: ["JavaScript", "Browser Extension", "Chrome API"],
    link: "https://github.com/Janith19/email-allocator",
  },
  {
    title: "Full-Stack Book Shop Website",
    desc: "Complete MERN e-commerce platform • Responsive design • Admin dashboard • Course capstone project",
    tags: ["MERN", "Next.js", "Tailwind", "Full-Stack"],
    link: "https://github.com/Janith19/TheBookHub",
  },
];
const float = {
  animate: {
    y: [-14, 14, -14],
    rotateX: [-2, 2, -2],
    rotateY: [-3, 3, -3],
    transition: {
      duration: 7.2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  },
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Hero parallax
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.75]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -220]);
  const imageY = useTransform(scrollYProgress, [0, 0.4], [0, 180]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.4], [0, -10]);

  // Subtle mouse glitch / holographic feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 35, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 35, stiffness: 120 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main
      ref={containerRef}
      className="
    bg-black text-white overflow-x-hidden
    h-screen               // ← important
    snap-y snap-mandatory  // ← core snap
    overflow-y-auto        // ← allow scrolling
    scroll-smooth          // nice bonus
  "
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      {/* Global subtle noise/grain overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-overlay z-50 bg-[url('/noise.png')] bg-repeat" />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="
    relative min-h-screen
    flex items-center justify-center
    snap-start
    scroll-mt-0
    px-5 sm:px-8 lg:px-12
  "
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-indigo-950/30 to-black" />
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-size-[48px_48px]" />
        </div>

        {/* Mouse-follow holographic glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-cyan-500/15 via-indigo-600/8 to-transparent pointer-events-none"
          style={{ x: springX, y: springY, scale: 1.25 }}
        />

        <div className="relative z-10 max-w-7xl w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image column - takes ~5/12 on desktop */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-1">
              <motion.div
                variants={float}
                animate="animate"
                className="relative"
                style={{ y: imageY, rotate: imageRotate, perspective: 1400 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.04,
                    rotateY: 12,
                    rotateX: -8,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }}
                >
                  {/* Glitch layers - reduced to 2 for cleaner look */}
                  {[-1, 0].map((offset, i) => (
                    <motion.div
                      key={i}
                      initial="hidden"
                      animate="visible"
                      variants={glitch}
                      className="absolute inset-0"
                      style={{
                        transform: `translate(${offset * 4}px, ${
                          offset * 3
                        }px)`,
                      }}
                    >
                      <Image
                        src="/janith.jpg"
                        alt="Janith Ranasinghe"
                        width={600}
                        height={800}
                        className={`w-75 sm:w-95 lg:w-115 h-auto object-cover rounded-2xl shadow-2xl ${
                          i === 0
                            ? "opacity-35 blur-[3px] mix-blend-screen"
                            : "opacity-20 blur-[1.5px] mix-blend-screen"
                        }`}
                        quality={75}
                      />
                    </motion.div>
                  ))}

                  <Image
                    src="/janith.jpg"
                    alt="Janith Ranasinghe"
                    width={600}
                    height={800}
                    className="
                relative w-75 sm:w-95 lg:w-115 h-auto 
                object-cover rounded-2xl shadow-2xl 
                border border-cyan-500/30 shadow-cyan-900/40
                grayscale hover:grayscale-0 
                transition-all duration-1000
              "
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Text column - takes ~7/12 on desktop */}
            <motion.div
              className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left"
              style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
            >
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-sm sm:text-base uppercase tracking-[0.4em] text-cyan-400/70 mb-4 font-mono"
              >
                Full-Stack • IoT • Systems
              </motion.p>

              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 tracking-tight"
                initial="hidden"
                animate="visible"
                variants={glitch}
              >
                <motion.span className="block" variants={glitchChild}>
                  Hi, I'm Janith.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1.2 }}
                className="text-xl sm:text-2xl text-gray-200/90 mb-10 max-w-xl mx-auto lg:mx-0"
              >
                Building reliable full-stack & IoT systems
                <span className="text-cyan-300"> that actually last</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              >
                <motion.a
                  href="/Janith-Ranasinghe-CV.pdf"
                  download
                  className="group relative px-8 py-4 rounded-xl bg-linear-to-r from-cyan-600 to-indigo-700 text-white font-medium shadow-lg shadow-cyan-900/40 border border-cyan-400/20 overflow-hidden"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Download CV</span>
                  <motion.div
                    className="absolute inset-0 bg-white/15"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.a>

                {/* Optional secondary CTA */}
                <motion.a
                  href="/projects"
                  className="px-8 py-4 rounded-xl border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/30 transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See Projects →
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={sectionReveal}
        className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-linear-to-b from-black to-neutral-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#4f46e530_0%,transparent_40%)]" />

        <div className="relative z-10 max-w-4xl w-full">
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-12 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            WHO AM I?
          </motion.h2>

          <motion.div
            className="space-y-10 text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.4, delayChildren: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p variants={glitch}>
              B.Sc. Physics & Electronics (UoK) Graduate turned Full-Stack
              Software Engineer. Currently building responsive frontends,
              scalable backends, and intelligent IoT systems at Sistena.
            </motion.p>
            <motion.p variants={glitch}>
              I thrive close to the metal - writing clean, testable code and
              obsessing over failure modes before they become incidents.
            </motion.p>
            <motion.p variants={glitch}>
              Security, performance, and maintainability aren't checkboxes.
              They're the foundation of software that survives real-world chaos.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* ── PROJECTS ───────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        variants={sectionReveal}
        className="relative min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="absolute inset-0 bg-linear-to-t from-black via-indigo-950/30 to-black" />

        <div className="relative z-10 max-w-5xl w-full">
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-16 text-center bg-linear-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            THINGS I'VE BUILT
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-linear-to-br from-neutral-900/80 to-black/80 border border-cyan-900/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h3 className="text-2xl font-bold mb-4 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-cyan-950/50 text-cyan-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      mt-6 inline-flex items-center gap-2
      text-cyan-400 hover:text-cyan-300 font-medium
      transition-colors duration-300 group
    "
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      View Project →
                    </span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={sectionReveal}
        className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-linear-to-b from-black to-indigo-950/40"
      >
        <div className="relative z-10 text-center">
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-10 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            LET'S CONNECT
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            jranasinghe19@gmail.com
          </motion.p>

          <motion.div
            className="flex justify-center gap-12 text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, staggerChildren: 0.3 }}
          >
            {[
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/janithranasinghe1/",
              },
              { name: "GitHub", href: "https://github.com/Janith19" },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                className="hover:text-cyan-400 transition-colors duration-300"
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                {platform.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
