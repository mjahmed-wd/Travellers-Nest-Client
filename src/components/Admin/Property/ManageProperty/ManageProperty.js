import { CircularProgress } from "@material-ui/core";
import React, { createContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SharingSidebar from "../../../Shared/Sidebar/SharingSidebar/SharingSidebar";
import ManageSingleProperty from "./ManageSingleProperty/ManageSingleProperty";

export const PropertyContext = createContext();

const ManageProperty = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [propertyChangeStatus, setPropertyChangeStatus] = useState(false);
  useEffect(() => {
    fetch(`https://travellers-nest.herokuapp.com/allProperties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, [propertyChangeStatus]);
  return (
    <SharingSidebar>
          {loading ? (
            <div className="text-center">
              <CircularProgress />
            </div>
          ) : (
            ""
          )}

          <PropertyContext.Provider
            value={[propertyChangeStatus, setPropertyChangeStatus]}
          >
            {properties.length > 0 && (
              <div className="p-4">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Service Name</th>
                      <th>Charge Per Day</th>
                      <th>Address</th>
                      <th>Country</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property) => (
                      <ManageSingleProperty
                        key={property._id}
                        property={property}
                      />
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </PropertyContext.Provider>
       
    </SharingSidebar>
  );
};

export default ManageProperty;
