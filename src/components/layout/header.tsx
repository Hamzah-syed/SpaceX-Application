import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full" style={{ position: "absolute" }}>
      <header className="text-gray-500 bg-gray-900 body-font w-full">
        <div className="customContainer mx-auto flex flex-wrap p-5 flex-row items-center">
          <span className="flex title-font font-medium items-center text-white  mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SpaceX</span>
          </span>
          <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <span className="mr-5 hover:text-white cursor-pointer">Home</span>
            </Link>
            <Link to="/launches">
              <span className="mr-5 hover:text-white cursor-pointer">
                Launches
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
