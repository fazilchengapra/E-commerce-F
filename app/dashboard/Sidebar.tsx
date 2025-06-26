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

const Sidebar = () => {
  const data = [
    { name: "overview", icon: <ChartPie size={18} strokeWidth="3px" />, sub:false },
    {
      name: "users",
      icon: <UsersRound size={18} strokeWidth="3px" />,
      sub:false
    },
    {
      name: "sales",
      icon: <ShoppingBag size={18} strokeWidth="3px" />,
      sub: false,
      items: [
        {
          name: "products",
          sub: true,
          icon: <Box size={16} strokeWidth="2px" />,
        },
        {
          name: "invoice",
          sub: true,
          icon: <ScrollText size={16} strokeWidth="2px" />,
        },
      ],
    },
    { name: "messages", icon: <Mail size={18} strokeWidth="3px" /> },
  ];

  return (
    <div className="w-full md:w-[18rem] bg-white border-r h-auto z-10">
      <SidebarContent data={data} />
    </div>
  );
};

export default Sidebar;
