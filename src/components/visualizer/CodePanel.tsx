"use client";

import { AlgorithmType } from "@/types/algorithms";

interface CodePanelProps {

  activeLine?: number;

  selectedAlgorithm: AlgorithmType;
}

const codeSnippets:
  Record<
    AlgorithmType,
    string[]
  > = {

  "sliding-window": [
    "let left = 0;",
    "let sum = 0;",
    "for (let right = 0; right < nums.length; right++) {",
    "sum += nums[right];",
    "while (sum >= target) {",
    "sum -= nums[left];",
    "left++;",
    "}",
    "}",
  ],

  bfs: [
    "const queue = [start];",
    "const visited = new Set();",
    "while (queue.length > 0) {",
    "const node = queue.shift();",
    "if (visited.has(node)) continue;",
    "visited.add(node);",
    "for (const neighbor of graph[node]) {",
    "queue.push(neighbor);",
    "}",
    "}",
  ],

  dfs: [
    "const stack = [start];",
    "const visited = new Set();",
    "while (stack.length > 0) {",
    "const node = stack.pop();",
    "if (visited.has(node)) continue;",
    "visited.add(node);",
    "for (const neighbor of graph[node]) {",
    "stack.push(neighbor);",
    "}",
    "}",
  ],

  "binary-search": [
    "let left = 0;",
    "let right = nums.length - 1;",
    "while (left <= right) {",
    "const mid = Math.floor((left + right) / 2);",
    "if (nums[mid] === target) return mid;",
    "if (nums[mid] < target) left = mid + 1;",
    "else right = mid - 1;",
    "}",
  ],
  "merge-sort": [
    "mergeSort(left, right)",
    "mid = (left + right) / 2",
    "mergeSort(left, mid)",
    "mergeSort(mid + 1, right)",
    "merge(left, mid, right)",
  ],
};

export default function CodePanel({

  activeLine,

  selectedAlgorithm,

}: CodePanelProps) {

  const code =
    codeSnippets[
    selectedAlgorithm
    ] || [];

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-[#0b1120]
        p-6
        h-full
        overflow-auto
      "
    >

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Code Execution
        </h2>

        <p className="text-zinc-400">
          Live Sync
        </p>
      </div>

      <div className="space-y-4">

        {code.map((line, index) => {

          const isActive =
            activeLine ===
            index + 1;

          return (
            <div
              key={index}

              className={`
                rounded-2xl
                border
                px-5
                py-4
                flex
                gap-5
                transition-all

                ${isActive
                  ? `
                      bg-purple-500/15
                      border-purple-500/30
                    `
                  : `
                      bg-black/20
                      border-white/5
                    `
                }
              `}
            >

              <div
                className="
                  text-zinc-500
                  w-[30px]
                "
              >
                {index + 1}
              </div>

              <pre
                className="
                  whitespace-pre-wrap
                  font-mono
                "
              >
                {line}
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}