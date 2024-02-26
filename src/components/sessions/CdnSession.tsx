import React from "react";

import { useUiRedux } from "../../helpers/utils";

export default function CdnSession() {
  const { ActiveSession } = useUiRedux();
  return (
    <div
      className={`${ActiveSession === "CDN" && "flex"} ${
        ActiveSession !== "CDN" && "hidden"
      }`}
    >
      CdnSession
    </div>
  );
}
