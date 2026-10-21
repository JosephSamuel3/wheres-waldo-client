import GameHeader from "../components/GameHeader"
import GameScene from "../components/GameScene"
import TargetList from "../components/TargetList"

import { useState } from "react"
import targets from "../data/targets"

export default function GameScreen({ difficulty }) {
  const [found, setFound] = useState([])

  const handleClicks = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width)
    const y = ((event.clientY - rect.top) / rect.height) 
    console.log(`Clicked at ${x.toFixed(3)}, ${y.toFixed(3)}`)
    const sceneTargets = targets[difficulty.id]

    const hit = sceneTargets.find(target => {
      const dx = (target.x - x) * rect.width
      const dy = (target.y - y) * rect.height
      return Math.hypot(dx, dy) <= target.radius * rect.width
    })

    if (hit && !found.includes(hit.id)) {
      setFound(prev => [...prev, hit.id])
      console.log("Found", hit.name)
    } else if (hit) {
      console.log("Already found", hit.name)
    } else {
      console.log("Miss")
    }
  }
  
  return (
    <section className="menu-panel game-panel" aria-labelledby="game-title">
      <GameHeader difficulty={difficulty}/>
      <div className="game-content">
        <GameScene 
          difficulty={difficulty}
          onSceneClick={handleClicks}
        />
        <TargetList difficulty={difficulty} found={found}/>
      </div>
    </section>
  )
}
