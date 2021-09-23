import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Wellcome from '../components/welcome';
import Card from '../components/card';

class Exercises extends React.Component{
    render(){
        return(
            <div>
                <Wellcome
                    username="Leo"
                />
                <Card 
                    title="Technique Guide"
                    description="Learn amazing street workout and calisthenics"
                    img="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png"
                    rightColor="#617BFB"
                    leftColor="#A74CF2"
                />
            </div>
        )
    }
};

export default Exercises;