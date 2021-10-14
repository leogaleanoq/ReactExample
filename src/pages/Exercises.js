import React from 'react';
import Wellcome from '../components/welcome.js';
import ExerciseList from '../components/exerciseList.js';
import Add from '../components/addBtn.js';

const Exercises = ({data}) => (
    //se cambian los divs por la propiedad fragmentos de react
    <React.Fragment>
            <Wellcome
                username="Leo"
            />
            <ExerciseList
                //las props del componente llamado exerciseList se igualan al array dentro del estado llamado data
                exercises={data}
            />
            <Add/>
    </React.Fragment>
);


export default Exercises;