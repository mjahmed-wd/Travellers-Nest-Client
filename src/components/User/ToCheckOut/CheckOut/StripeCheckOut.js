import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import Button from "@material-ui/core/Button";
import { useGradientBtnStyles } from "@mui-treasury/styles/button/gradient";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const StripeCheckOut = ({ placeOrder }) => {
  const history = useHistory();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { paymentMethod, error, payload } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
      console.log(error);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      placeOrder(paymentMethod.id);
      console.log(paymentMethod);
      toast.success('Order Placed Successfully')
      history.push("/orders");
    }
    console.log("[PaymentMethod]", payload);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <label>
          Card number
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCvcElement />
        </label>
        
        <div className="w-25">
          <Button classes={chubbyStyles} type="submit" disabled={!stripe}>
            Place Order
          </Button>
        </div>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>
          Payment Success. Order processing started.
        </p>
      )}
    </>
  );
};

export default StripeCheckOut;
