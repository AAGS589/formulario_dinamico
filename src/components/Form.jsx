import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'
import {Formulario, GrupInputs, Input, Label, Error, IconoDeValidacion, ContenedorGenero, ContentnpGenero, ContenedorBoton, Boton, ErrorLlenado, MensajeEnvio} from '../elementos/Formulario.jsx'

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

          <ContenedorGenero>
            <Label htmlFor=''>Género</Label>
            <ContentnpGenero>
              <label htmlFor='masculino'>
                Masculino
                <input type='checkbox' name='masculino' id='masculino'/>
              </label>
              <label htmlFor='femenino'>
                Femenino
                <input type='checkbox' name='masculino' id='femenino'/>
              </label>
              <label htmlFor='otro'>
                Otro
                <input type='checkbox' name='masculino' id='otro'/>
              </label>
            </ContentnpGenero>
            
          </ContenedorGenero>

          {false && <ErrorLlenado>
            <p>
              <FontAwesomeIcon icon={faExclamation}/>
              <b>Error:</b> Debe llenar los campos requeridos
            </p>
          </ErrorLlenado>}

          <ContenedorBoton>
            <Boton type='submit'>Enviar</Boton>
            <MensajeEnvio>Los datos se enviaron correctamente</MensajeEnvio>
          </ContenedorBoton>
        </Formulario>

        
      </main>
        
      </>
    )
  }
}

export default Form