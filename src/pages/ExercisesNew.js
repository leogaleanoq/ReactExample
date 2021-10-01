import React from 'react';

class ExercisesNew extends React.Component{

state = {};

submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
};

changeHandler = event => {
    //almacenar el evento en el estado
    this.setState({
        [event.target.name]: event.target.value
    })
};

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={this.changeHandler}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={this.changeHandler}
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="image"
                            name="image"
                            onChange={this.changeHandler}
                            value={this.state.image}
                        />
                    </div>
                    <div className="form row">
                        <div className="col-6"> 
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"
                                onChange={this.changeHandler}
                                value={this.state.leftColor}
                            
                            />
                        </div>
                        <div className="col-6"> 
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"
                                onChange={this.changeHandler}
                                value={this.state.rightColor}
                            
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Enviar!
                    </button>
                </form>
            </div>
        );
    };
};

export default ExercisesNew;