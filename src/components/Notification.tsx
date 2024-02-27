import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNotificationModalToggle } from "../uiRedux/uiSlice";
import { useUiRedux } from "../helpers/utils";
import { Dialog } from "@material-tailwind/react";

export default function Notification() {
  const dispatch = useDispatch();
  const { NotificationModalIsOpen } = useUiRedux();
  const open = NotificationModalIsOpen ? true : false;
  const handleOpen = () => dispatch(setNotificationModalToggle());
  return (
    <div className="fontIR">
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        className="w-[100px] h-[100px]"
      >
        <p className="fontIR mx-auto text-center my-auto">اعلانی وجود ندارد</p>
      </Dialog>
    </div>
  );
}
