import React from "react";
import "./PageBody.css";

export default class PageBody extends React.Component {
  render() {
    return (
      <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center blackColor text-light">
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
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>
    );
  }
}
