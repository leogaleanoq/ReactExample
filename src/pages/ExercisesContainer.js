import React from 'react';
import Loading from '../components/loading.js';
import Error500 from '../pages/Error500.js';
import Exercises from './Exercises.js';

//usamos property initializers, es un feature de babel que permite no inicializar las props en el constructor

class ExercisesConstainer extends React.Component{
    //en los estados, se crea el objeto array data con 3 objetos
    state = {
        //es la data con la información de las cards
        data: [],
        loading: true,
        error: null
    };

    async componentDidMount(){
        await this.fetchExercises();
    };

    fetchExercises = async() =>{
        try{

            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
            this.setState({data, loading:false});
            console.log(data);

        }catch(error){
            this.setState({
                loading:false,
                error
            });
        }
    }
    render(){
        if(this.state.loading){
            return <Loading/>;
        };
        if(this.state.error){
            return <Error500/>;
        };
        return<Exercises
            data={this.state.data}
        />
    }
};

export default ExercisesConstainer;