import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount, Airline) {
  return { id, date, name, shipTo, paymentMethod, amount, Airline };
}

//Dummy data
const rows = [
  createData(0, "16 Mar, 2019", "BHR", "Elvis Presley", "1", 300.44),
  createData(1, "16 Mar, 2019", "London, UK", "Paul McCartney", "7", 866.99),
  createData(2, "16 Mar, 2019", "Boston, MA", "Tom Scholz", "3", 100.81),
  createData(3, "16 Mar, 2019", "DXB", "Michael Jackson", "2", 654.39),
  createData(
    4,
    "15 Mar, 2019",
    "Long Branch, NJ",
    "Bruce Springsteen",
    "5",
    200.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Flights</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Airline</TableCell>
            <TableCell>Seats booked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* REVIEW: Save this is in a variable and call it here */}
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}
