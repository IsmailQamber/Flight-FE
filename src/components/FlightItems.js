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
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { AirplanemodeActiveTwoTone, Book, Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 5000,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FlightItems = ({ flight }) => {
  const classes = useStyles();
  return (
    <div>
      <Table size="small">
        {/* <TableHead>
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
        </TableHead> */}
        <TableBody>
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
              <IconButton>
                <Book />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default FlightItems;
