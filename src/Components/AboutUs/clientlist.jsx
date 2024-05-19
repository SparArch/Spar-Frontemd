import React from "react";
import AutoPlay from "./slider";
import { useNavigate } from "react-router-dom";

const Clientlist = () => {
  const navigate = useNavigate();
  return (
    <div className="md:rounded-3xl rounded-md z-20 flex flex-row w-[95%] justify-evenly items-center bg-[#1E443E] drop-shadow-xl">
      <div className="w-[70%]">
        <AutoPlay />
      </div>
      <div className="w-[1px] md:w-[2px] bg-white h-[6vw]"></div>
      <button
        onClick={() => {
          navigate("/about");
        }}
        className=" rounded-full bg-white h-fit w-[15vw] text-center md:py-2 py-1 text-[1.3vw] font-bold text-[#1E443E] drop-shadow-xl"
      >
        VIEW ALL CLIENTS
      </button>
    </div>
  );
};

export default Clientlist;
