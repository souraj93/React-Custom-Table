import React, { Component } from "react";
import { Switch,Redirect } from "react-router-dom";

import "./style.css";

import { routes } from "../routes/index";
import RouteWithSubRoutes from "../routes/routeWithSubRoutes";

import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    const routesDom = routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ));
    let css = "app-header";

    return (
      <div className="App" style={{
        padding:"20px"
      }}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Switch>
              {routesDom}
              <Redirect
                to={{
                  pathname: "/table"
                }}
              />
            </Switch>
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default App;