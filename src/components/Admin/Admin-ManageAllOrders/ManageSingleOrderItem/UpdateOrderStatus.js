import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AllPlacedOrderContext } from "../ManageOrders";
// import { PropertyContext } from "../ManageProperty";

const UpdateOrderStatus = ({ order, handleClose }) => {
  const [productChangeStatus, setProductChangeStatus] = useContext(
    AllPlacedOrderContext
  );
    const { _id } = order;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
   
    fetch(`https://travellers-nest.herokuapp.com/updateOrderStatus/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        handleClose();
        setProductChangeStatus(!productChangeStatus)
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="row">
          <div className="col-md-6">
            <h6>Property Description</h6>
            <select {...register("status")}>
              <option value="Processing">Processing</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Checked In">Checked In</option>
              <option value="Checked Out">Checked Out</option>
              <option value="Order Completed">Order Completed</option>
              <option value="Canceled">Canceled</option>
              <option value="Refund Processing">Refund Processing</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>

          <div className="col-md-6 button-wrap">
            <div className="w-75">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateOrderStatus;
