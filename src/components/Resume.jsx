import { useEffect, useRef, useState } from 'react'
import { Download, FileText } from 'lucide-react'

export default function Resume() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" ref={ref} className="py-24 lg:py-32 px-5 bg-gradient-to-b from-warm-white to-cream">
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Decorative icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-lavender-light mx-auto flex items-center justify-center mb-6 shadow-sm">
          <FileText size={28} className="text-accent" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">
          Want the full picture?
        </h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          Download my resume for a comprehensive overview of my skills, projects, and experience.
        </p>

        <a
          id="resume-download-btn"
          href="/SMG.pdf"
          download="SMG.pdf"
          className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-base shadow-[0_4px_24px_rgba(155,126,200,0.3)] hover:shadow-[0_8px_32px_rgba(155,126,200,0.45)] transition-all duration-300 hover:-translate-y-1"
        >
          <Download size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          Download Resume
        </a>
      </div>
    </section>
  )
}
