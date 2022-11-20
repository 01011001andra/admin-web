import React from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../button";

const SideBar = () => {
  return (
    <div className="drawer-side overflow-x-hidden scrollbar-thin scrollbar-thumb-warning scrollbar-track-yellow-900">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-72 md:w-80 text-white bg-yellow-900 flex flex-col gap-2">
        <h1 className="text-center font-medium text-2xl select-none my-10 ">
          <DarkMode />
          <span className="text-yellow-500">I</span>nventory
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="Avatar" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-lg font-medium">BaaBaa Kambing</h1>
              <small className="text-base">Admin</small>
            </div>
          </div>
          {/* Link */}
          <div className="flex flex-col">
            <li>
              <Link to="/dashboard" className="font-medium">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="databarang" className="font-medium">
                Data Barang
              </Link>
            </li>
            <li>
              <Link to="request" className="font-medium">
                Form Request
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
