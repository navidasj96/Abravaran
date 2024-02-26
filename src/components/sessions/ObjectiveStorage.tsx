import React from "react";
import { useUiRedux } from "../../helpers/utils";

export default function ObjectiveStorage() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Objective Storage" && "flex"} ${
        ActiveSession !== "Objective Storage" && "hidden"
      }`}
    >
      ObjectiveStorage
    </div>
  );
}
