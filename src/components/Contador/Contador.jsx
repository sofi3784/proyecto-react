import { useState } from "react";

const Contador = ({stock}) => {
    const [cont, setCont] = useState(1)

    const disCont = () => cont > 1 && setCont(cont-1)
    const aumCont = () => cont < stock && setCont(cont+1)
    
    
    return (
        <div>
            <button onClick={()=> disCont()} className="btn btn-dark">-</button>
            <p>{cont}</p>
            <button onClick={()=> aumCont()} className="btn btn-ligth">+</button>

        </div>
    );
}

export default Contador;
