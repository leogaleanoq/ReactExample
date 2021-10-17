import React from 'react';
import Card from './Card.js';
//funcion que se encarga de mapear la información de las props y hacer tantos componentes como objetos haya en las props(iterar)

const ExerciseList = ({exercises}) =>(
    <React.Fragment>
            {
                exercises.map((exercise) => (
                        <Card 
                            key={exercise.id}
                            //significa que se le aplican todas las propiedades del objeto exercise
                            {...exercise}
                        />
                    )
                )
            };
    </React.Fragment>
);

export default ExerciseList;