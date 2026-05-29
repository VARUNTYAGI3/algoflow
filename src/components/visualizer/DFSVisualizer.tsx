"use client";

import { motion } from "framer-motion";

import { DFSStep } from "@/utils/algorithms/dfs";

interface DFSVisualizerProps {
  step?: DFSStep;
}

const nodes = [
  { id: "A", x: 340, y: 40 },

  { id: "B", x: 180, y: 180 },

  { id: "C", x: 500, y: 180 },

  { id: "D", x: 100, y: 360 },

  { id: "E", x: 260, y: 360 },

  { id: "F", x: 500, y: 360 },
];

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "F"],
];

export default function DFSVisualizer({
  step,
}: DFSVisualizerProps) {

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-black/20
        p-8
      "
    >

      {/* HEADER */}
      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          DFS Traversal
        </h2>

        <p className="text-zinc-400 mt-2">
          Stack-based graph exploration
        </p>
      </div>

      {/* GRAPH */}
      <div
        className="
          relative
          h-[520px]
          rounded-3xl
          bg-gradient-to-b
          from-[#050816]
          to-[#0b1120]
          border border-white/5
          overflow-hidden
        "
      >

        <svg className="absolute inset-0 w-full h-full">

          {edges.map(([from, to], index) => {

            const fromNode = nodes.find(
              (n) => n.id === from
            );

            const toNode = nodes.find(
              (n) => n.id === to
            );

            if (!fromNode || !toNode)
              return null;

            return (
              <line
                key={index}

                x1={fromNode.x + 45}
                y1={fromNode.y + 45}

                x2={toNode.x + 45}
                y2={toNode.y + 45}

                stroke="#52525b"
                strokeWidth="4"
                opacity="0.7"
              />
            );
          })}
        </svg>

        {nodes.map((node) => {

          const isCurrent =
            step?.currentNode === node.id;

          const isVisited =
            step?.visited.includes(node.id);

          return (
            <motion.div
              key={node.id}

              animate={{
                scale: isCurrent
                  ? [1, 1.15, 1]
                  : 1,
              }}

              transition={{
                duration: 1.2,

                repeat: isCurrent
                  ? Infinity
                  : 0,
              }}

              className="
                absolute
                flex
                items-center
                justify-center
                rounded-full
                font-bold
                text-2xl
                border-2
              "

              style={{
                left: node.x,
                top: node.y,

                width: 90,
                height: 90,

                background: isCurrent
                  ? "#f97316"
                  : isVisited
                  ? "#22c55e"
                  : "#18181b",

                borderColor: isCurrent
                  ? "#fdba74"
                  : isVisited
                  ? "#86efac"
                  : "#3f3f46",
              }}
            >
              {node.id}
            </motion.div>
          );
        })}
      </div>

      {/* STACK + TRAVERSAL */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* STACK */}
        <div
          className="
            rounded-3xl
            border border-orange-500/20
            bg-orange-500/5
            p-6
          "
        >

          <h3 className="text-xl font-semibold text-orange-400 mb-5">
            Stack
          </h3>

          <div className="flex gap-3 flex-wrap">

            {step?.stack.map((node, index) => (
              <motion.div
                key={index}

                initial={{
                  scale: 0,
                }}

                animate={{
                  scale: 1,
                }}

                className="
                  w-14 h-14
                  rounded-2xl
                  bg-orange-500/20
                  border border-orange-400/20
                  flex items-center justify-center
                  font-bold
                  text-lg
                "
              >
                {node}
              </motion.div>
            ))}
          </div>
        </div>

        {/* TRAVERSAL */}
        <div
          className="
            rounded-3xl
            border border-green-500/20
            bg-green-500/5
            p-6
          "
        >

          <h3 className="text-xl font-semibold text-green-400 mb-5">
            Traversal Order
          </h3>

          <div className="flex gap-3 flex-wrap">

            {step?.traversal.map(
              (node, index) => (
                <motion.div
                  key={index}

                  initial={{
                    scale: 0,
                  }}

                  animate={{
                    scale: 1,
                  }}

                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-green-500/20
                    border border-green-400/20
                    flex items-center justify-center
                    font-bold
                    text-lg
                  "
                >
                  {node}
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}