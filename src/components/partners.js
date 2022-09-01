import React from "react";
import { FaSlack, FaAmazon } from "react-icons/fa";
import { SiSitepoint } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";

function Partners() {
  return (
    <div className="text-white">
      <div className="text-center mt-20 text-[24px] font-bold">
        
        Our Sponser & Partners
      </div>
      <div className="sm:flex justify-around mt-10">
        <div className="flex gap-1 text-gray-500">
          <div className="text-[20px] mt-1">
            <FaSlack />
          </div>
          <div className="font-bold text-[20px]">Slack</div>
        </div>

        <div className="flex gap-1 text-gray-500">
          <div className="text-[22px] mt-1">
            <FaAmazon />
          </div>
          <div className="font-bold text-[20px]">Amazon</div>
        </div>

        <div className="flex gap-1 text-gray-500">
          <div className="text-[22px] mt-1">
            <IoLogoFigma />
          </div>
          <div className="font-bold text-[20px]">Figma</div>
        </div>

        <div className="flex gap-1 text-gray-500">
          <div className="text-[22px] mt-1">
            <IoLogoGithub />
          </div>
          <div className="font-bold text-[20px]">GitHub</div>
        </div>

        <div className="flex gap-1 text-gray-500">
          <div className="text-[20px] mt-1">
            <SiSitepoint />
          </div>
          <div className="font-bold text-[20px]">Sitepoint</div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
