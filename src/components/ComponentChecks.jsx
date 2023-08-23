import React, { Component, useState } from 'react'

import {Label, ContenedorSelects, ContenedorSelectsInputs,LabelChecks, InputCheck, Error} from './../elementos/Formulario'

function ComponentChecks({
    mainName, 
    tipo, 
    checkboxes, 
    mensajeError,
    setFormValido, 
    required,
    formValido,
    updateSelectData
}) {
    
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleInputChange = (checkboxValue) => {
        const updatedSelection = [...selectedCheckboxes];

        if (updatedSelection.includes(checkboxValue)) {
            
            const index = updatedSelection.indexOf(checkboxValue);
            updatedSelection.splice(index, 1);
        } else {
            
            updatedSelection.push(checkboxValue);
        }
        setSelectedCheckboxes(updatedSelection);
        
        updateSelectData(`${mainName.toLowerCase()}-selection`, updatedSelection);

    };

    
return (
    <div>
        <ContenedorSelects>
            <Label htmlFor=''>{mainName}</Label>
                <ContenedorSelectsInputs>
                    {checkboxes.map((checkboxValue, index) => (
                        <LabelChecks htmlFor={checkboxValue} key={index}>
                            {checkboxValue}
                            <InputCheck 
                                type={tipo} 
                                name={checkboxes} 
                                id={mainName} 
                                required={required} 
                                onChange={() => handleInputChange(checkboxValue)}
                            />
                        </LabelChecks>
                    ))}
                </ContenedorSelectsInputs>
                
        </ContenedorSelects>
    </div>
)
}

export default ComponentChecks