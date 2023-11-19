import React from "react";
import AnimatedLogo from "/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img className="logo" src={AnimatedLogo} alt="apple loader" />
    </div>
  );
};

export default Loader;
