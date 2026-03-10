import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach(el => observer.observe(el))

    return () => {
      animateElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Head>
        <title>Kate Cristyl - Social Media Manager Portfolio</title>
        <meta name="description" content="Social Media Manager Portfolio - Helping brands show up with purpose online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/KC LOGO.png" />
      </Head>

      <div className="min-h-screen bg-light">
        <Navbar scrolled={scrolled} />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
