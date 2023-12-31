import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import SignInSide from "./Components/SignIn/SignInSide";
import Dashboard from "./Components/Dashboard/Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import AccountDetails from "./Components/AccountDetails";
import LoanAppContainer from "./Components/ApplicationsList";
import * as React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Launcher() {
  return (
    <Router>
      <div className="container">
        <hr></hr>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" to="/">
            Home
          </Link>
          <Typography color="text.primary">Dashboard</Typography>
        </Breadcrumbs>
        <hr></hr>
        <Switch>
          <Route path="/" exact component={SignInSide} />
          <Route path="/home" exact component={SignInSide} />
          <Route path="/db" exact component={Dashboard} />
          <Route path="/accdet" exact component={AccountDetails} />
          <Route path="/appdet" exaxt component={LoanAppContainer}></Route>
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
