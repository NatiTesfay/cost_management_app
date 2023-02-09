import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const [userData, setUserData] = useState({email:"",password: ""})

  const { register, handleSubmit } = useForm({
    defaultValues: {
      country: "",
      MobilePrefix: "",
      email: "",
      dateOfBirth: new Date(),
      password: "",
      passwordConfirm: "",
    },
  });

  const handleChange = (e) => { 
    console.log(e.target)
  }
  const onSubmit = (e) => {
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Email:</h3>
        <input
          {...register("email", { required: true })}
          placeholder="email"
          type="email" 
          name='email'
          onChange={handleChange}
        />
        <h3>Password:</h3>

        <input
          {...register("password", { required: true })}
          placeholder="password"
          type="password"
          name='password'
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
