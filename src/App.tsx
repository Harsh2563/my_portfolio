import './App.css'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className='min-h-screen bg-primary text-textPrimary relative'>
      <div className="fixed inset-0 z-0">
        <ParticleBackground darkMode={true} />
      </div>
    </div>
  )
}

export default App
