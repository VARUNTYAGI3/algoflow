export default function ComparePanel() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div
        className="
          rounded-3xl
          border border-red-500/20
          bg-red-500/5
          p-6
        "
      >
        <h2 className="text-2xl font-semibold text-red-400 mb-4">
          Brute Force — O(n²)
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          Simulates every possible subarray
          using nested loops, causing
          quadratic growth in operations.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border border-green-500/20
          bg-green-500/5
          p-6
        "
      >
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Sliding Window — O(n)
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          Dynamically expands and shrinks
          the window while maintaining
          linear traversal.
        </p>
      </div>
    </div>
  );
}