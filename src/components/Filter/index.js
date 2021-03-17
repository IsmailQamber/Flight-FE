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

  const airlinesArray = [];
  airlines.map((airline) => {
    airlinesArray.push(airline.name);
  });
  console.log(
    "🚀 ~ file: index.js ~ line 34 ~ airlinesArray ~ airlinesArray",
    airlinesArray
  );

  let airlinesNames = {};
  airlinesArray.forEach((airline) => {
    console.log(
      "🚀 ~ file: index.js ~ line 42 ~ airlinesArray.forEach ~ airline",
      airline
    );
    airlinesNames[airline.name] = true;
  });

  console.log("🚀 ~ file: index.js ~ line 37 ~ airlinesNames", airlinesNames);

  let airlinesNamesOnly = {};
  airlinesArray.forEach((airline) => {
    airlinesNamesOnly[airline.name] = null;
  });
  console.log(
    "🚀 ~ file: index.js ~ line 48 ~ airlinesArray.forEach ~ airlinesNamesOnly",
    airlinesNamesOnly
  );

  const [checkbox, setCheckbox] = useState(airlinesNames);
  console.log("🚀 ~ file: index.js ~ line 52 ~ checkbox", checkbox);

  const handleChange = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  airlinesNamesOnly = checkbox;

  const airlinesCheckboxes = airlines.map((airline) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={airlinesNamesOnly}
          onChange={handleChange}
          name={airline.name}
        />
      }
      label={airline.name}
    />
  ));
  // <FlightList state={state} />;

  const filteredList = flights
    .filter(
      (flight) => flight.price <= price && flight.departureTime >= deptm
      // && flight.airlineId === +airline
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

      <Grid className={classes.root}>
        <FormGroup>{airlinesCheckboxes}</FormGroup>
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
