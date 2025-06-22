import React from "react";
import LatestCustomers from "./LatestCustomers";
import PieChartt from "./PieChartt";

const CustomerSessions = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 rounded-md w-full bg-white outline-1 outline-[#ECEDEE] h-auto">
        <LatestCustomers />
      </div>
      <div className="col-span-1">
        <div className="rounded-md w-full bg-white outline-1 outline-[#ECEDEE]">
            <h4 className="text-xl font-bold mx-5 pt-5">Session by device</h4>
          <PieChartt />
        </div>
      </div>
    </div>
  );
};

export default CustomerSessions;
