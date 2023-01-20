import React from "react";
import { useForm } from "react-hook-form";
import Errors from "./Errors";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("do something :)");
  };

  return (
    <form className="xl:min-w-full" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstname", {
          required: true,
          min: 1,
          max: 99,
        })}
        placeholder="First Name"
        className={`w-full ${errors.firstname ? "border-2" : "border"} ${
          errors.firstname ? "border-softRed" : "border-desaturatedRed"
        } rounded-md mb-3 pt-4 pb-3 px-6 xl:pt-4 xl:pb-3
    font-medium ${errors.firstname ? "border-customRed" : ""} ${
          errors.firstname
            ? "placeholder-customRed"
            : "placeholder-customGrayishBlue"
        } `}
      />
      {errors.firstname && <Errors word={"First Name"} />}

      <input
        {...register("lastname", {
          required: true,
          min: 1,
          max: 99,
        })}
        placeholder="Last Name"
        className={`w-full ${errors.lastname ? "border-2" : "border"} ${
          errors.lastname ? "border-softRed" : "border-desaturatedRed"
        } rounded-md mb-3 pt-4 pb-3 px-6  xl:pt-4 xl:pb-3
   placeholder-customGrayishBlue font-medium ${
     errors.lastname ? "border-customRed" : ""
   } ${
          errors.lastname
            ? "placeholder-customRed"
            : "placeholder-customGrayishBlue"
        } `}
      />
      {errors.lastname && <Errors word={"Last Name"} />}

      <input
        {...register("email", {
          required: "Please provide a valid email",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email",
          },
        })}
        placeholder="Email Address"
        className={`w-full ${errors.email ? "border-2" : "border"} ${
          errors.email ? "border-customRed" : ""
        } rounded-md mb-3 pt-4 pb-3 px-6  xl:pt-4 xl:pb-3
   placeholder-customGrayishBlue font-medium ${
     errors.email ? "placeholder-customRed" : "placeholder-customGrayishBlue"
   } `}
      />
      {errors.email && <Errors email={"true"} />}

      <input
        type="password"
        {...register("password", {
          required: true,
          min: 1,
          max: 99,
        })}
        placeholder="Password"
        className={`w-full ${errors.password ? "border-2" : "border"} ${
          errors.password ? "border-softRed" : "border-desaturatedRed"
        } rounded-md mb-3 pt-4 pb-3 px-6  xl:pt-4 xl:pb-3
   placeholder-customGrayishBlue font-medium ${
     errors.email ? "border-customRed" : ""
   } ${
          errors.password
            ? "placeholder-customRed"
            : "placeholder-customGrayishBlue"
        }`}
      />
      {errors.password && <Errors word={"Password"} />}

      <button
        type="submit"
        className="w-full uppercase rounded-md mb-2 pt-4 pb-3 px-6  xl:pt-4 xl:pb-3
   placeholder-customDarkBlue font-medium text-white bg-customGreen border-b-4 border-green-600
   "
      >
        claim your free trial
      </button>
      <p className="text-xs text-customGrayishBlue font-light">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="text-customRed font-bold">
          Terms and Services
        </a>
      </p>
    </form>
  );
}

export default Form;
