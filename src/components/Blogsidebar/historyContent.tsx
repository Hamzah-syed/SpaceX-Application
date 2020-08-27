import React from "react";

import moment from "moment";

type datatype = string | null | undefined;

interface props {
  title: datatype;
  date: datatype;
  details: datatype;
  articleLink: datatype;
}

const HistoryContent: React.FC<props> = ({
  title,
  date,
  details,
  articleLink,
}) => {
  return (
    <div>
      <div className="py-4">
        <div className="pb-4">
          <h1 className="text-white  text-2xl pt-3 font-semibold" id="title">
            {title}
          </h1>
          <h1 className="text-indigo-600">
            {" "}
            {moment(date).format("MMMM Do, YYYY")}
          </h1>
        </div>
        <div>
          <h1 className="text-gray-400 pb-4">{details}</h1>
        </div>
        <div className="py-2 pb-2">
          <a
            href={`${articleLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600  hover:text-indigo-800 hover:underline transition duration-500 ease-in-out pr-3"
          >
            Article
          </a>
        </div>
      </div>
      <div
        className="h-1 w-full  my-2"
        style={{ height: "2px", background: "#121720" }}
      ></div>
    </div>
  );
};

export default HistoryContent;
