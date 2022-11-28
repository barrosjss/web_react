import React, { useState } from 'react'
import logo from './img/pokemon-23.svg'
import CardContainer from './cards/CardContainer'

// import data from './pokemon.json'
import { useFetch } from '../hooks/useFetch'

export default function Pokemon() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0')
  const { loading, data } = useFetch(url)
  console.log(data)
  const pokemones = data

  return (
    <div className='container'>
      <img src={logo} width="300px"></img>
      {
        loading ?
          <p>Crgando pokemones...</p>
          :
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 50,
            paddingTop: 30
          }}>
            {/* {data.map(pokemon =>
          <CardContainer
            name={pokemon.name}
            img={pokemon.img}
            type={pokemon.type}
            color={pokemon.color}
            url={pokemon.url}
          />
        )} */}
            {pokemones.results.map((pokemon, index) => {
              return (
                <CardContainer
                  key={pokemon.name}
                  url={pokemon.url}
                />
              )
            })}
          </div>
      }
    </div>
  )
}
