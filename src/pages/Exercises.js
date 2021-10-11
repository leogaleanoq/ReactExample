import React from 'react';
import Wellcome from '../components/welcome.js';
import ExerciseList from '../components/exerciseList.js';
import Add from '../components/addBtn.js'

//usamos property initializers, es un feature de babel que permite no inicializar las props en el constructor

class Exercises extends React.Component{
    //en los estados, se crea el objeto array data con 3 objetos
    state = {
        //es la data con la información de las cards
        data: []
    };

    async componentDidMount(){
        await this.fetchExercises();
    };

    fetchExercises = async() =>{
        let res = await fetch('http://localhost:8000/api/exercises');
        let data = await res.json();
        this.setState({data});
        console.log(data);
    }
    render(){
        return(
            <div>
                <Wellcome
                    username="Leo"
                />
                <ExerciseList
                    //las props del componente llamado exerciseList se igualan al array dentro del estado llamado data
                    exercises={this.state.data}
                />
                <Add/>
            </div>
        )
    }
};

export default Exercises;