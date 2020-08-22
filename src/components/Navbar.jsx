import React from "react";
import "./Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark blackColor text-light">
          <a
            className="navbar-brand mx-auto"
            href="https://mcaupybugs.github.io/"
          >
            McaupyBugs
          </a>
          <a className="navbar-brand mx-auto" href="#android">
            Android
          </a>
          <a className="navbar-brand mx-auto" href="#web">
            Web Dev.
          </a>
          <a className="navbar-brand mx-auto" href="#machine">
            Machine Learning
          </a>
          <a className="navbar-brand mx-auto" href="#competitive">
            Competitive Coding
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    );
  }
}
