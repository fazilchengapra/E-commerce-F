"use client";
import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/appStore"; // Adjust the import path as necessary
import { setCurrentPage, setCurrentSubPage } from "@/lib/navSlice";

type SidebarItem = {
  name: string;
  icon: React.ReactNode;
  items?: SidebarItem[]; // Optional nested items for submenus
  sub?: boolean; // Optional flag to indicate if it's a sub-item
};

const SidebarContent = ({ data }: { data: SidebarItem[] }) => {
  const currentPage = useSelector((store: RootState) => store.nav.currentPage);
  const currentSubPage = useSelector(
    (store: RootState) => store.nav.currentSubPage
  );
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-3 mt-3 mx-4">
      {data.map((item) => (
        <div key={item.name}>
          <button
            className="w-full"
            onClick={() => {
              if (item.sub) {
                // If it's a sub-item, set the current sub-page
                dispatch(setCurrentSubPage(item.name));
              } else {
                // Otherwise, set the current page
                dispatch(setCurrentPage(item.name));
              }
            }}
          >
            <div
              className={`flex gap-3 items-center w-full hover:bg-[#F3F4F6] p-2 rounded-lg ${
                currentPage === item.name || currentSubPage === item.name
                  ? "text-[#1C64F2]"
                  : ""
              }`}
            >
              <div> {item?.icon}</div>
              <div>{item.name}</div>
              <div>
                {item.items &&
                  item.items.length > 0 &&
                  currentPage !== item.name && <ChevronRight size={18} />}

                {item.items &&
                  item.items.length > 0 &&
                  currentPage === item.name && <ChevronDown size={18} />}
              </div>
            </div>
          </button>
          {item.items && item.items.length > 0 && currentPage === item.name && (
            <SidebarContent data={item.items} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarContent;
