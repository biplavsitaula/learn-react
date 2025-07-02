import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Test from "../pages/Test";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
