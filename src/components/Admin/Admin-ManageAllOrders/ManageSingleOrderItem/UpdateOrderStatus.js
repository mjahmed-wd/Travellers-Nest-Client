import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AllPlacedOrderContext } from "../ManageOrders";
// import { PropertyContext } from "../ManageProperty";

const UpdateOrderStatus = ({ order, handleClose }) => {
  const [productChangeStatus, setProductChangeStatus] = useContext(
    AllPlacedOrderContext
  );
//   const { _id, name, price, address, country, description } = order;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      address: data.address,
      country: data.country,
      description: data.description,
    };
    // fetch(`http://localhost:5000/updateProperty/${_id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(eventData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     handleClose();
    //     setProductChangeStatus(!productChangeStatus)
    //   });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="row">
          
          <div className="col-md-6">
            <h6>Property Description</h6>
            <input
            //   defaultValue={description}
              className="w-75"
              placeholder="Property Description"
              {...register("description", { required: true })}
            />
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
