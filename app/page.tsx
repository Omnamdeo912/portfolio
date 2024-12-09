import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectShowcase from '../components/ProjectShowcase'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ProjectShowcase />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

