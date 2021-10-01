import React from 'react';

class ExercisesNew extends React.Component{


clickHandler = () => {
    console.log('Enviado!');
};

    render(){
        return(
            <button onClick={this.clickHandler}>
                Enviar
            </button>
        );
    };
};

export default ExercisesNew;