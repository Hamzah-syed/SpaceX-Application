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
  }, [loading, data]);
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
        <div className="pb-16">
          <div className="headerCurve absolute w-24 h-12 bg-indigo-200 "></div>
          <h1 className="text-white font-bold text-3xl  mx-4">Missions</h1>
        </div>
        <div
          className="grid grid-cols-5  shadow-2xl"
          style={{
            boxShadow: " 0px 0px 10px -10px #000000",
          }}
        >
          <div className="col-span-2 sm:col-span-1 black pb-32">
            {!!data &&
              data?.missions?.map(
                (missionName, i) =>
                  !!missionName && (
                    <div
                      key={missionName?.mission_id}
                      className={`py-3 pl-6  pr-1 text-white cursor-pointer missionBtns  ${
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
            {/* <div className=" mb-8 mt-24">
              <a
                className="primaryGradientBtn font-semibold py-2  ml-4 px-3 "
                style={{ fontSize: "13px" }}
                target="__blank"
                // href={``}
              >
                Website
              </a>
            </div> */}
          </div>

          <div className="col-span-3 sm:col-span-4 bg-gray-900 p-8">
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
