"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState("light");
  const [isOn, setIsOn] = useState(false);

  // Sidebar state
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Effect for theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      setIsOn(true);
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      setIsOn(false);
    }
  }, []);

  // Theme toggle handler
  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsOn(false);
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setIsOn(true);
    }
  };

  // Sidebar collapse toggle handler
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        handleToggleTheme,
        isOn,
        isCollapsed,
        toggleCollapse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useAppContext = () => {
  return useContext(AppContext);
};
