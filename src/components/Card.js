import React from 'react';
import exerciseimg from '../assets/images/exercise.png';
class Card extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src={exerciseimg}/>
                </div>
                <div>
                    <h1>Technique Guide</h1>
                    <p>Learn amazing street workout and calisthenics</p>
                </div>
            </div>
        )
    }
};

export default Card;