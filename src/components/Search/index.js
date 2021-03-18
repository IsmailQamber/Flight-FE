/* eslint-disable no-use-before-define */
import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { SearchRounded } from "@material-ui/icons";
import {
  Container,
  Grid,
  IconButton,
  Input,
  InputLabel,
  Select,
  Typography,
  Paper,
  MenuItem,
  FormControl,
} from "@material-ui/core";
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
    <MenuItem value={airport.id}>{airport.name}</MenuItem>
  ));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item order={1}>
              One Way
            </Grid>
            <Grid item order={2}>
              <AntSwitch
                item
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
              />
            </Grid>
            <Grid item order={3}>
              Round Trip
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label1">
                Departure Airport
              </InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                name="departureAirportId"
                onChange={(event) =>
                  arrport !== event.target.value
                    ? setDeptport(event.target.value)
                    : alert(
                        "Departure airport and Arrival airport can't be the same"
                      )
                }
              >
                {airportz}
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label2">
                Arrival Airport
              </InputLabel>
              <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select2"
                name="arrivalAirportId"
                onChange={(event) =>
                  deptport !== event.target.value
                    ? setArrport(event.target.value)
                    : alert(
                        "Departure airport and Arrival airport can't be the same"
                      )
                }
              >
                {airportz}
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
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
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
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
              <Grid>No Return</Grid>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid>Economy</Grid>
            <Grid>
              <AntSwitch
                checked={_switch.checked}
                onChange={handleSwitch}
                name="checked"
              />
            </Grid>
            <Grid>Business</Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Passengers
            <Input
              type="number"
              onChange={(event) => Setpssnumber(event.target.value)}
            ></Input>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link to={`/flights/${pssnumber}`}>
              <IconButton onClick={handleSubmit}>
                <SearchRounded />
              </IconButton>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Search;
