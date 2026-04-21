import { useEffect, useRef, useState } from 'react'
import { Brain, Globe, Database, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'from-accent/10 to-lavender-light/40',
    borderColor: 'border-lavender-light',
    iconColor: 'text-accent',
    skills: ['Python', 'Keras', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'NLTK'],
  },
  {
    title: 'Web',
    icon: Globe,
    color: 'from-sage-light/40 to-sage/10',
    borderColor: 'border-sage-light',
    iconColor: 'text-sage',
    skills: ['Flask', 'React', 'HTML/CSS', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'Data',
    icon: Database,
    color: 'from-lavender-light/30 to-cream-dark/60',
    borderColor: 'border-lavender-light',
    iconColor: 'text-lavender',
    skills: ['Pandas', 'NumPy', 'MySQL', 'SQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-sage-light/30 to-cream-dark/60',
    borderColor: 'border-sage-light',
    iconColor: 'text-sage',
    skills: ['Git', 'AWS (Cloud Practitioner)', 'Jupyter', 'VS Code'],
  },
]

function SkillPill({ name, delay }) {
  return (
    <span
      className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 text-sm font-medium text-text-secondary shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-0.5 hover:text-accent transition-all duration-300 cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      {name}
    </span>
  )
}

function CategoryCard({ category, index }) {
  const Icon = category.icon
  return (
    <div
      className={`group relative rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} p-6 hover:shadow-lg hover:shadow-lavender-light/20 transition-all duration-500 hover:-translate-y-1`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm ${category.iconColor}`}>
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-text-primary">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <SkillPill key={skill} name={skill} delay={i * 50} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-light/40 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
            What I Work With
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">
            Skills &amp; Technologies
          </h2>
          <p className="text-text-muted max-w-lg mx-auto">
            A toolkit spanning AI/ML, web development, data engineering, and cloud services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <CategoryCard category={cat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
