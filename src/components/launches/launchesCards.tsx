import React, { useState } from "react";
import moment from "moment";
//data query
import { useLaunchesQuery } from "../../generated/graphql";
//loader
import Cards2Loader from "../loaders/cards2Loader";

const LaunchesCards = () => {
  //initial value of limit in query
  const startWith = 25;
  //number of lauches to be fetch on clicking loadmore
  const launchesToFetch = 5;

  //currently not using it in offset  but it is making initial loading possible we can change it
  const [offset, setOffset] = useState(10);

  //since order is type of Order! so i took variable to asign desc value
  const order: any = "desc";

  const { loading, error, data, fetchMore, updateQuery } = useLaunchesQuery({
    variables: {
      order: order,
      sort: "launch_date_local",
      limit: startWith,
      offset: 0,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  //function that will load more data
  function loadMoreHandler() {
    setOffset(offset + launchesToFetch);
    fetchMore({
      variables: {
        order: "desc",
        sort: "launch_date_local",
        limit: launchesToFetch,
        offset: data?.launches?.length,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          launches: [...prev.launches, ...fetchMoreResult.launches],
        });
      },
    });
  }
  if (loading && offset === 10) {
    return <Cards2Loader />;
  }
  if (error || !data) {
    return <h1 className="text-red-600">Error</h1>;
  }

  //filter data
  const filteredData = data.launches?.filter(
    (launches) =>
      launches?.mission_id?.length !== 0 && launches?.launch_success !== null
  );

  return (
    <div className="col-span-12 ">
      {!!filteredData &&
        filteredData?.map(
          (launches, i) =>
            !!launches && (
              <div
                key={i}
                className="sm:col-span-12 col-span-12 rounded bg-gray-900 mb-8"
              >
                <div className="  ">
                  <div className="relative" style={{ height: "350px" }}>
                    <div
                      className="w-full primaryGradient absolute rounded-t opacity-25"
                      style={{ height: "350px" }}
                    ></div>
                    <img
                      src={(
                        !!launches.links?.flickr_images &&
                        launches.links?.flickr_images[0]
                      )?.toString()}
                      alt="missions"
                      width="100%"
                      className="rounded-t"
                      style={{ height: "350px" }}
                    />
                  </div>
                  <div className="w-full p-4">
                    <div className="mt-4 mb-6">
                      <h1 className="capitalize text- text-indigo-600 font-semibold">
                        {launches?.launch_site?.site_name}
                      </h1>
                      <h1 className="capitalize text-3xl text-white font-semibold">
                        {launches?.mission_name}
                        <br />
                      </h1>
                      <h1 className="text-sm text-gray-400">
                        {moment(launches?.launch_date_local).format(
                          "MMMM Do, YYYY"
                        )}
                      </h1>
                    </div>
                    <p className="text-gray-400 ">{launches.details}</p>
                    <div className="py-2">
                      <p>
                        <span className="text-white text-bold">Status: </span>{" "}
                        <span
                          className={`${
                            launches.launch_success
                              ? "text-green-600"
                              : "text-red-600"
                          }
`}
                        >
                          {launches.launch_success ? "Successfull" : "Failded"}
                        </span>
                      </p>
                    </div>
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

      <div className="col-span-12 flex justify-center py-8">
        <button
          className={`primaryGradientBtn inline-flex items-center px-4 py-2 text-base font-semibold focus:outline-none  transition ease-in-out duration-150 ${
            loading ? "cursor-not-allowed" : ""
          }`}
          disabled={loading ? true : false}
          onClick={loadMoreHandler}
        >
          {loading ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            ""
          )}
          Load More
        </button>
      </div>
    </div>
  );
};

export default LaunchesCards;
