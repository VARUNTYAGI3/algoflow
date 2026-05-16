interface ControlPanelProps {
    inputArray: string;
    setInputArray: (value: string) => void;
    inputTarget: string;
    setInputTarget: (value: string) => void;
    compareMode: boolean;
    setCompareMode: (value: boolean) => void;
    runSimulation: () => void;
}

export default function ControlPanel({
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
        mb-8
        shadow-2xl
      "
        >
            <div className="flex flex-wrap items-center gap-4">

                <div>
                    <p className="text-sm text-zinc-400 mb-2">
                        Input Array
                    </p>

                    <input
                        value={inputArray}
                        onChange={(e) =>
                            setInputArray(e.target.value)
                        }
                        placeholder="e.g. 2,3,1,2,4,3"
                        className="
              bg-black/40
              border border-white/10
              px-4 py-3
              rounded-xl
              w-[280px]
              outline-none
              focus:border-purple-500
            "
                    />
                </div>

                <div>
                    <p className="text-sm text-zinc-400 mb-2">
                        Target
                    </p>

                    <input
                        value={inputTarget}
                        onChange={(e) =>
                            setInputTarget(e.target.value)
                        }
                        placeholder="Target"
                        className="
              bg-black/40
              border border-white/10
              px-4 py-3
              rounded-xl
              w-[120px]
              outline-none
              focus:border-pink-500
            "
                    />
                </div>

                <div className="flex gap-3 mt-7">

                    <button
                        onClick={runSimulation}
                        className="
              bg-gradient-to-r
              from-purple-600
              to-pink-500
              px-6 py-3
              rounded-xl
              font-medium
              hover:scale-105
              transition
            "
                    >
                        Run Simulation
                    </button>

                    <button
                        onClick={() =>
                            setCompareMode(!compareMode)
                        }
                        className="
              bg-blue-600
              px-6 py-3
              rounded-xl
              font-medium
              hover:bg-blue-500
              transition
            "
                    >
                        {compareMode
                            ? "Exit Compare"
                            : "Compare Mode"}
                    </button>
                </div>
            </div>
        </div>
    );
}