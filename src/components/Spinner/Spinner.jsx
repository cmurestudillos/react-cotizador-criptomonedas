import React from 'react';
// Estilos del Spinner de carga
import './Spinner.css';

const Spinner = () => {
    return ( 
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
     );
}
 
export default Spinner;