import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../Shared/Header/Header";
import SharingSidebar from "../../Shared/Sidebar/SharingSidebar/SharingSidebar";
// import SideNavigation from "../../Shared/Sidebar/SideNavigation";

const Review = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/postReview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
          alert("Review Added")
      });
  };
  return (
    <SharingSidebar>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label defaultValue="test" htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">
                Review
              </label>
              <textarea
                className="form-control"
                id="review"
                {...register("review", { required: true })}
                rows="3"
              ></textarea>
              {errors.review && <span>This field is required</span>}
            </div>
            <input type="submit" />
          </form>
    </SharingSidebar>
  );
};

export default Review;
