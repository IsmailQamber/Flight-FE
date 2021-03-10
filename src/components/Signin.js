import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signin } from "../store/actions/authActions";

const Signin = () => {
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  // const [user, setUser] = useState({
  //   username: "",
  //   password: "",
  // });

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(signin(data, history));
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      {/* <h1>{foundProduct ? "Update" : "Create"} Product</h1> */}
      <div className="form-group">
        <label className="form-label">Name</label>
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
      <button type="submit" className="btn btn-primary">
        {/* {foundProduct ? "Update" : "Create"} */}
        Sign In
      </button>
    </form>
  );
};

export default Signin;
