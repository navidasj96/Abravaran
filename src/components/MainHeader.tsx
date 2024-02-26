import React from "react";
import IconComponent from "./IconComponent";

export default function MainHeader() {
  return (
    <div className="w-full h-[80px] bg-white botrder-b-2 items-center">
      <div className="w-full h-full flex flex-row-reverse justify-between items-center space-x-3">
        <div className="flex flex-row-reverse">
          <div className="cursor-pointer flex hover:bg-gray-400 flex-row w-[80px] bg-gray-300 border rounded-lg h-[40px] items-center justify-evenly ">
            <IconComponent iconName="Profile" />
            <IconComponent iconName="More" />
          </div>
          <div className="w-[40px] h-[40px]  text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400">
            <span className="mx-auto">
              <IconComponent iconName="Code" />
            </span>
          </div>
          <div className="w-[40px] h-[40px]  text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400">
            <span className="mx-auto">
              <IconComponent iconName="Bell" />
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse space-x-4 items-center lg:hidden ">
          <span className="w-[40px] mx-auto h-[40px]  text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400">
            <IconComponent iconName="Search" />
          </span>
          <span className="w-[40px] h-[40px] mx-auto text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400">
            <IconComponent iconName="Menu" />
          </span>
        </div>
      </div>
    </div>
  );
}
