import React from "react";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import NaveBar from "../Components/NavBar/NaveBar";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import routers from "../Routers";
export default function Layout() {
  let callForRouters = () =>
    routers.map((route, key) => (
      <Route
        key={key}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));
  return (
    <div>
      <NaveBar />

      <main>
        
        <Switch>{callForRouters()}</Switch>
      </main>
    </div>
  );
}
