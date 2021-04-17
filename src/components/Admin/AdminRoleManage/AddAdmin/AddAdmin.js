import React from 'react';
import SharingSidebar from '../../../Shared/Sidebar/SharingSidebar/SharingSidebar';
import PublishIcon from "@material-ui/icons/Publish";
import { useForm } from 'react-hook-form';


const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const addAdminData = {
      name: data.name,
      email: data.email,
      designation: data.designation
    };
    console.log(addAdminData);
    const url = `https://travellers-nest.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addAdminData),
    }).then((res) => {
      alert("Data Added Successfully")
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
            placeholder="New Admin Name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="col-md-6 mb-2">
          <h6>Email</h6>
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="col-md-6 mb-2">
          <h6>Designation</h6>
          <input
            className="form-control"
            placeholder="Designation"
            {...register("designation", { required: true })}
          />
        </div>
        
      
        <div className="col-md-6 button-wrap">
         
          <div className="w-75">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </SharingSidebar>
    );
};

export default AddAdmin;