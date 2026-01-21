import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import Background from '@/components/layout/Background'
import Nav from '@/components/layout/Nav'
import ThemeToggle from '@/components/layout/ThemeToggle'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero'
import FlowConnector from '@/components/sections/FlowConnector'
import Sequence from '@/components/sections/Sequence'
import Quote from '@/components/sections/Quote'
import Topics from '@/components/sections/Topics'
import RotatingSnakes from '@/components/illusions/RotatingSnakes'
import MullerLyer from '@/components/illusions/MullerLyer'
import HermannGrid from '@/components/illusions/HermannGrid'
import Stats from '@/components/sections/Stats'
import FeaturedPost from '@/components/sections/FeaturedPost'
import Library from '@/components/sections/Library'
import Posts from '@/components/sections/Posts'
import Subscribe from '@/components/sections/Subscribe'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Quote data
const quote1 = {
  words: [
    { text: '"The' },
    { text: 'real' },
    { text: 'voyage' },
    { text: 'of' },
    { text: 'discovery', highlight: true },
    { text: 'consists' },
    { text: 'not' },
    { text: 'in' },
    { text: 'seeking' },
    { text: 'new' },
    { text: 'landscapes,' },
    { text: 'but' },
    { text: 'in' },
    { text: 'having' },
    { text: 'new', highlight: true },
    { text: 'eyes."', highlight: true },
  ],
  author: 'MARCEL PROUST',
}

const quote2 = {
  words: [
    { text: '"We' },
    { text: "don't" },
    { text: 'see' },
    { text: 'things' },
    { text: 'as' },
    { text: 'they' },
    { text: 'are,', highlight: true },
    { text: 'we' },
    { text: 'see' },
    { text: 'them' },
    { text: 'as' },
    { text: 'we', highlight: true },
    { text: 'are."', highlight: true },
  ],
  author: 'ANAÏS NIN',
}

export default function LandingPage() {
  useEffect(() => {
    // Scroll progress animation
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      const progressBar = document.getElementById('scrollProgress')
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        if (targetId) {
          const element = document.querySelector(targetId)
          if (element) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: element, offsetY: 80 },
              ease: 'power3.inOut',
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleAnchorClick)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <Background />
      <ThemeToggle />

      <div className="content">
        <Nav />

        <Hero />

        <FlowConnector />

        <Sequence />

        <Quote words={quote1.words} author={quote1.author} />

        <FlowConnector />

        <Topics />

        <RotatingSnakes />

        <MullerLyer />

        <Quote words={quote2.words} author={quote2.author} />

        <HermannGrid />

        <Stats />

        <FeaturedPost />

        <Library />

        <Posts />

        <Subscribe />

        <Footer />
      </div>
    </>
  )
}
