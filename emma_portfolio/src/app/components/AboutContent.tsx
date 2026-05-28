export function AboutContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text pb-2 border-b-2 border-pink-500/50">
        About Me
      </h2>

      {/* Profile section */}
      <div className="flex gap-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-4 border-2 border-pink-500/30 rounded-lg backdrop-blur-sm" style={{
        boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
      }}>
        <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-4xl font-bold shadow-lg" style={{
          boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
        }}>
          EL
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-pink-200">
            <strong className="text-pink-400">Name:</strong> Emma Luo
          </p>
          <p className="text-pink-200">
            <strong className="text-pink-400">Role:</strong> Engineering Student
          </p>
          <p className="text-pink-200">
            <strong className="text-pink-400">Location:</strong> Ontario, Canada
          </p>
        </div>
      </div>

      {/* Bio section */}
      <div className="space-y-2 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-4 border-2 border-purple-500/30 rounded-lg backdrop-blur-sm" style={{
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
      }}>
        <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
          Bio
        </h3>
        <p className="text-purple-200 leading-relaxed text-sm">
          Passionate electricla engineering student. Let's build something cool together :)
        </p>
      </div>

      {/* Interests section */}
      <div className="space-y-2 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 p-4 border-2 border-cyan-500/30 rounded-lg backdrop-blur-sm" style={{
        boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
      }}>
        <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text">
          Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Web Development", "Machine Learning", "Open Source", "UI/UX Design"].map(
            (interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/40 rounded-full text-sm font-bold"
                style={{
                  boxShadow: "0 0 10px rgba(236, 72, 153, 0.3)",
                }}
              >
                {interest}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
