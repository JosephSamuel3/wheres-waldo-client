import medium from "../assets/Wheres-Waldo-Beach-Super-High-Resolution-scaled.jpg"
import easy from "../assets/Wheres-Waldo-Skiing-Super-High-Resolution-scaled.jpg"
import hard from "../assets/Wheres-Waldo-Space-Station-Super-High-Resolution-scaled.jpg"

const difficulties = [
  {
    id: 'easy',
    label: 'Easy',
    description: 'A relaxed search with a larger scene and clearer targets.',
    image: easy,
  },
  {
    id: 'medium',
    label: 'Medium',
    description: 'A balanced challenge with more visual clutter.',
    image: medium,
  },
  {
    id: 'hard',
    label: 'Hard',
    description: 'Dense, chaotic scenes made for experienced players.',
    image: hard,
  },
]

export default difficulties
