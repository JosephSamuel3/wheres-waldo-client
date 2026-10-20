import GameHeader from "../components/GameHeader"
import GameScene from "../components/GameScene"
import TargetList from "../components/TargetList"

import { useState } from "react"

export default function GameScreen({ difficulty }) {
  const [found, setFound] = useState([])
  if (clicked.id === target.id && !found.includes(target.id)) {
    setFound(prevFound => [...prevFound, clicked.id]);
  }

  return (
    <section className="menu-panel game-panel" aria-labelledby="game-title">
      <GameHeader difficulty={difficulty}/>
      <div className="game-content">
        <GameScene difficulty={difficulty}/>
        <TargetList difficulty={difficulty} found={found}/>
      </div>
    </section>
  )
}
