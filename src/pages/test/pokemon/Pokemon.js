import React from 'react'
import logo from './img/pokemon-23.svg'
import CardContainer from '../../../components/training/pokemon/CardContainer'
import data from './pokemon.json'

export default function Pokemon() {
  return (
    <div className='container'>
      <img src={logo} width="300px"></img>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 50,
        paddingTop: 30
      }}>
        {data.map(pokemon =>
          <CardContainer
            name={pokemon.name}
            img={pokemon.img}
            type={pokemon.type}
            color={pokemon.color}
            url={pokemon.url}
          />
        )}
      </div>
    </div>
  )
}
