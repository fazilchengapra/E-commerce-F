"use client";
import Charts from "@/components/Charts";
import CustomerSessions from "@/components/CustomerSessions";
import Sales from "@/components/Sales";
import Transactions from "@/components/Transactions";
import React from "react";
import Footer from "../Footer";

const Page = () => {
  return (
    <div className="w-full h-full p-4 overflow-y-auto flex flex-col gap-5">
      <Sales />
      <Charts />
      <CustomerSessions />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Page;
