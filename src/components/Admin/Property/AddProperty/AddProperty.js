import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProperty.css";
import SharingSidebar from "../../../Shared/Sidebar/SharingSidebar/SharingSidebar"
import PublishIcon from "@material-ui/icons/Publish";

const AddProperty = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      address: data.address,
      country: data.country,
      description: data.description,
      imageURL: imageURL,
    };
    console.log(eventData);
    const url = `http://localhost:5000/addProperty`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      alert("Data Added Successfully")
    });
  };

  const handleImageUpload = (event) => {
    debugger
    console.log('image selected')
    const imageData = new FormData();
    imageData.set("key", "8bc92ea2aef5c437abee8233cb8457b2");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log('image uploaded to server')
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <SharingSidebar>
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="col-md-6 mb-2">
          <h6>Name</h6>
          <input
            className="form-control"
            placeholder="Property Name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="col-md-6 mb-2">
          <h6>Charge</h6>
          <input
            className="form-control"
            placeholder="Per Night Charge"
            {...register("price", { required: true })}
          />
        </div>
        <div className="col-md-6 mb-2">
          <h6>Address</h6>
          <input
            className="form-control"
            placeholder="House Name & Details"
            {...register("address", { required: true })}
          />
        </div>
        <div className="col-md-6 mb-2">
          <h6>Country</h6>
          <input
            className="form-control"
            defaultValue="Bangladesh"
            placeholder="Country"
            {...register("country", { required: true })}
          />
        </div>
        <div className="col-md-6 mb-2">
          <h6>Description</h6>
          <input
            className="form-control"
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </div>
      
        <div className="col-md-6 button-wrap">
          <h6>Upload Photo</h6>
          <label className="btn btn-outline-primary" htmlFor="exampleRequired">
            <PublishIcon /> Upload Photo
          </label>

          <input
            className="w-75"
            id="exampleRequired"
            type="file"
            onChange={handleImageUpload}
          />
          <div className="w-75">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </SharingSidebar>
  );
};

export default AddProperty;
