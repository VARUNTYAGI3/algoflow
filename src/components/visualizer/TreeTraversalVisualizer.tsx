"use client";

import { motion } from "framer-motion";

interface Props {

  step?: {
    current: number;
    visited: number[];
    action: string;
  };

  traversalType: string;
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
  traversalType,
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
        {traversalType.charAt(0).toUpperCase() +
          traversalType.slice(1)} Traversal
      </h2>
      <div
        className="
    mb-8
    rounded-2xl
    border border-blue-500/20
    bg-blue-500/5
    p-5
  "
      >

        <h3 className="font-semibold mb-3">
          Traversal Rule
        </h3>

        <p className="text-zinc-300">

          {traversalType === "inorder" &&
            "Left → Root → Right"}

          {traversalType === "preorder" &&
            "Root → Left → Right"}

          {traversalType === "postorder" &&
            "Left → Right → Root"}

          {traversalType === "levelorder" &&
            "Level By Level"}

        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <div
            className="
      rounded-2xl
      bg-purple-500/10
      border border-purple-500/20
      p-4
    "
          >
            <p className="text-zinc-400">
              Current Node
            </p>

            <h3 className="text-3xl font-bold mt-2">
              {step.current}
            </h3>
          </div>

          <div
            className="
      rounded-2xl
      bg-green-500/10
      border border-green-500/20
      p-4
    "
          >
            <p className="text-zinc-400">
              Visited Count
            </p>

            <h3 className="text-3xl font-bold mt-2">
              {step.visited.length}
            </h3>
          </div>

          <div
            className="
      rounded-2xl
      bg-orange-500/10
      border border-orange-500/20
      p-4
    "
          >
            <p className="text-zinc-400">
              Remaining
            </p>

            <h3 className="text-3xl font-bold mt-2">
              {7 - step.visited.length}
            </h3>
          </div>

        </div>
      </div>

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

                ${active
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
        <div
          className="
    mt-6
    rounded-2xl
    border border-green-500/20
    bg-green-500/5
    p-6
  "
        >

          <h3 className="text-xl font-semibold mb-4">
            Traversal Order
          </h3>

          <div className="flex flex-wrap gap-3">

            {step.visited.map((node) => (

              <div
                key={node}
                className="
          px-4
          py-2
          rounded-xl
          bg-green-500/20
          border border-green-500/30
          font-semibold
        "
              >
                {node}
              </div>

            ))}

          </div>

        </div>
        <p>
          {step.action}
        </p>
      </div>
    </div>
  );
}