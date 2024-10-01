"use client";

import React, { useState } from "react";
import useSideNavItems from "@/hooks/sideNavItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/styleUtlies";
import { useSidebar } from "@/app/context/sidebarContext";

const SideBar = () => {
  const pathname = usePathname();
  const sideNavItems = useSideNavItems();
  
  const { isCollapsed, toggleCollapse } = useSidebar();
  return (
    <aside
      className={cn(
        "hidden lg:flex lg:flex-col gap-y-4 h-full border-r border-[#F1F5F9] pt-6 fixed z-10 left-0 h-[calc(100vh-100px)]",
        {
          "w-16": isCollapsed, // Narrower width when collapsed
          "w-[15rem]": !isCollapsed, // Wider width when not collapsed
        }
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
                "bg-[#FCF7FF]": isActive,
                "hover:bg-[#FCF7FF]": !isActive,
              }
            )}
          >
            <button
              className={cn(
                "flex items-center gap-4 p-2  justify-start w-full bg-inherit",
                {
                  "text-primary": isActive,
                  "text-lightModePrimaryText": !isActive,
                  "hover:text-primary": !isActive,
                }
              )}
            >
              <Image src={items.Icon} alt={items.alt} width={20} height={20} />
              {/* Conditionally render the title text based on collapsed state */}
              {!isCollapsed && (
                <p className="font-normal text-sm capitalize">{items.Title}</p>
              )}
            </button>
          </Link>
        );
      })}

      <button
        onClick={toggleCollapse}
        className="flex items-center gap-4 p-2 justify-start mx-2"
      >
        <Image
          src={
            isCollapsed
              ? "/assets/Images/icons/collapseright.svg"
              : "/assets/Images/icons/collapse.svg"
          }
          alt="logo"
          width={20}
          height={20}
        />
        {/* Hide the text if sidebar is collapsed */}
        {!isCollapsed && (
          <p className="font-normal text-sm capitalize text-lightModePrimaryText hover:text-primary cursor-pointer">
            collapse
          </p>
        )}
      </button>
    </aside>
  );
};

export default SideBar;
