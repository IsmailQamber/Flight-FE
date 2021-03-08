import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../store/actions/authActions";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Signup = () => {
  const { handleSubmit, errors, register } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(signup(data, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      {/* <h1>{foundProduct ? "Update" : "Create"} Product</h1> */}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="username"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.username && <p>username is required</p>}
      </div>
      <div className="mb-3">
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
      <div className="mb-3">
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
      <div className="mb-3">
        <label className="form-label">First name</label>
        <input
          type="text"
          name="firstname"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.firstname && <p>first name is required</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Last name</label>
        <input
          type="text"
          name="lastname"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.lastname && <p>last name is required</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Phone number</label>
        <input
          type="text"
          name="phonenumber"
          className="form-control"
          ref={register({ required: true })}
        />
        {errors.phonenumber && <p>phone number is required</p>}
      </div>
      <button type="submit" className="btn btn-info float-right">
        {/* {foundProduct ? "Update" : "Create"} */}
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
