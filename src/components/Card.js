import React from 'react';
import '../assets/styles/card.css';
import circlesimg from '../assets/images/circles.png';
import 'bootstrap/dist/css/bootstrap.css';
import emptyImg from '../assets/images/empty.png';

const Card = ({title, description, img, leftColor, rightColor}) =>(
    <div className="card mx-auto Fitness-Card mt-2"
            style={{
                backgroundImage:`url(${circlesimg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            {/* el source de la imagen se obtiene del estado incial del constructor */}
                            <img src={img || emptyImg} className="float-right" alt=""/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
);


export default Card;