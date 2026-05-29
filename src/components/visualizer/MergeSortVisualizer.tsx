"use client";

import { motion } from "framer-motion";
import { MergeSortStep } from "@/utils/algorithms/mergeSort";

interface MergeSortVisualizerProps {
    step?: MergeSortStep;
}

export default function MergeSortVisualizer({
    step,
}: MergeSortVisualizerProps) {

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
            <div className="mb-8">

                <h2 className="text-4xl font-bold">
                    Merge Sort
                </h2>

                <p className="text-zinc-400 mt-3">
                    Divide & Conquer Visualization
                </p>

            </div>

            {/* RANGE INFO */}
            <div className="mb-8">

                <div
                    className="
            rounded-2xl
            bg-purple-500/10
            border border-purple-500/20
            px-6 py-4
            inline-flex
            gap-6
          "
                >
                    <span>
                        Left:
                        <strong className="ml-2">
                            {step.left}
                        </strong>
                    </span>

                    <span>
                        Right:
                        <strong className="ml-2">
                            {step.right}
                        </strong>
                    </span>
                </div>

            </div>

            {/* ARRAY */}
            <div
                className="
          flex
          flex-wrap
          gap-4
          justify-center
          mt-10
        "
            >

                {step.array.map(
                    (num, index) => {

                        const isActive =
                            index >= step.left &&
                            index <= step.right;

                        return (

                            <motion.div
                                key={index}

                                animate={{
                                    scale:
                                        isActive
                                            ? 1.12
                                            : 1,

                                    boxShadow:
                                        isActive
                                            ? "0 0 25px rgba(168,85,247,0.5)"
                                            : "0 0 0 rgba(0,0,0,0)",
                                }}

                                transition={{
                                    duration: 0.3,
                                }}

                                className={`
                  w-20
                  h-20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                  border

                  ${isActive
                                        ? `
                        bg-gradient-to-br
                        from-purple-600
                        to-pink-500
                        border-purple-300
                      `
                                        : `
                        bg-zinc-900
                        border-white/10
                      `
                                    }
                `}
                            >
                                {num}
                            </motion.div>

                        );
                    }
                )}

            </div>

            {/* EXPLANATION */}
            <div
                className="
          mt-10
          rounded-2xl
          border border-purple-500/20
          bg-purple-500/5
          p-6
        "
            >

                <h3 className="text-xl font-semibold mb-3">
                    Current Operation
                </h3>

                <p className="text-zinc-300">
                    {step.action}
                </p>

            </div>
        </div>
    );
}