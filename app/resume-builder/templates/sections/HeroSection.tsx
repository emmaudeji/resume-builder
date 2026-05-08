export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-6 text-white">

      {/* 🎨 Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500" />

      {/* 🌟 Soft moving glow orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-pink-400 blur-3xl opacity-40 rounded-full animate-pulse" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[400px] h-[400px] bg-blue-400 blur-3xl opacity-40 rounded-full animate-pulse" />
      <div className="absolute top-[30%] left-[60%] w-[250px] h-[250px] bg-purple-300 blur-3xl opacity-30 rounded-full animate-pulse" />

      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl text-center space-y-6">

        <h1 className="text-4xl text-white/80 md:text-6xl font-extrabold leading-tight">
          40+ AI-Powered Resume Templates That Get You Hired Faster
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Create stunning, ATS-optimized resumes with intelligent templates designed to highlight your skills, experience, and impact in minutes using AI-powered formatting and recruiter-tested structures.
        </p>

        {/* optional CTA can go here */}

      </div>
    </section>
  )
}