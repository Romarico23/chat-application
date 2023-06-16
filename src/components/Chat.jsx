import React, { useContext } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { CgMore } from "react-icons/cg";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <BsFillCameraFill />
          <IoMdPersonAdd />
          <CgMore />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
