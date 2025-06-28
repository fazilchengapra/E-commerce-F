"use client";
import { Search, PanelLeft, Bell, AlignJustify  } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage  } from "@/components/ui/avatar";
import { useDispatch } from "react-redux";
import { setSideBar } from "@/lib/navSlice";

const Nav = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-full h-fit pb-2 border bg-white fixed lg:static z-100">
      <div className="flex items-center mt-3 mx-2 lg:mx-4">
        <div className="w-1/2 flex items-center gap-4">
          <div className="hidden lg:block" onClick={() => dispatch(setSideBar())}>
            <PanelLeft />
          </div>
          <div className="block lg:hidden" onClick={() => dispatch(setSideBar())}>
            <AlignJustify  />
          </div>
          <div className="w-1/2 relative select-none hidden lg:block">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#F9FAFB] placeholder-[#6B7280] pl-10 pr-3 py-1 w-full rounded-md outline-none border border-[#E8EAED]"
            />
          </div>
        </div>
        <div className="w-1/2 flex items-center gap-4 justify-end">
          <Bell fill="" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Nav;
