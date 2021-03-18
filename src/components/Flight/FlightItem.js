import React from "react";

// Styles
import {
  IconButton,
  ListItemText,
  TableCell,
  TableRow,
} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {
  AirplanemodeActiveTwoTone,
  AirportShuttleTwoTone,
  Book,
  FlightSharp,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { booking } from "../../store/actions/bookingActions";
import { Link, useParams } from "react-router-dom";

const FlightItem = ({ flight, setId }) => {
  const { pssnumber } = useParams();
  const dispatch = useDispatch();
  const airlines = useSelector((state) => state.airlineReducer.airlines);
  const airports = useSelector((state) => state.airportReducer.airports);

  //Finding the airline name for each flight
  const airline = airlines.find((airline) => airline.id === flight.airlineId);
  const arrivalAirportId = flight.arrivalAirportId;
  const departureAirporId = flight.departureAirportId;

  //finding the arrivalAirport for this flight
  const arrivalAirport = airports.find(
    (airport) => airport.id === arrivalAirportId
  );

  //finding the departureAirport for this flight
  const departureAirport = airports.find(
    (airport) => airport.id === departureAirporId
  );

  const handleBook = () => {
    const bookFlight = { flightId: flight.id };
    console.log("handlebook", bookFlight);
    dispatch(booking(bookFlight));
  };
  const flightId = flight.id;
  return (
    <TableRow>
      <TableCell>
        <ListItemAvatar>
          <Avatar>
            <AirplanemodeActiveTwoTone />
          </Avatar>
        </ListItemAvatar>
      </TableCell>

      <TableCell>
        {airline && <ListItemText primary={airline.name} />}
      </TableCell>

      <TableCell>
        <ListItemText primary={`${flight.price} `} secondary="BD" />
      </TableCell>

      <TableCell>
        {airports && (
          <ListItemText
            secondary={` Arrival Airport:  ${arrivalAirport.name}`}
            primary={` Departure Airport:  ${departureAirport.name}`}
          />
        )}
      </TableCell>

      <TableCell>
        <ListItemText
          primary={` Departure Time:  ${flight.departureTime}`}
          secondary={` Arrival Time:  ${flight.arrivalTime}`}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={` Departure Date:  ${flight.departureDate}`}
          secondary={` Arrival Date:  ${flight.arrivalDate}`}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={` Economy Seats:  ${flight.economySeats}`}
          secondary={` Business Seats:  ${flight.businessSeats}`}
        />
      </TableCell>

      <TableCell>
        <Link to={`/passengers/${pssnumber}/${flightId}`}>
          <IconButton onClick={handleBook}>
            {/* onClick={() => setId((array) => [...array, flight.id])}> */}
            <Book />
          </IconButton>
        </Link>
      </TableCell>
    </TableRow>
  );
};
export default FlightItem;
