/* eslint-disable no-use-before-define */
import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { SearchRounded } from "@material-ui/icons";
import {
  Grid,
  IconButton,
  Input,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { searchFlight } from "../../store/actions/flightActions";
import { AntSwitch, useStyles } from "./Styles";
import { Link, Redirect } from "react-router-dom";

const Search = () => {
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
    <Grid container>
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
          <InputLabel className="form-label">Departure Airport</InputLabel>
          <Select
            displayEmpty
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
        </div>
        <div className="form-group">
          <InputLabel className="form-label">Arrival Airport</InputLabel>
          <Select
            displayEmpty
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
        <Link to="/flights">
          <IconButton onClick={handleSubmit}>
            <SearchRounded />
          </IconButton>
        </Link>
      </div>
    </Grid>
  );
};
export default Search;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "BHR", year: 1994 },
  { title: "DXB", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
