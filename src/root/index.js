import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../app";

const Root = ({ store }) => (
    <Router basename="/web">
      <Route path="/" component={App} />
    </Router>
);

export default Root;
