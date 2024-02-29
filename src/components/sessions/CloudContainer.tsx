import React from "react";

import { useUiRedux } from "../../helpers/utils";
import MenuOptions from "../MenuOptions";
import IconComponent from "../IconComponent";
import NestedList from "../NestedItems";
const options: { MainTitle: string; subTitle?: { title: string }[] }[] = [
  { MainTitle: "ابرک‌ها", subTitle: [{ title: "لیست ابرک‌ها" }] },
  {
    MainTitle: "شبکه‌ها",
    subTitle: [
      { title: "ip اینترنتی" },
      { title: "ip اینترنتی" },
      { title: "ip اینترنتی" },
    ],
  },
  { MainTitle: "لاگ تغییرات پنل" },
  { MainTitle: "تنظیمات", subTitle: [{ title: "انتقال دامنه" }] },
];
export default function CloudContainer() {
  const { ActiveSession, HamburgerMenuIsOpen } = useUiRedux();
  return (
    <div
      className={`${ActiveSession === "Cloud Container" && "flex"} ${
        ActiveSession !== "Cloud Container" && "hidden"
      }`}
    >
      <div
        className={`flex ml-[100%] ${
          !HamburgerMenuIsOpen && "hidden lg:flex lg:border-l"
        } `}
      ></div>
    </div>
  );
}
