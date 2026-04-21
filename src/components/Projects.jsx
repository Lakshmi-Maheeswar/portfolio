import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Eye, Hand, Car } from 'lucide-react'
import { GitHubIcon } from './Icons'

const projects = [
  {
    title: 'ASL Hand Gesture Recognition System',
    description:
      'Real-time sign language recognition pipeline using CNN (27 classes, ~98% accuracy), MediaPipe hand landmarks, LSTM/Transformer video models, T5-small grammar correction, and TTS output. Built with Keras, OpenCV, Python.',
    tags: ['Computer Vision', 'NLP', 'Deep Learning'],
    icon: Hand,
    gradient: 'from-accent/5 to-lavender-light/30',
    accentColor: 'bg-accent',
    github: '#',
  },
  {
    title: 'Blood Donor Finder',
    description:
      'Full-stack web app for geo-based donor-recipient matching using Flask, SQLite, Leaflet.js, Haversine formula, and automated email notifications.',
    tags: ['Flask', 'Full Stack', 'Geolocation'],
    icon: Eye,
    gradient: 'from-sage/5 to-sage-light/30',
    accentColor: 'bg-sage',
    github: '#',
  },
  {
    title: 'Car Selling Price Prediction',
    description:
      'ML regression model using Random Forest achieving 95.5% accuracy. Built with Scikit-learn, Pandas, NumPy.',
    tags: ['Machine Learning', 'Regression', 'Python'],
    icon: Car,
    gradient: 'from-lavender/10 to-lavender-light/20',
    accentColor: 'bg-lavender',
    github: '#',
  },
]

function ProjectCard({ project, index, visible }) {
  const Icon = project.icon

  return (
    <div
      className={`group relative rounded-2xl bg-gradient-to-br ${project.gradient} border border-card-border overflow-hidden hover:shadow-xl hover:shadow-lavender-light/20 transition-all duration-500 hover:-translate-y-2 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Top accent bar */}
      <div className={`h-1 ${project.accentColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-7">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-white/80 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon size={22} className="text-accent" />
          </div>
          <h3 className="text-lg font-bold text-text-primary leading-snug pt-1 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-white/70 text-xs font-medium text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-300 group/link"
        >
          <GitHubIcon size={16} />
          View on GitHub
          <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-32 px-5 bg-gradient-to-b from-cream to-warm-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light/40 text-sage text-xs font-semibold tracking-wider uppercase mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">
            Projects
          </h2>
          <p className="text-text-muted max-w-lg mx-auto">
            A selection of projects spanning computer vision, NLP, full-stack development, and machine learning.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
