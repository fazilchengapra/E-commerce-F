import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Transactions = () => {
  return (
    <div className="rounded-md w-full bg-white outline-1 outline-[#ECEDEE]">
      <div className="flex flex-col mx-5 pt-5 mb-3">
        <h2 className="text-xl font-bold">Transactions</h2>
        <p className="text-[#707784]">This is a list of latest transactions</p>
      </div>
      <div className="mx-5">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9FAFB] rounded-md uppercase">
              <TableHead className=" text-[#6B7280] ">Transaction</TableHead>
              <TableHead className="text-[#6B7280]">Date & Time</TableHead>
              <TableHead className="text-[#6B7280]">Amount</TableHead>
              <TableHead className="text-right pr-8 text-[#6B7280]">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-white">
              <TableCell>
                <div className="flex flex-row gap-1">
                  <div className="text-[#252C3A]">Payment from</div>
                  <div className="font-bold">John</div>
                </div>
              </TableCell>
              <TableCell className="text-[#7E8491]">April 23 ,2025</TableCell>
              <TableCell className="font-bold">₹5000</TableCell>
              <TableCell className="text-right flex justify-end">
                <div className="py-1 px-4 rounded-md w-fit bg-[#DEF7EC] text-[#055540] font-semibold lowercase">
                  completed
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transactions;
