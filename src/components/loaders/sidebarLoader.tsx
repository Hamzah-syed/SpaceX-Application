import React from "react";

const SidebarLoader = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        <div className="lg:col-span-12 sm:col-span-12 col-span-12 rounded bg-gray-900">
          <div className="animate-pulse  space-x-4">
            <div className="  ">
              <div className="w-full h-48  relative">
                <div className="h-48 bg-gray-800 rounded w-full"></div>
              </div>
              <div className="w-full p-4">
                <div className="mt-4 mb-6">
                  <div className="h-8 bg-gray-800 rounded w-4/12"></div>
                </div>
                <div className="h-4 bg-gray-800 roundaed w-full my-1"></div>
                <div className="h-4 bg-gray-800 rounded w-full my-1"></div>
                <div className="h-4 bg-gray-800 rounded w-6/12 my-1"></div>

                <div className="py-2 pb-4">
                  <div className="h-4 bg-gray-800 rounded w-3/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLoader;
