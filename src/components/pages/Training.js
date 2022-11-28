import React from 'react'
import Card from 'react-bootstrap/Card'

import DeactivateBox from '../training/DeactivateBox.js'
import ColorGenerator from '../training/ColorGenerator.js'
import Arcoiris from '../training/Arcoiris.js'
import HookEstado from '../training/HookEstado.js'
import HookEfecto from '../training/HookEfecto.js'
import HookContexto from '../training/HookContexto.js'

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
          <Arcoiris color='red' />
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>Hook Estado</Card.Header>
        <Card.Body>
          <HookEstado />
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>Hook Efecto</Card.Header>
        <Card.Body>
          <HookEfecto />
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header>Hook Contexto</Card.Header>
        <Card.Body>
          <HookContexto />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Training