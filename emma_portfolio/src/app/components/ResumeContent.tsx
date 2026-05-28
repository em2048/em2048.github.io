import { Briefcase, GraduationCap, Award } from "lucide-react";

export function ResumeContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text pb-2 border-b-2 border-pink-500/50">
        My Resume
      </h2>

      {/* Experience */}
      <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-500/30 p-4 rounded-lg backdrop-blur-sm space-y-3" style={{
        boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
      }}>
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-pink-400" style={{
            filter: "drop-shadow(0 0 5px rgba(236, 72, 153, 0.5))",
          }} />
          <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
            Experience
          </h3>
        </div>
        <div className="space-y-3 pl-2">
          <div className="border-l-4 border-pink-500 pl-3">
            <p className="font-bold text-pink-300">Senior Software Engineer</p>
            <p className="text-xs text-purple-300">Tech Company Inc. • 2022 - Present</p>
            <ul className="mt-2 text-xs text-purple-200 space-y-1">
              <li>▸ Led development of microservices architecture serving 1M+ users</li>
              <li>▸ Improved application performance by 40% through optimization</li>
              <li>▸ Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-500 pl-3">
            <p className="font-bold text-purple-300">Software Engineer</p>
            <p className="text-xs text-cyan-300">StartUp Co. • 2020 - 2022</p>
            <ul className="mt-2 text-xs text-purple-200 space-y-1">
              <li>▸ Built and maintained full-stack web applications</li>
              <li>▸ Implemented CI/CD pipelines reducing deployment time by 60%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/30 p-4 rounded-lg backdrop-blur-sm space-y-3" style={{
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
      }}>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-purple-400" style={{
            filter: "drop-shadow(0 0 5px rgba(168, 85, 247, 0.5))",
          }} />
          <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
            Education
          </h3>
        </div>
        <div className="pl-2">
          <p className="font-bold text-purple-300">Bachelor of Science in Computer Science</p>
          <p className="text-xs text-cyan-300">University Name • 2016 - 2020</p>
          <p className="text-xs text-purple-200 mt-1">GPA: 3.8/4.0</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border-2 border-cyan-500/30 p-4 rounded-lg backdrop-blur-sm space-y-3" style={{
        boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
      }}>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-cyan-400" style={{
            filter: "drop-shadow(0 0 5px rgba(6, 182, 212, 0.5))",
          }} />
          <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text">
            Certifications
          </h3>
        </div>
        <div className="pl-2 space-y-1">
          <p className="text-xs text-cyan-200">▸ AWS Certified Solutions Architect</p>
          <p className="text-xs text-cyan-200">▸ Google Cloud Professional Developer</p>
          <p className="text-xs text-cyan-200">▸ MongoDB Certified Developer</p>
        </div>
      </div>
    </div>
  );
}
