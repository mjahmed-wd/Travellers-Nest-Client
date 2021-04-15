import React from 'react';
import { useHistory } from 'react-router-dom';

const IndividualPropertyCard = ({property}) => {
const {_id: id,name,address,country,price,description}=property
const history=useHistory()
    return (
        <div>
            <h1>{name}</h1>
            <h3>{address}</h3>
            <h3>{ country }</h3>
            <h3>{ price }</h3>
            <h3>{ description }</h3>
            <button onClick={()=>history.push(`/property/${id}`)} >Checkout</button>
        </div>
    );
};

export default IndividualPropertyCard;