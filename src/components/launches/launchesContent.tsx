import React from "react";
import LaunchesCards from "./launchesCards";

const LaunchesContent = () => {
  return (
    <div>
      <div className="customContainer sectionPadding">
        <div className="grid grid-cols-12  gap-4">
          <div className="grid grid-cols-12 col-span-8 gap-4">
            <LaunchesCards />
          </div>
        </div>
        <div className="col-span-4 gap-2">
          <div className="bg-gray-900">
            <h1>hamzah</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchesContent;