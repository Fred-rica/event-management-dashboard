import CalendarIcon from "@/app/icons/CalendarIcon";
import HomeIcon from "@/app/icons/HomeIcon";
import MessagesIcon from "@/app/icons/MessagesIcon";
import NotificationsIcon from "@/app/icons/NotificationsIcon";
import ReportsIcon from "@/app/icons/ReportsIcon";
import SettingsIcon from "@/app/icons/SettingsIcon";
import SpeakersIcon from "@/app/icons/SpeakersIcon";
import React from "react";

const useSideNavItems = () => {
  const sideNavItems = [
    {
      Title: "Home",
      Icon: <HomeIcon />,
      alt: "home image",
      link: "/",
    },
    {
      Title: "Events",
      Icon: <CalendarIcon />,
      alt: "calendar image",
      link: "/events",
    },
    {
      Title: "Speakers",
      Icon: <SpeakersIcon />,
      alt: "speakers image",
      link: "/speakers",
    },
    {
      Title: "Reports",
      Icon: <ReportsIcon />,
      alt: "reports image",
      link: "/reports",
    },
    {
      Title: "Notifications",
      Icon: <NotificationsIcon />,
      alt: "notifications image",
      link: "/notifications",
    },
    {
      Title: "messages",
      Icon: <MessagesIcon />,
      alt: "messages image",
      link: "/messages",
    },
    {
      Title: "settings",
      Icon: <SettingsIcon />,
      alt: "settings image",
      link: "/settings",
    },
  ];
  return sideNavItems;
};

export default useSideNavItems;
