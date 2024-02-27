import React from "react";
import HomeSession from "./sessions/HomeSession";
import CdnSession from "./sessions/CdnSession";
import CloudServer from "./sessions/CloudServer";
import ObjectiveStorage from "./sessions/ObjectiveStorage";
import CloudContainer from "./sessions/CloudContainer";
import VideoPlatform from "./sessions/VideoPlatform";
import ManagedDatabase from "./sessions/ManagedDatabase";

export default function ActiveSession() {
  return (
    <div className="w-full h-screen  ">
      <HomeSession />
      <div className="flex h-full  w-full ">
        <CdnSession />
      </div>
      <div className="flex h-full  w-full ">
        <CloudServer />
      </div>
      <ObjectiveStorage />
      <CloudContainer />
      <VideoPlatform />
      <ManagedDatabase />
    </div>
  );
}
