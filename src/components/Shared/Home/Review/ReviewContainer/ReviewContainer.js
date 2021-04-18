import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { CircularProgress } from "@material-ui/core";

const ReviewContainer = () => {
  const [loading, setLoading] = useState(true);
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("https://travellers-nest.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllReviews(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="text-center">
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      <div className="container d-flex justify-content-center">
        <div className="row">
          {allReviews.map((review) => (
            <ReviewCard key={review._id} singleReview={review} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewContainer;
