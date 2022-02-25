import React from 'react'
import { useState } from 'react';
import './styles.scss';
import Boton from '../../Components/Boton'
const Calculator = () => {
    const [resultado, setResultado] = useState(0);

    let value1State = true;
    let value1 = "";
    let value2 = "";
    let op = "";


    const getOperation = (x1,x2,operation) => {
        if (operation === '+') {
            console.log(x1+x2)
            setResultado(x1 + x2)
        } else if (operation === '-') {
            console.log(x1-x2)
            setResultado(x1 - x2)
        } else if (operation === '*') {
            console.log(x1*x2)
            setResultado(x1 * x2)
        } else if (operation === '/') {
            console.log(x1/x2)
            setResultado(x1 / x2)
        }
    }

    const getKey = (key) => {        
        if (key === '+'){
            op = '+';
            value1State = false;
        } else if (key === '-'){
            op = '-';
            value1State = false;
        } else if (key === '*'){
            op = '*';
            value1State = false;
        } else if (key === '/'){
            op = '/';
            value1State = false;
        } else if (key === 'AC'){
            value1State = true;
            value1 = "";
            value2 = "";
            op = "";
            setResultado(0);
        } else if ((value1State === true) && (!isNaN(key))) {
            value1 = value1 + key;
            console.log('value1', value1);
        } else if ((value1State === false) && (!isNaN(key))) {
            value2 = value2 + key;
            console.log('value2', value2);
        } else if ( key === '=') {
            let floatValue1 = parseFloat(value1);
            let floatValue2 = parseFloat(value2);
            getOperation(floatValue1,floatValue2,op)
        }
    }

    return (
        <div className='contenedor'>
            <div className='contenedor__resultado'>
                <span>{resultado}</span>
            </div>
            <div className='contenedor__botones'>
                <Boton color={'plomo_oscuro'} tecla={'AC'} click={()=>getKey('AC')}/> 
                <Boton color={'plomo_oscuro'} tecla={'+/-'}/>
                <Boton color={'plomo_oscuro'} tecla={'%'}/>
                <Boton color={'naranja'} tecla={'/'} click={()=>getKey('/')}/>
                <Boton color={'plomo_claro'} tecla={'7'} click={()=>getKey('7')}/>
                <Boton color={'plomo_claro'} tecla={'8'} click={()=>getKey('8')}/>
                <Boton color={'plomo_claro'} tecla={'9'} click={()=>getKey('9')}/>
                <Boton color={'naranja'} tecla={'*'} click={()=>getKey('*')}/>
                <Boton color={'plomo_claro'} tecla={'4'} click={()=>getKey('4')}/>
                <Boton color={'plomo_claro'} tecla={'5'} click={()=>getKey('5')}/>
                <Boton color={'plomo_claro'} tecla={'6'} click={()=>getKey('6')}/>
                <Boton color={'naranja'} tecla={'-'} click={()=>getKey('-')}/>
                <Boton color={'plomo_claro'} tecla={'1'} click={()=>getKey('1')}/>
                <Boton color={'plomo_claro'} tecla={'2'} click={()=>getKey('2')}/>
                <Boton color={'plomo_claro'} tecla={'3'} click={()=>getKey('3')}/>
                <Boton color={'naranja'} tecla={'+'} click={()=>getKey('+')}/>
                <Boton color={'plomo_claro'} tecla={'0'} click={()=>getKey('0')}/>
                <Boton color={'plomo_claro'} tecla={'.'}/>
                <Boton color={'naranja'} tecla={'='} click={()=>getKey('=')}/>
            </div>
        </div>
    )
}

export default Calculator