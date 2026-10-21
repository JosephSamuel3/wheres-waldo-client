
export default function GameScene ({ difficulty, onSceneClick }) {
    return (
        <div className="preview-panel game-scene-panel">
        <h2>{difficulty.label} scene</h2>
        <img
          src={difficulty.image}
          alt={`${difficulty.label} difficulty game scene`}
          className="scene-preview"
          onClick={onSceneClick}
        />
      </div>
    )
}