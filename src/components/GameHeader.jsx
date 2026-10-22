
export default function GameHeader ({ difficulty, elapsedTime }) {
  const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, "0")
  const seconds = String(elapsedTime % 60).padStart(2, "0")  
  
  
  return(
        <header className="menu-header">
        <p className="menu-kicker">Game in progress</p>
        <h1 id="game-title">The hunt begins!</h1>
        <p className="menu-instructions">
          You selected the {difficulty.label} difficulty.
        </p>
        <p>Elapsed time: {minutes}:{seconds}</p>
      </header>
    )
}