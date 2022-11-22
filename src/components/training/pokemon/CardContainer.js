import React from 'react'

export default function CardContainer(props) {
  return (
    <div className='card' style={{
      width: 300,
      height: 400,
      background: props.color
    }}>
      <h2 className='card_name'>{props.name}</h2>
      <img className='card_img' src={props.img}></img>
      <p className='card_type'>{props.type}</p>
    </div>
  )
}