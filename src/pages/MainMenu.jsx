import { useMemo, useState } from 'react'
import difficulties from '../data/difficulties'

export default function MainMenu({ onStart }) {
  const [selectedDifficultyId, setSelectedDifficultyId] = useState('easy')
  const [statusMessage, setStatusMessage] = useState(
    'Choose a difficulty, then start the game.'
  )

  const selectedDifficulty = useMemo(
    () =>
      difficulties.find((difficulty) => difficulty.id === selectedDifficultyId) ??
      difficulties[0],
    [selectedDifficultyId]
  )

  return (
    <section className="menu-panel" aria-labelledby="menu-title">
      <header className="menu-header">
        <p className="menu-kicker">Hidden character challenge</p>
        <h1 id="menu-title">Where's Waldo?</h1>
        <p className="menu-instructions">
          Pick a difficulty, inspect the scene, and start the hunt.
        </p>
      </header>

      <div className="menu-layout">
        <div className="difficulty-panel">
          <h2>Choose a difficulty</h2>

          <div className="difficulty-list" role="radiogroup" aria-label="Difficulty selection">
            {difficulties.map((difficulty) => {
              const isSelected = difficulty.id === selectedDifficultyId

              return (
                <button
                  key={difficulty.id}
                  type="button"
                  className={isSelected ? 'difficulty-option selected' : 'difficulty-option'}
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => {
                    setSelectedDifficultyId(difficulty.id)
                    setStatusMessage(
                      `${difficulty.label} is selected. The preview below reflects this scene.`
                    )
                  }}
                >
                  <span className="difficulty-name">{difficulty.label}</span>
                  <span className="difficulty-description">{difficulty.description}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="preview-panel" aria-live="polite">
          <h2>Selected scene</h2>
          <img
            src={selectedDifficulty.image}
            alt={`${selectedDifficulty.label} difficulty preview scene`}
            className="scene-preview"
          />
        </div>
      </div>

      <div className="start-section">
        <button
          type="button"
          className="start-button"
          onClick={() => onStart(selectedDifficulty)}
        >
          Start
        </button>
        <p className="status-message" aria-live="polite">
          {statusMessage}
        </p>
      </div>
    </section>
  )
}
