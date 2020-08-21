import React, { useState } from "react";
import { useMissionNamesQuery } from "../../generated/graphql";
//component
import Mission from "./mission";

const Missions = () => {
  const [active, setActive] = useState<number>(0);
  const [missionId, setMissionId] = useState<string | null | undefined>("");
  const { data, loading, error } = useMissionNamesQuery();
  if (loading) {
    return <h1>loading</h1>;
  }
  if (error || !data) {
    return <h1>error</h1>;
  }

  const ActiveClass =
    "border-r-0 border-b-0 border-t-0 border-l-4 border border-indigo-800 ";

  console.log(data.missions);
  return (
    <div>
      <div className="customContainer sectionPadding">
        <div
          className="grid grid-cols-5  shadow-2xl"
          style={{ boxShadow: " 0px 0px 5px 12px rgba(0,0,0,0.05" }}
        >
          <div className="col-span-1  black">
            {!!data &&
              data?.missions?.map((missionName, i) => (
                <div
                  key={missionName?.mission_id}
                  className={`py-3 pl-4  pr-1 text-white cursor-pointer missionBtns  ${
                    active === i ? ActiveClass : ""
                  }`}
                  onClick={() => {
                    setActive(i);
                    setMissionId(missionName?.mission_id);
                  }}
                >
                  {missionName?.mission_name}
                </div>
              ))}
          </div>

          <div className="col-span-4 bg-gray-900 p-8">
            <div>
              <Mission missionId={missionId} />
              <h1 className="text-3xl font-semibold text-white ">Thaicon</h1>
              <div className="h-1 w-20 bg-indigo-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
