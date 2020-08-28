import React from "react";
import HistoryContent from "./historyContent";
//query data
import { useHistoryDataQuery } from "../../generated/graphql";
//loader
import SidebarLoader from "../loaders/sidebarLoader";
import { launches } from "../launches/query";

const History = () => {
  const order: any = "desc";
  const { data, loading, error } = useHistoryDataQuery({
    variables: { limit: 4, sort: "event_date_utc", order: order },
  });
  if (loading) {
    return <SidebarLoader />;
  }
  if (error || !data) {
    return <h1 className="text-red-600">Error</h1>;
  }

  return (
    <div>
      <div className="p-4 px-4 ">
        <div className="py-3">
          <h1 className="font-semibold text-3xl text-white text-left">
            History
          </h1>
          <div className="w-20 h-1 bg-indigo-600"></div>
        </div>
        {!!data &&
          data.history?.map(
            (history, i) =>
              !!launches && (
                <div key={i}>
                  <HistoryContent
                    title={history?.title}
                    date={history?.event_date_utc}
                    details={history?.details}
                    articleLink={history?.links?.article}
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default History;
