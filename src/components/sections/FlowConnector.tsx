import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FlowConnector() {
  const connectorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!connectorRef.current) return

    const connector = connectorRef.current
    const line = connector.querySelector('.flow-line')
    const dot = connector.querySelector('.flow-dot')

    if (line) {
      gsap.to(line, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: connector,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: 0.5,
        },
      })
    }

    if (dot) {
      gsap.to(dot, {
        scale: 1,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: connector,
          start: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={connectorRef} className="flow-connector relative h-[120px] overflow-hidden">
      <div
        className="flow-line absolute top-0 left-1/2 w-[2px] h-0 -translate-x-1/2"
        style={{
          background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
          boxShadow: '0 0 15px var(--accent-cyan)',
        }}
      />
      <div
        className="flow-dot absolute bottom-[10px] left-1/2 w-[10px] h-[10px] rounded-full -translate-x-1/2"
        style={{
          background: 'var(--accent-cyan)',
          boxShadow: '0 0 20px var(--accent-cyan)',
          transform: 'translateX(-50%) scale(0)',
        }}
      />
    </div>
  )
}
