import React from "react";
//data
import { useMissiondetailsQuery } from "../../generated/graphql";

interface props {
  missionId: string;
}
const Mission: React.FC<props> = ({ missionId }) => {
  const { data, loading, error } = useMissiondetailsQuery({
    variables: {
      id: missionId,
    },
  });

  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold text-white ">
          {data?.mission?.mission_name}
        </h1>
        <div className="h-1 w-20 bg-indigo-600"></div>
      </div>
      <div className="pt-8 pb-2">
        <h1 className="text-lg text-gray-400 lg:pr-24">
          {" "}
          {data?.mission?.description}
        </h1>
      </div>
      <div className="flex  pt-1 pb-10">
        <div className="pr-2 rounded-full  cursor-pointer">
          <a
            href={`${data?.mission?.twitter}`}
            className="text-indigo-600  hover:text-indigo-700 hover:underline transition duration-500 ease-in-out"
          >
            Twitter
          </a>
          {/* <img src={Twitter} alt="twitter icon" /> */}
        </div>
        <div className=" pr-2 rounded-full  cursor-pointer">
          <a
            href={`${data?.mission?.wikipedia}`}
            className="text-indigo-600  hover:text-indigo-700 hover:underline transition duration-500 ease-in-out"
          >
            Wikipedia
          </a>
          {/* <img src={Wikipidia} alt="wikipidia icon" /> */}
        </div>
      </div>
      <a
        className="primaryGradientBtn font-semibold py-2 px-6 "
        target="__blank"
        href={`${data?.mission?.website}`}
      >
        Website
      </a>
    </div>
  );
};

export default Mission;
