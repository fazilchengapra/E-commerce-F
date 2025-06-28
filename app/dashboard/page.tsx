"use client";
import Charts from "@/components/Charts";
import CustomerSessions from "@/components/CustomerSessions";
import Sales from "@/components/Sales";
import Transactions from "@/components/Transactions";
import React from "react";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/appStore";

const Page = () => {
  const isOpen = useSelector((store: RootState) => store.nav.sideBar);
  return (
    <div
      className={`w-full h-full p-4 lg:overflow-y-auto flex flex-col gap-5 ${isOpen && 'opacity-20 lg:opacity-100'}`}
    >
      <Sales />
      <Charts />
      <CustomerSessions />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Page;
