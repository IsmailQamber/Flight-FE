import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

// Actions
import { addFlight } from "../../store/actions/flightActions";

const FlightForm = () => {
  const dispatch = useDispatch();

  const { handleSubmit, errors, register } = useForm();

  const onSubmit = (data) => {
    dispatch(addFlight(data));
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      {/* - Airline (from token)
- Price
- Departure Date
- Arrival Date
- Departure Time
- Arrival Time
- Departure Airport
- Arrival Airport */}

      <button type="submit" className="btn btn-primary">
        Add Flight
      </button>
    </form>
  );
};

export default FlightForm;
