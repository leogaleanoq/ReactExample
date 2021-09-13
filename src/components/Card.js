import React from 'react';
import exerciseimg from '../assets/images/exercise.png';
import '../assets/styles/card.css';
import circlesimg from '../assets/images/circles.png';

class Card extends React.Component{

    render(){
        const { title, description, img, leftColor, rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card mt-2"
            style={{
                backgroundImage:`url(${circlesimg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right" alt=""/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default Card;