import React from "react";

import { useUiRedux } from "../../helpers/utils";

export default function HomeSession() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Home" && "flex"} ${
        ActiveSession !== "Home" && "hidden"
      }`}
    >
      HomeSession
    </div>
  );
}
