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
  Book,
  FlightSharp,
} from "@material-ui/icons";
import { useSelector } from "react-redux";

const FlightItem = ({ flight, setId }) => {
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
        <ListItemText primary={airline.name} />
      </TableCell>

      <TableCell>
        <ListItemText primary={`${flight.price} `} secondary="BD" />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={` Arrival Airport:  ${arrivalAirport.name}`}
          secondary={` Departure Airport:  ${departureAirport.name}`}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={flight.departureTime}
          secondary={flight.arrivalTime}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={flight.departureDate}
          secondary={flight.arrivalDate}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={flight.economySeats}
          secondary={flight.businessSeats}
        />
      </TableCell>

      <TableCell>
        <IconButton onClick={() => setId((array) => [...array, flight.id])}>
          <Book />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default FlightItem;
