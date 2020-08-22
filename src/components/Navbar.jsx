import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          style={{ backgroundColor: "black" }}
          className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
          <a className="navbar-brand mx-auto" href="#">
            Vishal Yadav
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
