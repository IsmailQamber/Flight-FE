import { Route, Switch } from "react-router";
import FlightList from "./Flight/FlightList";
import Signup from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import UserProfile from "./UserProfile";
import AirlineFlightList from "./AirlineFlight/AirlineFlightList";
import FlightForm from "./AirlineFlight/FlightForm";
import Search from "./Search";
import Passengers from "./Passengers";

const Routes = () => {
  return (
    <Switch>
      <Route path={["/airlineflights/new", "/airlineflights/:flightId/edit"]}>
        <FlightForm />
      </Route>
      <Route path="/passengers/:pssnumber/:flightId">
        <Passengers />
      </Route>
      <Route path="/airlineflights">
        <AirlineFlightList />
      </Route>
      <Route path="/flights/:pssnumber">
        <FlightList />
      </Route>
      <Route path="/user">
        <UserProfile />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <Search />
      </Route>
    </Switch>
  );
};

export default Routes;
