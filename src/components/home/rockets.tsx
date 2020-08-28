import React from "react";

//components
import RocketsCards from "./rocketsCards";

const Rockets = () => {
  return (
    <div>
      <div className="customContainer sectionPadding pb-24">
        <div className="pb-16">
          <div className="headerCurve absolute w-24 h-12 bg-indigo-200 "></div>
          <h1 className="text-white font-bold text-3xl  mx-4 ">Rockets</h1>
        </div>

        <RocketsCards />
      </div>
    </div>
  );
};

export default Rockets;
