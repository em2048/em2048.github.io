import { motion } from "motion/react";
import { useState } from "react";

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseDown={() => setIsSelected(true)}
      onMouseUp={() => setIsSelected(false)}
      onMouseLeave={() => setIsSelected(false)}
      className="flex flex-col items-center gap-2 p-2 rounded-lg group transition-all"
      style={{
        background: isSelected
          ? "rgba(236, 72, 153, 0.3)"
          : "transparent",
        border: isSelected
          ? "2px solid rgba(236, 72, 153, 0.6)"
          : "2px solid transparent",
        boxShadow: isSelected
          ? "0 0 15px rgba(236, 72, 153, 0.4)"
          : "none",
      }}
    >
      {/* Icon with glow */}
      <div
        className="w-12 h-12 flex items-center justify-center text-white transition-all"
        style={{
          filter: isSelected
            ? "drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))"
            : "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
        }}
      >
        {icon}
      </div>

      {/* Label */}
      <span
        className="text-white text-xs text-center font-bold px-2 py-1 rounded transition-all"
        style={{
          textShadow: "0 0 8px rgba(236, 72, 153, 0.8), 1px 1px 2px rgba(0,0,0,0.8)",
          background: isSelected
            ? "rgba(236, 72, 153, 0.5)"
            : "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(4px)",
        }}
      >
        {label}
      </span>
    </motion.button>
  );
}
