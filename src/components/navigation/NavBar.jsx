"use client";

import React from "react";
import SideBar from "./SideBar";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  return (
    <nav>
      {/* Web-Navbar */}
      <SideBar />
      {/* Mobile-Navbar */}
      <MobileNavBar />
    </nav>
  );
};

export default NavBar;
