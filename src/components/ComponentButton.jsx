import React, { Component, useState } from 'react'
import {Label} from './../elementos/Formulario'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './../styles/file.css'

function ComponentButton (){

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    return (
        <div>
            
                <Label>Sube tu CV</Label>
                <input type='file' accept='.pdf' className='file' id='archivo' onChange={handleFileChange} />
                <label htmlFor="archivo">
                    <span className='file-name'>
                        <span className='span'>{selectedFile ? selectedFile.name : 'Ningún archivo seleccionado'}</span>
                    </span>
                    <span className='file-button'>
                    <FontAwesomeIcon icon={faChevronUp}/>
                    Subir archivo
                    </span>
                    
                </label>
        </div>
    )

}

export default ComponentButton