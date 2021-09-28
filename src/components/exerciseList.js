import React from 'react';
import Card from './Card.js';
//funcion que se encarga de mapear la información de las props y hacer tantos componentes como objetos haya en las props(iterar)
function ExerciseList(props){
    return(
        <div>
            {
                props.excercisesprops.map((exercise) => {
                    return(
                        <Card 
                            title={exercise.title}
                            description={exercise.description}
                            img = {exercise.img}
                            rightColor={exercise.leftColor}
                            leftColor={exercise.rightColor}
                        />
                    );
                })
            }
        </div>
    );
};

export default ExerciseList;