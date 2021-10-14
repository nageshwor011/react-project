import React from "react";
import Header from "./Components/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import './Main.css'

const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Redirect to="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
