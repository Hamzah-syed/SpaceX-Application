import React from "react";
import LandingSec from "./landingSec";
import Missions from "./missions";
import "../../assets/css/home.css";
//query
import { useCompanyInfoQuery } from "../../generated/graphql";

const Home: React.FC = () => {
  const { data, loading, error } = useCompanyInfoQuery();
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error || !data) {
    return <h1>error</h1>;
  }

  return (
    <div>
      <LandingSec summary={data?.info?.summary} />
      <Missions />
    </div>
  );
};

export default Home;
