import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// Actions
import { addFlight } from "../../store/actions/flightActions";
import { useHistory } from "react-router";

const FlightForm = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const validateTime = async (value) => {
    await sleep(1000);
    const add_minutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000);
    };
    const currentTime = add_minutes(new Date(), 120).toLocaleTimeString(
      "en-GB"
    );

    if (value < currentTime) return false;
    else return true;
  };
  const user = useSelector((state) => state.authReducer.user);
  const airlines = useSelector((state) => state.airlineReducer.airlines);

  const currentAirline = airlines.find(
    (airline) => airline.name === user.username
  );
  console.log(currentAirline.id);
  // const airlines = useSelector(
  //   (state) => state.airlineReducer.airlines.map((_airline) => _airline.id) //return the airline id
  // );

  const history = useHistory();
  const dispatch = useDispatch();

  const { handleSubmit, errors, register } = useForm();

  const onSubmit = (data) => {
    data = { ...data, airlineId: currentAirline.id };
    dispatch(addFlight(data));
    history.push("/airlineflights");
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          ref={register({ required: true })}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Departure Date</label>
        <input
          type="date"
          name="departureDate"
          className="form-control"
          ref={register({ required: true })} //, validate: validateTime })}
        />
        {/* {errors.departureDate && <p>Date has passed</p>} */}
      </div>
      <div className="form-group">
        <label className="form-label">Arrival Date</label>
        <input
          type="date"
          name="arrivalDate"
          className="form-control"
          ref={register({ required: true })} //, validate: validateTime })}
        />
        {/* {errors.arrivalDate && <p>Date has passed</p>} */}
      </div>
      <div className="form-group">
        <label className="form-label">Departure Time</label>
        <input
          type="time"
          name="departureTime"
          className="form-control"
          ref={register({ required: true })} //, validate: validateTime })}
        />
        {/* {errors.departureTime && <p>Time has passed</p>} */}
      </div>
      <div className="form-group">
        <label className="form-label">Arrival Time</label>
        <input
          type="time"
          name="arrivalTime"
          className="form-control"
          ref={register({ required: true })} //, validate: validateTime })}
        />
        {/* {errors.arrivalTime && <p>Time has passed</p>} */}
      </div>
      <div className="form-group">
        <label className="form-label">Economy Seats</label>
        <input
          type="number"
          name="economySeats"
          className="form-control"
          ref={register({ required: true })}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Business Seats</label>
        <input
          type="number"
          name="businessSeats"
          className="form-control"
          ref={register({ required: true })}
        />
      </div>
      {/* <div className="form-group">
        <label className="form-label">Airline</label>
        <input
          // disabled={true}
          // type="number"
          name="airlineId"
          value={currentAirline.id} //{airlines}
          className="form-control"
          ref={register({ required: true })}
        />
      </div> */}
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
