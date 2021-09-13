import React from 'react';
import exerciseimg from '../assets/images/exercise.png';
import '../assets/styles/card.css';

class Card extends React.Component{
    render(){
        return (
            <div className="card mx-auto Fitness-Card mt-2">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseimg} className="float-right" alt=""/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guide</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default Card;