import Men from '../assets/Men.jpeg'
import './Card.css'


const Card = (props) => {
  return (
    <div className="container-class">
        <p>{props.name}</p>
        <img id='image' src={props.img} alt="men" />
        <p>{props.desc}</p>
    </div>
  )
}

export default Card
