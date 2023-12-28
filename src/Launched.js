import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import SignInSide from "./Components/SignIn/SignInSide";
import Dashboard from "./Components/Dashboard/Dashboard";

function Launcher() {
  return (
    <Router>
      <div className="container">
        <hr></hr>
        <Link to="/home">Home</Link> {" | "}
        <Link to="/db">Dashboard</Link> {" | "}
        <hr></hr>
        <Switch>
          <Route path="/" exact component={SignInSide} />
          <Route path="/home" exact component={SignInSide} />
          <Route path="/db" exact component={Dashboard} />
        </Switch>
        <hr></hr>
        <center>
          <strong>Made by TBP. 2023.</strong>
        </center>
      </div>
    </Router>
  );
}

export default Launcher;
