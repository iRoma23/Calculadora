import React from 'react'
import { useState } from 'react';
import './styles.scss';
import Boton from '../../Components/Boton'
const Calculator = () => {
    const [number, setNumber] = useState(0)

    return (
        <div className='contenedor'>
            <div className='contenedor__resultado'>
                <span>{number}</span>
            </div>
            <div className='contenedor__botones'>
                <Boton color={'plomo_oscuro'} tecla={'AC'}/> 
                <Boton color={'plomo_oscuro'} tecla={'+/-'}/>
                <Boton color={'plomo_oscuro'} tecla={'%'}/>
                <Boton color={'naranja'} tecla={'/'}/>
                <Boton color={'plomo_claro'} tecla={'7'}/>
                <Boton color={'plomo_claro'} tecla={'8'}/>
                <Boton color={'plomo_claro'} tecla={'9'}/>
                <Boton color={'naranja'} tecla={'*'}/>
                <Boton color={'plomo_claro'} tecla={'4'}/>
                <Boton color={'plomo_claro'} tecla={'5'}/>
                <Boton color={'plomo_claro'} tecla={'6'}/>
                <Boton color={'naranja'} tecla={'-'}/>
                <Boton color={'plomo_claro'} tecla={'1'}/>
                <Boton color={'plomo_claro'} tecla={'2'}/>
                <Boton color={'plomo_claro'} tecla={'3'}/>
                <Boton color={'naranja'} tecla={'+'}/>
                <Boton color={'plomo_claro'} tecla={'0'}/>
                <Boton color={'plomo_claro'} tecla={'.'}/>
                <Boton color={'naranja'} tecla={'='}/>
            </div>
        </div>
    )
}

export default Calculator