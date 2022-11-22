import React from 'react'
import Card from 'react-bootstrap/Card'

import DeactivateBox from '../components/training/DeactivateBox.js'
import ColorGenerator from '../components/training/ColorGenerator.js'
import Arcoiris from '../components/training/Arcoiris.js'

function Training() {
  return (
    <div className="container">
      <Card>
        <Card.Header>DeactivateBox</Card.Header>
        <Card.Body>
          <DeactivateBox />
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>ColorGenerator</Card.Header>
        <Card.Body>
          <ColorGenerator />
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>"Arcoiris" : Probando los props</Card.Header>
        <Card.Body>
          <Arcoiris color='red'/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Training