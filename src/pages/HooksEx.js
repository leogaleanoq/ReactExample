
import React, {useState} from 'react';

const HooksEx = () =>{
    //useState retorna el estado actual 'count' y setCount es la funcion que actualiza el estado. Se inicializa en 0 porque es entero
    const [count,setCount] = useState(0);

    return (
        <div>
            <p>Has dado {count} clicks</p>
            <button onClick={()=> setCount(count+1)}>
                Suma 1 click
                </button>
        </div>
    );
};

export default HooksEx;