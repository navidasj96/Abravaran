import React from "react";
import { useUiRedux } from "../../helpers/utils";

export default function ManagedDatabase() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Managed Database" && "flex"} ${
        ActiveSession !== "Managed Database" && "hidden"
      }`}
    >
      ManagedDatabase
    </div>
  );
}
