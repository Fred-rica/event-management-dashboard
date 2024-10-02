"use client";

import Image from "next/image";
import React, { useState } from "react";
import Close from "../common/Close";
import useSideNavItems from "@/hooks/sideNavItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/styleUtlies";
import ToggleButton from "../common/ToggleButton";
import ThemeSwitch from "../ThemeSwitch";
import MobileNavIcon from "@/app/icons/MobileNavIcon";

const MobileNavBar = () => {
  const pathname = usePathname();
  const sideNavItems = useSideNavItems();
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    if (openNav) {
      // Delay closing the navigation
      setTimeout(() => {
        setOpenNav(false);
      }, 300);
    } else {
      setOpenNav(true); // Open navigation immediately
    }
  };
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <section className=" dark:bg-primaryDark items-center flex w-full justify-between   lg:hidden  px-5 lg:px-0  mt-1 h-[64px] lg:pb-0 border-b border-[#E2E8F0] dark:border-primaryDark mb-2 lg:mb-0">
      <Image
        src="/assets/Images/icons/logo.svg"
        alt="logo"
        height={32}
        width={64}
        className=""
      />
      <MobileNavIcon
        className="dark:stroke-lightPurple stroke-[#64748B]"
        height={24}
        width={24}
        onClick={toggleNav}
      />

      <aside
        className={
          openNav
            ? "w-screen h-full fixed bg-white dark:bg-primaryDark top-0 left-0 z-10"
            : " hidden"
        }
      >
        <section className=" flex items-center px-5 h-[64px] border-b border-[#E2E8F0] dark:border-primaryDark">
          <Image
            src="/assets/Images/icons/logo.svg"
            alt="logo"
            height={32}
            width={64}
            className="pt-3"
          />
          <Close onClose={toggleNav} />
        </section>

        {sideNavItems.map((items, index) => {
          const isActive = pathname === items.link;

          return (
            <Link
              key={index}
              href={items.link}
              onClick={toggleNav}
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

                <p className="font-normal text-sm capitalize">{items.Title}</p>
              </button>
            </Link>
          );
        })}
        <div className="flex items-center gap-4 p-2 justify-start mx-2">
          <ThemeSwitch isOn={isOn} handleToggle={handleToggle} />
          <p className="font-normal text-sm capitalize text-lightModePrimaryText dark:text-white hover:text-primary hover:dark:text-lightPurple cursor-pointer">
            Dark Mode
          </p>
        </div>
      </aside>
    </section>
  );
};

export default MobileNavBar;
