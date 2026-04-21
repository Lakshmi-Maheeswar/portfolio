import { ArrowDown, Download } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-lavender-light/40 blur-[100px] -top-32 -right-32 animate-float-slow" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-sage-light/40 blur-[100px] bottom-20 -left-32 animate-float-medium" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-lavender-muted/20 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-fast" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-sage-muted/20 blur-[60px] top-1/4 right-1/4 animate-float-medium" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text-muted) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-lavender-light/60 text-sm text-text-secondary mb-8 animate-fade-in-up opacity-0 stagger-1">
          <span className="w-2 h-2 rounded-full bg-sage animate-pulse-soft" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up opacity-0 stagger-2">
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent via-lavender to-sage bg-clip-text text-transparent">
              Lakshmi Maheeswar
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-lavender-light to-sage-light rounded-full opacity-40 blur-sm" />
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-text-secondary font-medium mb-6 animate-fade-in-up opacity-0 stagger-3">
          AI &amp; Full Stack Developer{' '}
          <span className="text-text-muted">|</span>{' '}
          Building intelligent systems that matter
        </p>

        {/* Bio */}
        <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up opacity-0 stagger-4">
          I'm a Computer Science student specializing in AI, passionate about
          computer vision, NLP, and full-stack development. I build things that
          combine smart algorithms with clean interfaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 stagger-5">
          <button
            id="cta-view-work"
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-[0_4px_20px_rgba(155,126,200,0.3)] hover:shadow-[0_8px_30px_rgba(155,126,200,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
          <a
            id="cta-download-resume"
            href="/SMG.pdf"
            download="SMG.pdf"
            className="group inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-card-border hover:border-lavender text-text-primary px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 stagger-6">
        <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-text-muted/60 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
