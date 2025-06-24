import './App.css'
import ParticleBackground from './components/ui/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
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
      </div>
    </div>
  )
}

export default App
