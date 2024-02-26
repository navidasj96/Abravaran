import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import ActiveSession from "./components/ActiveSession";
import { useUiRedux } from "./helpers/utils";

function App() {
  const { ActiveSession: active } = useUiRedux();
  return (
    <div className="App relative">
      <div className="flex w-full flex-row rtl border-l-2 ">
        <div>
          <Sidebar />
        </div>
        <div
          className={`w-0  flex flex-col ${
            active !== "Home" && "lg:w-[100px]"
          } lg:w-[280px] h-screen bg-blue-white sticky top-0 `}
        ></div>
        <div className="w-screen flex flex-col mr-4 ">
          <div className="sticky top-0 ">
            <MainHeader />
          </div>
          <div className="w-full">
            <ActiveSession />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
