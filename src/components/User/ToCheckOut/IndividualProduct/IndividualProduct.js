import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { AuthContext } from "../../../Shared/ProvideAuth/ProvideAuth";

const IndividualProduct = () => {
  const history=useHistory()
  const { currentUser, auth } = useContext(AuthContext);
  // const { displayName: userName, photoURL, email } = currentUser;
  const { id } = useParams();
  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/property/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }, [id]);
  const { _id, name, address, country, price, description } = property;
  const placeOrder = () => {
    localStorage.setItem('propertyID',id)
    history.push('/checkout')
  };
  return (
    <div>
      {property?.name && (
        <>
          <img
            src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
            alt=""
          />
          <h2>{name}</h2>
          <h2>{address}</h2>
          <h2>{country}</h2>
          <h2>{price}</h2>
          <h2>{description}</h2>
          <button onClick={() => placeOrder()}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default IndividualProduct;
