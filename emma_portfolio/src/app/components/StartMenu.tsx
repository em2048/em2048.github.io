import { motion, AnimatePresence } from "motion/react";
import { User, FolderGit2, Code2, FileText, Mail, Terminal, Power, Settings } from "lucide-react";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWindow: (windowId: string) => void;
}

export function StartMenu({ isOpen, onClose, onOpenWindow }: StartMenuProps) {
  const handleItemClick = (windowId: string) => {
    onOpenWindow(windowId);
    onClose();
  };

  const menuItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "terminal", label: "Terminal", icon: Terminal },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* Start Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-14 left-2 z-50 w-80 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md"
            style={{
              background: "linear-gradient(180deg, rgba(236, 72, 153, 0.95) 0%, rgba(168, 85, 247, 0.95) 100%)",
              border: "2px solid rgba(236, 72, 153, 0.5)",
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(168, 85, 247, 0.4)",
            }}
          >
            {/* User section */}
            <div className="px-4 py-4 flex items-center gap-3 border-b-2 border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg drop-shadow-lg block">Emma Luo</span>
                <span className="text-pink-200 text-xs">Software Engineer</span>
              </div>
            </div>

            {/* Menu items */}
            <div className="p-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/20 rounded-lg transition-all text-left group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wide">{item.label}</span>
                  </button>
                );
              })}

              {/* Divider */}
              <div className="h-px bg-white/20 my-2" />

              {/* System items */}
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/20 rounded-lg transition-all text-left group">
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-sm tracking-wide">Settings</span>
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-pink-500/50 rounded-lg transition-all text-left group">
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                  <Power className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-sm tracking-wide">Power Off</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
