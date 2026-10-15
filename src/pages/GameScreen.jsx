export default function GameScreen({ difficulty }) {
  return (
    <section className="menu-panel game-panel" aria-labelledby="game-title">
      <header className="menu-header">
        <p className="menu-kicker">Game in progress</p>
        <h1 id="game-title">The hunt begins!</h1>
        <p className="menu-instructions">
          You selected the {difficulty.label} difficulty.
        </p>
      </header>

      <div className="preview-panel game-scene-panel">
        <h2>{difficulty.label} scene</h2>
        <img
          src={difficulty.image}
          alt={`${difficulty.label} difficulty game scene`}
          className="scene-preview"
        />
      </div>
    </section>
  )
}
