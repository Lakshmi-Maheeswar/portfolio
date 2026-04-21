import { useEffect, useRef, useState } from 'react'
import { Send, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './Icons'

const socialLinks = [
  { label: 'GitHub', icon: GitHubIcon, href: 'https://github.com/Lakshmi-Maheeswar', color: 'hover:text-text-primary' },
  { label: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lakshmi-maheeswar-gummadi/', color: 'hover:text-[#0A66C2]' },
  { label: 'Email', icon: Mail, href: 'mailto:glakshmimaheeswar@gmail.com', color: 'hover:text-accent', isLucide: true },
]

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light/40 text-sage text-xs font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">
            Contact Me
          </h2>
          <p className="text-text-muted max-w-md mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white/60 backdrop-blur-sm border border-card-border p-8 shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-card-border text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300 text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-card-border text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300 text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-card-border text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all duration-300 text-sm resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
              </div>

              <button
                id="contact-submit"
                type="submit"
                className="mt-6 group w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-[0_4px_20px_rgba(155,126,200,0.25)] hover:shadow-[0_8px_30px_rgba(155,126,200,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div
            className={`lg:col-span-2 flex flex-col justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="rounded-2xl bg-gradient-to-br from-lavender-light/20 to-sage-light/20 border border-card-border p-8">
              <h3 className="text-lg font-bold text-text-primary mb-2">Let's connect</h3>
              <p className="text-sm text-text-muted mb-8">
                Feel free to reach out through any of these platforms.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md text-text-secondary ${link.color} transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {link.isLucide ? <Icon size={20} /> : <Icon size={20} />}
                      </div>
                      <span className="font-semibold text-sm">{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
