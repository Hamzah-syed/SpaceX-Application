import React from "react";

const LandingSec = () => {
  return (
    <div>
      <div className="landingSec">
        <div
          className="customContainer  w-full  flex items-center"
          style={{ paddingTop: "30px", height: "350px" }}
        >
          <div className="grid  grid-cols-1">
            <div className="py-3">
              <h1 className="font-semibold text-5xl text-white text-left">
                Launches
              </h1>
              <div className="w-32 h-2 bg-indigo-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSec;
