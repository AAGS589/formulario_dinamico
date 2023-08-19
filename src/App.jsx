import { useState } from 'react'
import Header from './components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import ComponenteInput from './components/ComponenteIntut'
import {Formulario,  ContenedorGenero, Label, ContentnpGenero, ContenedorBoton, Boton, ErrorLlenado, MensajeEnvio} from './elementos/Formulario'


function App() {

    const [name, cambiarName] = useState({campo: '', valido: null});
    const[age, cambiarAge] = useState({campo: '', valido: null});
    const[Date, cambiarDate] = useState({campo: '', valido: null});

    const expresiones = {
      expresionNombre: /^[a-zA-Z\s]+$/,
      expresionEdad: /^(1[0-9]|[2-9][0-9]|100)$/,
      expresionFecha: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    };
  return (
    <>
      <Header/>
      <main>
        <Formulario>
          <ComponenteInput
            estado = {name}
            cambiarEstado = {cambiarName}
            tipo='text' 
            label= "Nombre completo"
            placeholder= 'Ingresa tu nombre'
            name = 'nombre'
            mensajeError = 'el nombre solo puede contener letras'
            expresionRegular = {expresiones.expresionNombre}
          />

          <ComponenteInput 
            estado = {age}
            cambiarEstado = {cambiarAge}
            tipo = 'number'
            label= "Edad"
            placeholder= 'Escriba su edad'
            name = 'edad'
            mensajeError= 'El campo debe se un minimo de 10 y un maximo de 100'
            expresionRegular= {expresiones.expresionEdad}
          />
          <ComponenteInput
            estado = {Date}
            cambiarEstado = {cambiarDate} 
            tipo = 'date'
            label= "Fecha de nacimiento"
            placeholder= ''
            name = 'date'
            mensajeError= 'el formato de fecha debe ser: dd/mm/aaaa'
            expresionRegular= {expresiones.expresionFecha}
          />

          <ContenedorGenero>
            <Label htmlFor=''>Género</Label>
            <ContentnpGenero>
              <label htmlFor='masculino'>
                Masculino
                <input type='radio' name='masculino' id='masculino'/>
              </label>
              <label htmlFor='femenino'>
                Femenino
                <input type='radio' name='masculino' id='femenino'/>
              </label>
              <label htmlFor='otro'>
                Otro
                <input type='radio' name='masculino' id='otro'/>
              </label>
            </ContentnpGenero>
            
          </ContenedorGenero>

          <ContenedorGenero>
            <Label htmlFor=''>Lenguajes de programación</Label>
            <ContentnpGenero>
              <label htmlFor='masculino'>
                Javascript
                <input type='checkbox' name='masculino' id='masculino'/>
              </label>
              <label htmlFor='femenino'>
                Python
                <input type='checkbox' name='masculino' id='femenino'/>
              </label>
              <label htmlFor='otro'>
                Java
                <input type='checkbox' name='masculino' id='otro'/>
              </label>
              <label htmlFor='otro'>
                C#
                <input type='checkbox' name='masculino' id='otro'/>
              </label>
            </ContentnpGenero>
            
          </ContenedorGenero>

          <ContenedorGenero>
            <Label htmlFor=''>Nivel de experiencia</Label>
            <ContentnpGenero>
              <label htmlFor='masculino'>
                Junior
                <input type='radio' name='masculino' id='masculino'/>
              </label>
              <label htmlFor='femenino'>
                Medio
                <input type='radio' name='masculino' id='femenino'/>
              </label>
              <label htmlFor='otro'>
                Senior
                <input type='radio' name='masculino' id='otro'/>
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

export default App
