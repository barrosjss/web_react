import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const colores = {
  "rojo": "#FF0000",
  "naranja": "#FF7F00",
  "amarillo": "#FFFF00",
  "verde": "#00FF00",
  "azul": "#0000FF",
  "indigo": "#4B0082",
  "violeta": "#9400D3"
}

const useStyles =
  createUseStyles({
    wrapper: {
      padding: 10,
      background: props => props
    },
    title: {
      font: {
        size: 40,
        weight: 900
      },
      color: "#ffffff"
    }
  })

export default function ColorComponent(props) {
  const classes = useStyles(colores[props.color])

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>{props.color}</h1>
    </div>
  )
}