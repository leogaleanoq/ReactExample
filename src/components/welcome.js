import React from 'react';
import '../assets/styles/wellcome.css';

//creando componenetes de forma más sencilla mediante funciones de flecha

const Wellcome = ({username}) => (
<div className="container">
            <div className="Fitness-User-Info">
                <h1>Wellcome {username}!</h1>
                <p>Let's workout to get some gains!</p>
            </div>
        </div>
);

export default Wellcome;
