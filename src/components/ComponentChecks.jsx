import React, { Component } from 'react'

import {Label, ContenedorSelects, ContenedorSelectsInputs,LabelChecks, InputCheck} from './../elementos/Formulario'

function ComponentChecks({mainName, tipo, checkboxes}) {

return (
    <div>
        <ContenedorSelects>
            <Label htmlFor=''>{mainName}</Label>
                <ContenedorSelectsInputs>
                    {checkboxes.map((checkboxes, index) => (
                        <LabelChecks htmlFor={checkboxes} key={index}>
                            {checkboxes}
                            <InputCheck type={tipo} name={tipo} id={checkboxes}/>
                        </LabelChecks>
                    ))}
                </ContenedorSelectsInputs>
        </ContenedorSelects>
    </div>
)
}

export default ComponentChecks