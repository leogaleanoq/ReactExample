//los hooks se identificando con la palabra use
import React,{useState, useEffect} from 'react';
import Loading from '../components/loading.js';
import Error500 from '../pages/Error500.js';
import Exercises from './Exercises.js';

const ExercisesConstainer = () =>{

    //variables de estado
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(()=>{
        const fetchExercises = async() =>{
            try{
    
                let res = await fetch('http://localhost:8000/api/exercises');
                let data = await res.json();
                setData(data);
                setLoading(false);
    
            }catch(error){
                setLoading(false);
                setError(error);
            }
        }
        fetchExercises();
    },[]);

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