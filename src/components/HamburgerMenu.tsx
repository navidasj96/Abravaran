import React from "react";
import { useUiRedux } from "../helpers/utils";

import Sidebar from "./Sidebar";
import ActiveSession from "./ActiveSession";

export default function HamburgerMenu() {
  const { HamburgerMenuIsOpen } = useUiRedux();
  return (
    <div
      className={`w-screen h-screen ${HamburgerMenuIsOpen && "translate-x-0"} ${
        !HamburgerMenuIsOpen && "translate-x-full"
      }  transition bg-white lg:hidden fixed z-[1000]`}
    >
      <div className="flex flex-row-reverse">
        <div className="flex w-[30%] border-l  ">
          <Sidebar inHam={true} />
        </div>
        <div className="rtl   h-screen w-[70%] ">
          <ActiveSession />
        </div>
      </div>
    </div>
  );
}
