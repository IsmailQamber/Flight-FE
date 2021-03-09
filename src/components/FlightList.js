import { useSelector } from "react-redux";
import FlightItems from "./FlightItems";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { AirplanemodeActiveTwoTone, Book, Send } from "@material-ui/icons";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const FlightList = () => {
  const flights = useSelector((state) => state.flightReducer.flights);

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
          {flights.map((flight) => (
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
                <IconButton>
                  <Book />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default FlightList;
