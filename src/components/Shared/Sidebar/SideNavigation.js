import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ProvideAuth/ProvideAuth";
import "./SideNavigation.css";

const SideNavigation = () => {
  const {currentUser}=useContext(AuthContext)

  const url = window.location.href.split("/")[3];
  return (
    <div className="d-flex flex-column bg-primary text-center side_navigation">
      <Link to="/checkout" className={url === "checkout" ? "active" : ""}>
        Check Out
      </Link>
      <Link to="/orders" className={url === "orders" ? "active" : ""}>
        Order History
      </Link>
      <Link to="/userReview" className={url === "userReview" ? "active" : ""}>
        Review
      </Link>
     {currentUser?.role==="Admin" && <> <Link to="/manageOrders" className={url === "manageOrders" ? "active" : ""}>
        Manage Orders
      </Link>
      <Link to="/addProperty" className={url === "addProperty" ? "active" : ""}>
        Add Property
      </Link>
      <Link to="/manageProperty" className={url === "manageProperty" ? "active" : ""}>
        Manage Property
      </Link>
      <Link to="/addAdmin" className={url === "addAdmin" ? "active" : ""}>
        Add Admin
      </Link></>}
    </div>
  );
};

export default SideNavigation;
