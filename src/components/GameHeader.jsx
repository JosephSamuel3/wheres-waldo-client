
export default function GameHeader ({ difficulty }) {
    return(
        <header className="menu-header">
        <p className="menu-kicker">Game in progress</p>
        <h1 id="game-title">The hunt begins!</h1>
        <p className="menu-instructions">
          You selected the {difficulty.label} difficulty.
        </p>
      </header>
    )
}