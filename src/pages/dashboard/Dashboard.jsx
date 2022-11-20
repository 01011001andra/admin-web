import React from "react";
import { Outlet } from "react-router-dom";
import {
  DeleteModal,
  FormEditModal,
  FormModal,
  SideBar,
} from "../../components";

const Dashboard = () => {
  console.info(document.documentElement);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col w-full">
        <div className="w-full flex flex-row items-center">
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button lg:hidden w-20 rounded-none outline-none border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <h1 className="font-bold w-full text-center lg:hidden">
            BaaBaa Kambing
          </h1>
        </div>
        <Outlet />
      </div>
      <SideBar />
      <FormModal />
      <FormEditModal />
      <DeleteModal />
    </div>
  );
};

export default Dashboard;
