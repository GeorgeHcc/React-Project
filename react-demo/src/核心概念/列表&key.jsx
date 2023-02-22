import React, { Component } from "react";

export class NumberList extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      movies: [
        { name: "mov1", content: "this is mov1!", rate: 9.1, tag: 2019 },
        { name: "mov2", content: "this is mov2!", rate: 8.1, tag: 2019 },
        { name: "mov3", content: "this is mov3!", rate: 7.8, tag: 2019 },
        { name: "mov4", content: "this is mov4!", rate: 8.5, tag: 2019 },
      ],
    };
  }
  render() {
    const movList = this.state.movies.map((item, index) => (
      <Number movies={item} key={index} />
    ));
    return (
      <div>
        this is a list & key
        {movList}
      </div>
    );
  }
}

function Number(props) {
  return (
    <ul>
      <li>
        <div className="wrap">
          {props.movies.rate}
          <p className="title">{props.movies.name}</p>
          <div className="content">
            {props.movies.content}
            <img src="../asset/img/5.jpg" alt="" className="img" />
            <div className="footer">{props.movies.tag}</div>
          </div>
        </div>
      </li>
    </ul>
  );
}


export default NumberList;
