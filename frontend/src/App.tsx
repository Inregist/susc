import React from "react";
import "./styles/tailwind.css";
import "./styles/style.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Statistic from "./pages/Statistic";
import CheckCase from "./pages/CheckCase";
import Report from "./pages/Report";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/report-case" component={Report} />
        <Route exact path="/check-case" component={CheckCase} />
        <Route exact path="/statistic" component={Statistic} />
        <Route exact path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
