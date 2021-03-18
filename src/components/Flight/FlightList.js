import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import UserProfile from "../UserProfile";
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
import FlightItem from "./FlightItem";
import Loading from "../Loading";
import { fetchFlights } from "../../store/actions/flightActions";
import Search from "../Search";
import Filter from "../Filter";

const FlightList = ({ filteredList, state }) => {
  let [price, setPrice] = useState(200000000000000000);
  let [airline, setAirline] = useState("");
  let [deptm, setDeptm] = useState("00:00");
  console.log(airline);
  let [depdt, setDepdt] = useState();
  let [arrdt, setArrdt] = useState();
  let [id, setId] = useState([]);
  const loading = useSelector((state) => state.loading);
  const flights = useSelector((state) => state.flightReducer.flights);
  const user = useSelector((state) => state.authReducer.user);

  if (user.isAirline) return <Redirect to="/airlineflights" />;

  const flightList = flights
    // .filter((flight) => flight)
    .filter(
      (flight) => flight.price <= price && flight.departureTime >= deptm
      // flight.airlineId === +state
    )

    .map((flight) => (
      <FlightItem flight={flight} key={flight.id} setId={setId} />
    ));
  <UserProfile flightId={id} />;

  if (loading) return <Loading />;

  return (
    <>
      {/* <Search setDepdt={setDepdt} setArrdt={setArrdt} /> */}
      <Filter
        setPrice={setPrice}
        setAirline={setAirline}
        setDeptm={setDeptm}
        flightList={flightList}
        airline={airline}
        deptm={deptm}
        price={price}
      />
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
        {/* <TableBody>{filteredList}</TableBody> */}
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
export default FlightList;
