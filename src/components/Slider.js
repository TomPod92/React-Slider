import React from "react";
import "../styles/slider.scss";

const Slider = props => {
  // array of images and style for each one which includes its background image
  const items = props.items.map(current => {
    const style = { backgroundImage: "url(" + current.url + ")" };

    return <div className={current.active ? "item item--active" : "item"} key={current.id} style={style} />;
  });

  // style for items-container which calculates how much sould it be translated
  const translate = {
    transform: `translateX(-${props.active * 30}rem)`
  };

  return (
    <div className="slider">
      <div className="items-wrapper" style={translate}>
        {items}
      </div>
    <div className="left-shadow"></div>
    <div className="right-shadow"></div>
    </div>
  );
};

export default Slider;
