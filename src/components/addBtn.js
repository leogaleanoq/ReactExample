import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import addimg from '../assets/images/add.png';
import { Link } from 'react-router-dom';

const Add = () =>(
    <div className="d-flex justify-content-center mt-5">
        {/* Se sustituye la etiqueta a por link */}
        <Link to="/exercises/new">
            <img src={addimg} alt=""/>
        </Link>
    </div>
);

export default Add;