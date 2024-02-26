import React from "react";

import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { setActiveSession } from "../uiRedux/uiSlice";
import { useUiRedux } from "../helpers/utils";
import { useNavigate } from "react-router-dom";
const options: {
  title: string;
  title_fa: string;
  Icon: any;
  abbrev: string;
  route: string;
}[] = [
  {
    title: "Home",
    title_fa: "صفحه اصلی",
    Icon: "Home",
    abbrev: "Home",
    route: "/",
  },
  {
    title: "CDN",
    title_fa: "شبکه توزیع محتوا",
    Icon: "CDN",
    abbrev: "CDN",
    route: "/cdn/domains",
  },
  {
    title: "Cloud Server",
    title_fa: " سرور ابری",
    Icon: "Cloud_Server",
    abbrev: "Server",
    route: "/ecc",
  },
  {
    title: "Objective Storage",
    title_fa: " فضای ابری",
    Icon: "Objective_Storage",
    abbrev: "Storage",
    route: "storage",
  },
  {
    title: "Cloud Container",
    title_fa: "کانتینر ابری",
    Icon: "Cloud_Container",
    abbrev: "Container",
    route: "paas",
  },
  {
    title: "Video Platform ",
    title_fa: "بلتفرم ویدیو",
    Icon: "Video_Platform",
    abbrev: "Video",
    route: "video",
  },
  {
    title: "Managed Database",
    title_fa: "دیتابیس ابری",
    Icon: "Managed_Database",
    abbrev: "Database",
    route: "dbaas",
  },
];

interface Props {
  inHam?: boolean;
}
export default function Sidebar({ inHam }: Props) {
  const dispatch = useDispatch();
  const { ActiveSession } = useUiRedux();
  const navigate = useNavigate();

  const handleChangeRoute = (title: string) => {
    // Change the route without reloading the page
    navigate(`${title}`);
  };

  const OnclickHandler = (title: string) => {
    dispatch(setActiveSession(title));
  };
  return (
    <div
      className={`flex transition-all fontIR mr-2  flex-col ${
        ActiveSession === "Home" && "w-[230px]"
      } ${
        ActiveSession !== "Home" && "w-[80px]"
      }     lg:translate-x-0 translate-x-full h-screen  ${
        !inHam && "fixed top-0 "
      }${inHam && "flex"} z-[100] transition-all`}
    >
      <div className="flex flex-col">
        {options.map((item) => {
          return (
            <div
              onClick={() => {
                OnclickHandler(item.title);
                handleChangeRoute(item.route);
              }}
              className={`${
                ActiveSession !== "Home" && "mt-6"
              } transition-all ${ActiveSession === "Home" && "mt-5"}`}
            >
              <Icon
                title={item.title}
                title_fa={item.title_fa}
                Icon={item.Icon}
                abbrev={item.abbrev}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
