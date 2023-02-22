import React, { Component, useState } from "react";

export class CtrlComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        title: "CtrolInput",
      },
    };
  }

  render() {
    const { title } = this.state.input;
    return (
      <div>
        <p>CtrlComponent</p>
        <CtrlInput title={title} />
        <NormalInpult/>
      </div>
    );
  }
}

//受控组件input 
function CtrlInput(props) {
  const [value, setValue] = useState("this is a Control Input!");
  function onChange(event){
        setValue(event.target.value)
    };
  return (
    <div className="input">
      {props.title}
      <input
        type="text"          
        value={value}
        onChange={onChange}
      />
      <div className="show">
        <span>{value}</span>
      </div>
    </div>
  );
}

//
function NormalInpult(){
    return(
       <div className="normal">
        <span>this is a normal input</span>
         <input type="text" />
       </div>
    )
}
export default CtrlComponent;
