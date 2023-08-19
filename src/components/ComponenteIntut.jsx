import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {GrupInputs, Input, Label, Error, IconoDeValidacion,} from '../elementos/Formulario';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function ComponenteInput({estado, cambiarEstado, tipo, label, placeholder, name, mensajeError, expresionRegular}) {

    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value})
    }

    const validacion = () =>{
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'})
            }else{
                cambiarEstado({...estado, valido: 'false'})
            }
        }
    }
    
return (
    <div>
        <Label htmlFor={name}valido={estado.valido} >{label}</Label>
        <GrupInputs>
            <Input type={tipo} placeholder={placeholder} id={name} value={estado.campo} onChange={onChange} onKeyUp={validacion} onBlur={validacion} valido={estado.valido} />
            <IconoDeValidacion 
                icon={estado.valido === 'true' ? faCheck : faXmark}  
                valido={estado.valido} 
            />
        </GrupInputs>
        <Error valido={estado.valido}>{mensajeError} </Error>
    </div>
)
}

export default ComponenteInput