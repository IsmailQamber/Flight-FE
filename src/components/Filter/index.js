import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
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

  let airlinesNames = {};
  airlines.forEach((airline) => {
    airlinesNames[airline.id] = true;
  });

  const [checkbox, setCheckbox] = useState(airlinesNames);
  console.log("🚀 ~ file: index.js ~ line 52 ~ checkbox", checkbox);

  const handleChange = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  const airlinesCheckboxes = airlines.map((airline) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={checkbox[airline.id]}
          onChange={handleChange}
          name={airline.id}
        />
      }
      label={airline.name}
    />
  ));
  // <FlightList state={state} />;

  const filteredList = flights
    .filter(
      (flight) =>
        flight.price <= price &&
        flight.departureTime >= deptm &&
        checkbox[flight.airlineId]
    )
    .map((flight) => <FlightItem key={flight.id} flight={flight} />);
  console.log(filteredList);
  <FlightList filteredList={filteredList} />;

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
        <FormGroup>{airlinesCheckboxes}</FormGroup>
      </Grid> */}

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
