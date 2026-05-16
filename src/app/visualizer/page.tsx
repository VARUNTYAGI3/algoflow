"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { slidingWindow, Step } from "@/utils/slidingWindow";
import { generateExplanation } from "@/utils/explanations";

import AnalyticsPanel from "@/components/analytics/AnalyticsPanel";

import TimelineSlider from "@/components/visualizer/TimelineSlider";
import InsightsPanel from "@/components/visualizer/InsightsPanel";
import ComparePanel from "@/components/visualizer/ComparePanel";
import CodePanel from "@/components/visualizer/CodePanel";
import AlgorithmSelector from "@/components/visualizer/AlgorithmSelector";
import ControlPanel from "@/components/visualizer/ControlPanel";
import { AlgorithmType } from "@/types/algorithms";
import BFSVisualizer from "@/components/visualizer/BFSVisualizer";

import {
  bfsTraversal,
  sampleGraph,
  BFSStep,
} from "@/utils/algorithms/bfs";
export default function Visualizer() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [bfsSteps, setBfsSteps] = useState<
    BFSStep[]
  >([]);
  const [stepIndex, setStepIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [speed, setSpeed] = useState(800);

  const [inputArray, setInputArray] = useState("");

  const [inputTarget, setInputTarget] = useState("");

  const [compareMode, setCompareMode] = useState(false);

  const nums = inputArray
    ? inputArray.split(",").map(Number)
    : [];

  const target = Number(inputTarget);
  //{Run Simulation Handler}
  const runSimulation = () => {

    // SLIDING WINDOW
    if (
      selectedAlgorithm ===
      "sliding-window"
    ) {
      const result = slidingWindow(
        nums,
        target
      );

      setSteps(result);

      setStepIndex(0);

      setIsPlaying(false);
    }

    // BFS
    if (selectedAlgorithm === "bfs") {
      const result = bfsTraversal(
        sampleGraph,
        "A"
      );

      setBfsSteps(result);

      setStepIndex(0);

      setIsPlaying(false);
    }
  };

  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<AlgorithmType>(
      "sliding-window"
    );
  const step =
    selectedAlgorithm === "sliding-window"
      ? steps[stepIndex]
      : bfsSteps[stepIndex];

  const totalSteps =
    selectedAlgorithm === "sliding-window"
      ? steps.length
      : bfsSteps.length;
  const previousStep =
    stepIndex > 0
      ? steps[stepIndex - 1]
      : undefined;

  const explanation =
    step &&
    generateExplanation(
      step,
      previousStep,
      target
    );

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }

        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, steps, speed]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-6 py-6">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight">
            AlgoFlow 🚀
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            DSA Execution Simulator & Pattern Visualizer
          </p>
        </div>

        {/* ALGORITHM SELECTOR */}
        <AlgorithmSelector
          selectedAlgorithm={selectedAlgorithm}
          setSelectedAlgorithm={
            setSelectedAlgorithm
          }
        />

        {/* CONTROL PANEL */}
        <ControlPanel
          inputArray={inputArray}
          setInputArray={setInputArray}
          inputTarget={inputTarget}
          setInputTarget={setInputTarget}
          compareMode={compareMode}
          setCompareMode={setCompareMode}
          runSimulation={runSimulation}
        />

        {/* MAIN GRID */}
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-[minmax(0,1fr)_420px]
          gap-6
          items-start
        "
        >

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* VISUALIZER */}
            <div
              className="
              rounded-3xl
              border border-white/10
              bg-[#0b1120]
              p-6
              shadow-2xl
            "
            >

              {/* TOP BAR */}
              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-semibold">
                  Visualization
                </h2>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      setStepIndex((prev) =>
                        Math.max(prev - 1, 0)
                      )
                    }
                    className="
                    bg-zinc-800
                    hover:bg-zinc-700
                    px-5 py-2
                    rounded-xl
                    transition
                  "
                  >
                    Prev
                  </button>

                  <button
                    onClick={() =>
                      setIsPlaying(!isPlaying)
                    }
                    className="
                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500
                    px-5 py-2
                    rounded-xl
                    hover:scale-105
                    transition
                  "
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>

                  <button
                    onClick={() =>
                      setStepIndex((prev) =>
                        Math.min(
                          prev + 1,
                          totalSteps - 1
                        )
                      )
                    }
                    className="
                    bg-zinc-800
                    hover:bg-zinc-700
                    px-5 py-2
                    rounded-xl
                    transition
                  "
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* BFS VISUALIZER */}
              {selectedAlgorithm === "bfs" && (
                <BFSVisualizer
                  step={bfsSteps[stepIndex]}
                />
              )}

              {/* SLIDING WINDOW */}
              {selectedAlgorithm ===
                "sliding-window" && (
                  <>
                    {/* STEP INFO */}
                    {step && (
                      <div
                        className="
                      mb-8
                      grid grid-cols-2 md:grid-cols-4 gap-4
                    "
                      >
                        <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                          <p className="text-zinc-400 text-sm">
                            Left Pointer
                          </p>

                          <h3 className="text-2xl font-bold text-orange-400">
                            {(step as Step).left}
                          </h3>
                        </div>

                        <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                          <p className="text-zinc-400 text-sm">
                            Right Pointer
                          </p>

                          <h3 className="text-2xl font-bold text-blue-400">
                            {(step as Step).right}
                          </h3>
                        </div>

                        <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                          <p className="text-zinc-400 text-sm">
                            Window Sum
                          </p>

                          <h3 className="text-2xl font-bold text-green-400">
                            {(step as Step).sum}
                          </h3>
                        </div>

                        <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
                          <p className="text-zinc-400 text-sm">
                            Operations
                          </p>

                          <h3 className="text-2xl font-bold text-pink-400">
                            {(step as Step).operations}
                          </h3>
                        </div>
                      </div>
                    )}

                    {/* POINTERS */}
                    {step && (
                      <div className="flex gap-4 mb-3">
                        {nums.map((_, i) => (
                          <div
                            key={i}
                            className="w-16 flex justify-center"
                          >
                            {i ===
                              (step as Step).left && (
                                <motion.div
                                  animate={{
                                    y: [0, 6, 0],
                                  }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                  }}
                                  className="text-orange-400 text-sm"
                                >
                                  ↓ left
                                </motion.div>
                              )}

                            {i ===
                              (step as Step).right && (
                                <motion.div
                                  animate={{
                                    y: [0, 6, 0],
                                  }}
                                  transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                  }}
                                  className="text-blue-400 text-sm"
                                >
                                  ↓ right
                                </motion.div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* ARRAY */}
                    <div className="flex flex-wrap gap-4">
                      {nums.map((val, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale:
                              step &&
                                i >=
                                (step as Step).left &&
                                i <=
                                (step as Step).right
                                ? 1.15
                                : 1,

                            backgroundColor:
                              step &&
                                i >=
                                (step as Step).left &&
                                i <=
                                (step as Step).right
                                ? "#22c55e"
                                : "#1f2937",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                        w-16 h-16
                        rounded-2xl
                        flex items-center justify-center
                        font-bold text-lg
                        border border-white/10
                        shadow-lg
                      "
                        >
                          {val}
                        </motion.div>
                      ))}
                    </div>

                    {/* INSIGHTS */}
                    {step && explanation && (
                      <InsightsPanel
                        step={step as Step}
                        nums={nums}
                        explanation={explanation}
                      />
                    )}

                    {/* TIMELINE */}
                    {totalSteps > 0 && (
                      <TimelineSlider
                        stepIndex={stepIndex}
                        totalSteps={totalSteps}
                        speed={speed}
                        setSpeed={setSpeed}
                        setStepIndex={setStepIndex}
                        setIsPlaying={setIsPlaying}
                      />
                    )}
                  </>
                )}

              {/* BFS TIMELINE */}
              {selectedAlgorithm === "bfs" &&
                totalSteps > 0 && (
                  <TimelineSlider
                    stepIndex={stepIndex}
                    totalSteps={totalSteps}
                    speed={speed}
                    setSpeed={setSpeed}
                    setStepIndex={setStepIndex}
                    setIsPlaying={setIsPlaying}
                  />
                )}
            </div>

            {/* COMPARE MODE */}
            {compareMode &&
              selectedAlgorithm ===
              "sliding-window" && (
                <ComparePanel />
              )}

            {/* ANALYTICS */}
            {selectedAlgorithm ===
              "sliding-window" && (
                <AnalyticsPanel />
              )}
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
            sticky
            top-6
            h-[calc(100vh-48px)]
          "
          >
            <CodePanel step={step as Step} />
          </div>
        </div>
      </div>
    </div>
  );
}