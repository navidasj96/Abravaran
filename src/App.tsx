import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import ActiveSession from "./components/ActiveSession";
import { useUiRedux } from "./helpers/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HamburgerMenu from "./components/HamburgerMenu";
import ProfileModal from "./components/ProfileModal";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import {
  setNotificationModalClose,
  setProfileModalClose,
} from "./uiRedux/uiSlice";
import ProfilePopOver from "./components/ProfilePopOver";
function App() {
  const { ActiveSession: active } = useUiRedux();
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  useEffect(() => {
    if (screenWidth > 800) {
      dispatch(setProfileModalClose());
    }
  }, [screenWidth, dispatch]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`App relative `}>
        <HamburgerMenu />
        <ProfileModal />
        <Notification />
        <ProfilePopOver />
        <div className="flex w-full flex-row rtl border-l-2 ">
          <div className="">
            <Sidebar />
          </div>
          <div
            className={`w-0  flex flex-col ${
              active !== "Home" && "lg:w-[100px]"
            } ${active === "Home" && "lg:w-[280px]"}  h-screen  sticky top-0 `}
          ></div>
          <div className="w-screen flex flex-col  ">
            <div className="sticky top-0 z-10 border-b ">
              <MainHeader />
            </div>
            <div className="w-full">
              <ActiveSession />
            </div>
          </div>
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
