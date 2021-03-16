import { Grid, InputLabel, Select } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStyles } from "./Styles";

const Filter = ({ setPrice, setAirline, setDeptm }) => {
  const classes = useStyles();
  const airlines = useSelector((state) => state.airlineReducer.airlines);
  const airlinelist = airlines.map((airline) => (
    <option value={airline.id}>{airline.name}</option>
  ));

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
        />
      </Grid>
      <Grid className={classes.root}>
        <InputLabel>Select Airline: </InputLabel>
        <Select
          displayEmpty
          onChange={(event) => setAirline(event.target.value)}
        >
          {airlinelist}
        </Select>
      </Grid>

      <Grid className={classes.root}>
        <InputLabel>Departure Time (after):</InputLabel>
        <input type="time" onChange={(event) => setDeptm(event.target.value)} />
      </Grid>
    </Grid>
  );
};

export default Filter;
