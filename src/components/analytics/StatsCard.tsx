"use client";

import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatsCard({
  title,
  value,
  subtitle,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-5
        shadow-lg
      "
    >
      <p className="text-sm text-zinc-400 mb-2">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="text-sm text-emerald-400 mt-2">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}