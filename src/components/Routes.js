import { Route, Switch } from "react-router";

//Routes
import FlightList from "./FlightList";
import Signup from "./Signup";
import Signin from "./Signin";
import UserProfile from "./UserProfile/UserProfile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights">
        <FlightList />
      </Route>
      <Route path="/user">
        <UserProfile />
      </Route>
      {/* // REVIEW: Remove {} if only one path */}
      <Route path={"/signup"}>
        <Signup />
      </Route>
      <Route path={"/signin"}>
        <Signin />
      </Route>
    </Switch>
  );
};

export default Routes;
