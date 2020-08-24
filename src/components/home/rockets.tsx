import React from "react";

//data query
import { useRocketsQuery } from "../../generated/graphql";
//images
import notAvilable from "../../assets/images/homeLanding.png";
import { url } from "inspector";

const Rockets = () => {
  //data
  const { loading, error, data } = useRocketsQuery();

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error || !data) {
    return <h1 className="text-red-600">Error!</h1>;
  }

  console.log(data);
  return (
    <div>
      <div className="customContainer sectionPadding">
        <div className="pb-16">
          <div className="headerCurve absolute w-24 h-12 bg-indigo-200 "></div>
          <h1 className="text-white font-bold text-3xl  mx-4">Rockets</h1>
        </div>
        <div className="grid grid-cols-12 gap-3">
          {!!data &&
            data.rockets?.map((rockets) => (
              <div className="lg:col-span-3 sm:col-span-6 col-span-12 rounded bg-gray-900">
                <div className="  ">
                  <div className="w-full h-48  relative">
                    <div className="w-full h-48 primaryGradient opacity-50 absolute"></div>
                    <img
                      src={
                        rockets?.flickr_images
                          ? String(rockets.flickr_images[0])
                          : notAvilable
                      }
                      alt="rocket"
                      className="object-fill h-48 w-full rounded-t "
                    />
                  </div>
                  <div className="w-full p-4">
                    <div className="mt-4 mb-6">
                      <h1 className="text-white font-semibold text-2xl  ">
                        {rockets?.rocket_name}
                        <div className="w-16 h-1 bg-indigo-600"></div>
                      </h1>
                    </div>
                    <p className="text-gray-400  multi-line-truncate">
                      {rockets?.description}
                    </p>
                    <div className="py-2 pb-4">
                      <a
                        href={`${rockets?.wikipedia}`}
                        target="_blank"
                        className="text-indigo-600  hover:text-indigo-800 hover:underline transition duration-500 ease-in-out "
                      >
                        Wikipedia
                      </a>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Rockets;
