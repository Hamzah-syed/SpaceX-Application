import React from "react";
import LaunchesCards from "./launchesCards";
import BlogSidebar from "../Blogsidebar/index";

const LaunchesContent = () => {
  return (
    <div>
      <div className="customContainer sectionPadding">
        <div className="grid grid-cols-12  gap-4">
          <div className="grid grid-cols-12 md:col-span-8 col-span-12 gap-4">
            <LaunchesCards />
          </div>
          <div className="md:col-span-4 col-span-12 gap-2">
            <div className="bg-gray-900 rounded">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchesContent;
