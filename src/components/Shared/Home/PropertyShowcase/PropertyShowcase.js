import React, { useEffect, useState } from "react";
import IndividualPropertyCard from "./IndividualPropertyCard/IndividualPropertyCard";
import { CircularProgress } from "@material-ui/core";

const PropertyShowcase = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch(`https://travellers-nest.herokuapp.com/allProperties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
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
      <div
        className="d-flex justify-content-center align-items-center"
        id="property"
      >
        <div className="container">
          <div className="row">
            {properties.length > 0 &&
              properties.map((property) => (
                <div key={property._id} className="col-md-4 col-sm-12 mb-5">
                  <IndividualPropertyCard property={property} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyShowcase;
