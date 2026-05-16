"use client";

import ComplexityChart from "./ComplexityChart";
import StatsCard from "./StatsCard";

export default function AnalyticsPanel() {
  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Brute Force Ops"
          value="2,540"
        />

        <StatsCard
          title="Optimized Ops"
          value="180"
        />

        <StatsCard
          title="Performance Gain"
          value="92%"
          subtitle="Highly optimized"
        />
      </div>

      <ComplexityChart />
    </section>
  );
}