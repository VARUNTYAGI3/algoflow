"use client";

import { AlgorithmType } from "@/types/algorithms";

interface ControlPanelProps {

  selectedAlgorithm: AlgorithmType;

  bfsStartNode: string;

  setBfsStartNode: (
    value: string
  ) => void;

  inputArray: string;

  setInputArray: (
    value: string
  ) => void;

  inputTarget: string;

  setInputTarget: (
    value: string
  ) => void;

  compareMode: boolean;

  setCompareMode: (
    value: boolean
  ) => void;

  runSimulation: () => void;
}

export default function ControlPanel({

  selectedAlgorithm,

  bfsStartNode,

  setBfsStartNode,

  inputArray,

  setInputArray,

  inputTarget,

  setInputTarget,

  compareMode,

  setCompareMode,

  runSimulation,

}: ControlPanelProps) {

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-[#0b1120]
        p-6
        mb-6
      "
    >

      <div className="flex flex-wrap gap-4 items-end">

        {/* ARRAY INPUT */}
        {(selectedAlgorithm ===
          "sliding-window"

          ||

          selectedAlgorithm ===
          "binary-search"

          ||

          selectedAlgorithm ===
          "merge-sort") && (

            <div>

              <p className="text-zinc-400 mb-2">

                Input Array

              </p>

              <input
                type="text"

                value={inputArray}

                onChange={(e) =>
                  setInputArray(
                    e.target.value
                  )
                }

                placeholder="e.g. 1,3,5,7,9"

                className="
                  bg-black/30
                  border border-white/10
                  rounded-2xl
                  px-5 py-4
                  w-[280px]
                  outline-none
                "
              />
            </div>
          )}

        {/* TARGET INPUT */}
        {(selectedAlgorithm ===
          "sliding-window" ||

          selectedAlgorithm ===
          "binary-search") && (

            <div>

              <p className="text-zinc-400 mb-2">

                Target

              </p>

              <input
                type="number"

                value={inputTarget}

                onChange={(e) =>
                  setInputTarget(
                    e.target.value
                  )
                }

                placeholder="Target"

                className="
                  bg-black/30
                  border border-white/10
                  rounded-2xl
                  px-5 py-4
                  w-[160px]
                  outline-none
                "
              />
            </div>
          )}

        {/* BFS / DFS START NODE */}
        {(selectedAlgorithm ===
          "bfs" ||

          selectedAlgorithm ===
          "dfs") && (

            <div>

              <p className="text-zinc-400 mb-2">

                Start Node

              </p>

              <input
                type="text"

                value={bfsStartNode}

                onChange={(e) =>
                  setBfsStartNode(
                    e.target.value
                  )
                }

                placeholder="A"

                className="
                  bg-black/30
                  border border-white/10
                  rounded-2xl
                  px-5 py-4
                  w-[140px]
                  outline-none
                "
              />
            </div>
          )}

        {/* RUN BUTTON */}
        <button
          onClick={runSimulation}

          className="
            px-6 py-4
            rounded-2xl
            font-semibold
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            hover:scale-105
            transition-all
          "
        >
          Run Simulation
        </button>

        {/* COMPARE MODE */}
        {selectedAlgorithm ===
          "sliding-window" && (

            <button
              onClick={() =>
                setCompareMode(
                  !compareMode
                )
              }

              className="
                px-6 py-4
                rounded-2xl
                font-semibold
                bg-blue-600
                hover:bg-blue-500
                transition-all
              "
            >
              {compareMode
                ? "Exit Compare"
                : "Compare Mode"}
            </button>
          )}
      </div>
    </div>
  );
}