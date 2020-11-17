import React from "react";
import "./styles/style.css";
import "./styles/tailwind.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import UpdateCase from "./pages/UpdateCase";
import UpdateMediation from "./pages/UpdateMediation";
import AddTime from "./pages/AddTime";
import AddResult from "./pages/AddResult";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/update-case" component={UpdateCase} />
          <Route exact path="/update-mediation" component={UpdateMediation} />
          <Route exact path="/add-time" component={AddTime} />
          <Route exact path="/add-result" component={AddResult} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
