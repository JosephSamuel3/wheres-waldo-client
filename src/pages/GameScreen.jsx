import GameHeader from "../components/GameHeader"
import GameScene from "../components/GameScene"
import TargetList from "../components/TargetList"

export default function GameScreen({ difficulty }) {
  return (
    <section className="menu-panel game-panel" aria-labelledby="game-title">
      <GameHeader difficulty={difficulty}/>
      <div className="game-content">
        <GameScene difficulty={difficulty}/>
        <TargetList difficulty={difficulty}/>
      </div>
    </section>
  )
}
