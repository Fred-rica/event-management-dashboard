"use client";

import React, { useEffect, useState } from "react";
import ToggleButton from "./common/ToggleButton";
import { useAppContext } from "@/app/context/AppContext";

const ThemeSwitch = () => {
  //component to switch from light mode to dark mode
  const { handleToggleTheme, isOn } = useAppContext();

  return <ToggleButton handleToggle={handleToggleTheme} isOn={isOn} />;
};

export default ThemeSwitch;
