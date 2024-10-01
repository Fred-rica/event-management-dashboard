'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import Close from '../common/Close';
import useSideNavItems from '@/hooks/sideNavItems';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { cn } from '@/utils/styleUtlies';

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
  return (
    <section className="flex w-full items-center justify-between   lg:hidden  px-5 lg:px-0  mt-1 pb-6 lg:pb-0 border-b border-[#E2E8F0] mb-2 lg:mb-0">
      {/* Mobile-Navbar */}
      <Image
        src="/assets/Images/icons/logo.svg"
        alt="logo"
        height={32}
        width={64}
        className=""
      />
      <Image
        src="/assets/Images/icons/mobileNavIcon.svg"
        alt="logo"
        height={24}
        width={24}
        onClick={toggleNav}
        className=""
      />
      <aside
        className={
          openNav
            ? "w-screen h-full fixed bg-white top-0 left-0 z-10"
            : " hidden"
        }
      >
        <section className=" flex items-center pb-6 border-b border-[#E2E8F0]">
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
                <Image
                  src={items.Icon}
                  alt={items.alt}
                  width={20}
                  height={20}
                />

                <p className="font-normal text-sm capitalize">{items.Title}</p>
              </button>
            </Link>
          );
        })}
      </aside>
    </section>
  );
}

export default MobileNavBar