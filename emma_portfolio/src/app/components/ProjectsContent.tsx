import { ExternalLink, Github } from "lucide-react";

export function ProjectsContent() {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-stack marketplace with payment integration and real-time inventory management",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      name: "AI Chat Assistant",
      description: "Intelligent chatbot using natural language processing for customer support",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team analytics",
      tech: ["TypeScript", "Next.js", "MongoDB", "WebSocket"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text pb-2 border-b-2 border-pink-500/50">
        My Projects
      </h2>

      {/* Projects list */}
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-500/30 p-4 rounded-lg backdrop-blur-sm hover:border-pink-500/50 transition-all"
            style={{
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
            }}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                {project.name}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="text-pink-400 hover:text-pink-300 transition-all hover:scale-110"
                  title="View on GitHub"
                  style={{
                    filter: "drop-shadow(0 0 5px rgba(236, 72, 153, 0.5))",
                  }}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  className="text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110"
                  title="Live Demo"
                  style={{
                    filter: "drop-shadow(0 0 5px rgba(6, 182, 212, 0.5))",
                  }}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-purple-200 mt-2 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full text-xs font-bold"
                  style={{
                    boxShadow: "0 0 10px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
