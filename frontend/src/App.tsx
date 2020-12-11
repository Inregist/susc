import React from "react";
import "antd/dist/antd.css";
import "./styles/tailwind.css";
import "./styles/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Statistic from "./pages/Statistic";
import CheckCase from "./pages/CheckCase";
import Report from "./pages/Report";
import ReportSuccess from "./pages/ReportSuccess";
import SearchResult from "./pages/SearchResult";
import SearchResultCase from "./pages/SearchResultCase";
import SearchResultDetail from "./pages/SearchResultDetail";

const App = () => {
  return (
    <div style={{ background: "#fbfbfb" }} className="flex justify-center">
      <div
        className="w-full border-l border-r border-gray-400"
        style={{ maxWidth: "450px" }}
      >
        <Router>
          <Switch>
            <Route exact path="/report-case" component={Report} />
            <Route exact path="/report-case/success" component={ReportSuccess} />
            <Route exact path="/check-case" component={CheckCase} />
            <Route exact path="/statistic" component={Statistic} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/search-result" component={SearchResult} />
            <Route exact path="/search-case" component={SearchResultCase} />
            <Route exact path="/search-detail" component={SearchResultDetail} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
