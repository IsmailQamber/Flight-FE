import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// Actions
import { Redirect, useHistory, useParams } from "react-router";
import { addFlight, updateFlight } from "../../store/actions/flightActions";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const FlightForm = () => {
  const { flightId } = useParams();
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
  const flights = useSelector((state) => state.flightReducer.flights);
  const flight = flights.find((flight) => flight.id === +flightId);
  const airports = useSelector((state) => state.airportReducer.airports);

  const currentAirline = airlines.find((airline) => airline.userId === user.id);
  console.log(currentAirline);
  let airlineId;
  if (currentAirline) {
    airlineId = currentAirline.id;
  }
  const history = useHistory();
  const dispatch = useDispatch();

  let preloadedValues = {};
  if (flight) {
    preloadedValues = {
      economySeats: flight.economySeats,
      businessSeats: flight.businessSeats,
      price: flight.price,
      departureDate: flight.departureDate,
      arrivalDate: flight.arrivalDate,
      departureTime: flight.departureTime,
      arrivalTime: flight.arrivalTime,
      departureAirportId: flight.departureAirportId,
      arrivalAirportId: flight.arrivalAirportId,
      airlineId: flight.airlineId,
    };
  }
  const { handleSubmit, errors, register } = useForm({
    defaultValues: preloadedValues,
  });

  const onSubmit = (data) => {
    console.log("before", data);
    data = { ...data, airlineId: airlineId }; //, flightId: flight.id };
    console.log("after", data);
    if (flight) {
      data = { ...data, flightId: flight.id };
      dispatch(updateFlight(data));
    } else dispatch(addFlight(data));
    history.push("/airlineflights");
  };

  if (!user.isAirline) return <Redirect to="/" />;
  const airportz = airports.map((airport) => (
    <option value={airport.id}>{airport.code}</option>
  ));

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          defaultValue="190"
          ref={register({ required: true })}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Departure Date</label>
        <input
          type="date"
          name="departureDate"
          className="form-control"
          defaultValue="2021-03-30"
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
          defaultValue="2021-03-30"
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
          defaultValue="23:00:00"
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
          defaultValue="23:00:00"
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
          defaultValue="50"
          ref={register({ required: true })}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Business Seats</label>
        <input
          type="number"
          name="businessSeats"
          className="form-control"
          defaultValue="15"
          ref={register({ required: true })}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Departure Airport</label>
        <select ref={register} name="departureAirportId">
          {airportz}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Arrival Airport</label>
        <select ref={register} name="arrivalAirportId">
          {airportz}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Flight
      </button>
    </form>
  );
};

export default FlightForm;
