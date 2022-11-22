import React from 'react'


const BASE = () => {
  const base = {
    'red' : {
      name : 'red',
      color: 'red'
    },
    'blue' : {
      name : 'blue COLOR',
      color: 'blue'
    },
    default : {
      name: 'grey',
      color: 'grey'
    } 
  }
  return base;
}

function Arcoiris(props) {
  const base = BASE();
  const hiRed = props.color === 'red' ? 'hola sr rojo' : 'no eres el sr rojo ';
  return (
    <>
    <div style={{
      width : '300px',
      height : '300px',
      background: base[props.color].color
    }}>
      <h2>{base[props.color].name}</h2>
    </div>
    <h1>{hiRed}</h1>
  </>
  )
}

export default Arcoiris