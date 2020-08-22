import React from "react";
import "./Android.css";
var bunkit = require("../assets/bunkit.webp");
var CodingHub = require("../assets/codinghub.webp");

export default class Android extends React.Component {
  render() {
    return (
      <div>
        <div
          id="android"
          class="position-relative p-3 p-md-5 m-md-3 text-center blackColor text-light"
        >
          <div className="position-absolute">
            <img height="600" src={CodingHub}></img>
          </div>
          <div
            style={{ right: "5%", top: "9%" }}
            className=" position-absolute"
          >
            <img height="600" src={bunkit}></img>
          </div>
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5 text-light font-weight-normal">
              Android Apps{" "}
            </h1>
            <p class="lead text-light font-weight-normal">
              <ul class="text-light justify-content-center list-group list-group-horizontal-xl">
                <li class="blackColor text-light list-group-item">
                  CodingHub - Contest Notifier
                  <div>
                    <a
                      className="btn txt-light"
                      href="https://play.google.com/store/apps/details?id=com.mcaupybugs.codinghubb"
                    >
                      Get it here!
                    </a>
                  </div>
                </li>
                <li class="blackColor text-light list-group-item">
                  BunkIT - Attendance Manager
                  <div>
                    <a
                      className="btn txt-light"
                      href="https://play.google.com/store/apps/details?id=com.mcaupybugs.bunkit"
                    >
                      Get it here!
                    </a>
                  </div>
                </li>
              </ul>
            </p>
            <p class="lead text-light font-weight-normal">
              <ul class="text-light justify-content-center list-group list-group-horizontal-xl">
                <li class="blackColor text-light list-group-item">
                  CodingHub is a contest notifier app that notifies you about
                  upcoming contests and you can also set a reminder a contest
                  before it begins. The app supports multiple websites including
                  codechef,codeforces and even google.
                </li>
                <li class="blackColor text-light list-group-item">
                  BunkIT - Attendance Manager is an app that will record you
                  attendance, notify you when your attendance is low and even
                  record your assignments for you so that you never miss a
                  deadline. With calendar mode, history mode and online sync
                  available this app is one place for all academic help!!
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
