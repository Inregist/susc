import React from "react";
import "./styles/style.css";
import "./styles/tailwind.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import UpdateCase from "./pages/UpdateCase";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/UpdateCase" component={UpdateCase} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
