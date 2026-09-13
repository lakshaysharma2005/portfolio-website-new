import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col gap-14 pb-8">
      <Hero />
      <hr className="border-border" />
      <Projects />
      <hr className="border-border" />
      <Experience />
      <hr className="border-border" />
      <About />
      <hr className="border-border" />
      <Contact />
      <hr className="border-border" />
      <Footer />
    </div>
  )
}
