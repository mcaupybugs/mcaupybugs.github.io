import React from "react";
import "./PageBody.css";
var android = require("../assets/android.png");
var code = require("../assets/code.png");

export default class PageBody extends React.Component {
  render() {
    return (
      <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center blackColor text-light">
          <div className="position-absolute">
            <img width="400" height="400" src={android}></img>
          </div>
          <div
            style={{ right: "5%", top: "15%" }}
            className=" position-absolute"
          >
            <img width="350" height="330" src={code}></img>
          </div>
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5 text-light font-weight-normal">
              Vishal Yadav [Mcaupybugs]
            </h1>
            <p class="lead text-light font-weight-normal">
              <ul class="text-light list-group list-group-horizontal-xl">
                <li class="blackColor text-light list-group-item">
                  Web Developer
                </li>
                <li class="blackColor text-light list-group-item">
                  Android Developer
                </li>
                <li class="list-group-item blackColor text-light">
                  Machine Learning
                </li>
                <li class="list-group-item blackColor text-light">
                  Competitive Programming
                </li>
              </ul>
            </p>
            <p class="lead text-light font-weight-normal">A lot more to come</p>
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
