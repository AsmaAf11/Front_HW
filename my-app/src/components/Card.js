import React from 'react'
import CardData from './CardData'


function Card(prps) {
  return (

    
    <div>


      
      <p>{prps.card.img1}</p>
        <p>{prps.card.name1}</p>
        <p>{prps.card.story1}</p>
        <p>{prps.card.year1}</p>
        
        <p>{prps.card.img2}</p>
        <p>{prps.card.name2}</p>
        <p>{prps.card.story2}</p>
        <p>{prps.card.year2}</p>
        
        <p>{prps.card.img3}</p>
        <p>{prps.card.name3}</p>
        <p>{prps.card.story3}</p>
        <p>{prps.card.year3}</p>
        
        <p>{prps.card.img4}</p>
        <p>{prps.card.name4}</p>
        <p>{prps.card.story4}</p>
        <p>{prps.card.year4}</p>
        
        
    </div>
    

  )
}

export default Card