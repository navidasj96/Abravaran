import { useSelector } from "react-redux";
import { RootState } from "../uiRedux/store";

export const useUiRedux = () => {
  const ActiveSession = useSelector<RootState, string>(
    (state) => state.uiRedux.ActiveSession
  );
  const HamburgerMenuIsOpen = useSelector<RootState, string | boolean>(
    (state) => state.uiRedux.HamburgerMenuOpen
  );
  return { ActiveSession, HamburgerMenuIsOpen };
};
