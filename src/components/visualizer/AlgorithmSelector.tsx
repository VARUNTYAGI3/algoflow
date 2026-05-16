import { AlgorithmType } from "@/types/algorithms";

interface AlgorithmSelectorProps {
  selectedAlgorithm: AlgorithmType;

  setSelectedAlgorithm: (
    algorithm: AlgorithmType
  ) => void;
}

const algorithms = [
  {
    label: "Sliding Window",
    value: "sliding-window",
  },

  {
    label: "BFS Traversal",
    value: "bfs",
  },

  {
    label: "DFS Traversal",
    value: "dfs",
  },

  {
    label: "Binary Search",
    value: "binary-search",
  },
];

export default function AlgorithmSelector({
  selectedAlgorithm,
  setSelectedAlgorithm,
}: AlgorithmSelectorProps) {
  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-[#0b1120]
        p-5
        shadow-xl
        mb-6
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold">
            Algorithm
          </h2>

          <p className="text-sm text-zinc-400 mt-1">
            Select visualization pattern
          </p>
        </div>

        <select
          value={selectedAlgorithm}
          onChange={(e) =>
            setSelectedAlgorithm(
              e.target.value as AlgorithmType
            )
          }
          className="
            bg-black/40
            border border-white/10
            px-4 py-3
            rounded-xl
            outline-none
            min-w-[220px]
          "
        >
          {algorithms.map((algo) => (
            <option
              key={algo.value}
              value={algo.value}
            >
              {algo.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}