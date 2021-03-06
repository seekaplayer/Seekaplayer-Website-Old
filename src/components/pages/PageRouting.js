import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Twitch from "./twitch/Twitch";
import Contact from "./contact/Contact";

const PageRouting = () => {
  return (
    <div className="reactPage">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/twitch">
          <Twitch />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};
export default PageRouting;
