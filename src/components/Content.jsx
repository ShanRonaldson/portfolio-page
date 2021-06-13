import React from "react";
import { Switch, Route, useLocation, NavLink } from "react-router-dom";

import { Contact } from "../pages/ContactPage";
import { Home } from "../pages/HomePage";
import { Portfolio } from "../pages/PortfolioPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export function Content() {
  let location = useLocation();

  return (
    <div className="nav">
      <div className="nav--Router ">
        <ul className="nav--Router__ul margin-top-small margin-bottom-small">
          <NavLink
            exact
            activeClassName="active"
            to="/home"
            className="nav--Router__Link"
          >
            Home
          </NavLink>

          <NavLink
            activeClassName="active"
            to="/portfolio"
            className="nav--Router__Link"
          >
            Portfolio
          </NavLink>

          <NavLink
            activeClassName="active"
            to="/contact"
            className="nav--Router__Link"
          >
            Contact
          </NavLink>
        </ul>
<hr />
        <div className="nav--Router__content">
          <TransitionGroup>
            <CSSTransition
              appear
              in
              timeout={400}
              classNames="slide"
              key={location.key}
            >
              <Switch location={location}>
                <Route path="/home" children={<Home />} />
                <Route path="/portfolio" children={<Portfolio />} />
                <Route path="/contact" children={<Contact />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
