import { styled } from "styled-components";
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
`;

const Error = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    /* display: none;*/
`;

const IconoDeValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
`;




export {Formulario, Label, GrupInputs, Input, Error, IconoDeValidacion};

