import React from 'react';
import ReactDOM from 'react-dom';
import ImagenIronman from './assets/images/ironman.png';
import Card from './components/Card.js';

//se crea un nuevo contenedor con el id del html
const container = document.getElementById('root');

//se renderiza el elemento en el contenedor creado
ReactDOM.render(<Card/>, container);