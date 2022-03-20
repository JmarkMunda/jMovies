import React from "react";
import Slider from "./Slider";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="slider-container">
          <Slider />
        </div>
      </div>
    </header>
  );
};

export default Header;
