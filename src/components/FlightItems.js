import {
  IconButton,
  ListItemText,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { AirplanemodeActiveTwoTone, Book } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 5000,
    backgroundColor: theme.palette.background.paper,
  },
}));


// REVIEW: Shold be called FlightItem 

const FlightItems = ({ flight, setId }) => {

  const classes = useStyles();
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
        <ListItemText primary={flight.Airline} />
      </TableCell>

      <TableCell>
        <ListItemText primary={`${flight.price} `} secondary="BD" />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={` ${flight.departureAirport}`}
          secondary={` ${flight.arrivalAirport}`}
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
export default FlightItems;
