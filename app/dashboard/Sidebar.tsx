import React from "react";
import { ChartPie, ShoppingBag, Mail, UsersRound, Box, ScrollText } from "lucide-react";
import SidebarContent from "@/components/SidebarContent";

const Sidebar = () => {
  const data = [
    { name: "Overview", icon: <ChartPie size={18} strokeWidth="3px" /> },
    {
      name: "Users",
      icon: <UsersRound size={18} strokeWidth="3px" />,
    },
    {
      name: "Sales",
      icon: <ShoppingBag size={18} strokeWidth="3px" />,
      items: [
        { name: "Products", icon: <Box size={16} strokeWidth="2px" /> },
        { name: "Invoice", icon: <ScrollText size={16} strokeWidth="2px" /> },
      ],
    },
    { name: "Messages", icon: <Mail size={18} strokeWidth="3px" /> },
  ];

  return (
    <div className="w-full md:w-[18rem] bg-white border-r h-auto z-10">
      <SidebarContent data={data} />
    </div>
  );
};

export default Sidebar;
