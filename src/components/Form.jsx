import React, { Component } from 'react'
import {Formulario, GrupInputs, Input, Label} from '../elementos/Formulario.jsx'

export class Form extends Component {
  render() {
    return (
      <>
      <main>
        <Formulario>
          <Label htmlFor="">Usuario</Label>
          <GrupInputs>
            <Input type="text" placeholder='usuario' />
            <ion-icon name="checkmark"></ion-icon>
          </GrupInputs>
          <p>Lorem ipsum dolor. Nobis vero sit corrupti.</p>
        </Formulario>

        
      </main>
        
      </>
    )
  }
}

export default Form