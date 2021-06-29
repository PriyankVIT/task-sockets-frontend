import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Data from "./components/data";
import Logs from "./components/logs";

function Welcome() {
  return (
    <BrowserRouter>
      <div>
        <Route path={"/"}>
          <Link to={"/data"}>Data</Link>
          <Link to={"/logs"}>Logs</Link>
        </Route>
        <Route path={"/data"} component={Data}></Route>
        <Route path={"/logs"} component={Logs}></Route>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
