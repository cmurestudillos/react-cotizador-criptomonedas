import React, {useState, useEffect} from 'react';
// Estilos CSS de componentes
import styled from '@emotion/styled';
// Peticiones HTTP
import axios from 'axios';
// Logo
import imagen from './assets/img/cryptomonedas.png';
// Componentes
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner/Spinner';

//---------------------- componentes styles ---------------------//
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Footer = styled.p`
  text-align: center;
`;


const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;
//---------------------- componentes styles ---------------------//

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  // Ejecutar el llamadao a la API cuando el componente este cargado
  useEffect( () => {

      const cotizarCriptomoneda = async () => {
          // evitamos la ejecución la primera vez
          if(moneda === '') return;

          // consultar la api para obtener la cotizacion
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
          // Peticion HTTP para obtener los datos
          const resultado = await axios.get(url);

          // mostrar el spinner
          guardarCargando(true);

          // ocultar el spinner y mostrar el resultado
          setTimeout(() => {
            // cambiar el estado de cargando
            guardarCargando(false);
            // guardar cotizacion
            guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda] );
          }, 3000);

          
      }
      cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> :  <Cotizacion  resultado={resultado} />

  return (
    <Contenedor>
        <div>
          <Imagen src={imagen} alt="Criptomonedas" title="Criptomonedas" />
          <Footer>Copyright © - Designed and Created by: <a href="https://www.cmurestudillos.es" target="_blank" rel="noopener noreferrer">Carlos Mur</a></Footer>
        </div>
        <div>
            <Heading>Cotizador de Criptomonedas</Heading>
            <Formulario guardarMoneda={guardarMoneda} guardarCriptomoneda={guardarCriptomoneda} />
            {componente}
        </div>
    </Contenedor>
  );
}

export default App;
