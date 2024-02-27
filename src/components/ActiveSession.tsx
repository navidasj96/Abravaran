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
    <div className="w-full h-screen bg-blue-100">
      <HomeSession />
      <CdnSession />
      <CloudServer />
      <ObjectiveStorage />
      <CloudContainer />
      <VideoPlatform />
      <ManagedDatabase />
    </div>
  );
}
