import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewContainer = () => {
    const [allReviews,setAllReviews]=useState([])
    useEffect(()=>{
        fetch("https://travellers-nest.herokuapp.com/review")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAllReviews(data)
        })
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                allReviews.map(review=><ReviewCard key={review._id} singleReview={review} />)
            }
            </div> 
        </div>
    );
};

export default ReviewContainer;