import React from "react";
import Header from "../../Header/Header";
import SideNavigation from "../SideNavigation";

const SharingSidebar = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-100">
        <div className="row gx-0">
          <div className="col-md-3">
            <SideNavigation />
          </div>
          <div className="col-md-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SharingSidebar;
