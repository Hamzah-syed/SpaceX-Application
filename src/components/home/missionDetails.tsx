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
    </div>
  );
};

export default Mission;
