import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type='text' onChange={(e)=> props.setName(e.target.value)}/>
        <p>Name state varible ki value inside Cards{props.title}</p>
      
    </div>
  )
}

export default Card
