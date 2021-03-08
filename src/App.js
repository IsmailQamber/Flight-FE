import "./App.css";
import { Route, Switch } from "react-router";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import UserProfile from "./components/UserProfile/UserProfile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/user">
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
