import { useState } from 'react'
import './App.css'
import MainMenu from './pages/MainMenu'
import GameScreen from './pages/GameScreen'

function App() {
  const [activeScreen, setActiveScreen] = useState('menu')
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)

  const handleStart = (difficulty) => {
    setSelectedDifficulty(difficulty)
    setActiveScreen('game')
  }

  return (
    <main className="app-shell">
      {activeScreen === 'menu' ? (
        <MainMenu onStart={handleStart} />
      ) : (
        <GameScreen difficulty={selectedDifficulty} />
      )}
    </main>
  )
}

export default App
