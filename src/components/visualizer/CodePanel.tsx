"use client";

import { motion } from "framer-motion";
import { Step } from "@/utils/slidingWindow";

interface CodePanelProps {
  step?: Step;
}

export default function CodePanel({
  step,
}: CodePanelProps) {
  const codeLines = [
    "let left = 0, sum = 0;",
    "for (let right = 0; right < nums.length; right++) {",
    "  sum += nums[right];",
    "  while (sum >= target) {",
    "    sum -= nums[left];",
    "    left++;",
    "  }",
    "}",
  ];

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-gradient-to-b
        from-[#0f172a]
        to-[#111827]
        p-6
        shadow-2xl
        overflow-hidden
        h-full
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Code Execution
        </h2>

        <div className="text-sm text-zinc-400">
          Live Sync
        </div>
      </div>

      <div className="space-y-2 overflow-y-auto h-[85%] pr-2">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            animate={{
              scale:
                step?.codeLine === i + 1
                  ? 1.02
                  : 1,
            }}
            className={`
              px-4 py-3
              rounded-xl
              font-mono text-sm
              transition-all
              ${
                step?.codeLine === i + 1
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg"
                  : "bg-black/20"
              }
            `}
          >
            <span className="text-zinc-400 mr-4">
              {i + 1}
            </span>

            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
}