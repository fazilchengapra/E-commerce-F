'use client'
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

type SidebarItem = {
  name: string;
  icon: React.ReactNode;
  items?: SidebarItem[]; // Optional nested items for submenus
};

const SidebarContent = ({ data }: { data: SidebarItem[] }) => {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.name);
  };

  return (
    <div className="flex flex-col gap-3 mt-3 mx-4">
      {data.map((item) => (
        <div key={item.name}>
          <button onClick={() => handleItemClick(item)} className="w-full">
            <div className={`flex gap-3 items-center w-full hover:bg-[#F3F4F6] p-2 rounded-lg ${activeItem === item.name ? 'text-[#1C64F2]' : ''}`}>
              <div> {item?.icon}</div>
              <div>{item.name}</div>
              <div>
                {item.items && item.items.length > 0 && activeItem !== item.name && (
                  <ChevronRight size={18} />
                )}

                {item.items && item.items.length > 0 && activeItem === item.name && (
                  <ChevronDown size={18} />
                )}
              </div>
            </div>
          </button>
          {item.items && item.items.length > 0 && activeItem === item.name && (
            <SidebarContent data={item.items} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarContent;
