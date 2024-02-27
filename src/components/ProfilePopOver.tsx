import { useRef } from "react";
import { useOutsideAlerter, useUiRedux } from "../helpers/utils";
import { setProfilePopOverClose } from "../uiRedux/uiSlice";

export default function ProfilePopOver() {
  const { ProfilePopOverIsOpen } = useUiRedux();
  const ref = useRef<HTMLDivElement>(null);
  const { clickedOutside } = useOutsideAlerter(ref);

  return (
    <div
      ref={ref}
      className={`hidden lg:fixed top-[65px] bg-green-300 left-5 w-[200px] h-[100px] border rounded-lg z-[100] ${
        !ProfilePopOverIsOpen && "hidden"
      } ${clickedOutside && !ProfilePopOverIsOpen && "hidden"} `}
    >
      ProfilePopOver
    </div>
  );
}
