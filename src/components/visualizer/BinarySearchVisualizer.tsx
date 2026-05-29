"use client";

import { motion } from "framer-motion";

import { BinarySearchStep } from "@/utils/algorithms/binarySearch";

interface BinarySearchVisualizerProps {
  step?: BinarySearchStep;

  array: number[];
}

export default function BinarySearchVisualizer({

  step,

  array,

}: BinarySearchVisualizerProps) {

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

      {/* HEADER */}
      <div className="mb-10">

        <h2 className="text-4xl font-bold">

          Binary Search

        </h2>

        <p className="text-zinc-400 mt-3">

          Divide and conquer searching

        </p>
      </div>

      {/* POINTER INFO */}
      <div className="grid md:grid-cols-3 gap-5 mb-10">

        <div
          className="
            rounded-2xl
            bg-blue-500/10
            border border-blue-500/20
            p-5
          "
        >

          <p className="text-zinc-400">
            Left Pointer
          </p>

          <h3 className="text-4xl font-bold mt-3 text-blue-400">

            {step.left}

          </h3>
        </div>

        <div
          className="
            rounded-2xl
            bg-purple-500/10
            border border-purple-500/20
            p-5
          "
        >

          <p className="text-zinc-400">
            Mid Pointer
          </p>

          <h3 className="text-4xl font-bold mt-3 text-purple-400">

            {step.mid}

          </h3>
        </div>

        <div
          className="
            rounded-2xl
            bg-pink-500/10
            border border-pink-500/20
            p-5
          "
        >

          <p className="text-zinc-400">
            Right Pointer
          </p>

          <h3 className="text-4xl font-bold mt-3 text-pink-400">

            {step.right}

          </h3>
        </div>
      </div>

      {/* ARRAY */}
      <div
        className="
          rounded-3xl
          border border-white/5
          bg-black/20
          p-8
          overflow-x-auto
        "
      >

        <div className="flex gap-5 min-w-max">

          {array.map((num, index) => {

            const isMid =
              index === step.mid;

            const isLeft =
              index === step.left;

            const isRight =
              index === step.right;

            const isInRange =
              index >= step.left &&
              index <= step.right;

            return (
              <div
                key={index}

                className="
                  flex
                  flex-col
                  items-center
                "
              >

                {/* POINTERS */}
                <div className="h-[60px]">

                  {isLeft && (
                    <p className="text-blue-400 text-sm">

                      left

                    </p>
                  )}

                  {isMid && (
                    <p className="text-purple-400 text-sm">

                      mid

                    </p>
                  )}

                  {isRight && (
                    <p className="text-pink-400 text-sm">

                      right

                    </p>
                  )}
                </div>

                {/* BOX */}
                <motion.div

                  animate={{
                    scale: isMid
                      ? [1, 1.12, 1]
                      : 1,
                  }}

                  transition={{
                    duration: 1,

                    repeat: isMid
                      ? Infinity
                      : 0,
                  }}

                  className={`
                    w-20
                    h-20
                    rounded-2xl
                    border
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    transition-all

                    ${
                      step.found &&
                      isMid
                        ? `
                          bg-green-500
                          border-green-300
                        `
                        : isMid
                        ? `
                          bg-purple-500/30
                          border-purple-400
                        `
                        : isInRange
                        ? `
                          bg-blue-500/10
                          border-blue-500/20
                        `
                        : `
                          bg-zinc-900
                          border-zinc-700
                          opacity-40
                        `
                    }
                  `}
                >
                  {num}
                </motion.div>

                <p className="text-zinc-500 text-sm mt-3">

                  {index}

                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* EXPLANATION */}
      <div
        className="
          mt-8
          rounded-2xl
          border border-purple-500/20
          bg-purple-500/5
          p-6
        "
      >

        <h3 className="text-xl font-semibold mb-4">

          Execution Insight

        </h3>

        <p className="text-zinc-200 text-lg">

          {step.action}

        </p>
      </div>
    </div>
  );
}