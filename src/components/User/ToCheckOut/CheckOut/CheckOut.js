import React, { useContext, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../../Shared/ProvideAuth/ProvideAuth";
import StripeCheckOut from "./StripeCheckOut";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { useGradientBtnStyles } from "@mui-treasury/styles/button/gradient";
import "../../../Shared/Home/Title/Title.css";
// date picker
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import SharingSidebar from "../../../Shared/Sidebar/SharingSidebar/SharingSidebar";

const stripePromise = loadStripe(
  "pk_test_51IeCl6GgOq4qQ2BSUHhS6xH9f7j7vCdcz6rQMTyxKVdKzD2tVYTklbGgX0W2ABCHnHpo8gquw9CmxLPBSIvfkoFB001rCrgM2I"
);
const CheckOut = () => {
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  // date selection
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log("start", dateState[0].startDate, "end", dateState[0].endDate);
  const { currentUser } = useContext(AuthContext);
  const { displayName: userName, email, phoneNumber } = currentUser;
  const id = localStorage.getItem("propertyID");
  console.log(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [shippingData, setShippingData] = useState(null);
  const onSubmit = (data) => {
    data.checkIN = dateState[0].startDate;
    data.checkOut = dateState[0].endDate;
    const totalDayCount =
      (new Date(dateState[0].endDate).getTime() -
        new Date(dateState[0].startDate).getTime()) /
        (1000 * 3600 * 24) +
      1;
    property.totalCharge = price * totalDayCount;
    // data.totalDayCount = totalDayCount;
    setShippingData(data);
    // console.log(data, totalDayCount);
  };

  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch(`https://travellers-nest.herokuapp.com/property/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        console.log("property", data);
      });
  }, [id]);
  const { price } = property;
  const placeOrder = (transactionID) => {
    // const orderPlacingTime = new Date();
    const orderData = {
      orderedPropertyData: { ...property },
      checkInInfo: shippingData,
      orderPlacingTime: new Date(),
      transactionID,
      status: "Processing",
    };
    fetch(`https://travellers-nest.herokuapp.com/addOrder`, {
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
    <SharingSidebar>
      <div className="Checkout-Product-Data-Showing mb-3">
        <div className="title d-flex justify-content-center mt-2 mb-2">
          <div>
            <h5>Confirm </h5>
          </div>
          <div className="title-main">
            <h5>Order</h5>
          </div>
        </div>
        <div className="text-center">
          <h4>
            {property?.name} - {property?.address} - {property?.price}$/Day{" "}
          </h4>
        </div>
      </div>
      <div style={{ display: shippingData ? "none" : "block" }}>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          {/* register your input into the hook by invoking the "register" function */}
          <div className="d-flex justify-content-center">
            <input
              className="form-control w-75 mb-3"
              defaultValue={userName}
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          <div className="d-flex justify-content-center">
            <input
              className="form-control w-75 mb-3"
              defaultValue={email}
              {...register("email", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-control w-75 mb-3"
              defaultValue={phoneNumber}
              {...register("phoneNumber", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.phoneNumber && <span>This field is required</span>}
          </div>
          <DateRangePicker
            onChange={(item) => setDateState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={dateState}
            direction="horizontal"
          />

          <div className="text-center mt-3">
            <Button classes={chubbyStyles} type="submit">
              Proceed to Checkout
            </Button>
          </div>
        </form>
      </div>
      <div style={{ display: shippingData ? "block" : "none" }}>
        <div className="text-center mb-3">
          <h5>Total Charge: {property?.totalCharge}$</h5>
        </div>
        <Elements stripe={stripePromise}>
          <StripeCheckOut placeOrder={placeOrder} />
        </Elements>
      </div>
    </SharingSidebar>
  );
};

export default CheckOut;
