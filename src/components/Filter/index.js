import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  Select,
} from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import FlightItem from "../Flight/FlightItem";
import FlightList from "../Flight/FlightList";
import { useStyles } from "./Styles";

const Filter = ({
  setPrice,
  setAirline,
  setDeptm,
  flightList,
  price,
  deptm,
  airline,
}) => {
  const classes = useStyles();
  const airlines = useSelector((state) => state.airlineReducer.airlines);
  const flights = useSelector((state) => state.flightReducer.flights);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  let airlinenames = airlines.map((airline) => airline.name);

  const airlinelist = airlines.map((airline) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={airline.name}
          onChange={handleChange}
          name={airline.name}
        />
      }
      label={airline.name}
    />
  ));

  const airlineIDS = airlines.map((airline) => airline.id);
  const [state, setState] = useState({ airlinenames: true });
  console.log(state);
  <FlightList state={state} />;
  airlinenames = state;
  // const filteredList = flights
  //   .filter(
  //     (flight) =>
  //       flight.price <= price &&
  //       flight.departureTime >= deptm &&
  //       flight.airlineId === +airline
  //   )
  //   .map((flight) => <FlightItem key={flight.id} flight={flight} />);
  // console.log(filteredList);
  // <FlightList filteredList={filteredList} />;
  return (
    <Grid container className={classes.content}>
      <Grid className={classes.root}>
        <InputLabel>Price range:</InputLabel>
        <input
          onChange={(event) => setPrice(event.target.value)}
          type="range"
          class="form-range"
          id="customRange2"
          min="0"
          max="200"
          defaultValue={200}
        />
      </Grid>
      {/* <Grid className={classes.root}>
        <InputLabel>Select Airline: </InputLabel>
        <Select
          defaultValue=""
          displayEmpty
          onChange={(event) => setAirline(event.target.value)}
        >
          {airlinelist}
        </Select>
      </Grid> */}
      <Grid>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>{airlinelist}</FormGroup>
        </FormControl>
      </Grid>

      <Grid className={classes.root}>
        <InputLabel>Departure Time (after):</InputLabel>
        <input
          defaultValue="00:00"
          type="time"
          onChange={(event) => setDeptm(event.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
