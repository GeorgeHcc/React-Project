import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    const { banners } = this.props;
    return (
      <ul>
        {banners.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}
