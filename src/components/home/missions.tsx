import React, { useState, useEffect } from "react";
import { useMissionNamesQuery } from "../../generated/graphql";
//component
import Mission from "./missionDetails";

const Missions = () => {
  const [active, setActive] = useState<number>(0);
  const [missionId, setMissionId] = useState<any>("");
  const { data, loading, error } = useMissionNamesQuery();

  useEffect(() => {
    if (!loading) {
      //to load first element data
      const initialMissionData: any = data?.missions
        ?.filter((e, i) => i === 0)
        .map((e) => e?.mission_id);
      let [missId] = initialMissionData;
      //putting id of initial mission   
      setMissionId(missId);
    }
  }, [loading]);
  if (loading) {
    return <h1>loading</h1>;
  }

  if (error || !data) {
    return <h1>error</h1>;
  }
  const ActiveClass =
    "border-r-0 border-b-0 border-t-0 border-l-4 border border-indigo-800 ";

  return (
    <div>
      <div className="customContainer sectionPadding">
        <div
          className="grid grid-cols-5  shadow-2xl"
          style={{ boxShadow: " 0px 0px 5px 12px rgba(0,0,0,0.05" }}
        >
          <div className="col-span-1  black">
            {!!data &&
              data?.missions?.map(
                (missionName, i) =>
                  !!missionName && (
                    <div
                      key={missionName?.mission_id}
                      className={`py-3 pl-4  pr-1 text-white cursor-pointer missionBtns  ${
                        active === i ? ActiveClass : ""
                      }`}
                      onClick={() => {
                        setActive(i);

                        setMissionId(missionName.mission_id);
                      }}
                    >
                      {missionName?.mission_name}
                    </div>
                  )
              )}
          </div>

          <div className="col-span-4 bg-gray-900 p-8">
            <div>
              <Mission missionId={missionId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
