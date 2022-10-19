import React from 'react';
import { FaStar } from 'react-icons/fa'
const StarRating = () => {
    return (
        <div>
            {[...Array(5)].map((star)=>{
                return (
                    <label>
                        <input type="radio" name='rating' />
                        <FaStar size={100} />
                    </label>
                )
            })}
            <h2> Star Rating</h2>
        </div>
    );
};

export default StarRating;