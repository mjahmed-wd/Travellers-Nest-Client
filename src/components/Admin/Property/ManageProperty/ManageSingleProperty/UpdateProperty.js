import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PropertyContext } from "../ManageProperty";

const UpdateProperty = ({ property, handleClose }) => {
  const [productChangeStatus, setProductChangeStatus] = useContext(
    PropertyContext
  );
  const { _id, name, price, address, country, description } = property;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      address: data.address,
      country: data.country,
      description: data.description,
    };
    fetch(`http://localhost:5000/updateProperty/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
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
          <div className="col-md-6 mb-2">
            <h6>Product Name</h6>
            <input
              defaultValue={name}
              className="w-75"
              placeholder="Product Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="col-md-6">
            <h6>Product Price</h6>
            <input
              defaultValue={price}
              className="w-75"
              placeholder="Product Price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="col-md-6">
            <h6>Address</h6>
            <input
              defaultValue={address}
              className="w-75"
              placeholder="Address"
              {...register("address", { required: true })}
            />
          </div>
          <div className="col-md-6">
            <h6>Country</h6>
            <input
              defaultValue={country}
              className="w-75"
              placeholder="Country"
              {...register("country", { required: true })}
            />
          </div>
          <div className="col-md-6">
            <h6>Property Description</h6>
            <input
              defaultValue={description}
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

export default UpdateProperty;
