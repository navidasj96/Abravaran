import React from "react";
import { useUiRedux } from "../../helpers/utils";
import NestedList from "../NestedItems";
const options: { MainTitle: string; subTitle?: { title: string }[] }[] = [
  { MainTitle: "ابرک‌ها", subTitle: [{ title: "ابرک‌ها" }] },
  {
    MainTitle: "لیست‌ها",
    subTitle: [
      { title: "IP اینترنتی" },
      { title: "شبکه‌خصوصی" },
      { title: "IPشناور" },
    ],
  },
  {
    MainTitle: "لاگ تغییرات پنل",
    subTitle: [
      { title: "فایروال" },
      { title: "کلید SSH" },
      { title: "IPشناور" },
    ],
  },
  {
    MainTitle: "تنظیمات",
    subTitle: [{ title: "انتقال دامنه" }, { title: "تغییر نام دامنه" }],
  },
];
export default function CloudServer() {
  const { ActiveSession, HamburgerMenuIsOpen } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Cloud Server" && "flex"} ${
        ActiveSession !== "Cloud Server" && "hidden"
      } w-full   `}
    >
      <div
        className={`flex ml-[100%] ${
          !HamburgerMenuIsOpen && "hidden lg:flex lg:border-l"
        }  `}
      >
        <div className="fixed top-10  lg:border-l h-screen ">
          <div className="flex flex-row py-5 lg:border-b">
            <p className="fontIR mx-auto lg:py-4"> سرور ابری</p>
          </div>
          <NestedList options={options} />
        </div>
      </div>
    </div>
  );
}
