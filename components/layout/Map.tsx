"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const destinations = [
  {
    title: "About",
    description: "The person behind the code.",
    href: "/about",
    position: "left-[8%] top-[18%]",
  },
  {
    title: "Experience",
    description: "Where I've built things.",
    href: "/experience",
    position: "right-[8%] top-[25%]",
  },
  {
    title: "Projects",
    description: "Things I've created.",
    href: "/projects",
    position: "left-[15%] top-[55%]",
  },
  {
    title: "Skills",
    description: "Things I know & love.",
    href: "/skills",
    position: "right-[15%] top-[58%]",
  },
  {
    title: "Timeline",
    description: "The journey so far.",
    href: "/timeline",
    position: "left-[35%] bottom-[12%]",
  },
  {
    title: "Human",
    description: "The wonderfully unhinged side.",
    href: "/human",
    position: "right-[32%] bottom-[10%]",
  },
  {
    title: "Contact",
    description: "Let's talk.",
    href: "/contact",
    position: "left-1/2 bottom-[3%]",
  },
];

export default function Map() {
  return (
    <section
      id="map"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        py-32
      "
    >
      {/* Heading */}

      <div className="relative z-20 mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Navigation
        </p>

        <h2 className="mt-4 font-heading text-4xl font-bold md:text-6xl">
          Explore My Map
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-slate-400">
          Every place tells a different part of my story.
          Pick a destination and explore.
        </p>
      </div>

      {/* Map */}

      <div className="relative mx-auto mt-20 h-162.5 max-w-6xl">

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
            bg-violet-500/10
            blur-[100px]
          "
        />

        {/* Connecting lines */}

        <svg
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
          "
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
        >
          <motion.path
            d="
              M500 325
              C400 230 300 180 130 120

              M500 325
              C600 230 700 200 870 160

              M500 325
              C390 360 280 400 150 390

              M500 325
              C610 370 720 420 850 400

              M500 325
              C450 450 400 520 350 570

              M500 325
              C560 450 650 520 680 570

              M500 325
              C500 450 500 550 500 620
            "
            fill="none"
            stroke="rgba(139,92,246,0.25)"
            strokeWidth="2"
            strokeDasharray="8 10"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
            }}
          />
        </svg>

        {/* Center */}

        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            flex
            h-28
            w-28
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-violet-400/40
            bg-slate-900/80
            text-center
            shadow-2xl
            shadow-violet-500/20
            backdrop-blur-xl
          "
        >
          <div>
            <p className="font-heading text-lg font-bold">
              JAHNAVI
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-purple-400">
              You are here
            </p>
          </div>
        </motion.div>

        {/* Destinations */}

        {destinations.map((destination, index) => (
          <motion.div
            key={destination.title}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15 * index,
            }}
            viewport={{
              once: true,
            }}
            className={`absolute ${destination.position}`}
          >
            <Link href={destination.href}>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  group
                  flex
                  w-36
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Node */}

                <div
                  className="
                    relative
                    mb-3
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-violet-400/40
                    bg-slate-900/90
                    shadow-lg
                    shadow-violet-500/10
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:border-violet-300
                    group-hover:shadow-violet-500/40
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-violet-400
                      shadow-lg
                      shadow-violet-400
                      transition-all
                      duration-300
                      group-hover:scale-150
                    "
                  />
                </div>

                {/* Label */}

                <h3 className="font-heading text-sm font-semibold text-white">
                  {destination.title}
                </h3>

                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {destination.description}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}