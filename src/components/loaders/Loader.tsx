import React from "react";
//css
import "./loader.css";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
