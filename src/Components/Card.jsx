import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Foreground from "./Foreground";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data , Reference }) {
  // Check if data is undefined or null
  if (!data) {
    return <div></div>;
  }

  // Check if data.description is undefined or null
  if (!data.description) {
    return <div>No description provided</div>;
  }

  return (
      <motion.div whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} drag dragConstraints = {Reference} className="relative flex-shrink-0 overflow-hidden w-60 h-72 bg-zinc-900/60 text-white rounded-[35px] px-6 py-10">
        <FaRegFileAlt />
        <p className="mt-5 text-sm font-semibold leading-tight">
          {data.description}
        </p>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="py-3 px-8 flex items-center mb-3 justify-between">
            <h5>{data.filesize}</h5>
            <span className="h-6 w-6 bg-neutral-500 text-black flex items-center gap-7  justify-center text-center rounded-xl font-extrabold">
              {data.close ? <IoClose /> : <LuDownload />}
            </span>
          </div>
          {data.tag.isopen && (
            <div
              className={`w-full py-3 flex items-center justify-center ${
                data.tag.tagColor === "green" ? "bg-[#88AB8E]" : "bg-[#0D9276]"
              }`}
            >
              <h3 className="text-[2.3vh] font-normal px-4">
              {data.line === true ? data.tag.tagtitle : <div className=" py-3  z-30 flex items-center">
                <h1 className=" h-1.5 rounded-2xl w-52 bg-white">
                <h1 className=" h-1.5 rounded-2xl  w-44 bg-[#31363F]"></h1>
                </h1></div>}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
  );
}

export default Card;
