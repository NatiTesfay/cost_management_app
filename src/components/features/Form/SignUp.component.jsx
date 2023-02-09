import React from "react";
import "./SignUp.css";

import { useForm } from "react-hook-form";

export default function SignUp() {

  const {register,handleSubmit, getValues,formState: { errors },} = useForm({
    defaultValues: {
      role: "",
      fullName: "",
      phone: "",
      country: "",
      MobilePrefix: "",
      email: "",
      dateOfBirth: new Date(),
      password: "",
      passwordConfirm: ""
    },
  });

  const onSubmit = (data) => {
    console.log(data)
  }
// handleSubmit((values) => { alert("sing up response" + JSON.stringify(values)) })
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="managerRole">manager</label>
          <input
            {...register("managerRole", { required: true })}
            placeholder="role"
            type="radio"
          />
          <label htmlFor="employeeRole">employee</label>
          <input
            {...register("employeeRole", { required: true })}
            placeholder="role"
            type="radio"
          />
        </div>

        <input
          {...register(
            "fullName",
            {
              required: {
                value: true,
                message: "please enter yor full name",
              },
            },
            { pattern: /^[A-Za-z]+$/i }
          )}
          placeholder="fullName"
          type="text"
        />

        <input {...register("phone", { required: true })}
          placeholder="phone"
          type="text"
        />
        
        <input {...register("country", { required: true })}
          placeholder="country"
          type="text"
        />

        <input {...register("MobilePrefix", { required: true })}
          placeholder="MobilePrefix"
          type="text"
        />

        <input
          {...register("email", {
            required: true,
            validate: (value) => value.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)  === getValues("email"),
          })}
          placeholder="email"
          type="email"
        />

        <input
          {...register("dateOfBirth", { required: true })}
          placeholder="dateOfBirth"
          type="date"
        />

        <input
          {...register("password", { valueAsDate: true }, { required: true,
            validate: (value) => value.toLowerCase().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)  === getValues("password"),
          })}
          placeholder="password"
          type="password"
        />

        <input
          {...register("passwordConfirm", {
            required: true,
            validate: (value) => value === getValues("password")
          })}
          placeholder="passwordConfirm"
          type="password"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}