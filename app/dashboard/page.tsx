'use client';
import Charts from "@/components/Charts";
import Sales from "@/components/Sales";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full p-4 overflow-y-auto">
      <Sales />
      <Charts />
    </div>
  );
};

export default Page;
