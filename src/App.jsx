import { useState } from 'react'
import Header from './components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import ComponenteInput from './components/ComponenteIntut'
import ComponentChecks from './components/ComponentChecks'
import ComponentButton from './components/ComponentButton'
import {Formulario, Label, ContenedorSelects, ContenedorSelectsInputs, ContenedorBoton, Boton, ErrorLlenado, MensajeEnvio,LabelChecks, InputCheck} from './elementos/Formulario'


function App() {

    const [name, cambiarName] = useState({campo: '', valido: null});
    const[age, cambiarAge] = useState({campo: '', valido: null});
    const[Date, cambiarDate] = useState({campo: '', valido: null});
    const[SelctGenero, cambiarGenero] = useState({campo: '', valido: null});
    const[SelectLenguajes, cambiarLenguajes] = useState({campo: '', valido: null});
    const [hasError, setHasError] = useState(false);
    const [formValido, cambiarForm] = useState(null);

    const expresiones = {
      expresionNombre: /^[a-zA-ZÁ-ÿ\s]+$/,
      expresionEdad: /^(1[0-9]|[2-9][0-9]|100)$/,
      expresionFecha: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/
    };

    const onSubmit = (e) =>{
      e.preventDefault();

      if(name.valido === 'true' && age.valido){
        cambiarForm(true);

      } else{
        cambiarForm(false)
      }

    }
  return (
    <>
      <Header/>
      <main>
        <Formulario action='' onSubmit={onSubmit}>
          <ComponenteInput
            estado = {name}
            cambiarEstado = {cambiarName}
            tipo='text' 
            label= "Nombre completo *"
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
            tipo = 'text'
            label= "Fecha de nacimiento"
            placeholder= 'dd/mm/aaaa'
            name = 'date'
            mensajeError= 'el formato de fecha debe ser: dd/mm/aaaa'
            expresionRegular= {expresiones.expresionFecha}
          />

          <ComponentChecks
            estado = {hasError}
            cambiarEstado={setHasError} 
            mainName = 'Género'
            tipo = 'radio'
            checkboxes={['Masculino ', 'Femenino ','otro ']}
            mensajeError = 'Este campo es requerido'
            required = 'true'
          />

          <ComponentChecks 
            estado={hasError}
            cambiarEstado={setHasError}
            mainName= 'Lenguajes de programación'
            tipo = 'checkbox'
            checkboxes={['Javascript ', 'Python ','Java ', 'C# ']}
            required = 'false'
          />

          <ComponentChecks 
            estado={hasError}
            cambiarEstado={setHasError}
            mainName= 'Nivel de experiencia'
            tipo = 'checkbox'
            checkboxes={['Junior ', 'Medio ','Senior ']}
            mensajeError = 'Este campo es requerido'
            required = 'true'
          />

          <ComponentButton/>

          {formValido === false && <ErrorLlenado>
            <p>
              <FontAwesomeIcon icon={faExclamation}/>
              <b>Error:</b> Debe llenar los campos requeridos
            </p>
          </ErrorLlenado>}

          <ContenedorBoton>
            <Boton type='submit'>Enviar</Boton>
            {formValido === true && <MensajeEnvio>Los datos se enviaron correctamente</MensajeEnvio>}
          </ContenedorBoton>
        </Formulario>

        
      </main>
    </>
  )
}

export default App
