import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../uiRedux/store";
import { RefObject, useEffect, useState } from "react";

export const useUiRedux = () => {
  const ActiveSession = useSelector<RootState, string>(
    (state) => state.uiRedux.ActiveSession
  );
  const HamburgerMenuIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.HamburgerMenuOpen
  );
  const ProfileModalIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.ProfileModalIsOpen
  );
  const NotificationModalIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.NotificationModalIsOpen
  );
  const ProfilePopOverIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.ProfilePopOver
  );
  return {
    ActiveSession,
    HamburgerMenuIsOpen,
    ProfileModalIsOpen,
    NotificationModalIsOpen,
    ProfilePopOverIsOpen,
  };
};

function useOutsideAlerter(ref: RefObject<HTMLElement>) {
  const [clickedOutside, setClickedOutside] = useState(false);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        console.log("clicked outside");

        setClickedOutside(true);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { clickedOutside };
}

export { useOutsideAlerter };
