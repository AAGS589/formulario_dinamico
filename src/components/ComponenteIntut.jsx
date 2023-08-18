import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {GrupInputs, Input, Label, Error, IconoDeValidacion,} from '../elementos/Formulario';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function ComponenteInput({tipo, label, placeholder, name, mensajeError, expresionRegular}) {
return (
    <div>
        <Label htmlFor={name}>{label}</Label>
        <GrupInputs>
            <Input type={tipo} placeholder={placeholder} id={name}/>
            <IconoDeValidacion icon={faCheck} />
        </GrupInputs>
        <Error>mensajeError</Error>
    </div>
)
}

export default ComponenteInput