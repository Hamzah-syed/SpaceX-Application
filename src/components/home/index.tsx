import React from "react";
//css
import "../../assets/css/home.css";
//components
import LandingSec from "./landingSec";
import Missions from "./missions";
import Rockets from "./rockets";
//query
import { useCompanyInfoQuery } from "../../generated/graphql";
//loader
import Loader from "../loaders/Loader";

const Home: React.FC = () => {
  const { data, loading, error } = useCompanyInfoQuery();
  if (loading) {
    return <Loader />;
  }

  if (error || !data) {
    return <h1>error</h1>;
  }

  return (
    <div id="comp">
      <LandingSec summary={data?.info?.summary} />
      <div className="relative">
        <Missions />
        <div className="absolute w-full h-screen top-0 pt-64 backgroundFluidDiv">
          <svg
            preserveAspectRatio="none"
            className="w-full "
            viewBox="0 0 1910.484 2496.152"
            height="1300px"
          >
            <path
              className="a"
              d="M3980,2611.482s555.735-89.488,1210.255-194.21,700.209-416.9,700.209-416.9v1786.66s-845.288,138.2-1383.691,285.005S3980,4496.52,3980,4496.52Z"
              transform="translate(-3979.98 -2000.368)"
            />
          </svg>
        </div>
        <Rockets />
      </div>
    </div>
  );
};

export default Home;
