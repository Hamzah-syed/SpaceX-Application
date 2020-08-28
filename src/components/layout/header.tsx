import React from "react";
import { Link } from "react-router-dom";
//logo
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="w-full" style={{ position: "absolute" }}>
      <header className="text-gray-500 bg-gray-900 body-font w-full">
        <div className="customContainer mx-auto flex flex-wrap p-5 flex-row items-center">
          <span className="flex title-font font-medium items-center text-white  mb-0">
            <img
              src={Logo}
              className="w-12 h-12 text-white rounded-full"
              alt=""
            />

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
