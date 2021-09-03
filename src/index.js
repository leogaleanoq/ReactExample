import React from 'react';
import ReactDOM from 'react-dom';
import ImagenIronman from './assets/images/ironman.png';
//ejemplo con el React DOM
// se crea la constante con la info del usuario
const usuario = {
  Nombre: 'Leo',
  Apellido: 'Galeano',
  Correo: 'leo.galeano@email.com',
};
//se crea la funcion para obtener la información de la constante usuario
function getInfo(usuario){
  if(usuario){
    return `${usuario.Nombre} ${usuario.Apellido}`;
  }else{
    return `Hola extraño!`
  };
};
//se crea un elemento con el dom usanto jsx
const elementDom = <div>
    <img src={ImagenIronman} />
    <h1>Bienvenido {getInfo(usuario)}</h1>
  </div>
//se crea un nuevo contenedor con el id del html
const container = document.getElementById('root');
//se renderiza el elemento en el contenedor creado
ReactDOM.render(elementDom, container);