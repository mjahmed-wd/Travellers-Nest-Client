import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewContainer = () => {
    const [allReviews,setAllReviews]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/review")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAllReviews(data)
        })
    },[])
    return (
        <div>
            {
                allReviews.map(review=><ReviewCard singleReview={review} />)
            }
        </div>
    );
};

export default ReviewContainer;