import React from "react";
//data query
import { useLaunchesQuery } from "../../generated/graphql";
//loader
import Cards2Loader from "../loaders/cards2Loader";

const LaunchesCards = () => {
  const { loading, error, data } = useLaunchesQuery();
  if (loading) {
    return <Cards2Loader />;
  }
  if (error || !data) {
    return <h1 className="text-red-600">Error</h1>;
  }

  return (
    <div>
      <div className="customContainer sectionPadding">
        <div className="grid grid-cols-12  gap-4">
          {!!data &&
            data.launches?.map(
              (launches, i) =>
                !!launches && (
                  <div
                    key={i}
                    className="sm:col-span-6 col-span-12 rounded bg-gray-900"
                  >
                    <div className="  ">
                      <div className="w-full p-4">
                        <div className="mt-4 mb-6">
                          <h1 className="capitalize text-3xl text-white font-semibold">
                            {launches?.mission_name}
                          </h1>
                          <h1 className="capitalize text- text-indigo-600 font-semibold">
                            {launches?.launch_site?.site_name}
                          </h1>
                        </div>
                        <p className="text-gray-400 ">{launches.details}</p>
                        <div className="py-2 pb-4 flex">
                          <a
                            href={`${launches.links?.wikipedia}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600  hover:text-indigo-800 hover:underline transition duration-500 ease-in-out pr-3"
                          >
                            Wikipedia
                          </a>
                          <a
                            href={`${launches.links?.article_link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600  hover:text-indigo-800 hover:underline transition duration-500 ease-in-out pr-3"
                          >
                            Article
                          </a>
                          <a
                            href={`${launches.links?.video_link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600  hover:text-indigo-800 hover:underline transition duration-500 ease-in-out pr-3"
                          >
                            Video
                          </a>
                        </div>
                        <div className="flex justify-end items-end pb-2 px-2">
                          <span className="rounded-full w-12 h-12 primaryGradient flex justify-center items-center cursor-pointer transform scale-100 hover:scale-110 bounce transition duration-300 ease-in-out">
                            <svg
                              id="Capa_1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 448.011 448.011"
                              width="20px"
                              height="20px"
                              className="hovered-paths"
                              style={{ marginLeft: "4px" }}
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4    l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472    l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"
                                      data-original="#000000"
                                      className="hovered-path active-path"
                                      data-old_color="#000000"
                                      fill="#FFFFFF"
                                    />
                                  </g>
                                </g>
                              </g>{" "}
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default LaunchesCards;
