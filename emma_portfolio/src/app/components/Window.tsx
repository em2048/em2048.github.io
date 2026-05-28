import { X, Maximize2, Minimize2 } from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

interface WindowProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  onFocus: () => void;
  isActive: boolean;
  initialX?: number;
  initialY?: number;
}

export function Window({
  title,
  icon,
  children,
  onClose,
  onFocus,
  isActive,
  initialX = 100,
  initialY = 100,
}: WindowProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || isMaximized) return;
      setPosition({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isMaximized]);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ duration: 0.2, type: "spring" }}
      className="absolute overflow-hidden flex flex-col backdrop-blur-sm"
      style={{
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        width: isMaximized ? "100vw" : "700px",
        height: isMaximized ? "calc(100vh - 40px)" : "500px",
        zIndex: isActive ? 50 : 40,
        borderRadius: isMaximized ? "0" : "12px",
        border: "2px solid",
        borderColor: isActive ? "#ec4899" : "#a855f7",
        background: "rgba(20, 0, 40, 0.95)",
        boxShadow: isActive
          ? "0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)"
          : "0 0 20px rgba(168, 85, 247, 0.4)",
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        ref={dragRef}
        className="px-3 py-2 flex items-center justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
        style={{
          background: isActive
            ? "linear-gradient(90deg, #ec4899 0%, #a855f7 50%, #06b6d4 100%)"
            : "linear-gradient(90deg, #a855f7 0%, #6366f1 100%)",
          borderBottom: "1px solid rgba(236, 72, 153, 0.3)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="text-white w-4 h-4">{icon}</div>
          <span className="text-white font-bold text-sm tracking-wide drop-shadow-lg">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-7 h-7 flex items-center justify-center rounded transition-all hover:bg-white/20 text-white font-bold"
          >
            _
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMaximize();
            }}
            className="w-7 h-7 flex items-center justify-center rounded transition-all hover:bg-white/20"
          >
            <div className="w-3 h-3 border-2 border-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-7 h-7 flex items-center justify-center rounded transition-all hover:bg-pink-500 text-white font-bold"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div
        className="flex-1 overflow-auto p-4"
        style={{
          background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
