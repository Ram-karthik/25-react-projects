import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);

    const handleClick = (currentIndex) => {
        setRating(currentIndex);
    }
    const handleMouseMove = (currentIndex) => {
        setHover(currentIndex);

    }
    const handleMoveLeave = () => {
        setHover(rating);
    }
    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    console.log("--------")
                    index += 1;
                    return (
                        <FaStar
                            style={{
                                marginLeft: '15px'
                            }}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={() => handleMoveLeave(index)}
                            size={40} />
                    )
                })
            }
        </div>
    )
}

export default StarRating