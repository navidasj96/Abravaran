import React from "react";
import { useUiRedux } from "../../helpers/utils";

export default function VideoPlatform() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Video Platform " && "flex"} ${
        ActiveSession !== "Video Platform " && "hidden"
      }`}
    >
      VideoPlatform
    </div>
  );
}
