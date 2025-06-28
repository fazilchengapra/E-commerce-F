"use client";
import React from "react";
import {
  ChartPie,
  ShoppingBag,
  Mail,
  UsersRound,
  Box,
  ScrollText,
} from "lucide-react";
import SidebarContent from "@/components/SidebarContent";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/appStore";

const Sidebar = () => {
  const isOpen = useSelector((store: RootState) => store.nav.sideBar);
  const data = [
    {
      name: "overview",
      icon: (
        <ChartPie
          size={isOpen ? 18 : 25}
          strokeWidth={`${isOpen ? "3px" : "2px"}`}
        />
      ),
      sub: false,
    },
    {
      name: "users",
      icon: (
        <UsersRound
          size={isOpen ? 18 : 25}
          strokeWidth={`${isOpen ? "3px" : "2px"}`}
        />
      ),
      sub: false,
    },
    {
      name: "sales",
      icon: (
        <ShoppingBag
          size={isOpen ? 18 : 25}
          strokeWidth={`${isOpen ? "3px" : "2px"}`}
        />
      ),
      sub: false,
      items: [
        {
          name: "products",
          sub: true,
          icon: <Box size={isOpen ? 16 : 20} strokeWidth="2px" />,
        },
        {
          name: "invoice",
          sub: true,
          icon: <ScrollText size={isOpen ? 16 : 20} strokeWidth="2px" />,
        },
      ],
    },
    {
      name: "messages",
      icon: (
        <Mail
          size={isOpen ? 18 : 25}
          strokeWidth={`${isOpen ? "3px" : "2px"}`}
        />
      ),
    },
  ];

  return (
    <div
      className={`w-full hidden lg:block h-full relative mt-[-11px] ${
        isOpen ? "lg:w-[18rem]" : "lg:w-[7rem]"
      } bg-white border-r h-auto z-10`}
    >
      <SidebarContent data={data} />
    </div>
  );
};

export default Sidebar;
