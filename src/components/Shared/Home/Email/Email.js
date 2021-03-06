import React from "react";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { useGradientBtnStyles } from "@mui-treasury/styles/button/gradient";
import { toast } from "react-toastify";

const Email = () => {
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success(`Mr. ${data.name} , we received your query about 
    "${data.query}".
    We will soon contact you at ${data.email}.`);
  };
  return (
    <div className="container mb-5 d-flex justify-content-center" id="query">
      <div className="w-50">
        <form onSubmit={handleSubmit(onSubmit)} className=" d-flex flex-column">
          <Input
            placeholder="Your Name"
            className="mb-5"
            inputProps={{ "aria-label": "description" }}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <>
              <br />
              <span>This field is required</span>
              <br />
            </>
          )}
          <Input
            placeholder="Your Email"
            className="mb-5"
            type="email"
            inputProps={{ "aria-label": "description" }}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <>
              <br />
              <span>This field is required</span>
              <br />
            </>
          )}
          <Input
            placeholder="Your Query"
            className="mb-5"
            inputProps={{ "aria-label": "description" }}
            {...register("query", { required: true })}
          />
          {errors.query && (
            <>
              <br />
              <span>This field is required</span>
              <br />
            </>
          )}
          <div className="d-flex justify-content-center">
            <Button classes={chubbyStyles} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div />
    </div>
  );
};

export default Email;
