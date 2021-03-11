import { Route, Switch } from "react-router";

//Routes
import FlightList from "./Flight/FlightList";
import FlightForm from "./Flight/FlightForm";
import Signup from "./Authentication/Signup";
import Signin from "./Authentication/Signin";
import UserProfile from "./UserProfile";
import AirlineFlightList from "./AirlineFlight/AirlineFlightList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights/new">
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
    </Switch>
  );
};

export default Routes;
