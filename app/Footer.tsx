import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-md w-full bg-white py-6">
      <div className="grid grid-cols-10 mx-5 items-center">
        <div className="text-[#6B7280] text-xs font-semibold col-span-9">
          @ 2025 Shoppee, All rights reserved.
        </div>
        <div className="col-span-1 grid grid-cols-3 gap-4">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
