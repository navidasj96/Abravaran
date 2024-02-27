import React from "react";

import { useUiRedux } from "../../helpers/utils";
import Login from "../../Login";

export default function HomeSession() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Home" && "flex"} ${
        ActiveSession !== "Home" && "hidden"
      }`}
    >
      <div className="mx-auto mt-20">
        <Login />
      </div>
    </div>
  );
}
