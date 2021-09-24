import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import addimg from '../assets/images/add.png'

class Add extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center">
                <img src={addimg} alt=""/>
            </div>
        );
    };
};

export default Add;