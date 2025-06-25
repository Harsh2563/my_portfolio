import './App.css'
import ParticleBackground from './components/ui/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Section from './components/sections/Section'

function App() {
  return (
    <div className='min-h-screen bg-primary text-textPrimary relative font-sans'>
      <div className="fixed inset-0 z-0">
        <ParticleBackground darkMode={true} />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Section id="home">
          <Hero />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
      </div>
    </div>
  )
}

export default App
