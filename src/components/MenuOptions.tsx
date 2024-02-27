import React, { useState } from "react";
import IconComponent from "./IconComponent";

interface Props {
  options: {
    MainTitle: string;
    subTitle?: {
      title: string;
    }[];
  }[];
}
export default function MenuOptions({ options }: Props) {
  const [clicked, setClicked] = useState(false);
  return (
    <button className="w-full">
      {options.map((item) => {
        return (
          <div
            key={item.MainTitle}
            className={` flex flex-col fontIR py-2 px-4 rounded-lg  `}
          >
            <div className="flex flex-row hover:bg-gray-100 ">
              {item.subTitle && (
                <div className="flex flex-row">
                  <button
                    onClick={() => {
                      setClicked((prev) => !prev);
                    }}
                    className={`text-[10px] w-[15px] h-[15px]  my-auto ${
                      clicked && "-rotate-90"
                    } transition-all duration-150 `}
                  >
                    {" "}
                    <IconComponent iconName="ArrowLeft" />{" "}
                  </button>
                </div>
              )}
              <p className="mr-5">{item.MainTitle}</p>
            </div>
            {clicked && (
              <div className="flex flex-col">
                {item.subTitle?.map((choice) => {
                  return (
                    <button className="hover:bg-gray-100 rounded-lg pr-10 px-2 flex w-full ">
                      <p>{choice.title}</p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </button>
  );
}
