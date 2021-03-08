import "./App.css";
import { Route, Switch } from "react-router";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <UserProfile />
        </Route>
        <Route path={"/signup"}>
          <Signup />
        </Route>
        <Route path={"/signin"}>
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
