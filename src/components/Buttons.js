import React from "react";
import '../styles/buttons.scss'

const Buttons = props => {
  return (
    <div className="buttons-wrapper">
      <button onClick={() => props.handleClick('prev')} className="button" disabled={props.index === 0}>Prev</button>
      <button onClick={() => props.handleClick('next')} className="button" disabled={props.index === props.length}>Next</button>
    </div>
  );
};

export default Buttons;
