import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {Formulario, GrupInputs, Input, Label, Error, IconoDeValidacion} from '../elementos/Formulario.jsx'

export class Form extends Component {
  render() {
    return (
      <>
      <main>
        <Formulario>
          <Label htmlFor="">Nombre completo *</Label>
          <GrupInputs>
            <Input type="text" placeholder='Ingresa tu nombre' />
            <IconoDeValidacion icon={faCheck} />
          </GrupInputs>
          <Error>Lorem ipsum dolor. Nobis vero sit corrupti.</Error>
        </Formulario>

        
      </main>
        
      </>
    )
  }
}

export default Form