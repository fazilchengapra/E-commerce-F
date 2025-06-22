import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const LatestCustomers = () => {
  return (
    <div className="pt-5 pb-4">
      <div className="mx-5">
        <h1 className="text-xl font-bold">Latest Customers</h1>
        <div className="grid grid-cols-3 mt-6 pb-2 border-b">
          <div className="flex flex-row gap-2 items-center col-span-2">
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <div>
                <h4 className="text-md font-bold">John</h4>
              </div>
              <div>
                <h4 className="text-xs text-[#7B818E]">John@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="col-span-1 items-center">
            <div className="text-end font-bold">₹300</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCustomers;
