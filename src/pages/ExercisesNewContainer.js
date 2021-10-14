import React from 'react';
import Error500 from './Error500.js';
import ExercisesNew from './ExercisesNew.js';
import Loading from '../components/loading.js';

class ExercisesNewContainer extends React.Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        error: null,
        loading: false
    };

    changeHandler = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    submitHandler = async e => {
        this.setState({
            loading: true
        });
        e.preventDefault()
        try{
            let config = {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            };

            let res = await fetch('http://localhost:8000/api/exercises', config);
            let json = await res.json();

            console.log(1);
            console.log(json);

            this.setState({
                loading: false
            });

            this.props.history.push('/exercises');
        }catch(error){
            this.setState({
                loading: false,
                error
            });
        }
        console.log(this.state)
    };

    render(){

        if(this.state.loading){
            return <Loading/>
        };

        if(this.state.error){
            return <Error500/>
        };
        return <ExercisesNew
            form={this.state.form}
            onChange={this.changeHandler}
            onSubmit={this.submitHandler}
        />
    };
};

export default ExercisesNewContainer;