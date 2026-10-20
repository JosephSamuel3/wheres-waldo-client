import targets from '../data/targets'

export default function TargetList({ difficulty, found }) {
  const difficultyTargets = targets[difficulty.id]

  return (
    <div className="target-list" aria-labelledby="target-list-title">
      <h2 id="target-list-title">Find these characters</h2>
      <ul className="target-list-items">
        {difficultyTargets.map((target) => {
          const isFound = found.includes(target.id)

          return <li key={target.id}>{isFound ? `${target.name} ✓` : target.name}</li>
        })}
      </ul>
    </div>
  )
}


