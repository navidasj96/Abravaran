import React from "react";

import { useUiRedux } from "../../helpers/utils";
import Login from "../../Login";
import BranchForm from "../BranchForm";
import ProductList from "../ProductList";

export default function HomeSession() {
  const { ActiveSession } = useUiRedux();

  return (
    <div
      className={`${ActiveSession === "Home" && "flex"} ${
        ActiveSession !== "Home" && "hidden"
      }`}
    >
      <div className="mx-auto mt-20">
        <div>
          <Login />
        </div>
        <div className="mt-5">
          <BranchForm />
          <ProductList />
        </div>
      </div>
    </div>
  );
}
