"use client";
import Charts from "@/components/Charts";
import Sales from "@/components/Sales";
import Transactions from "@/components/Transactions";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full p-4 overflow-y-auto flex flex-col gap-5">
      <Sales />
      <Charts />
      <Transactions />
    </div>
  );
};

export default Page;
