import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ProvideAuth/ProvideAuth";
import "./SideNavigation.css";

const SideNavigation = () => {
  const {currentUser}=useContext(AuthContext)

  const url = window.location.href.split("/")[3];
  return (
    <div className="d-flex flex-column bg-dark text-center side_navigation">
      {currentUser?.role==="User"&&<><Link to="/checkout" className={url === "checkout" ? "active" : ""}>
        Check Out
      </Link>
      <Link to="/orders" className={url === "orders" ? "active" : ""}>
        Order History
      </Link>
      <Link to="/userReview" className={url === "userReview" ? "active" : ""}>
        Review
      </Link></>}

     {currentUser?.role==="Admin" && <> <Link to="/manageOrders" className={url === "manageOrders" ? "active" : ""}>
        Manage Orders
      </Link>
      <Link to="/addService" className={url === "addService" ? "active" : ""}>
        Add Service
      </Link>
      <Link to="/manageServices" className={url === "manageServices" ? "active" : ""}>
        Manage Services
      </Link>
      <Link to="/addAdmin" className={url === "addAdmin" ? "active" : ""}>
        Add Admin
      </Link></>}
    </div>
  );
};

export default SideNavigation;
