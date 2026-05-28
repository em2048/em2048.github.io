import { useState } from "react";
import { User, FolderGit2, Code2, FileText, Mail, Terminal as TerminalIcon } from "lucide-react";
import { DesktopIcon } from "./components/DesktopIcon";
import { Window } from "./components/Window";
import { Taskbar } from "./components/Taskbar";
import { AboutContent } from "./components/AboutContent";
import { ProjectsContent } from "./components/ProjectsContent";
import { SkillsContent } from "./components/SkillsContent";
import { ResumeContent } from "./components/ResumeContent";
import { ContactContent } from "./components/ContactContent";
import { TerminalContent } from "./components/TerminalContent";
import { StartupScreen } from "./components/StartupScreen";
import { StartMenu } from "./components/StartMenu";
import { AnimatePresence } from "motion/react";

interface WindowData {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const windowConfigs = {
  about: {
    id: "about",
    title: "About Me",
    icon: <User className="w-5 h-5" />,
    content: <AboutContent />,
  },
  projects: {
    id: "projects",
    title: "Projects",
    icon: <FolderGit2 className="w-5 h-5" />,
    content: <ProjectsContent />,
  },
  skills: {
    id: "skills",
    title: "Skills",
    icon: <Code2 className="w-5 h-5" />,
    content: <SkillsContent />,
  },
  resume: {
    id: "resume",
    title: "Resume",
    icon: <FileText className="w-5 h-5" />,
    content: <ResumeContent />,
  },
  contact: {
    id: "contact",
    title: "Contact",
    icon: <Mail className="w-5 h-5" />,
    content: <ContactContent />,
  },
  terminal: {
    id: "terminal",
    title: "Terminal",
    icon: <TerminalIcon className="w-5 h-5" />,
    content: null, // Will be set dynamically
  },
};

export default function App() {
  const [showStartup, setShowStartup] = useState(true);
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
    setActiveWindow(windowId);
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(openWindows[openWindows.length - 2] || null);
    }
  };

  const handleWindowFocus = (windowId: string) => {
    setActiveWindow(windowId);
  };

  const getWindowPosition = (index: number) => {
    return {
      x: 100 + index * 30,
      y: 80 + index * 30,
    };
  };

  if (showStartup) {
    return (
      <AnimatePresence>
        <StartupScreen onComplete={() => setShowStartup(false)} />
      </AnimatePresence>
    );
  }

  return (
    <div
      className="h-screen w-screen overflow-hidden relative"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      }}
    >
      {/* Desktop Icons */}
      <div className="p-4 grid grid-rows-[repeat(auto-fill,90px)] grid-flow-col gap-2 auto-cols-[80px] h-full content-start">
        <DesktopIcon
          icon={<User className="w-12 h-12" />}
          label="About Me"
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          icon={<FolderGit2 className="w-12 h-12" />}
          label="Projects"
          onClick={() => openWindow("projects")}
        />
        <DesktopIcon
          icon={<Code2 className="w-12 h-12" />}
          label="Skills"
          onClick={() => openWindow("skills")}
        />
        <DesktopIcon
          icon={<FileText className="w-12 h-12" />}
          label="Resume"
          onClick={() => openWindow("resume")}
        />
        <DesktopIcon
          icon={<Mail className="w-12 h-12" />}
          label="Contact"
          onClick={() => openWindow("contact")}
        />
        <DesktopIcon
          icon={<TerminalIcon className="w-12 h-12" />}
          label="Terminal"
          onClick={() => openWindow("terminal")}
        />
      </div>

      {/* Windows */}
      {openWindows.map((windowId, index) => {
        const config = windowConfigs[windowId as keyof typeof windowConfigs];
        const position = getWindowPosition(
          openWindows.indexOf(windowId)
        );

        // Special handling for terminal to pass openWindow function
        const content = windowId === "terminal"
          ? <TerminalContent onOpenWindow={openWindow} />
          : config.content;

        return (
          <Window
            key={windowId}
            title={config.title}
            icon={config.icon}
            onClose={() => closeWindow(windowId)}
            onFocus={() => handleWindowFocus(windowId)}
            isActive={activeWindow === windowId}
            initialX={position.x}
            initialY={position.y}
          >
            {content}
          </Window>
        );
      })}

      {/* Start Menu */}
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onOpenWindow={openWindow}
      />

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows.map((id) => windowConfigs[id as keyof typeof windowConfigs])}
        activeWindow={activeWindow}
        onWindowClick={handleWindowFocus}
        onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
      />
    </div>
  );
}
