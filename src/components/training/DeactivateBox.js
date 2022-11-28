import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function DeactivateBox() {
  const [number, setNumber] = useState('')
  console.log(number)

  let status1 = 'visible'
  let status2 = 'visible'
  let status3 = 'visible'

  switch (number) {
    case "1":
      if (status1 === 'visible') {
        status1 = 'hidden'
      } else {
        status1 = 'visible'
      }
      break
    case "2":
      if (status2 === 'visible') {
        status2 = 'hidden'
      } else {
        status2 = 'visible'
      }
      break
    case "3":
      if (status3 === 'visible') {
        status3 = 'hidden'
      } else {
        status3 = 'visible'
      }
      break
    default:
      console.log('No hay')
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: 30,
      }}>
        <div style={{
          width: '300px',
          height: '300px',
          background: 'blue',
          visibility: status1,
        }} />
        <div style={{
          width: '300px',
          height: '300px',
          background: 'blue',
          visibility: status2,
        }} />
        <div style={{
          width: '300px',
          height: '300px',
          background: 'blue',
          visibility: status3,
        }} />
      </div>

      <Form
        onSubmit={ev => {
          ev.preventDefault()
          setNumber(ev.target.number.value)
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Form.Group
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '400px',
          }}
        >
          <Form.Control type='text' name='number' placeholder="Number" style={{ width: '300px', }} />
          <Button variant="primary" type="submit">Click</Button>
        </Form.Group>
      </Form>
    </>
  )
}
