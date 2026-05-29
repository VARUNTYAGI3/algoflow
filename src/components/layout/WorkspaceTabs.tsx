"use client";

import { motion } from "framer-motion";

export type WorkspaceTab =
  | "visualization"
  | "code"
  | "analytics";

interface WorkspaceTabsProps {

  activeTab: WorkspaceTab;

  setActiveTab: (
    value: WorkspaceTab
  ) => void;
}

const tabs = [
  {
    label: "Visualization",
    value: "visualization",
    icon: "🎥",
  },

  {
    label: "Code Execution",
    value: "code",
    icon: "💻",
  },

  {
    label: "Analytics",
    value: "analytics",
    icon: "📊",
  },
];

export default function WorkspaceTabs({

  activeTab,

  setActiveTab,

}: WorkspaceTabsProps) {

  return (
    <div
      className="
        flex
        gap-3
        mb-6
        overflow-x-auto
      "
    >

      {tabs.map((tab) => {

        const isActive =
          activeTab === tab.value;

        return (
          <motion.button
            key={tab.value}

            whileHover={{
              y: -2,
            }}

            whileTap={{
              scale: 0.97,
            }}

            onClick={() =>
              setActiveTab(
                tab.value as WorkspaceTab
              )
            }

            className={`
              px-5
              py-3
              rounded-2xl
              border
              flex
              items-center
              gap-3
              whitespace-nowrap
              transition-all

              ${
                isActive
                  ? `
                    bg-purple-500/20
                    border-purple-500/30
                  `
                  : `
                    bg-[#0b1120]
                    border-white/10
                    hover:bg-white/[0.05]
                  `
              }
            `}
          >

            <span className="text-xl">
              {tab.icon}
            </span>

            <span className="font-medium">
              {tab.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}