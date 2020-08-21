import React from "react";
import MainImage from "../../assets/images/homeLanding.png";
//semantic ui

//data
import { useQuery } from "react-apollo";
// import { companyInfo } from "./query";

const LandingSec = () => {
  // const { data } = useQuery(companyInfo);
  // console.log(data);
  return (
    <div>
      <div className="HomelandingSec">
        <div className="centerContent verticalCenter">
          <div>
            <div>
              <div className="customContainer">
                <h1 className="mainHeader">Space X</h1>
                <p className="paragraph mainParagraph">
                  hamzah some asjdkg asjkdhasjkhd jkashdjk ashj dhasjk hdasjkh
                  djkash{" "}
                </p>
                <button className="primaryGradientBtn">Primary</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSec;
