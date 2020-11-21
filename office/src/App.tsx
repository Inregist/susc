import React from "react";
import "antd/dist/antd.css";
import "./styles/tailwind.css";
import "./styles/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import AddTime from "./pages/AddTime";
import AddResult from "./pages/AddResult";

function App() {
  return (
    <div style={{ background: "#fbfbfb" }}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/add-time" component={AddTime} />
          <Route exact path="/add-result" component={AddResult} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
