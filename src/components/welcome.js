import React from 'react';
import '../assets/styles/wellcome.css';

//creando componenetes de forma más sencilla mediante funciones

function Wellcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Wellcome {props.username}!</h1>
                <p>Let's workout to get some gains!</p>
            </div>
        </div>
    );
};

export default Wellcome;
