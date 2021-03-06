import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// Review: remove unused imports

// Styles
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

// components
import Loading from "../Loading";
import AirlineFlightItem from "./AirlineFlightItem";

//Review: remove unused imports
import UserProfile from "../UserProfile";
import { fetchFlights } from "../../store/actions/flightActions";

const AirlineFlightList = () => {
  let [id, setId] = useState([]);
  const loading = useSelector((state) => state.loading);
  // Create controller in the BE to grab only related flights
  const flights = useSelector((state) => state.flightReducer.flights);
  const airlines = useSelector((state) => state.airlineReducer.airlines);
  const user = useSelector((state) => state.authReducer.user);
  const airline = airlines.find((airline) => airline.userId === user.id);

  let airlineId = null;

  if (airline) {
    airlineId = airline.id;
  } else console.log("airline is not found");

  if (loading) return <Loading />;
  const flightList = flights
    .filter((_flight) => _flight.airlineId === airlineId)
    .map((flight) => (
      <AirlineFlightItem
        flight={flight}
        key={flight.id}
        setId={setId}
        airline={airline}
      />
    ));

  if (!user.isAirline) return <Redirect to="/flights" />;

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Airline</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Airport</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Seats</TableCell>
            {/* <TableCell>Book</TableCell> */}
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{flightList}</TableBody>
      </Table>

      {user && user.isAirline === true && (
        <Link to="/airlineflights/new">
          <IconButton>
            <Add />
          </IconButton>
        </Link>
      )}
    </>
  );
};
export default AirlineFlightList;
