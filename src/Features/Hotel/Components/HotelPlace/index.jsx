import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListPlaces from "./Components/ListPlaces";
import "./style.css";

function HotelPlace(props) {
  
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={ListPlaces} exact/>

      </Switch>
    </div>
  );
}

export default HotelPlace;
