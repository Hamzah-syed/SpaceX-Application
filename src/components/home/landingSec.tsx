import React from "react";
import { Link } from "react-router-dom";

//semantic ui

//data
interface props {
  summary: string | null | undefined;
}

const LandingSec: React.FC<props> = ({ summary }) => {
  return (
    <div>
      <div className=" h-screen landingSec ">
        <div className="customContainer  w-full h-full flex justify-center items-center">
          <div className="grid  grid-cols-1">
            <div className="py-3">
              <h1 className="font-semibold mainHeader text-center py-2 font-sans">
                Space X
              </h1>
              <p
                className="text-xl text-gray-300 text-center font-sans"
                style={{ maxWidth: "900px" }}
                id="summary"
              >
                {summary}
              </p>
            </div>
            <div className="flex justify-center my-6">
              <Link to="/launches">
                <button className="primaryGradientBtn py-2 px-6 font-semibold font-sans">
                  Launches
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSec;
