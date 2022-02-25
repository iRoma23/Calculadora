import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { useState } from 'react'
import './Boton.scss'

const Boton = (props) => {
  return (
    <div className={`boton ${props.color}`} onClick={props.click} >{props.tecla}</div>
  )
}

export default Boton