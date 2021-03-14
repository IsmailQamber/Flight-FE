import { Route, Switch } from "react-router";

//Routes
import FlightList from "./Flight/FlightList";

import Signup from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import UserProfile from "./UserProfile";
import AirlineFlightList from "./AirlineFlight/AirlineFlightList";
import FlightForm from "./AirlineFlight/FlightForm";
import Search from "./Search";

const Routes = () => {
  return (
    <Switch>
      <Route path={["/airlineflights/new", "/airlineflights/:flightId/edit"]}>
        <FlightForm />
      </Route>
      <Route path="/airlineflights">
        <AirlineFlightList />
      </Route>
      <Route path="/flights">
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
      <Route>
        <Search />
      </Route>
    </Switch>
  );
};

export default Routes;
