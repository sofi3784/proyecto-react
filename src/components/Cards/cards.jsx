import React from 'react';

const Cards = () => {
    return (
        <div>
            <section><h2>Ultimas Ofertas:</h2></section>

<section class="padre">
    <div class="card">
        <img src="../images/Ford-Focus.jpg" alt="Automovil" class="cardImage">
            <div class="card-info">
                <ul class="cardData">
                    <li>
                        <span class="cardsDataTittle">Nombre:</span>
                        <span class="cardsDataAlias">Ford</span>
                    </li>
                    <li>
                        <span class="cardsDataTittle">Tipo:</span> Automovil
                    </li>
                    <li>
                        <span class="cardsDataTittle">Modelo:</span> Focus
                    </li>
                </ul>
            </div>
    </div>
    
    <div class="card">
            <img src="../images/Peugeot-408.jpg" alt="Automovil" class="cardImage">
        <div class="card-info">
            <ul class="cardData">
                <li>
                    <span class="cardsDataTittle">Nombre:</span>
                    <span class="cardsDataAlias">Peugeot</span>
                </li>
                <li>
                    <span class="cardsDataTittle">Tipo:</span> Automovil
                </li>
                <li>
                    <span class="cardsDataTittle">Modelo:</span> 408
                    
                </li>
            </ul>
        </div>
    </div>
    
    <div class="card">
            <img src="../images/Volkswaguen-Vento" alt="Automovil" class="cardImage">
        <div class="card-info">
            <ul class="cardData">
                <li>
                    <span class="cardsDataTittle">Nombre:</span>
                    <span class="cardsDataAlias">Volkswaguen</span>
                </li>
                <li>
                    <span class="cardsDataTittle">Tipo:</span> Automovil
                </li>
                <li>
                    <span class="cardsDataTittle">Modelo:</span> Vento
                </li>
            </ul>
        </div>
        </div>
    <div class="card">
                <img src="../images/Honda-Civic" alt="Automovil" class="cardImage">
            <div class="card-info">
                <ul class="cardData">
                    <li>
                        <span class="cardsDataTittle">Nombre:</span>
                        <span class="cardsDataAlias">Honda</span>
                    </li>
                    <li>
                        <span class="cardsDataTittle">Tipo:</span> Automovil
                    </li>
                    <li>
                        <span class="cardsDataTittle">Modelo:</span> Civic
                        
                    </li>
                </ul>
            </div>
    </div>

</section>           

        </div>
    );
}

export default Cards;
