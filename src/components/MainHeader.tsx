import { useDispatch } from "react-redux";
import IconComponent from "./IconComponent";
import {
  setHamburgerMenu,
  setNotificationModalOpen,
  setProfileModalOpen,
  setProfilePopOverOpen,
  setProfilePopOverToggle,
} from "../uiRedux/uiSlice";
import { useUiRedux } from "../helpers/utils";

export default function MainHeader() {
  const dispatch = useDispatch();
  const { ActiveSession } = useUiRedux();
  return (
    <div
      className={`w-full h-[60px] bg-white botrder-b-2 items-center px-5 ${
        ActiveSession !== "Home" && ""
      } `}
    >
      <div className="w-full h-full flex flex-row-reverse justify-between items-center space-x-3">
        <div className="flex flex-row-reverse space-x-3">
          <div
            onClick={() => {
              dispatch(setProfileModalOpen());
              dispatch(setProfilePopOverToggle());
            }}
            className="cursor-pointer flex hover:bg-gray-400 flex-row w-[80px] lg:w-[150px] bg-gray-300 border rounded-lg h-[40px] items-center justify-evenly  transition-all"
          >
            <IconComponent iconName="Profile" />
            <span className="lg:hidden">
              <IconComponent iconName="More" />
            </span>
            <span className="hidden lg:flex">
              <p className="fontIR text-[12px]">نام و نام خانوادگی</p>
            </span>
          </div>
          <div className="w-[40px] h-[40px]  text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400">
            <span className="mx-auto">
              <IconComponent iconName="Code" />
            </span>
          </div>
          <div
            onClick={() => dispatch(setNotificationModalOpen())}
            className="w-[40px] h-[40px]  text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400"
          >
            <span className="mx-auto">
              <IconComponent iconName="Bell" />
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse space-x-4  lg:hidden ">
          <span className="w-[40px]  h-[40px]  text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400">
            <span className="mx-auto">
              <IconComponent iconName="Search" />
            </span>
          </span>
          <span
            onClick={() => {
              dispatch(setHamburgerMenu());
            }}
            className="w-[40px] h-[40px] mx-auto text-[25px] rounded-lg items-center cursor-pointer flex hover:bg-gray-400"
          >
            <span className="mx-auto">
              <IconComponent iconName="Menu" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
