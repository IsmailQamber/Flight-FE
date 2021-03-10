import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userUpdate } from "../store/actions/authActions";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.authReducer.user);

  let preloadedValues = {};
  if (user) {
    preloadedValues = {
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    };
  }
  const { handleSubmit, errors, register } = useForm({
    defaultValues: preloadedValues,
  });

  const onSubmit = (data) => {
    data = { ...data, id: user.id };
    dispatch(userUpdate(data, history));
  };

  if (user === null) {
    return <Redirect to="/" />;
  }
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
        Save Changes
      </button>
    </form>
  );
};

export default Profile;
