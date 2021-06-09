import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact } from "../pages/ContactPage";
import { Home } from "../pages/HomePage";
import { Portfolio } from "../pages/PortfolioPage";

export function Nav() {
  return (
    <Router>
      <div className="nav--Router">
        <ul className="nav--Router__ul">
          <li className="nav--Router__li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav--Router__li">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav--Router__li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
