import { BFSStep } from "@/utils/algorithms/bfs";

interface BFSVisualizerProps {
  step?: BFSStep;
}

const nodes = [
  { id: "A", x: 260, y: 40 },

  { id: "B", x: 160, y: 140 },

  { id: "C", x: 360, y: 140 },

  { id: "D", x: 100, y: 260 },

  { id: "E", x: 220, y: 260 },

  { id: "F", x: 360, y: 260 },
];

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "F"],
];

export default function BFSVisualizer({
  step,
}: BFSVisualizerProps) {
  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-black/20
        p-6
      "
    >

      {/* TITLE */}
      <div className="mb-6">

        <h2 className="text-2xl font-semibold">
          BFS Traversal
        </h2>

        <p className="text-zinc-400 text-sm mt-1">
          Queue-based graph traversal
        </p>
      </div>

      {/* GRAPH */}
      <div className="relative h-[380px]">

        {/* EDGES */}
        <svg className="absolute inset-0 w-full h-full">

          {edges.map(([from, to], index) => {
            const fromNode = nodes.find(
              (n) => n.id === from
            );

            const toNode = nodes.find(
              (n) => n.id === to
            );

            if (!fromNode || !toNode) return null;

            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#52525b"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* NODES */}
        {nodes.map((node) => {
          const isCurrent =
            step?.currentNode === node.id;

          const isVisited =
            step?.visited.includes(node.id);

          return (
            <div
              key={node.id}
              className="
                absolute
                flex
                items-center
                justify-center
                rounded-full
                font-bold
                transition-all
                duration-300
                border
                shadow-lg
              "
              style={{
                left: node.x,
                top: node.y,
                width: 70,
                height: 70,

                background: isCurrent
                  ? "#a855f7"
                  : isVisited
                  ? "#22c55e"
                  : "#18181b",

                borderColor: isCurrent
                  ? "#d8b4fe"
                  : isVisited
                  ? "#86efac"
                  : "#3f3f46",
              }}
            >
              {node.id}
            </div>
          );
        })}
      </div>

      {/* QUEUE + TRAVERSAL */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* QUEUE */}
        <div
          className="
            rounded-2xl
            border border-blue-500/20
            bg-blue-500/5
            p-5
          "
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Queue
          </h3>

          <div className="flex gap-3 flex-wrap">

            {step?.queue.map((node, index) => (
              <div
                key={index}
                className="
                  w-12 h-12
                  rounded-xl
                  bg-blue-500/20
                  border border-blue-400/20
                  flex items-center justify-center
                  font-bold
                "
              >
                {node}
              </div>
            ))}
          </div>
        </div>

        {/* TRAVERSAL */}
        <div
          className="
            rounded-2xl
            border border-green-500/20
            bg-green-500/5
            p-5
          "
        >
          <h3 className="text-lg font-semibold text-green-400 mb-4">
            Traversal Order
          </h3>

          <div className="flex gap-3 flex-wrap">

            {step?.traversal.map(
              (node, index) => (
                <div
                  key={index}
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-green-500/20
                    border border-green-400/20
                    flex items-center justify-center
                    font-bold
                  "
                >
                  {node}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}