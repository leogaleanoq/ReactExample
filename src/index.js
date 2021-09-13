import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.js';
import 'bootstrap/dist/css/bootstrap.css'
//se crea un nuevo contenedor con el id del html
const container = document.getElementById('root');

//se renderiza el elemento en el contenedor creado
ReactDOM.render(<Card/>, container);