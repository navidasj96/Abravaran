import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainHeader from "./components/MainHeader";
import ActiveSession from "./components/ActiveSession";
import { useUiRedux } from "./helpers/utils";
import { useDispatch } from "react-redux";
import { setHamburgerMenu } from "./uiRedux/uiSlice";

function App() {
  const { ActiveSession: active, HamburgerMenuIsOpen } = useUiRedux();
  const dispatch = useDispatch();
  console.log("active is ", active);

  return (
    <div className={`App relative `}>
      <div
        className={`w-screen h-screen ${
          HamburgerMenuIsOpen && "translate-x-0"
        } ${
          !HamburgerMenuIsOpen && "translate-x-full"
        }  transition bg-white lg:hidden fixed z-[1000]`}
      >
        <button
          onClick={() => {
            dispatch(setHamburgerMenu());
          }}
        >
          close
        </button>
        <div className="flex flex-row-reverse">
          <div className="flex w-[30%] bg-red-300 ">
            {/* <Sidebar inHam={true} /> */}
          </div>
          <div className="bg-red  h-screen w-[70%] bg-blue-200"></div>
        </div>
      </div>
      <div className="flex w-full flex-row rtl border-l-2 ">
        <div>
          <Sidebar />
        </div>
        <div
          className={`w-0  flex flex-col ${
            active !== "Home" && "lg:w-[100px]"
          } ${
            active === "Home" && "lg:w-[280px]"
          }  h-screen bg-blue-white sticky top-0 `}
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
