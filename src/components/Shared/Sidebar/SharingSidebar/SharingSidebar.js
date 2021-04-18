import React from "react";
import Header from "../../Header/Header";
import SideNavigation from "../SideNavigation";
import './SharingSidebar.css'

const SharingSidebar = ({ children }) => {
  return (
    <div>
      <Header />
        <div className="row w-100">
          <div className=" col-md-3">
            <SideNavigation />
          </div>
          <div className="col-md-8">{children}</div>
        </div>
    </div>
  );
};

export default SharingSidebar;
