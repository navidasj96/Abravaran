import React from "react";
import { useUiRedux } from "../../helpers/utils";

export default function CloudServer() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Cloud Server" && "flex"} ${
        ActiveSession !== "Cloud Server" && "hidden"
      }`}
    >
      CloudServer
    </div>
  );
}
