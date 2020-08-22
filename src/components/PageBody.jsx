import React from "react";
import "./PageBody.css";

export default class PageBody extends React.Component {
  render() {
    return (
      <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-black">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5 text-light font-weight-normal">
              Vishal Yadav [Mcaupybugs]
            </h1>
            <p class="lead text-light font-weight-normal">
              Web Developer , Android Developer, Machine Learning Enthusiast ...
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
