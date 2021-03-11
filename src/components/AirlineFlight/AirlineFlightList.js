import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

const AirlineFlightList = () => {
  let [id, setId] = useState([]);
  const loading = useSelector((state) => state.loading);
  const flights = useSelector((state) => state.flightReducer.flights);
  const user = useSelector((state) => state.authReducer.user);
  const flightList = flights
    .map((flight) => (
      <AirlineFlightItem flight={flight} key={flight.id} setId={setId} />
    ))
    .find((_flight) => _flight.airlineId === user.id);
  console.log(flightList);

  if (loading) return <Loading />;

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
            <TableCell>Book</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{flightList}</TableBody>
      </Table>

      {user && user.isAirline === true && (
        <Link to="/flights/new">
          <IconButton>
            <Add />
          </IconButton>
        </Link>
      )}
    </>
  );
};
export default AirlineFlightList;
