import "./App.css";
import { Route, Switch } from "react-router";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <Switch>
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
