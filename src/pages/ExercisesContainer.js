//los hooks se identificando con la palabra use
import React from 'react';
import Loading from '../components/loading.js';
import Error500 from '../pages/Error500.js';
import Exercises from './Exercises.js';
import useFetch from '../hooks/useFetch.js';

const ExercisesConstainer = () =>{
    //empleando el hooks importado
    const {data, loading, error} = useFetch('http://localhost:8000/api/exercises');
    
    if(loading){
        return <Loading/>;
    }else if(error){
        return <Error500/>;
    }else{
        return<Exercises
            data={data}
        />
    };

};



export default ExercisesConstainer;