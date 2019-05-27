import React from "react";
import data from "./data.js";
import Buttons from "./Buttons.js";
import Slider from "./Slider.js";

class AppTwo extends React.Component {
  state = {
    images: data,
    active: 9
  };

  handleClick = type => {
    // check which button was clicked and set "number" accordingly
    let number;
    if (type === "next") number = 1;
    else number = -1;

    // const newImages = [...this.state.images]; // why is it not working?

    // create a copy of data array
    // set active=true for specific image (pointed by "active")
    const newImages = [...data].map( (current,index) => {
      current.active = false;
      if(index === this.state.active+number) current.active=true;
      return current;
    });

    // update the state with newActive and new Images array
    this.setState(prevState => ({
      active: prevState.active + number,
      images: newImages
    }));
  };

  render() {
    return (
      <div>
        <Buttons
          handleClick={this.handleClick}
          index={this.state.active}
          length={this.state.images.length - 1}
        />

        <Slider items={this.state.images} active={this.state.active} />
      </div>
    );
  }
}

export default AppTwo;
