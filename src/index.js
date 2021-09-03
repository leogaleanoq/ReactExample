import React from 'react';
import ReactDOM from 'react-dom';

//ejemplo con el React DOM

//se crea un elemento con el dom usanto jsx
const elementDom = <h1>Hola en ReactDom!</h1>
//se crea un nuevo contenedor con el id del html
const container2 = document.getElementById('root');
//se renderiza el elemento en el contenedor creado
ReactDOM.render(elementDom, container2);