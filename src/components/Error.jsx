import React from 'react';
// Estilos CSS de componentes
import styled from '@emotion/styled';

//---------------------- componentes styles ---------------------//
const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;
//---------------------- componentes styles ---------------------//

const Error = ({mensaje}) => {
    return (  
        <MensajeError>{mensaje}</MensajeError>
    );
}
 
export default Error;