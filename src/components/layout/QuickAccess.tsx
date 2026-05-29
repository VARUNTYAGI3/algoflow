"use client";

import { motion } from "framer-motion";

import { AlgorithmType } from "@/types/algorithms";

interface QuickAccessProps {

  selectedAlgorithm: AlgorithmType;

  setSelectedAlgorithm: (
    value: AlgorithmType
  ) => void;
}

const cards = [
  {
    title: "Sliding Window",

    description:
      "Visualize dynamic window movement",

    value: "sliding-window",

    icon: "🪟",
  },

  {
    title: "BFS Traversal",

    description:
      "Queue-based graph traversal",

    value: "bfs",

    icon: "🌐",
  },

  {
    title: "DFS Traversal",

    description:
      "Stack-based depth traversal",

    value: "dfs",

    icon: "🌲",
  },
  {
    title: "Binary Search",

    description:
      "Divide and conquer searching",

    value: "binary-search",

    icon: "🔍",
  },
  {
    title: "Merge Sort",
    description:
      "Divide & Conquer Sorting",
    value: "merge-sort",
    icon: "🔀",
  },
];

export default function QuickAccess({

  selectedAlgorithm,

  setSelectedAlgorithm,

}: QuickAccessProps) {

  return (
    <div className="grid md:grid-cols-3 gap-5 mb-8">

      {cards.map((card) => {

        const isActive =
          selectedAlgorithm ===
          card.value;

        return (
          <motion.button
            key={card.value}

            whileHover={{
              y: -4,
            }}

            whileTap={{
              scale: 0.98,
            }}

            onClick={() =>
              setSelectedAlgorithm(
                card.value as AlgorithmType
              )
            }

            className={`
              rounded-3xl
              border
              p-6
              text-left
              transition-all

              ${isActive
                ? `
                    bg-purple-500/15
                    border-purple-500/30
                  `
                : `
                    bg-[#0b1120]
                    border-white/10
                  `
              }
            `}
          >

            <div className="text-4xl mb-5">

              {card.icon}

            </div>

            <h3 className="text-2xl font-semibold">

              {card.title}

            </h3>

            <p className="text-zinc-400 mt-3 leading-relaxed">

              {card.description}

            </p>
          </motion.button>
        );
      })}
    </div>
  );
}