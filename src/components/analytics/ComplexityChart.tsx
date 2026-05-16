"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { size: 10, brute: 100, optimized: 20 },
  { size: 20, brute: 400, optimized: 40 },
  { size: 30, brute: 900, optimized: 60 },
  { size: 40, brute: 1600, optimized: 80 },
  { size: 50, brute: 2500, optimized: 100 },
];

export default function ComplexityChart() {
  return (
    <div
      className="
        h-[350px]
        w-full
        rounded-2xl
        border border-white/10
        bg-white/5
        p-4
        backdrop-blur-xl
      "
    >
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">
          Complexity Growth
        </h2>

        <p className="text-sm text-zinc-400">
          Brute Force vs Optimized
        </p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

          <XAxis dataKey="size" stroke="#a1a1aa" />

          <YAxis stroke="#a1a1aa" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="brute"
            stroke="#ef4444"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="optimized"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}