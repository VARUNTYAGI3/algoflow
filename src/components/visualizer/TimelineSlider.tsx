interface TimelineSliderProps {
  stepIndex: number;
  totalSteps: number;
  speed: number;
  setSpeed: (speed: number) => void;
  setStepIndex: (index: number) => void;
  setIsPlaying: (playing: boolean) => void;
}

export default function TimelineSlider({
  stepIndex,
  totalSteps,
  speed,
  setSpeed,
  setStepIndex,
  setIsPlaying,
}: TimelineSliderProps) {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">
            Execution Timeline
          </h2>

          <p className="text-sm text-zinc-400 mt-1">
            Step {stepIndex + 1} of {totalSteps}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-zinc-400">
            Speed
          </label>

          <select
            value={speed}
            onChange={(e) =>
              setSpeed(Number(e.target.value))
            }
            className="
              bg-zinc-900
              border border-white/10
              px-3 py-2
              rounded-xl
              outline-none
            "
          >
            <option value={1200}>
              Slow
            </option>

            <option value={800}>
              Normal
            </option>

            <option value={400}>
              Fast
            </option>
          </select>
        </div>
      </div>

      <div
        className="
          rounded-2xl
          border border-white/10
          bg-black/30
          p-5
        "
      >
        <input
          type="range"
          min={0}
          max={totalSteps - 1}
          value={stepIndex}
          onChange={(e) => {
            setStepIndex(Number(e.target.value));
            setIsPlaying(false);
          }}
          className="
            w-full
            accent-purple-500
            cursor-pointer
          "
        />

        <div className="flex justify-between mt-3">
          <p className="text-sm text-zinc-500">
            Start
          </p>

          <p className="text-sm text-purple-400 font-medium">
            {Math.round(
              ((stepIndex + 1) / totalSteps) * 100
            )}
            % Complete
          </p>

          <p className="text-sm text-zinc-500">
            End
          </p>
        </div>
      </div>
    </div>
  );
}