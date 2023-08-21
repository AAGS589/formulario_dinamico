import { styled, css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores ={
    borde: "#8875FF",
    error: "#c21f40",
    exito: "#36802d"
}



const Formulario = styled.form`
    display: grid;
    grid-template-row: 1fr;
    gap: 10px;
`;

const Label = styled.label`
    display: block;
    font-weight: 600;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
        color: ${colores.error}
    `}
`;

const GrupInputs = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 10px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 1px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.5);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important; 
    `}
`;

const Error = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}

    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;


const IconoDeValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    opacity: 0;

    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error}
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito}
    `}
`;

const ContenedorSelects = styled.div`
    margin: 10px 10px 10px 0px; 
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ContenedorSelectsInputs = styled.div`
    display: flex;
    flex-direction: row;
`;

const LabelChecks = styled.label`
    font-weight: 400;
    cursor: pointer;
`;

const InputCheck = styled.input`
    margin-right: 40px
`;

const ContenedorBoton = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 100%;
    background: #000;
    color: #fff;
    font-weight: 600;
    border: none; 
    border-radius: 5px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover{
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1)
    }
`;

const ErrorLlenado = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0px 15px;
    border-radius: 3px;
    p{
        margin: 0;
    }

    b{
        margin-left: 10px;
    }
`;

const MensajeEnvio = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    display: none; 
`;

export {Formulario, Label, GrupInputs, 
    Input, 
    Error, 
    IconoDeValidacion, 
    ContenedorBoton, 
    Boton, 
    ErrorLlenado, 
    MensajeEnvio, 
    ContenedorSelects, 
    ContenedorSelectsInputs,
    LabelChecks,
    InputCheck
};

