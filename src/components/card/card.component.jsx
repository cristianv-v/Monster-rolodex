import React from 'react';

import './card.styles.css'

export const Card = props => (
    <div className='card-container'> 
        <img 
            alt="monster" 
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
        {/* "${}" sirve para ir cambiando el numero en el API, y se agrega "&size=" para el tamaño que uno busca*/}
        <h2>
            {props.monster.name}
        </h2>
        <p>
            {props.monster.email}
        </p>
    </div>
);