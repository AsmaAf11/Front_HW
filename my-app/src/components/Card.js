import React from 'react'
import CardData from './CardData'


function Card(prps) {
  return (

    
    <div>


      
      <p>{prps.card.img}</p>
        <p>{prps.card.name}</p>
        <p>{prps.card.story}</p>
        <p>{prps.card.year}</p>
        
       
        
        
    </div>
    

  )
}

export default Card