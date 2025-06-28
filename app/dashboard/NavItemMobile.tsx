"use client";
import { RootState } from "@/lib/appStore";
import React, { useEffect, useState } from "react";
import { RiPieChart2Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { FaBoxOpen } from "react-icons/fa";
import { IoIosPaper, IoIosMail } from "react-icons/io";
import { useSelector } from "react-redux";

const NavItemMobile = () => {
  const data = [
    { name: "Overview", icon: <RiPieChart2Fill className="size-6" /> },
    { name: "Users", icon: <HiUsers className="size-6" /> },
    { name: "Product", icon: <FaBoxOpen className="size-6" /> },
    { name: "Invoice", icon: <IoIosPaper className="size-6" /> },
    { name: "Messages", icon: <IoIosMail className="size-6" /> },
  ];

  const isOpen = useSelector((store: RootState) => store.nav.sideBar);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationClass("translate-x-0"); // slide in from left
    } else {
      setAnimationClass("-translate-x-full"); // slide out to left
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed left-0 top-0 w-[70%] p-4 bg-white flex flex-col gap-5 z-50 h-full shadow-md 
      transition-transform duration-300 ease-in-out transform ${animationClass}`}
    >
      {data.map((e) => (
        <div className="flex flex-row gap-3 items-center" key={e.name}>
          {e.icon} <div className="font-semibold">{e.name}</div>
        </div>
      ))}
    </div>
  );
};

export default NavItemMobile;
