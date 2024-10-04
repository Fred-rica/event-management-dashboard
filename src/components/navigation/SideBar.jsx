"use client";

import React from "react";
import useSideNavItems from "@/hooks/sideNavItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/styleUtlies";
import ThemeSwitch from "../ThemeSwitch";
import { useAppContext } from "@/app/context/AppContext";

const SideBar = () => {
  const pathname = usePathname();
  const sideNavItems = useSideNavItems();

  const { isCollapsed, toggleCollapse } = useAppContext();

  return (
    <aside
      className={cn(
        "hidden lg:flex lg:flex-col gap-y-4 h-full border-r border-[#F1F5F9] dark:border-primaryDark pt-6 fixed z-10 left-0 dark:bg-primaryDark",
        {
          "w-16": isCollapsed,
          "w-[15rem]": !isCollapsed,
        },
      )}
    >
      {!isCollapsed && (
        <Image
          src="/assets/Images/icons/logo.svg"
          alt="logo"
          height={32}
          width={64}
          className="ml-4 mb-3"
        />
      )}

      {isCollapsed && (
        <Image
          src="/assets/Images/icons/logo2.svg"
          alt="logo"
          height={32}
          width={32}
          className="ml-4 mb-3"
        />
      )}
      {sideNavItems.map((items, index) => {
        const isActive = pathname === items.link;

        return (
          <Link
            key={index}
            href={items.link}
            className={cn(
              "flex mx-2 items-center rounded-sm capitalize cursor-pointer",
              {
                "bg-lightPurple dark:bg-primary": isActive,
                "hover:bg-lightPurple hover:dark:bg-primary": !isActive,
              },
            )}
          >
            <button
              className={cn(
                "flex items-center gap-4 p-2  justify-start w-full bg-inherit",
                {
                  "text-primary dark:text-lightPurple": isActive,
                  "text-lightModePrimaryText dark:text-white": !isActive,
                  "hover:text-primary hover:dark:text-lightPurple": !isActive,
                },
              )}
            >
              {React.cloneElement(items.Icon, {
                width: 20,
                height: 20,
                className: {
                  "stroke-primary dark:stroke-lightPurple": isActive,
                  "stroke-[#ADA9BB] hover:stroke-primary dark:hover:stroke-lightPurple":
                    !isActive,
                },
              })}
              {/* Conditionally render the title text based on sideBar collapsed state */}
              {!isCollapsed && (
                <p className="font-normal text-sm capitalize">{items.Title}</p>
              )}
            </button>
          </Link>
        );
      })}

      <button
        onClick={toggleCollapse}
        className="flex items-center gap-4 px-2  justify-start mx-2"
      >
        <Image
          src={
            isCollapsed
              ? "/assets/Images/icons/collapseright.svg"
              : "/assets/Images/icons/collapse.svg"
          }
          alt="collapse arrow"
          width={20}
          height={20}
        />
        {!isCollapsed && (
          <p className="font-normal text-sm capitalize text-lightModePrimaryText dark:text-white hover:text-primary hover:dark:text-lightPurple cursor-pointer">
            collapse
          </p>
        )}
      </button>
      <div className="flex items-center gap-4 px-2  justify-start mx-2">
        <ThemeSwitch />
        {!isCollapsed && (
          <p className="font-normal text-xs capitalize text-lightModePrimaryText dark:text-white hover:text-primary hover:dark:text-lightPurple cursor-pointer">
            Dark Mode
          </p>
        )}
      </div>
      <div className="flex items-center gap-3 px-2 justify-start mx-2">
        <Image
          src="/assets/Images/icons/userProfileIcon.svg"
          alt="user profile icon"
          width={32}
          height={32}
        />
        {!isCollapsed && (
          <div>
            <p className="font-normal text-xs capitalize text-lightModePrimaryText dark:text-white hover:text-primary hover:dark:text-lightPurple cursor-pointer">
              Rudra Devi
            </p>
            <p className="font-normal text-xs capitalize text-lightModePrimaryText dark:text-white hover:text-primary hover:dark:text-lightPurple cursor-pointer">
              rudra.devi@gmail.com
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
