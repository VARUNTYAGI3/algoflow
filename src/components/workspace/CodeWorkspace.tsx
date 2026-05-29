"use client";

interface CodeWorkspaceProps {

  code: string[];

  activeLine: number;

  algorithmName: string;
}

export default function CodeWorkspace({

  code,

  activeLine,

  algorithmName,

}: CodeWorkspaceProps) {

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-[#0b1120]
        overflow-hidden
      "
    >

      {/* HEADER */}
      <div
        className="
          border-b border-white/10
          px-6 py-5
          flex items-center justify-between
        "
      >

        <div>

          <h2 className="text-3xl font-bold">

            Code Execution

          </h2>

          <p className="text-zinc-400 mt-2">

            {algorithmName}

          </p>
        </div>

        <div
          className="
            px-4 py-2
            rounded-xl
            bg-purple-500/10
            border border-purple-500/20
            text-purple-300
            text-sm
          "
        >
          Live Execution
        </div>
      </div>

      {/* CODE */}
      <div className="p-6 space-y-4">

        {code.map((line, index) => {

          const isActive =
            activeLine === index + 1;

          return (
            <div
              key={index}

              className={`
                rounded-2xl
                border
                px-5
                py-5
                flex
                gap-5
                transition-all

                ${
                  isActive
                    ? `
                      bg-purple-500/15
                      border-purple-500/30
                    `
                    : `
                      bg-black/20
                      border-white/5
                    `
                }
              `}
            >

              <div
                className="
                  text-zinc-500
                  w-[30px]
                "
              >
                {index + 1}
              </div>

              <pre
                className="
                  whitespace-pre-wrap
                  text-lg
                  font-mono
                "
              >
                {line}
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}