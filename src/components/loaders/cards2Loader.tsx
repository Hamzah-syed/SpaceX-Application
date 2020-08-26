import React from "react";

const Cards2Loader = () => {
  return (
    <div className="customContainer col-span-12 w-full">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="  col-span-12 rounded-md shadow-lg bg-gray-900">
          <div className="animate-pulse  space-x-4">
            <div className="  ">
              <div className="w-full ">
                <div className="h-64  bg-gray-800 rounded "></div>
              </div>
              <div className="w-full p-4">
                <div className="mt-4 mb-6">
                  <div className="h-8 bg-gray-800 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-800 rounded w-full my-1"></div>
                <div className="h-4 bg-gray-800 rounded w-full my-1"></div>
                <div className="h-4 bg-gray-800 rounded w-full my-1"></div>
                <div className="h-4 bg-gray-800 rounded w-6/12 my-1"></div>

                <div className="py-2 pb-2 flex">
                  <div className="h-4 bg-gray-800 rounded w-20 mr-2"></div>
                </div>
                <div className="py-2 pb-4 flex">
                  <div className="h-4 bg-gray-800 rounded w-16 mr-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-16 mr-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-16 mr-2"></div>
                </div>
                <div className="py-2 pb-4 flex justify-end">
                  <div className="h-12 w-12 rounded-full bg-gray-800 rounded mr-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2Loader;
