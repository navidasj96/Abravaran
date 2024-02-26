import { useSelector } from "react-redux";
import { RootState } from "../uiRedux/store";

export const useUiRedux = () => {
  const ActiveSession = useSelector<RootState, string>(
    (state) => state.uiRedux.ActiveSession
  );
  return { ActiveSession };
};
