import React from "react";
import Navbar from "../components/Navbar";
import PageBody from "../components/PageBody";
import Android from "../components/Android";
import WebDev from "../components/WebDev";

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <PageBody></PageBody>
        <Android></Android>
        <WebDev></WebDev>
      </div>
    );
  }
}
