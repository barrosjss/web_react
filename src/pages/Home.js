import React from 'react'
import ColorGenerator from '../components/ColorGenerator'
import ColorComponent from '../components/ColorComponent'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ColorGenerator />
      <ColorComponent color="rojo" />
    </div>
  )
}

export default Home