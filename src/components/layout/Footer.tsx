export default function Footer() {
  return (
    <footer className="py-[90px] border-t border-white/5">
      <div className="container">
        <div className="footer-content flex justify-between items-center flex-wrap gap-9">
          <div className="footer-logo font-display text-xl font-extrabold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
            UNBLIND
          </div>
          <div className="footer-links flex gap-11">
            <a href="#" className="footer-link text-[13px] font-semibold text-[var(--text-secondary)] no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-[var(--accent-cyan)]">
              RSS
            </a>
            <a href="#" className="footer-link text-[13px] font-semibold text-[var(--text-secondary)] no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-[var(--accent-cyan)]">
              Archive
            </a>
            <a href="#" className="footer-link text-[13px] font-semibold text-[var(--text-secondary)] no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-[var(--accent-cyan)]">
              About
            </a>
          </div>
          <div className="footer-text text-[13px] text-[var(--text-muted)]">
            © 2026 UNBLIND. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
