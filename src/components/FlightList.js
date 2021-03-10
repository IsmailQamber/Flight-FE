import { useSelector } from "react-redux";
import FlightItems from "./FlightItems";
import {
  IconButton,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Add, AirplanemodeActiveTwoTone, Book } from "@material-ui/icons";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useState } from "react";

const FlightList = () => {
  let [id, setId] = useState([]);
  console.log(id);
  const flights = useSelector((state) => state.flightReducer.flights);
  const user = useSelector((state) => state.authReducer.user);
  const flightList = flights.map((flight) => (
    <FlightItems flight={flight} key={flight.id} setId={setId} />
  ));
  return (
    <div>
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
        <TableBody>
          {flightList}
          {/* {flights.map((flight) => (
            <TableRow key={flight.id}>
              <TableCell>
                <ListItemAvatar>
                  <Avatar>
                    <AirplanemodeActiveTwoTone />
                  </Avatar>
                </ListItemAvatar>
              </TableCell>
              <TableCell>
                <ListItemText primary={flight.Airline} />
              </TableCell>
              <TableCell>
                <ListItemText primary={`${flight.price} `} secondary="BD" />
              </TableCell>
              <TableCell>
                <ListItemText
                  primary={`Departure: ${flight.departureAirport}`}
                  secondary={`Arrival: ${flight.arrivalAirport}`}
                />
              </TableCell>
              <TableCell>
                <ListItemText
                  primary={`Departure: ${flight.departureTime}`}
                  secondary={`Arrival: ${flight.arrivalTime}`}
                />
              </TableCell>
              <TableCell>
                <ListItemText
                  primary={`Departure: ${flight.departureDate}`}
                  secondary={`Arrival: ${flight.arrivalDate}`}
                />
              </TableCell>
              <TableCell>
                <ListItemText
                  primary={`Economy: ${flight.economySeats}`}
                  secondary={`Business: ${flight.businessSeats}`}
                />
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => setId((array) => [...array, flight.id])}
                >
                  <Book />
                </IconButton>
              </TableCell>
            // </TableRow>
          ))} */}
        </TableBody>
      </Table>

      {/* REVIEW: This condition should be for the whole component.... I think.... */}
      {user && user.isAirline === true ? (
        <Link to="/flights/new">
          <IconButton>
            <Add />
          </IconButton>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
export default FlightList;
