import React from "react";

import { useUiRedux } from "../../helpers/utils";
import MenuOptions from "../MenuOptions";
import IconComponent from "../IconComponent";
const options: { MainTitle: string; subTitle?: { title: string }[] }[] = [
  { MainTitle: "دامنه‌های من" },
  { MainTitle: "لیست‌ها" },
  { MainTitle: "لاگ تغییرات پنل" },
  { MainTitle: "تنظیمات", subTitle: [{ title: "انتقال دامنه" }] },
];
export default function CdnSession() {
  const { ActiveSession, HamburgerMenuIsOpen } = useUiRedux();
  return (
    <div
      className={`${ActiveSession === "CDN" && "flex"} ${
        ActiveSession !== "CDN" && "hidden"
      } w-full   `}
    >
      <div className="w-full flex flex-row  ">
        <div
          className={`fixed top-0 lg:translate-x-0 translate-x-full w-[0px] lg:w-[200px] h-screen  `}
        >
          <div className="flex flex-col w-full   ">
            <div
              className={`w-full ${
                !HamburgerMenuIsOpen && "hidden lg:flex lg:flex-col  "
              } `}
            >
              <div className="w-full flex flex-row border">
                <div className="text-[50px] mt-5 px-5">
                  <IconComponent iconName="CDN" />
                </div>
                <div className="flex flex-col mt-5">
                  <div className="flex flex-col fontIR w-screen ">
                    <p>شبکه توزیع محتوا</p>
                    <p>CDN</p>
                  </div>
                </div>
              </div>

              <div className="w-screen lg:w-[200px] h-screen border border-t-0">
                <MenuOptions options={options} />;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
