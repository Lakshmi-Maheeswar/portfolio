export default function Footer() {
  return (
    <footer className="py-8 px-5 border-t border-card-border bg-warm-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Lakshmi Maheeswar. Crafted with care.
        </p>
        <p className="text-xs text-text-muted/60">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
