import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact } from "../pages/ContactPage";
import { Home } from "../pages/HomePage";
import { Portfolio } from "../pages/PortfolioPage";

export function Nav() {
  return (
    <Router>
      <div className="nav">
        <div className="nav--Router">
          <ul className="nav--Router__ul">
            <li className="nav--Router__li">
              <Link to="/" className="nav--Router__Link">
                Home
              </Link>
            </li>
            <li className="nav--Router__li">
              <Link to="/portfolio" className="nav--Router__Link">
                Portfolio
              </Link>
            </li>
            <li className="nav--Router__li">
              <Link to="/contact" className="nav--Router__Link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

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
