import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import SimpleDrawer from "./Components/SimpleDrawer";
import Home from "./Components/Home";
import './Main.css'

const Main = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/drawer" component={SimpleDrawer} />
        <Redirect to="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
