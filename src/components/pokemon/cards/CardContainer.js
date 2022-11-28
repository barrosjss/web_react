import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export default function CardContainer(props) {
  const { loading, data } = useFetch(props.url)
  const pokemon = data

  return (
    <>
      {
        loading ?
          <p>Crgando pokemones...</p>
          :
          <div className='card' onClick={() => window.open(props.url, '_blank')} style={{
            width: 300,
            height: 400,
            background: props.color,
            textDecoration: 'none',
            color: 'black'
          }}>
            <h2>{pokemon.forms[0].name}</h2>
            <img className='card_img' src={pokemon.sprites.front_default}></img>
            <p className='card_type'>{pokemon.types[0].type.name}</p>
          </div>
      }
    </>
  )
}