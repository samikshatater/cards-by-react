import React from 'react'

const Card = (props) => {
  return (
    <div className='container' >
        <img src={props.image}/>
      <p className='company par'> {props.company}</p>
      <p className='post par'> {props.post}</p>
      <button className='par'>{props.tag1}</button> <button className='par'>{props.tag2}</button>
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      < hr/>
      <h1 className='footer'>{props.price}</h1>
      <p className='address'>{props.location}</p>
      <button className='footer2'>Apply Now</button>
      
    </div>
  )
}

export default Card
