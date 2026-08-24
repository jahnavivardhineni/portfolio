"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Timeline", href: "/timeline" },
  { name: "Human", href: "/human" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2"
    >
      <nav
        className="
          rounded-2xl
          border border-white/10
          bg-slate-950/70
          px-5 py-3
          shadow-2xl
          shadow-purple-950/20
          backdrop-blur-xl
        "
      >
        <div className="flex items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                bg-linear-to-br
                from-violet-500
                to-blue-500
                font-heading
                font-bold
                text-white
                shadow-lg
                shadow-violet-500/20
              "
            >
              J
            </motion.div>

            <div className="hidden sm:block">
              <p className="font-heading text-sm font-bold tracking-wide text-white">
                JAHNAVI
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                The Map
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  group relative
                  rounded-xl
                  px-3 py-2
                  text-sm
                  text-slate-300
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-0.5
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-violet-400
                    transition-all
                    duration-300
                    group-hover:w-1/2
                  "
                />
              </Link>
            ))}
          </div>

          {/* Desktop Status */}

          <div className="hidden items-center gap-2 xl:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-xs text-slate-400">
              Somewhere on the map
            </span>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label="Toggle navigation menu"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-white/10
              bg-white/5
              text-white
              lg:hidden
            "
          >
            <div className="space-y-1.5">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 5 : 0,
                }}
                className="block h-0.5 w-5 bg-white"
              />

              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                className="block h-0.5 w-5 bg-white"
              />

              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -5 : 0,
                }}
                className="block h-0.5 w-5 bg-white"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        x: -10,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="
                          block
                          rounded-xl
                          px-4 py-3
                          text-sm
                          text-slate-300
                          transition
                          hover:bg-white/5
                          hover:text-white
                        "
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}