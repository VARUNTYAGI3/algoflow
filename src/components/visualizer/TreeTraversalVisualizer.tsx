"use client";

import { motion } from "framer-motion";

interface Props {
  step?: {
    current: number;
    visited: number[];
    action: string;
  };
}

const nodes = [
  { value: 1, x: 300, y: 40 },

  { value: 2, x: 180, y: 160 },

  { value: 3, x: 420, y: 160 },

  { value: 4, x: 100, y: 300 },

  { value: 5, x: 260, y: 300 },

  { value: 6, x: 360, y: 300 },

  { value: 7, x: 520, y: 300 },
];

const edges = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 6],
  [3, 7],
];

export default function TreeTraversalVisualizer({
  step,
}: Props) {

  if (!step) return null;

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-[#0b1120]
        p-8
      "
    >

      <h2 className="text-4xl font-bold mb-8">
        Inorder Traversal
      </h2>

      <div
        className="
          relative
          h-[420px]
        "
      >

        <svg
          className="
            absolute
            inset-0
            w-full
            h-full
          "
        >
          {edges.map(
            ([from, to], index) => {

              const parent =
                nodes.find(
                  n =>
                    n.value === from
                )!;

              const child =
                nodes.find(
                  n =>
                    n.value === to
                )!;

              return (
                <line
                  key={index}
                  x1={parent.x}
                  y1={parent.y}
                  x2={child.x}
                  y2={child.y}
                  stroke="#475569"
                  strokeWidth="3"
                />
              );
            }
          )}
        </svg>

        {nodes.map(node => {

          const active =
            node.value ===
            step.current;

          const visited =
            step.visited.includes(
              node.value
            );

          return (
            <motion.div
              key={node.value}

              animate={{
                scale:
                  active
                    ? 1.2
                    : 1,
              }}

              className={`
                absolute
                w-16
                h-16
                rounded-full
                flex
                items-center
                justify-center
                font-bold
                text-xl
                border

                ${
                  active
                    ? `
                      bg-purple-600
                      border-purple-300
                    `
                    : visited
                    ? `
                      bg-green-600
                      border-green-300
                    `
                    : `
                      bg-zinc-900
                      border-white/10
                    `
                }
              `}
              style={{
                left:
                  node.x - 32,
                top:
                  node.y - 32,
              }}
            >
              {node.value}
            </motion.div>
          );
        })}
      </div>

      <div
        className="
          mt-8
          rounded-2xl
          bg-purple-500/10
          border border-purple-500/20
          p-6
        "
      >
        <p>
          {step.action}
        </p>
      </div>
    </div>
  );
}