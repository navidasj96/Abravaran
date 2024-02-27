import React, { useState } from "react";
import IconComponent from "./IconComponent";
import { useUiRedux } from "../helpers/utils";

interface Props {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  inHam?: boolean;
}
export default function Icon({ title, title_fa, Icon, abbrev, inHam }: Props) {
  const { ActiveSession } = useUiRedux();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer ${
        ActiveSession === title && " text-gray-400 rounded-sm"
      } flex flex-row items-center space-y-4   `}
    >
      <div
        className={`p-2 rounded-lg ${
          isHovered && "bg-gray-300"
        } flex flex-col  ${
          ActiveSession !== "Home" && "items-center text-[25px] mx-auto"
        } ${inHam && "items-center text-[30px] mx-auto"}  text-[25px]`}
      >
        <IconComponent iconName={Icon} />
        <p
          className={` ${
            ActiveSession === "Home" && !inHam && "hidden"
          }  text-[14px] w-full   `}
        >
          {abbrev}
        </p>
      </div>
      <div
        className={`flex text-[13px] flex-col fontIR mr-5 my-auto ${
          ActiveSession !== "Home" && "hidden"
        } ${inHam && "hidden"}`}
      >
        <div>{title}</div>
        <div>{title_fa}</div>
      </div>
    </div>
  );
}
