import React from 'react';
import exerciseimg from '../assets/images/exercise.png';
import '../assets/styles/card.css';
import circlesimg from '../assets/images/circles.png';

class Card extends React.Component{

    constructor(props){
        super(props);
        //Creamos el estado inicial
        this.state = {
            image: exerciseimg
        };
    };
    //funcion que se invoca despues de que se genera un componente
    componentDidMount(){
        //se establece un intervalo de 5 segundos para cambiar el estado de la imagen
        setTimeout(()=>{
            this.setState({
                image: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
            })
        }, 5000)
    };

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
                            {/* el source de la imagen se obtiene del estado incial del constructor */}
                            <img src={this.state.image} className="float-right" alt=""/>
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