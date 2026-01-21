import { useEffect, useRef } from 'react'

export default function Background() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return

    // Generate stars
    const starsContainer = starsRef.current
    starsContainer.innerHTML = '' // Clear existing stars

    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.setProperty('--duration', `${3 + Math.random() * 4}s`)
      star.style.setProperty('--opacity', `${0.3 + Math.random() * 0.7}`)
      star.style.animationDelay = `${Math.random() * 5}s`
      starsContainer.appendChild(star)
    }
  }, [])

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" id="scrollProgress"></div>

      {/* Deep Background */}
      <div className="deep-bg"></div>

      {/* Stars */}
      <div
        ref={starsRef}
        className="stars fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
        id="stars"
      ></div>

      {/* Background Grid */}
      <div className="bg-grid"></div>

      {/* Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* Scanlines */}
      <div className="scanlines"></div>
      <div className="scan-line"></div>
    </>
  )
}
