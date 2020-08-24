import React from "react";

const MissionLoader = () => {
  return (
    <div className="">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-4">
          <div className="h-10 bg-gray-800 rounded-sm w-32"></div>
          <div className="space-y-2 pt-8 pb-2">
            <div className="h-4 bg-gray-800 rounded"></div>
            <div className="h-4 bg-gray-800 rounded "></div>
            <div className="h-4 bg-gray-800 rounded "></div>
            <div className="h-4 bg-gray-800 rounded w-8/12"></div>
            <div className="flex  pt-1 pb-10">
              <div className="pr-2 rounded-full  cursor-pointer">
                <div className="h-4 bg-gray-800 rounded w-16"></div>
                {/* <img src={Twitter} alt="twitter icon" /> */}
              </div>
              <div className=" pr-2 rounded-full  cursor-pointer">
                <div className="h-4 bg-gray-800 rounded w-16"></div>
                {/* <img src={Wikipidia} alt="wikipidia icon" /> */}
              </div>
            </div>
            <div className="h-8 bg-gray-800 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionLoader;
