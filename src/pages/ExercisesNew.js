import React from 'react';
import ExerciseForm from '../components/exerciseForm.js';
import Card from '../components/Card.js';

class ExercisesNew extends React.Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    };

    changeHandler = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };
    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm
                    onChange={this.changeHandler}
                    form={this.state.form}
                    />
                </div>
            </div>
        );
    };
};

export default ExercisesNew;