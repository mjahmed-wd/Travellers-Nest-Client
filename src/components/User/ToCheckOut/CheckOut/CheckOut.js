import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../../Shared/ProvideAuth/ProvideAuth";
import StripeCheckOut from "./StripeCheckOut";
import { useForm } from "react-hook-form";
// date picker
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

const stripePromise = loadStripe(
  "pk_test_51IeCl6GgOq4qQ2BSUHhS6xH9f7j7vCdcz6rQMTyxKVdKzD2tVYTklbGgX0W2ABCHnHpo8gquw9CmxLPBSIvfkoFB001rCrgM2I"
);
const CheckOut = () => {
  // date selection
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log("start",dateState[0].startDate, "end",dateState[0].endDate)
  const { currentUser, auth } = useContext(AuthContext);
  const { displayName: userName, photoURL, email, phoneNumber } = currentUser;
  const id = localStorage.getItem("propertyID");
  console.log(id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [shippingData, setShippingData] = useState(null);
  const onSubmit = (data) => {
    data.checkIN=dateState[0].startDate
    data.checkOut=dateState[0].endDate
    setShippingData(data);
    console.log(data);
  };

  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/property/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        console.log("property", data);
      });
  }, [id]);
  const { _id, name, address, country, price, description } = property;
  const placeOrder = (transactionID) => {
    // const orderPlacingTime = new Date();
    const orderData = {
      orderedPropertyData: { ...property },
      checkInInfo: shippingData,
      orderPlacingTime: new Date(),
      transactionID,
      status: "processing",
    };
    fetch(`http://localhost:5000/addOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("product added");
      });
  };
  return (
    <div>
      <h2>Make Payment for {property?.name}</h2>
      <div style={{ display: shippingData ? "none" : "block" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            defaultValue={userName}
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
          <input
            defaultValue={email}
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
          <input
            defaultValue={phoneNumber}
            {...register("phoneNumber", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.phoneNumber && <span>This field is required</span>}
          <DateRangePicker
            onChange={(item) => setDateState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={dateState}
            direction="horizontal"
          />
          <input type="submit" />
        </form>
      </div>
      <div style={{ display: shippingData ? "block" : "none" }}>
        <Elements stripe={stripePromise}>
          <StripeCheckOut placeOrder={placeOrder} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckOut;
