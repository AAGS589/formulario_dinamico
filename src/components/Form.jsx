import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import {Formulario, GrupInputs, Input, Label, Error, IconoDeValidacion} from '../elementos/Formulario.jsx'

export class Form extends Component {
  render() {
    return (
      <>
      <main>
        <Formulario>
          <Label htmlFor="nombre">Nombre completo *</Label>
          <GrupInputs>
            <Input type="text" placeholder='Ingresa tu nombre' id='nombre'/>
            <IconoDeValidacion icon={faCheck} />
          </GrupInputs>
          <Error>Lorem ipsum dolor. Nobis vero sit corrupti.</Error>

          <CheckGenero>
            <Label htmlFor=''>Género</Label>
            <label htmlFor='masculino'>
              Masculino
              <input type='checkbox' name='masculino' id='masculino'/>
            </label>
            <label htmlFor='masculino'>
              Femenino
              <input type='checkbox' name='masculino' id='masculino'/>
            </label>
            <label htmlFor='masculino'>
              Otro
              <input type='checkbox' name='masculino' id='masculino'/>
            </label>
            
          </CheckGenero>

          <div>
            <p>
              <FontAwesomeIcon icon={faExclamation}/>
              <b>Error:</b> Debe llenar los campos requeridos
            </p>
          </div>

          <div>
            <button type='submit'>Enviar</button>
            <p>Los datos se enviaron correctamente</p>
          </div>

        </Formulario>

        
      </main>
        
      </>
    )
  }
}

export default Form