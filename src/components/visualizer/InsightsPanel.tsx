import { Step } from "@/utils/slidingWindow";

interface InsightsPanelProps {
  step: Step;
  nums: number[];
  explanation: string;
}

export default function InsightsPanel({
  step,
  nums,
  explanation,
}: InsightsPanelProps) {
  return (
    <div
      className="
        mt-8
        rounded-3xl
        border border-white/10
        bg-black/20
        overflow-hidden
      "
    >
      <div
        className="
          px-6 py-4
          border-b border-white/10
          bg-white/[0.03]
        "
      >
        <h2 className="text-xl font-semibold">
          Execution Insights
        </h2>

        <p className="text-sm text-zinc-400 mt-1">
          Real-time algorithm state analysis
        </p>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-zinc-500 mb-2">
              Current Action
            </p>

            <div
              className="
                rounded-2xl
                bg-green-500/10
                border border-green-500/20
                px-4 py-3
              "
            >
              <p className="text-green-400 font-medium">
                {explanation}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-500 mb-2">
              Active Window
            </p>

            <div
              className="
                rounded-2xl
                bg-black/30
                border border-white/5
                px-4 py-3
              "
            >
              <p className="text-zinc-200">
                [
                {nums
                  .slice(step.left, step.right + 1)
                  .join(", ")}
                ]
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-500 mb-2">
              Complexity State
            </p>

            <div
              className="
                rounded-2xl
                bg-purple-500/10
                border border-purple-500/20
                px-4 py-3
              "
            >
              <p className="text-purple-300">
                Linear traversal in progress — O(n)
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm text-zinc-500 mb-2">
              Pointer State
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="
                  rounded-2xl
                  bg-orange-500/10
                  border border-orange-500/20
                  p-4
                "
              >
                <p className="text-xs text-orange-300 mb-1">
                  LEFT
                </p>

                <h3 className="text-2xl font-bold text-orange-400">
                  {step.left}
                </h3>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-blue-500/10
                  border border-blue-500/20
                  p-4
                "
              >
                <p className="text-xs text-blue-300 mb-1">
                  RIGHT
                </p>

                <h3 className="text-2xl font-bold text-blue-400">
                  {step.right}
                </h3>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-500 mb-2">
              Current Window Sum
            </p>

            <div
              className="
                rounded-2xl
                bg-emerald-500/10
                border border-emerald-500/20
                p-4
              "
            >
              <h3 className="text-3xl font-bold text-emerald-400">
                {step.sum}
              </h3>
            </div>
          </div>

          <div>
            <p className="text-sm text-zinc-500 mb-2">
              Operations Processed
            </p>

            <div
              className="
                rounded-2xl
                bg-pink-500/10
                border border-pink-500/20
                p-4
              "
            >
              <h3 className="text-3xl font-bold text-pink-400">
                {step.operations}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}