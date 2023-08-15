import { styled } from "styled-components";


const colores ={
    borde: "#8875FF",
    error: "#c21f40",
    exito: "#36802d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-row: 1fr;
    gap: 20px;
`;

const Label = styled.label`
    display: block;
    fotn-weight: bold;
    padding: px;
    
    cursor: pointer;
`;

const GrupInputs = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%
    background: #fff;
    border-radious: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3 ease all;
    border: 3px solid transparent;
`; 


export {Formulario, Label, GrupInputs, Input};

