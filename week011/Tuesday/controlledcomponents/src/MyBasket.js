import React from 'react'

function MyBasket({text, food}) {
  return (
    <div>
        <br/>
        <h3>{text}</h3>
        <h2>{food}</h2>
    </div>
  )
}

export default MyBasket