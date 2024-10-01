import React from 'react'

const useSideNavItems = () => {
  const sideNavItems = [
    {
      Title: "Home",
      Icon: "/assets/Images/icons/home.svg",
      alt: "home image",
      link: "/",
    },
    {
      Title: "Events",
      Icon: "/assets/Images/icons/calendar.svg",
      alt: "calendar image",
      link: "/events",
    },
    {
      Title: "Speakers",
      Icon: "/assets/Images/icons/speakers.svg",
      alt: "speakers image",
      link: "/speakers",
    },
    {
      Title: "Reports",
      Icon: "/assets/Images/icons/reports.svg",
      alt: "reports image",
      link: "/reports",
    },
    {
      Title: "Notifications",
      Icon: "/assets/Images/icons/notifications.svg",
      alt: "notifications image",
      link: "/notifications",
    },
    {
      Title: "messages",
      Icon: "/assets/Images/icons/messages.svg",
      alt: "messages image",
      link: "/messages",
    },
    {
      Title: "settings",
      Icon: "/assets/Images/icons/settings.svg",
      alt: "settings image",
      link: "/settings",
    },
   
  ];
  return sideNavItems;
};

export default useSideNavItems;