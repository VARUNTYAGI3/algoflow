export default function DashboardHeader() {

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-gradient-to-br
        from-[#0f172a]
        to-[#111827]
        p-8
        mb-8
        overflow-hidden
        relative
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          w-[300px]
          h-[300px]
          bg-purple-500/20
          blur-[120px]
          rounded-full
          top-[-100px]
          right-[-100px]
        "
      />

      <div className="relative z-10">

        <h1 className="text-5xl font-bold leading-tight">

          Learn DSA
          <br />

          Visually ⚡

        </h1>

        <p
          className="
            text-zinc-400
            text-lg
            mt-5
            max-w-[700px]
            leading-relaxed
          "
        >
          AlgoFlow helps beginners understand
          algorithms through interactive
          step-by-step execution, traversal
          visualization, and live code sync.
        </p>

        {/* STATS */}
        <div className="flex flex-wrap gap-4 mt-8">

          <div
            className="
              rounded-2xl
              bg-white/5
              border border-white/10
              px-5 py-4
            "
          >
            <p className="text-zinc-500 text-sm">
              Algorithms
            </p>

            <h3 className="text-2xl font-bold mt-1">
              3+
            </h3>
          </div>

          <div
            className="
              rounded-2xl
              bg-white/5
              border border-white/10
              px-5 py-4
            "
          >
            <p className="text-zinc-500 text-sm">
              Visualizers
            </p>

            <h3 className="text-2xl font-bold mt-1">
              Interactive
            </h3>
          </div>

          <div
            className="
              rounded-2xl
              bg-white/5
              border border-white/10
              px-5 py-4
            "
          >
            <p className="text-zinc-500 text-sm">
              Playback
            </p>

            <h3 className="text-2xl font-bold mt-1">
              Real-time
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}