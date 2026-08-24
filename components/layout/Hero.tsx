"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-125
          w-125
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10 max-w-5xl text-center">

        {/* Eyebrow */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            mb-6
            text-sm
            uppercase
            tracking-[0.35em]
            text-purple-400
          "
        >
          Welcome, Explorer
        </motion.p>

        {/* Main heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            font-heading
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Welcome to the{" "}
          <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Map
          </span>
          <br />
          of Hinged & Unhinged
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-base
            leading-relaxed
            text-slate-400
            sm:text-lg
          "
        >
          A little map of the things I build, the things I love,
          the places Ive been, and the wonderfully chaotic human
          behind it all.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="mt-10"
        >
          <motion.a
            href="#map"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-linear-to-r
              from-violet-500
              to-blue-500
              px-7
              py-4
              font-medium
              text-white
              shadow-lg
              shadow-violet-500/20
            "
          >
            Explore the Map

            <motion.span
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>

      </div>

      {/* Bottom hint */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-xs
          uppercase
          tracking-[0.3em]
          text-slate-600
        "
      >
        scroll to explore
      </motion.div>
    </section>
  );
}