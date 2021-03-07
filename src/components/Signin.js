import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../store/actions/authActions";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      {/* <h1>{foundProduct ? "Update" : "Create"} Product</h1> */}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={handleChange}
          name="username"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange}
          name="password"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        {/* {foundProduct ? "Update" : "Create"} */}
        Sign In
      </button>
    </form>
  );
};

export default Signin;
