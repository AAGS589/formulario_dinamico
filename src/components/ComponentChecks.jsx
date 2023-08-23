import React, { Component } from 'react'

import {Label, ContenedorSelects, ContenedorSelectsInputs,LabelChecks, InputCheck, Error} from './../elementos/Formulario'

function ComponentChecks({ estado, cambiarEstado, mainName, tipo, checkboxes, mensajeError, required}) {
    

    const handleInputChange = () => {

        if (required === 'true' && estado.length === 0) {
            {estado}(true);
        } else {
            {estado}(false);
        }
    
        cambiarEstado();
    };
return (
    <div>
        <ContenedorSelects>
            <Label htmlFor=''>{mainName}</Label>
                <ContenedorSelectsInputs>
                    {checkboxes.map((checkboxes, index) => (
                        <LabelChecks htmlFor={checkboxes} key={index}>
                            {checkboxes}
                            <InputCheck type={tipo} name={tipo} id={mainName} required={required === 'true'} onChange={handleInputChange}/>
                        </LabelChecks>
                    ))}
                </ContenedorSelectsInputs>
                {{estado} && <Error>{mensajeError}</Error>}
        </ContenedorSelects>
    </div>
)
}

export default ComponentChecks