import { List } from "@material-ui/core";
import { useSelector } from "react-redux";
import FlightItems from "./FlightItems";

const FlightList = () => {
  const flights = useSelector((state) => state.flightReducer.flights);
  console.log(flights);
  const listOfFlights = flights.map((flight) => (
    <FlightItems flight={flight} key={flight.id} />
  ));

  return <List>{listOfFlights}</List>;
};
export default FlightList;
