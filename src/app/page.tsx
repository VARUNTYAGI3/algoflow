"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  const features = [
    {
      title: "Live Execution",
      desc:
        "Watch algorithms execute step-by-step with synchronized animations.",
    },

    {
      title: "Code Sync",
      desc:
        "Understand exactly which line executes during simulation.",
    },

    {
      title: "Interactive Learning",
      desc:
        "Visualize pointers, traversals, search spaces, and complexity.",
    },

    {
      title: "Analytics",
      desc:
        "Track performance, operations, and execution insights.",
    },
  ];

  const algorithms = [
    "Sliding Window",
    "BFS Traversal",
    "DFS Traversal",
    "Binary Search",
  ];

  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        overflow-hidden
        relative
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.14),transparent_30%)]
        "
      />

      <div className="relative z-10">

        {/* NAVBAR */}
        <nav
          className="
            max-w-7xl
            mx-auto
            px-6
            py-6
            flex
            items-center
            justify-between
          "
        >

          <h1 className="text-3xl font-bold">
            AlgoFlow 🚀
          </h1>

          <Link
            href="/visualizer"
            className="
              px-5 py-3
              rounded-2xl
              bg-white/10
              border border-white/10
              hover:bg-white/20
              transition-all
            "
          >
            Open Platform
          </Link>
        </nav>

        {/* HERO */}
        <section
          className="
            max-w-7xl
            mx-auto
            px-6
            pt-20
            pb-28
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* LEFT */}
          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border border-purple-500/20
                  bg-purple-500/10
                  px-5 py-2
                  text-sm
                  text-purple-300
                  mb-8
                "
              >
                Interactive DSA Platform
              </div>

              <h1
                className="
                  text-6xl
                  lg:text-7xl
                  font-black
                  leading-tight
                "
              >
                Learn DSA
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-purple-400
                    to-pink-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Visually
                </span>
              </h1>

              <p
                className="
                  text-zinc-400
                  text-xl
                  mt-8
                  leading-relaxed
                  max-w-2xl
                "
              >
                AlgoFlow transforms
                complex algorithms into
                intuitive visual
                learning experiences
                with execution playback,
                code synchronization,
                traversal animation,
                and analytics.
              </p>

              <div className="flex gap-5 mt-10">

                <Link
                  href="/visualizer"
                  className="
                    px-8 py-4
                    rounded-2xl
                    font-semibold
                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500
                    hover:scale-105
                    transition-all
                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  Launch Visualizer
                </Link>

                <a
                  href="#features"
                  className="
                    px-8 py-4
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition-all
                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  View Features
                </a>

              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div

            initial={{
              opacity: 0,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.8,
            }}

            className="relative"
          >

            <div
              className="
                rounded-[32px]
                border border-white/10
                bg-[#0b1120]
                p-8
                shadow-2xl
              "
            >

              <div className="flex gap-3 mb-6">

                <div className="w-3 h-3 rounded-full bg-red-500" />

                <div className="w-3 h-3 rounded-full bg-yellow-500" />

                <div className="w-3 h-3 rounded-full bg-green-500" />

              </div>

              <div className="space-y-4">

                {algorithms.map(
                  (algo, index) => (

                    <motion.div
                      key={algo}

                      initial={{
                        opacity: 0,
                        x: 40,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay:
                          index * 0.15,
                      }}

                      className="
                        rounded-2xl
                        border border-white/5
                        bg-black/20
                        px-6 py-5
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div>

                        <h3 className="text-xl font-semibold">
                          {algo}
                        </h3>

                        <p className="text-zinc-500 mt-1">
                          Interactive visualization
                        </p>

                      </div>

                      <div
                        className="
                          w-3 h-3
                          rounded-full
                          bg-green-400
                        "
                      />

                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* GLOW */}
            <div
              className="
                absolute
                -inset-10
                bg-purple-500/20
                blur-3xl
                -z-10
              "
            />
          </motion.div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="
            max-w-7xl
            mx-auto
            px-6
            pb-28
          "
        >

          <div className="mb-14">

            <h2 className="text-5xl font-bold">
              Platform Features
            </h2>

            <p className="text-zinc-400 mt-5 text-lg">
              Designed for deep algorithm understanding.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {features.map((feature) => (

              <motion.div

                whileHover={{
                  y: -5,
                }}

                key={feature.title}

                className="
                  rounded-3xl
                  border border-white/10
                  bg-[#0b1120]
                  p-8
                "
              >

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p
                  className="
                    text-zinc-400
                    mt-4
                    leading-relaxed
                  "
                >
                  {feature.desc}
                </p>

              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="
            border-t border-white/10
            py-10
            text-center
            text-zinc-500
          "
        >
          Built with Next.js,
          TypeScript,
          Tailwind CSS,
          and Framer Motion.
        </footer>
      </div>
    </main>
  );
}