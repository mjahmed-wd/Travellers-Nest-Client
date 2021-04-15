import React, { useEffect, useState } from "react";
import IndividualPropertyCard from "./IndividualPropertyCard/IndividualPropertyCard";

const PropertyShowcase = () => {
    const [properties,setProperties]=useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/allProperties`)
    .then(res=>res.json())
    .then(data=>{
        setProperties(data)
    })
  }, []);
  return (
    <div style={{height:"500px"}} className="d-flex justify-content-center align-items-center">
      
        {
            properties.length && properties.map(property=><IndividualPropertyCard key={property._id} property={property}/>)
        }
    </div>
  );
};

export default PropertyShowcase;
