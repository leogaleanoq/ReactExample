import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Exercises from './pages/Exercises.js';
//se crea un nuevo contenedor con el id del html
const container = document.getElementById('root');

//se renderiza el elemento en el contenedor creado
ReactDOM.render(<Exercises/>, container);