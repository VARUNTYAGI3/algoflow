interface TraversalInsightsProps {

  step: any;

  type: "bfs" | "dfs";
}

export default function TraversalInsights({

  step,

  type,

}: TraversalInsightsProps) {

  if (!step) return null;

  return (
    <div
      className="
        mt-8
        rounded-3xl
        border border-purple-500/20
        bg-purple-500/5
        p-6
      "
    >

      {/* HEADER */}
      <div className="mb-5">

        <h3 className="text-2xl font-semibold">

          {type.toUpperCase()} Insights

        </h3>

        <p className="text-zinc-400 mt-1">

          Live traversal reasoning

        </p>
      </div>

      {/* ACTION */}
      <div
        className="
          rounded-2xl
          bg-black/30
          border border-white/5
          p-5
        "
      >
        <p className="text-lg text-zinc-200">

          {step.action}

        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <div
          className="
            rounded-2xl
            bg-black/20
            border border-white/5
            p-4
          "
        >
          <p className="text-zinc-400 text-sm">
            Current Node
          </p>

          <h4 className="text-2xl font-bold mt-2 text-purple-400">
            {step.currentNode}
          </h4>
        </div>

        <div
          className="
            rounded-2xl
            bg-black/20
            border border-white/5
            p-4
          "
        >
          <p className="text-zinc-400 text-sm">

            {type === "bfs"
              ? "Queue Size"
              : "Stack Size"}

          </p>

          <h4 className="text-2xl font-bold mt-2 text-blue-400">

            {type === "bfs"
              ? step.queue.length
              : step.stack.length}

          </h4>
        </div>

        <div
          className="
            rounded-2xl
            bg-black/20
            border border-white/5
            p-4
          "
        >
          <p className="text-zinc-400 text-sm">
            Visited Nodes
          </p>

          <h4 className="text-2xl font-bold mt-2 text-green-400">

            {step.visited.length}

          </h4>
        </div>
      </div>
    </div>
  );
}