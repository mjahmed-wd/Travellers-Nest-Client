import React, { useEffect, useState } from "react";
import IndividualPropertyCard from "./IndividualPropertyCard/IndividualPropertyCard";

const PropertyShowcase = () => {
    const [properties,setProperties]=useState([])
  useEffect(() => {
    fetch(`https://travellers-nest.herokuapp.com/allProperties`)
    .then(res=>res.json())
    .then(data=>{
        setProperties(data)
    })
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container">
      <div className="row">
      {
            properties.length && properties.map(property=><div key={property._id} className="col-md-4 col-sm-12 mb-5"><IndividualPropertyCard property={property}/></div>)
        }
      </div>
      </div>
     
    </div>
  );
};

export default PropertyShowcase;
