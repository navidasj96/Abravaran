import React from "react";
import { useUiRedux } from "../../helpers/utils";

export default function CloudContainer() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Cloud Container" && "flex"} ${
        ActiveSession !== "Cloud Container" && "hidden"
      }`}
    >
      CloudContainer
    </div>
  );
}
