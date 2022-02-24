import React from 'react'
import './Boton.scss'

const Boton = (props) => {
  return (
    <div className={`boton ${props.color}`}>{props.tecla}</div>
  )
}

export default Boton