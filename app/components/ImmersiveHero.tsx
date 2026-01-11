"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ImmersiveHero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); // image scales down
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]); // fade out text

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        style={{ scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/janith.jpg"
          alt="Janith Ranasinghe"
          width={320}
          height={420}
          className="rounded-3xl shadow-xl object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative text-center max-w-2xl z-10"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Janith</h1>
        <p className="text-lg text-gray-600">
          Security-focused engineer building systems that don’t fall apart.
        </p>
      </motion.div>
    </section>
  );
}
