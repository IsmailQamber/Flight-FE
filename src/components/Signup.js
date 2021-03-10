import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../store/actions/authActions";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleSubmit, errors, register } = useForm();

  const onSubmit = (data) => {
    dispatch(signup(data, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      {/* <h1>{foundProduct ? "Update" : "Create"} Product</h1> */}
      <div className="form-group">
        <label className="form-label">name</label>
        <input
          type="text"
          name="username"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.username && <p>username is required</p>}
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>password is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>password has to be 6 characters</p>
        )}
        {errors.password && errors.password.type === "maxLength" && (
          <p>password can't be longer than 12 characters</p>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          ref={register({ required: true, pattern: EMAIL_REGEX })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && <p>Wrong email</p>}
      </div>
      <div className="form-group">
        <label className="form-label">First name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.firstName && <p>first name is required</p>}
      </div>
      <div className="form-group">
        <label className="form-label">Last name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.lastName && <p>last name is required</p>}
      </div>
      <div className="form-group">
        <label className="form-label">Phone number</label>
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.phoneNumber && <p>phone number is required</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        {/* {foundProduct ? "Update" : "Create"} */}
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
