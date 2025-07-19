import React ,{useState} from 'react'
import '../Components/Counter.css'

const counter = () => {
    const [count ,setCount ] = useState(0);
    
  return (
    <div className="Container-class">
        <p>Click me {count} times</p>
      <button id='btn' onClick={()=> { setCount (count+1)}}>ClickMe!</button>
    </div>
  )
}

export default counter
