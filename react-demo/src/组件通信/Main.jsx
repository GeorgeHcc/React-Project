import React, { Component } from "react";
import { NavBar } from "./NavBar";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Main",
      banners: ["React", "React Native", "Rollup", "Vite", "Fluter"],
    };
  }

  render() {
    let { name, banners } = this.state;
    return (
      <div
        className="main"
        style={{ backgroundColor: "gray", height: "300px", width: "700px" }}
      >
        <span style={{ color: "white" }}>this is {name}</span>
        <NavBar banners={banners} />
      </div>
    );
  }
}
