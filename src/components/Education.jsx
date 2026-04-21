import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={ref} className="py-24 lg:py-32 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-light/40 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">
            Education &amp; Certifications
          </h2>
        </div>

        <div className="space-y-6">
          {/* Degree Card */}
          <div
            className={`relative rounded-2xl bg-gradient-to-br from-lavender-light/20 to-white border border-card-border p-8 hover:shadow-lg hover:shadow-lavender-light/20 transition-all duration-500 hover:-translate-y-1 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-lavender-light flex items-center justify-center shadow-sm shrink-0">
                <GraduationCap size={26} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
                <p className="text-accent font-semibold text-sm mb-3">
                  AI Specialization
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-text-muted" />
                    Amrita Vishwa Vidyapeetham, Vijayawada
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-text-muted" />
                    2023 – 2027
                  </span>
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 border border-lavender-light/60 text-sm font-semibold text-text-primary shadow-sm">
                  CGPA: <span className="text-accent ml-1.5">8.11</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Card */}
          <div
            className={`relative rounded-2xl bg-gradient-to-br from-sage-light/20 to-white border border-card-border p-8 hover:shadow-lg hover:shadow-sage-light/20 transition-all duration-500 hover:-translate-y-1 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage/10 to-sage-light flex items-center justify-center shadow-sm shrink-0">
                <Award size={26} className="text-sage" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-sage font-semibold text-sm mb-2">
                  Amazon Web Services
                </p>
                <p className="text-sm text-text-muted">
                  Foundational understanding of AWS Cloud services, architecture, pricing, and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
