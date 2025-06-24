import './App.css'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='min-h-screen bg-primary text-textPrimary relative font-sans'>
      <div className="fixed inset-0 z-0">
        <ParticleBackground darkMode={true} />
      </div>
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  )
}

export default App
