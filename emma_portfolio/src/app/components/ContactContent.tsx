import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export function ContactContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text pb-2 border-b-2 border-pink-500/50">
        Contact Me
      </h2>

      <p className="text-purple-200 text-sm bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/30 p-3 rounded-lg" style={{
        boxShadow: "0 0 15px rgba(236, 72, 153, 0.2)",
      }}>
        Feel free to reach out! I'm always open to discussing new projects,
        creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="space-y-2">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-3 p-3 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-500/30 hover:border-pink-500/50 transition-all group rounded-lg"
          style={{
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.2)",
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center rounded-lg" style={{
            boxShadow: "0 0 10px rgba(236, 72, 153, 0.5)",
          }}>
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-pink-400">Email</p>
            <p className="text-pink-200 text-sm font-bold">your.email@example.com</p>
          </div>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all group rounded-lg"
          style={{
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.2)",
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-600 flex items-center justify-center rounded-lg" style={{
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
          }}>
            <Github className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-purple-400">GitHub</p>
            <p className="text-purple-200 text-sm font-bold">@yourusername</p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border-2 border-cyan-500/30 hover:border-cyan-500/50 transition-all group rounded-lg"
          style={{
            boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)",
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center rounded-lg" style={{
            boxShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
          }}>
            <Linkedin className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-cyan-400">LinkedIn</p>
            <p className="text-cyan-200 text-sm font-bold">Emma Luo</p>
          </div>
        </a>

        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border-2 border-pink-500/30 hover:border-pink-500/50 transition-all group rounded-lg"
          style={{
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.2)",
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-cyan-600 flex items-center justify-center rounded-lg" style={{
            boxShadow: "0 0 10px rgba(236, 72, 153, 0.5)",
          }}>
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-pink-400">Twitter</p>
            <p className="text-pink-200 text-sm font-bold">@yourhandle</p>
          </div>
        </a>

        <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-lg" style={{
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.2)",
        }}>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center rounded-lg" style={{
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
          }}>
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-purple-400">Location</p>
            <p className="text-purple-200 text-sm font-bold">Your City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}
