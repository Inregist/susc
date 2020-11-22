import React from "react";
import "antd/dist/antd.css";
import "./styles/tailwind.css";
import "./styles/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Main from "./pages/Main";
import DataProvider from "./DataContext";

function App() {
  return (
    <div style={{ background: "#fbfbfb" }}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LogIn} />

          <DataProvider>
            <Route path="/" component={Main} />
          </DataProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
