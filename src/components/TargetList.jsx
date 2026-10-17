import targets from '../data/targets'

export default function TargetList({ difficulty }) {
  const difficultyTargets = targets[difficulty.id]

  return (
    <div className="target-list" aria-labelledby="target-list-title">
      <h2 id="target-list-title">Find these characters</h2>
      <ul className="target-list-items">
        {difficultyTargets.map((target) => (
          <li key={target}>{target}</li>
        ))}
      </ul>
    </div>
  )
}
