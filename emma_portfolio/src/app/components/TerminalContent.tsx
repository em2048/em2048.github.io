import { useState, useRef, useEffect } from "react";

interface TerminalContentProps {
  onOpenWindow: (windowId: string) => void;
}

interface HistoryEntry {
  type: "command" | "output" | "error";
  text: string;
}

export function TerminalContent({ onOpenWindow }: TerminalContentProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: "output",
      text: "Welcome to Portfolio Terminal v1.0.0",
    },
    {
      type: "output",
      text: 'Type "help" for available commands',
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, { description: string; action: (args: string[]) => void }> = {
    help: {
      description: "Display available commands",
      action: () => {
        const helpText = [
          "Available commands:",
          "  help           - Display this help message",
          "  clear          - Clear the terminal",
          "  open <window>  - Open a window (about, projects, skills, resume, contact)",
          "  ls             - List available windows",
          "  whoami         - Display information about the site owner",
          "  date           - Display current date and time",
        ];
        setHistory((prev) => [...prev, ...helpText.map((text) => ({ type: "output" as const, text }))]);
      },
    },
    clear: {
      description: "Clear the terminal",
      action: () => {
        setHistory([]);
      },
    },
    open: {
      description: "Open a window",
      action: (args) => {
        if (args.length === 0) {
          setHistory((prev) => [
            ...prev,
            { type: "error", text: "Usage: open <window>" },
            { type: "output", text: "Available windows: about, projects, skills, resume, contact" },
          ]);
          return;
        }
        const windowId = args[0].toLowerCase();
        const validWindows = ["about", "projects", "skills", "resume", "contact"];
        if (validWindows.includes(windowId)) {
          onOpenWindow(windowId);
          setHistory((prev) => [...prev, { type: "output", text: `Opening ${windowId} window...` }]);
        } else {
          setHistory((prev) => [
            ...prev,
            { type: "error", text: `Unknown window: ${windowId}` },
            { type: "output", text: `Available windows: ${validWindows.join(", ")}` },
          ]);
        }
      },
    },
    ls: {
      description: "List available windows",
      action: () => {
        const windows = ["about", "projects", "skills", "resume", "contact"];
        setHistory((prev) => [
          ...prev,
          { type: "output", text: "Available windows:" },
          ...windows.map((w) => ({ type: "output" as const, text: `  ${w}` })),
        ]);
      },
    },
    whoami: {
      description: "Display information about the site owner",
      action: () => {
        setHistory((prev) => [
          ...prev,
          { type: "output", text: "Software Engineer | Full Stack Developer" },
          { type: "output", text: "Building innovative solutions and beautiful interfaces" },
        ]);
      },
    },
    date: {
      description: "Display current date and time",
      action: () => {
        const now = new Date();
        setHistory((prev) => [...prev, { type: "output", text: now.toString() }]);
      },
    },
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, { type: "command", text: `$ ${trimmed}` }]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (command in commands) {
      commands[command].action(args);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "error", text: `Command not found: ${command}` },
        { type: "output", text: 'Type "help" for available commands' },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="h-full bg-gradient-to-br from-gray-900 to-black text-cyan-400 font-mono text-sm p-3 overflow-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-1">
        {history.map((entry, index) => (
          <div
            key={index}
            className={
              entry.type === "command"
                ? "text-pink-400 font-bold"
                : entry.type === "error"
                ? "text-red-400"
                : "text-cyan-300"
            }
            style={{
              textShadow: entry.type === "command" ? "0 0 5px rgba(236, 72, 153, 0.5)" : "none",
            }}
          >
            {entry.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-pink-500 font-bold" style={{
          textShadow: "0 0 8px rgba(236, 72, 153, 0.8)",
        }}>
          &gt;&gt;
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-cyan-400 caret-pink-500"
          style={{
            textShadow: "0 0 5px rgba(6, 182, 212, 0.5)",
          }}
          spellCheck={false}
          autoComplete="off"
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
