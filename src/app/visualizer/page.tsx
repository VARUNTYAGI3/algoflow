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
import DFSVisualizer from "@/components/visualizer/DFSVisualizer";
import TraversalInsights from "@/components/visualizer/TraversalInsights";
import BinarySearchVisualizer from "@/components/visualizer/BinarySearchVisualizer";

import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import QuickAccess from "@/components/layout/QuickAccess";

import WorkspaceTabs, {
  WorkspaceTab,
} from "@/components/layout/WorkspaceTabs";

import AnalyticsWorkspace from "@/components/workspace/AnalyticsWorkspace";
import CodeWorkspace from "@/components/workspace/CodeWorkspace";

import {
  bfsTraversal,
  sampleGraph,
  BFSStep,
} from "@/utils/algorithms/bfs";

import {
  dfsTraversal,
  DFSStep,
} from "@/utils/algorithms/dfs";

import {
  binarySearchSteps,
  BinarySearchStep,
} from "@/utils/algorithms/binarySearch";
import MergeSortVisualizer from "@/components/visualizer/MergeSortVisualizer";
import TreeTraversalVisualizer from "@/components/visualizer/TreeTraversalVisualizer";

import {
  inorderTraversal,
  sampleTree,
  TreeStep,
} from "@/utils/algorithms/treeTraversal";
import {
  mergeSortSteps,
  MergeSortStep,
} from "@/utils/algorithms/mergeSort";
export default function Visualizer() {

  // STATES
  const [steps, setSteps] =
    useState<Step[]>([]);

  const [bfsSteps, setBfsSteps] =
    useState<BFSStep[]>([]);

  const [dfsSteps, setDfsSteps] =
    useState<DFSStep[]>([]);

  const [
    binarySearchSimulation,
    setBinarySearchSimulation,
  ] = useState<
    BinarySearchStep[]
  >([]);
  const [
    mergeSortSimulation,
    setMergeSortSimulation,
  ] = useState<
    MergeSortStep[]
  >([]);
  const [
    treeSteps,
    setTreeSteps,
  ] = useState<TreeStep[]>([]);
  const [stepIndex, setStepIndex] =
    useState(0);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [speed, setSpeed] =
    useState(800);

  const [activeTab, setActiveTab] =
    useState<WorkspaceTab>(
      "visualization"
    );

  const [selectedAlgorithm,
    setSelectedAlgorithm] =
    useState<AlgorithmType>(
      "sliding-window"
    );

  const [inputArray, setInputArray] =
    useState("");

  const [inputTarget, setInputTarget] =
    useState("");

  const [compareMode, setCompareMode] =
    useState(false);

  const [bfsStartNode,
    setBfsStartNode] =
    useState("A");

  // INPUTS
  const nums = inputArray
    ? inputArray.split(",").map(Number)
    : [];

  const target =
    Number(inputTarget);

  // RUN SIMULATION
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
    if (
      selectedAlgorithm === "bfs"
    ) {

      const result = bfsTraversal(
        sampleGraph,
        bfsStartNode
      );

      setBfsSteps(result);

      setStepIndex(0);

      setIsPlaying(false);
    }

    // DFS
    if (
      selectedAlgorithm === "dfs"
    ) {

      const result = dfsTraversal(
        sampleGraph,
        bfsStartNode
      );

      setDfsSteps(result);

      setStepIndex(0);

      setIsPlaying(false);
    }

    // BINARY SEARCH
    if (
      selectedAlgorithm ===
      "binary-search"
    ) {

      const sortedNums =
        inputArray
          .split(",")

          .map((n) =>
            Number(n.trim())
          )

          .sort((a, b) => a - b);

      const result =
        binarySearchSteps(
          sortedNums,
          target
        );

      setBinarySearchSimulation(
        result
      );

      setStepIndex(0);

      setIsPlaying(false);
    }

    if (
      selectedAlgorithm ===
      "merge-sort"
    ) {

      const nums =
        inputArray
          .split(",")

          .map((n) =>
            Number(n.trim())
          );

      const result =
        mergeSortSteps(nums);

      setMergeSortSimulation(
        result
      );

      setStepIndex(0);

      setIsPlaying(false);
    }
    if (
      selectedAlgorithm ===
      "tree-traversal"
    ) {

      const result =
        inorderTraversal(
          sampleTree
        );

      setTreeSteps(result);

      setStepIndex(0);

      setIsPlaying(false);
    }
  };

  // CURRENT STEP
  let step;

  if (
    selectedAlgorithm ===
    "sliding-window"
  ) {

    step = steps[stepIndex];

  } else if (
    selectedAlgorithm === "bfs"
  ) {

    step = bfsSteps[stepIndex];

  } else if (
    selectedAlgorithm === "dfs"
  ) {

    step = dfsSteps[stepIndex];

  } else if (
    selectedAlgorithm ===
    "binary-search"
  ) {

    step =
      binarySearchSimulation[
      stepIndex
      ];
  }
  else if (
    selectedAlgorithm ===
    "merge-sort"
  ) {

    step =
      mergeSortSimulation[
      stepIndex
      ];
  }
  else if (
    selectedAlgorithm ===
    "tree-traversal"
  ) {

    step =
      treeSteps[
      stepIndex
      ];
  }
  // TOTAL STEPS
  let totalSteps = 0;

  if (
    selectedAlgorithm ===
    "sliding-window"
  ) {

    totalSteps = steps.length;

  } else if (
    selectedAlgorithm === "bfs"
  ) {

    totalSteps = bfsSteps.length;

  } else if (
    selectedAlgorithm === "dfs"
  ) {

    totalSteps = dfsSteps.length;

  } else if (
    selectedAlgorithm ===
    "binary-search"
  ) {

    totalSteps =
      binarySearchSimulation.length;
  }
  else if (
    selectedAlgorithm ===
    "merge-sort"
  ) {

    totalSteps =
      mergeSortSimulation.length;
  }
  else if (
    selectedAlgorithm ===
    "tree-traversal"
  ) {

    totalSteps =
      treeSteps.length;
  }

  // TITLE
  const algorithmTitle =
    selectedAlgorithm ===
      "sliding-window"

      ? "Sliding Window"

      : selectedAlgorithm === "bfs"

        ? "Breadth First Search"

        : selectedAlgorithm === "dfs"

          ? "Depth First Search"

          : selectedAlgorithm ===
            "binary-search"

            ? "Binary Search"

            : selectedAlgorithm ===
              "tree-traversal"

              ? "Tree Traversal"

              : "Merge Sort";

  // CODE SNIPPETS
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
    "tree-traversal": [

      "inorder(node.left)",

      "visit(node)",

      "inorder(node.right)",

    ],
  };

  // EXPLANATION
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

  // AUTOPLAY
  useEffect(() => {

    if (!isPlaying) return;

    if (totalSteps === 0) return;

    const interval = setInterval(() => {

      setStepIndex((prev) => {

        if (
          prev >= totalSteps - 1
        ) {

          setIsPlaying(false);

          return prev;
        }

        return prev + 1;
      });

    }, speed);

    return () =>
      clearInterval(interval);

  }, [
    isPlaying,
    speed,
    totalSteps,
  ]);

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <Sidebar
        selectedAlgorithm={
          selectedAlgorithm
        }
        setSelectedAlgorithm={
          setSelectedAlgorithm
        }
      />

      {/* MAIN */}
      <div className="flex-1 overflow-auto">

        <div className="max-w-[1600px] mx-auto px-6 py-6">

          <DashboardHeader />

          <QuickAccess
            selectedAlgorithm={
              selectedAlgorithm
            }
            setSelectedAlgorithm={
              setSelectedAlgorithm
            }
          />

          <WorkspaceTabs
            activeTab={activeTab}
            setActiveTab={
              setActiveTab
            }
          />

          {/* HEADER */}
          <div className="mb-10">

            <h1 className="text-5xl font-bold tracking-tight">
              AlgoFlow 🚀
            </h1>

            <p className="text-zinc-400 mt-3 text-lg">
              DSA Execution Simulator
            </p>
          </div>

          {/* SELECTOR */}
          <AlgorithmSelector
            selectedAlgorithm={
              selectedAlgorithm
            }
            setSelectedAlgorithm={
              setSelectedAlgorithm
            }
          />

          {/* CONTROLS */}
          <ControlPanel
            selectedAlgorithm={
              selectedAlgorithm
            }
            bfsStartNode={
              bfsStartNode
            }
            setBfsStartNode={
              setBfsStartNode
            }
            inputArray={inputArray}
            setInputArray={
              setInputArray
            }
            inputTarget={
              inputTarget
            }
            setInputTarget={
              setInputTarget
            }
            compareMode={
              compareMode
            }
            setCompareMode={
              setCompareMode
            }
            runSimulation={
              runSimulation
            }
          />

          {/* VISUALIZATION */}
          {activeTab ===
            "visualization" && (

              <div
                className="
                  grid
                  grid-cols-1
                  xl:grid-cols-[minmax(0,1fr)_420px]
                  gap-6
                  items-start
                "
              >

                {/* LEFT */}
                <div className="space-y-6">

                  <div
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-[#0b1120]
                      p-6
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
                              Math.max(
                                prev - 1,
                                0
                              )
                            )
                          }
                          className="
                            bg-zinc-800
                            hover:bg-zinc-700
                            px-5 py-2
                            rounded-xl
                          "
                        >
                          Prev
                        </button>

                        <button
                          onClick={() =>
                            setIsPlaying(
                              !isPlaying
                            )
                          }
                          className="
                            bg-gradient-to-r
                            from-purple-600
                            to-pink-500
                            px-5 py-2
                            rounded-xl
                          "
                        >
                          {isPlaying
                            ? "Pause"
                            : "Play"}
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
                          "
                        >
                          Next
                        </button>
                      </div>
                    </div>

                    {/* BFS */}
                    {selectedAlgorithm === "bfs" && (
                      <BFSVisualizer
                        step={
                          bfsSteps[
                          stepIndex
                          ]
                        }
                      />
                    )}

                    {/* DFS */}
                    {selectedAlgorithm === "dfs" && (
                      <DFSVisualizer
                        step={
                          dfsSteps[
                          stepIndex
                          ]
                        }
                      />
                    )}

                    {/* BINARY SEARCH */}
                    {selectedAlgorithm ===
                      "binary-search" && (

                        <BinarySearchVisualizer
                          step={
                            binarySearchSimulation[
                            stepIndex
                            ]
                          }

                          array={
                            inputArray
                              .split(",")

                              .map((n) =>
                                Number(
                                  n.trim()
                                )
                              )

                              .sort(
                                (a, b) =>
                                  a - b
                              )
                          }
                        />

                      )}
                    {selectedAlgorithm ===
                      "merge-sort" && (

                        <MergeSortVisualizer
                          step={
                            mergeSortSimulation[
                            stepIndex
                            ]
                          }
                        />
                      )}

                    {selectedAlgorithm ===
                      "tree-traversal" && (

                        <TreeTraversalVisualizer
                          step={
                            treeSteps[
                            stepIndex
                            ]
                          }
                        />
                      )}

                    {/* SLIDING WINDOW */}
                    {selectedAlgorithm ===
                      "sliding-window" && (
                        <>
                          <div className="flex flex-wrap gap-5 mt-8">

                            {nums.map((val, i) => {

                              const isInsideWindow =
                                step &&
                                i >= (step as Step).left &&
                                i <= (step as Step).right;

                              const isLeft =
                                step &&
                                i === (step as Step).left;

                              const isRight =
                                step &&
                                i === (step as Step).right;

                              return (

                                <div
                                  key={i}
                                  className="
          flex
          flex-col
          items-center
          relative
        "
                                >

                                  {/* POINTER LABELS */}
                                  <div className="h-10 flex flex-col items-center justify-end">

                                    {isLeft && (
                                      <motion.p

                                        initial={{
                                          opacity: 0,
                                          y: -10,
                                        }}

                                        animate={{
                                          opacity: 1,
                                          y: 0,
                                        }}

                                        className="
                text-orange-400
                text-sm
                font-semibold
              "
                                      >
                                        left
                                      </motion.p>
                                    )}

                                    {isRight && (
                                      <motion.p

                                        initial={{
                                          opacity: 0,
                                          y: -10,
                                        }}

                                        animate={{
                                          opacity: 1,
                                          y: 0,
                                        }}

                                        className="
                text-blue-400
                text-sm
                font-semibold
              "
                                      >
                                        right
                                      </motion.p>
                                    )}
                                  </div>

                                  {/* ARRAY CELL */}
                                  <motion.div

                                    animate={{
                                      scale:
                                        isInsideWindow
                                          ? 1.12
                                          : 1,

                                      boxShadow:
                                        isInsideWindow
                                          ? "0px 0px 30px rgba(168,85,247,0.55)"
                                          : "0px 0px 0px rgba(0,0,0,0)",
                                    }}

                                    transition={{
                                      duration: 0.35,
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
            transition-all

            ${isInsideWindow
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
                                    {val}
                                  </motion.div>

                                  {/* INDEX */}
                                  <p className="text-zinc-500 mt-3 text-sm">
                                    {i}
                                  </p>
                                </div>
                              );
                            })}
                          </div>

                          {step &&
                            explanation && (
                              <InsightsPanel
                                step={
                                  step as Step
                                }
                                nums={nums}
                                explanation={
                                  explanation
                                }
                              />
                            )}
                        </>
                      )}

                    {/* BFS INSIGHTS */}
                    {selectedAlgorithm === "bfs" && (
                      <TraversalInsights
                        step={
                          bfsSteps[
                          stepIndex
                          ]
                        }
                        type="bfs"
                      />
                    )}

                    {/* DFS INSIGHTS */}
                    {selectedAlgorithm === "dfs" && (
                      <TraversalInsights
                        step={
                          dfsSteps[
                          stepIndex
                          ]
                        }
                        type="dfs"
                      />
                    )}

                    {/* TIMELINE */}
                    {totalSteps > 0 && (
                      <TimelineSlider
                        stepIndex={
                          stepIndex
                        }
                        totalSteps={
                          totalSteps
                        }
                        speed={speed}
                        setSpeed={
                          setSpeed
                        }
                        setStepIndex={
                          setStepIndex
                        }
                        setIsPlaying={
                          setIsPlaying
                        }
                      />
                    )}
                  </div>

                  {/* COMPARE */}
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

                {/* RIGHT */}
                <div
                  className="
                    sticky
                    top-6
                    h-[calc(100vh-48px)]
                  "
                >

                  <CodePanel
                    activeLine={
                      step?.codeLine
                    }
                    selectedAlgorithm={
                      selectedAlgorithm
                    }
                  />
                </div>
              </div>
            )}

          {/* CODE TAB */}
          {activeTab === "code" && (

            <CodeWorkspace
              code={
                codeSnippets[
                selectedAlgorithm
                ] || []
              }

              activeLine={
                step?.codeLine || 0
              }

              algorithmName={
                algorithmTitle
              }
            />
          )}

          {/* ANALYTICS TAB */}
          {activeTab ===
            "analytics" && (

              <AnalyticsWorkspace
                algorithm={
                  algorithmTitle
                }

                totalSteps={
                  totalSteps
                }

                currentStep={
                  stepIndex
                }

                compareMode={
                  compareMode
                }
              />
            )}
        </div>
      </div>
    </div>
  );
}