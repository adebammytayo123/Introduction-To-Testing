import React, { useState } from 'react';
import './favorite.css';

const FavoriteNumber = ({min = 1, max = 9}) =>{
    const [number, setNumber] = useState(0);
    const [numberEntered, setNumberEntered] = useState(false);

    const handleChange = (e) => {
        setNumber(Number(e.target.value));
        setNumberEntered(true);
    };

    const isValid = !numberEntered || (number >= min && number <= max)
    return (
        <div className="valid">
            <label htmlFor="favorite-number">Favorite Number</label>
            <input 
            className="input"
            id="favorite-number"
            type="number"
            value={number}
            onChange={handleChange}
            />
            {isValid ? null : <div role="alert">The Number Is Invalid</div> }
        </div>
    )
}

export default  FavoriteNumber;
