import { useEffect, useState } from "react";

interface TaskbarProps {
  openWindows: Array<{ id: string; title: string; icon: React.ReactNode }>;
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
  onStartClick: () => void;
}

export function Taskbar({ openWindows, activeWindow, onWindowClick, onStartClick }: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-2 z-50 backdrop-blur-md"
      style={{
        background: "linear-gradient(90deg, rgba(236, 72, 153, 0.9) 0%, rgba(168, 85, 247, 0.9) 50%, rgba(6, 182, 212, 0.9) 100%)",
        borderTop: "2px solid rgba(236, 72, 153, 0.5)",
        boxShadow: "0 -4px 20px rgba(236, 72, 153, 0.3)",
      }}
    >
      <div className="flex items-center gap-2 flex-1">
        {/* Start Button */}
        <button
          onClick={onStartClick}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-bold text-sm transition-all hover:scale-105 shadow-lg"
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.6)",
          }}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          </div>
          <span className="drop-shadow-lg tracking-wide">START</span>
        </button>

        {/* Window buttons */}
        <div className="flex items-center gap-2 flex-1 overflow-x-auto">
          {openWindows.map((window) => (
            <button
              key={window.id}
              onClick={() => onWindowClick(window.id)}
              className="flex items-center gap-2 px-3 py-2 min-w-[140px] max-w-[160px] rounded-lg transition-all hover:scale-105"
              style={{
                background: activeWindow === window.id
                  ? "rgba(236, 72, 153, 0.4)"
                  : "rgba(255, 255, 255, 0.1)",
                border: activeWindow === window.id
                  ? "2px solid rgba(236, 72, 153, 0.8)"
                  : "2px solid rgba(255, 255, 255, 0.2)",
                boxShadow: activeWindow === window.id
                  ? "0 0 15px rgba(236, 72, 153, 0.5)"
                  : "none",
              }}
            >
              <span className="text-white text-xs">{window.icon}</span>
              <span className="text-white text-xs font-bold truncate">{window.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* System tray */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-lg" style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
      }}>
        <div className="text-white text-sm font-bold tracking-wide drop-shadow-lg">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}
