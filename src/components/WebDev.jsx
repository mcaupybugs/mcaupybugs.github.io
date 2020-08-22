import React from "react";
var chicken = require("../assets/chicken.png");
var marsRover = require("../assets/marsRover.png");

export default class WebDev extends React.Component {
  render() {
    return (
      <div>
        <div
          id="web"
          class="position-relative p-3 p-md-5 m-md-3 text-center blackColor text-light"
        >
          <div className="position-absolute">
            <img src={chicken}></img>
          </div>
          <div
            style={{ right: "5%", top: "9%" }}
            className=" position-absolute"
          >
            <img src={marsRover}></img>
          </div>
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5 text-light font-weight-normal">
              Web Development
            </h1>
            <p class="lead text-light font-weight-normal">
              <ul class="text-light justify-content-center list-group list-group-horizontal-xl">
                <li class="blackColor text-light list-group-item">
                  Restaurant App
                  <div class="text-light">
                    <a
                      className="btn txt-light"
                      href="https://taimur-ka-dhaba.herokuapp.com/  "
                    >
                      <span class="text-light">Visit it here!</span>
                    </a>
                  </div>
                </li>
                <li class="blackColor text-light list-group-item">
                  Mars Rover
                  <div>
                    <a
                      className="btn txt-light"
                      href="https://mbugs.herokuapp.com/"
                    >
                      <span class="text-light">Visit it here!</span>
                    </a>
                  </div>
                </li>
              </ul>
            </p>
            <p class="lead text-light font-weight-normal">
              <ul class="text-light justify-content-center list-group list-group-horizontal-xl">
                <li class="blackColor text-light list-group-item">
                  Restaurant App made with Node.JS along with MongoDB database.
                  Notifies on correct order using SendGrid API and has password
                  authentication using passport!!
                </li>
                <li class="blackColor text-light list-group-item">
                  Mars Rover was a microsoft project made in a team of two along
                  with Mavneet Kaur. We were able to visualise shortest path
                  algorithm that a rover will have to apply to find shortest
                  path. We took care of many obstacles on the way. Have a look
                  and try yourself!
                </li>
              </ul>
            </p>
            <p class="lead text-light font-weight-normal">
              More projects can be found on my github page!!
            </p>
            <a
              class="btn btn-light btn-outline-secondary"
              href="https://github.com/mcaupybugs"
            >
              Github
            </a>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
