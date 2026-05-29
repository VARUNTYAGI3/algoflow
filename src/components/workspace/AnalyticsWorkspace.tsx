"use client";

interface AnalyticsWorkspaceProps {

  algorithm: string;

  totalSteps: number;

  currentStep: number;

  compareMode: boolean;
}

export default function AnalyticsWorkspace({

  algorithm,

  totalSteps,

  currentStep,

  compareMode,

}: AnalyticsWorkspaceProps) {

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-[#0b1120]
          p-8
        "
      >

        <h2 className="text-4xl font-bold">

          Analytics Dashboard

        </h2>

        <p className="text-zinc-400 mt-3">

          Live execution insights and
          algorithm metrics.

        </p>
      </div>

      {/* METRICS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0b1120]
            p-6
          "
        >

          <p className="text-zinc-500">
            Algorithm
          </p>

          <h3 className="text-3xl font-bold mt-3">

            {algorithm}

          </h3>
        </div>

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0b1120]
            p-6
          "
        >

          <p className="text-zinc-500">
            Total Steps
          </p>

          <h3 className="text-3xl font-bold mt-3">

            {totalSteps}

          </h3>
        </div>

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0b1120]
            p-6
          "
        >

          <p className="text-zinc-500">
            Current Step
          </p>

          <h3 className="text-3xl font-bold mt-3">

            {currentStep + 1}

          </h3>
        </div>
      </div>

      {/* COMPLEXITY */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-[#0b1120]
          p-8
        "
      >

        <h3 className="text-2xl font-bold mb-6">

          Complexity Analysis

        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div
            className="
              rounded-2xl
              bg-black/20
              border border-white/5
              p-6
            "
          >

            <p className="text-zinc-500">
              Time Complexity
            </p>

            <h4 className="text-4xl font-bold mt-4 text-purple-400">

              O(n)

            </h4>
          </div>

          <div
            className="
              rounded-2xl
              bg-black/20
              border border-white/5
              p-6
            "
          >

            <p className="text-zinc-500">
              Space Complexity
            </p>

            <h4 className="text-4xl font-bold mt-4 text-blue-400">

              O(n)

            </h4>
          </div>
        </div>
      </div>

      {/* COMPARE MODE */}
      {compareMode && (

        <div
          className="
            rounded-3xl
            border border-green-500/20
            bg-green-500/5
            p-8
          "
        >

          <h3 className="text-2xl font-bold text-green-400">

            Compare Mode Active

          </h3>

          <p className="text-zinc-300 mt-3">

            Comparing brute force vs
            optimized execution.

          </p>
        </div>
      )}
    </div>
  );
}