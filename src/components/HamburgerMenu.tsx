import React from "react";
import { useUiRedux } from "../helpers/utils";

import Sidebar from "./Sidebar";

export default function HamburgerMenu() {
  const { HamburgerMenuIsOpen } = useUiRedux();
  return (
    <div
      className={`w-screen h-screen ${HamburgerMenuIsOpen && "translate-x-0"} ${
        !HamburgerMenuIsOpen && "translate-x-full"
      }  transition bg-white lg:hidden fixed z-[1000]`}
    >
      <div className="flex flex-row-reverse">
        <div className="flex w-[30%]   ">
          <Sidebar inHam={true} />
        </div>
        <div className="bg-red  h-screen w-[70%] bg-blue-200"></div>
      </div>
    </div>
  );
}
