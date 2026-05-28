export function SkillsContent() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "CSS/Tailwind", level: 88 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 88 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 72 },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text pb-2 border-b-2 border-pink-500/50">
        My Skills
      </h2>

      {/* Skill categories */}
      {skillCategories.map((category, index) => (
        <div
          key={category.category}
          className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/30 p-4 rounded-lg backdrop-blur-sm"
          style={{
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
          }}
        >
          <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-3">
            {category.category}
          </h3>
          <div className="space-y-3">
            {category.skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-200 font-bold">{skill.name}</span>
                  <span className="text-pink-400 font-bold">{skill.level}%</span>
                </div>
                <div
                  className="w-full bg-purple-900/30 h-3 rounded-full border border-purple-500/40 overflow-hidden"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(168, 85, 247, 0.3)",
                  }}
                >
                  <div
                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 h-full transition-all duration-1000 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      boxShadow: "0 0 10px rgba(236, 72, 153, 0.6)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
