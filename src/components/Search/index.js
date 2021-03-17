/* eslint-disable no-use-before-define */
import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { SearchRounded } from "@material-ui/icons";
import { Grid, IconButton, Input, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { searchFlight } from "../../store/actions/flightActions";
import { AntSwitch, useStyles } from "./Styles";
import Passengers from "../Passengers";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const dispatch = useDispatch();
  const [depdt, setDepdt] = useState(moment().format("YYYY-MM-DD"));
  const [arrdt, setArrdt] = useState();
  const [arrport, setArrport] = useState(1);
  const [deptport, setDeptport] = useState(2);
  const [_switch, setSwitch] = useState({
    checked: false,
  });
  const [seatType, setSeatType] = useState("Economy");
  const [pssnumber, Setpssnumber] = useState(5);

  let data = {
    departureDate: moment(depdt).format("YYYY-MM-DD"),
    // arrivalDate: moment(arrdt).format("YYYY-MM-DD"),
    departureAirportId: +deptport,
    arrivalAirportId: +arrport,
  };

  const handleSubmit = () => {
    //Checking seatType and adding it to data object
    if (seatType === "Economy") {
      data = { ...data, economySeats: +pssnumber };
    } else {
      data = { ...data, businessSeats: +pssnumber };
    }
    //Checking of the flight is oneWay or a roundTrip
    if (state.checkedC === true) {
      data = { ...data, arrivalDate: moment(arrdt).format("YYYY-MM-DD") };
    }
    console.log("search component: ", data);
    dispatch(searchFlight(data));
    // history.push("/flights");
  };

  const handleSwitch = (event) => {
    setSwitch({ ..._switch, [event.target.name]: event.target.checked });
    if (_switch.checked === true) {
      setSeatType("Economy");
    } else setSeatType("Business");
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };
  const airports = useSelector((state) => state.airportReducer.airports);
  const airportz = airports.map((airport) => (
    <option value={airport.id}>{airport.name}</option>
  ));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>One Way</Grid>
          <Grid item>
            <AntSwitch
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          </Grid>
          <Grid item>Round Trip</Grid>
        </Grid>
      </Typography>
      <div className="form-group">
        <label className="form-label">Departure Airport</label>
        <select
          name="departureAirportId"
          onChange={(event) =>
            arrport !== event.target.value
              ? setDeptport(event.target.value)
              : alert("Departure airport and Arrival airport can't be the same")
          }
        >
          {airportz}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Arrival Airport</label>
        <select
          name="arrivalAirportId"
          onChange={(event) =>
            deptport !== event.target.value
              ? setArrport(event.target.value)
              : alert("Departure airport and Arrival airport can't be the same")
          }
        >
          {airportz}
        </select>
      </div>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Economy</Grid>
          <Grid item>
            <AntSwitch
              checked={_switch.checked}
              onChange={handleSwitch}
              name="checked"
            />
          </Grid>
          <Grid item>Business</Grid>
        </Grid>
      </Typography>
      <Input
        type="number"
        onChange={(event) => Setpssnumber(event.target.value)}
      ></Input>
      <TextField
        onChange={(event) => setDepdt(moment(event.target.value))}
        id="date"
        label="Departure Date"
        type="date"
        defaultValue={depdt}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />{" "}
      {state.checkedC ? (
        <TextField
          onChange={(event) =>
            depdt < moment(event.target.value)
              ? setArrdt(moment(event.target.value))
              : alert("Return Date can't be before the Departure Date")
          }
          className={classes.taree5}
          id="date"
          label="Return Date"
          type="date"
          defaultValue={arrdt}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      ) : (
        ""
      )}
      <Link to={`/flights/${pssnumber}`}>
        <IconButton onClick={handleSubmit}>
          <SearchRounded />
        </IconButton>
      </Link>
    </div>
  );
};
export default Search;
