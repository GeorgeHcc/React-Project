import React, { Component } from "react";
import propTypes from "prop-types";
export class NavBar extends Component {
  render() {
    const { banners, title } = this.props;
    
    return (
      <ul>
        {banners.map((item) => (
          <li title={title}>{item}</li>
        ))}
      </ul>
      
    );
  }
}
NavBar.propTypes = {
  banners: propTypes.array.isRequired,
};

NavBar.defaultProps = {
    title:'banners'
};
