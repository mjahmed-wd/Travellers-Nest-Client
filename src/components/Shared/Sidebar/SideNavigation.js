import React from "react";
import { Link } from "react-router-dom";
import "./SideNavigation.css";

const SideNavigation = () => {
  const url = window.location.href.split("/")[3];
  return (
    <div className="d-flex flex-column bg-primary text-center side_navigation">
      <Link to="/orders" className={url === "orders" ? "active" : ""}>
        Order History
      </Link>
      <Link to="/userReview" className={url === "userReview" ? "active" : ""}>
        Review
      </Link>
      <Link to="/addProperty" className={url === "addProperty" ? "active" : ""}>
        Add Property
      </Link>
      <Link to="/manageProperty" className={url === "manageProperty" ? "active" : ""}>
        Manage Property
      </Link>
    </div>
  );
};

export default SideNavigation;
