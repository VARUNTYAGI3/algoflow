"use client";

import { motion } from "framer-motion";

import { AlgorithmType } from "@/types/algorithms";

interface SidebarProps {
  selectedAlgorithm: AlgorithmType;

  setSelectedAlgorithm: (
    value: AlgorithmType
  ) => void;
}

const algorithms = [
  {
    label: "Sliding Window",
    value: "sliding-window",
    icon: "🪟",
  },

  {
    label: "BFS Traversal",
    value: "bfs",
    icon: "🌐",
  },

  {
    label: "DFS Traversal",
    value: "dfs",
    icon: "🌲",
  },

  {
    label: "Binary Search",
    value: "binary-search",
    icon: "🔍",
  },
  {
    label: "Merge Sort",
    value: "merge-sort",
    icon: "🔀",
  },
];

export default function Sidebar({
  selectedAlgorithm,

  setSelectedAlgorithm,
}: SidebarProps) {

  return (
    <div
      className="
        h-screen
        sticky
        top-0
        w-[280px]
        border-r
        border-white/10
        bg-[#050816]
        px-5
        py-6
        flex
        flex-col
      "
    >

      {/* LOGO */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold">
          AlgoFlow
        </h1>

        <p className="text-zinc-500 mt-2">
          DSA Visualizer Platform
        </p>
      </div>

      {/* SECTION */}
      <div className="mb-4">

        <p
          className="
            text-xs
            uppercase
            tracking-widest
            text-zinc-500
          "
        >
          Algorithms
        </p>
      </div>

      {/* ITEMS */}
      <div className="space-y-2">

        {algorithms.map((algo) => {

          const isActive =
            selectedAlgorithm ===
            algo.value;

          return (
            <motion.button
              key={algo.value}

              whileHover={{
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.98,
              }}

              onClick={() =>
                setSelectedAlgorithm(
                  algo.value as AlgorithmType
                )
              }

              className={`
                w-full
                flex
                items-center
                gap-4
                px-4
                py-4
                rounded-2xl
                transition-all
                border

                ${isActive
                  ? `
                      bg-purple-500/20
                      border-purple-500/30
                    `
                  : `
                      bg-white/[0.03]
                      border-transparent
                      hover:bg-white/[0.06]
                    `
                }
              `}
            >

              <div className="text-2xl">
                {algo.icon}
              </div>

              <div className="text-left">

                <p className="font-medium">
                  {algo.label}
                </p>

                <p className="text-xs text-zinc-500 mt-1">

                  Interactive visualization

                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-auto">

        <div
          className="
            rounded-2xl
            bg-gradient-to-br
            from-purple-500/20
            to-pink-500/10
            border border-purple-500/20
            p-5
          "
        >

          <h3 className="font-semibold">
            AlgoFlow Pro
          </h3>

          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">

            Learn DSA visually with
            interactive execution.

          </p>
        </div>
      </div>
    </div>
  );
}