import React from 'react';

const ReviewCard = ({singleReview}) => {
    const {name,review}=singleReview
    return (
        <div>
            <h2>{name}</h2>
            <h4>{review}</h4>
        </div>
    );
};

export default ReviewCard;