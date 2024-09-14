// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails
  return (
    <div className="planets">
      <img src={imageUrl} alt={`planet ${name}`} className="images" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
