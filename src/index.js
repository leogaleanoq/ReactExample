import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.js';
import 'bootstrap/dist/css/bootstrap.css'
//se crea un nuevo contenedor con el id del html
const container = document.getElementById('root');

//se renderiza el elemento en el contenedor creado
ReactDOM.render(<Card 
                    title="Technique Guide"
                    description="Learn amazing street workout and calisthenics"
                    img="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />, container);